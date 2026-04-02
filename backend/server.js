const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MySQL connection pool
const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'password123',
    database: process.env.DB_NAME || 'student_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Routes
// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
});

// About endpoint
app.get('/about', (req, res) => {
    res.json({
        studentName: 'Your Full Name',
        studentId: 'SV001',
        class: 'DevOps Class 2026',
        appName: process.env.APP_NAME || 'Student Management System'
    });
});

// API: Get all students
app.get('/api/students', async (req, res) => {
    try {
        const connection = await pool.getConnection();
        const [rows] = await connection.query('SELECT * FROM students');
        connection.release();
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// API: Get student by ID
app.get('/api/students/:id', async (req, res) => {
    try {
        const connection = await pool.getConnection();
        const [rows] = await connection.query('SELECT * FROM students WHERE id = ?', [req.params.id]);
        connection.release();
        if (rows.length === 0) {
            return res.status(404).json({ error: 'Student not found' });
        }
        res.json(rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// API: Create student (POST)
app.post('/api/students', async (req, res) => {
    try {
        const { name, email, class_name } = req.body;
        if (!name || !email || !class_name) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const connection = await pool.getConnection();
        const [result] = await connection.query(
            'INSERT INTO students (name, email, class_name) VALUES (?, ?, ?)',
            [name, email, class_name]
        );
        connection.release();

        res.status(201).json({
            id: result.insertId,
            name,
            email,
            class_name
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// API: Update student (PUT)
app.put('/api/students/:id', async (req, res) => {
    try {
        const { name, email, class_name } = req.body;
        if (!name || !email || !class_name) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const connection = await pool.getConnection();
        await connection.query(
            'UPDATE students SET name = ?, email = ?, class_name = ? WHERE id = ?',
            [name, email, class_name, req.params.id]
        );
        connection.release();

        res.json({ id: req.params.id, name, email, class_name });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// API: Delete student (DELETE)
app.delete('/api/students/:id', async (req, res) => {
    try {
        const connection = await pool.getConnection();
        const [result] = await connection.query('DELETE FROM students WHERE id = ?', [req.params.id]);
        connection.release();

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Student not found' });
        }

        res.json({ message: 'Student deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV}`);
    console.log(`App Name: ${process.env.APP_NAME}`);
});

module.exports = app;
