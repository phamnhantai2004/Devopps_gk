require('dotenv').config();
const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;
const APP_NAME = process.env.APP_NAME || 'DevOps Student Management';

// Middleware
app.use(cors());
app.use(express.json());

// MySQL Connection Pool
const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'password123',
    database: process.env.DB_NAME || 'devops_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Health Check Endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'ok', app_name: APP_NAME });
});

// About Endpoint
app.get('/about', (req, res) => {
    res.json({
        student_name: process.env.STUDENT_NAME || 'Sinh Viên',
        student_id: process.env.STUDENT_ID || 'MSSV',
        class: process.env.CLASS || 'Lớp',
        app_name: APP_NAME,
        description: 'Ứng dụng quản lý sinh viên sử dụng DevOps'
    });
});

// Get all students
app.get('/api/students', async (req, res) => {
    try {
        const connection = await pool.getConnection();
        const [rows] = await connection.query('SELECT * FROM students');
        connection.release();
        res.json(rows);
    } catch (error) {
        console.error('Error fetching students:', error);
        res.status(500).json({ error: 'Failed to fetch students' });
    }
});

// Get student by ID
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
        console.error('Error fetching student:', error);
        res.status(500).json({ error: 'Failed to fetch student' });
    }
});

// Create new student (POST)
app.post('/api/students', async (req, res) => {
    try {
        const { name, email, phone, major } = req.body;

        if (!name || !email) {
            return res.status(400).json({ error: 'Name and email are required' });
        }

        const connection = await pool.getConnection();
        const [result] = await connection.query(
            'INSERT INTO students (name, email, phone, major) VALUES (?, ?, ?, ?)',
            [name, email, phone || null, major || null]
        );
        connection.release();

        res.status(201).json({
            id: result.insertId,
            name,
            email,
            phone,
            major,
            message: 'Student created successfully'
        });
    } catch (error) {
        console.error('Error creating student:', error);
        res.status(500).json({ error: 'Failed to create student' });
    }
});

// Update student (PUT)
app.put('/api/students/:id', async (req, res) => {
    try {
        const { name, email, phone, major } = req.body;

        const connection = await pool.getConnection();
        const [result] = await connection.query(
            'UPDATE students SET name = ?, email = ?, phone = ?, major = ? WHERE id = ?',
            [name, email, phone, major, req.params.id]
        );
        connection.release();

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Student not found' });
        }

        res.json({ id: req.params.id, name, email, phone, major, message: 'Student updated successfully' });
    } catch (error) {
        console.error('Error updating student:', error);
        res.status(500).json({ error: 'Failed to update student' });
    }
});

// Delete student
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
        console.error('Error deleting student:', error);
        res.status(500).json({ error: 'Failed to delete student' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`${APP_NAME} listening on port ${PORT}`);
});

module.exports = app;
