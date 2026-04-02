const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Database connection pool
const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_NAME || 'devops_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

const PORT = process.env.PORT || 3000;
const APP_NAME = process.env.APP_NAME || 'DevOps Student Management System';
const STUDENT_NAME = process.env.STUDENT_NAME || 'Phạm Nhân Tài';
const STUDENT_ID = process.env.STUDENT_ID || '2251220183';
const CLASS = process.env.CLASS || '22ct4';

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'ok',
        service: APP_NAME,
        timestamp: new Date().toISOString()
    });
});

// About endpoint - Student information
app.get('/about', (req, res) => {
    res.status(200).json({
        student_name: STUDENT_NAME,
        student_id: STUDENT_ID,
        class: CLASS,
        app_name: APP_NAME,
        version: '1.0.0'
    });
});

// Get all students
app.get('/api/students', async (req, res) => {
    try {
        const [results] = await pool.query('SELECT * FROM students');
        res.status(200).json({
            success: true,
            data: results,
            count: results.length
        });
    } catch (error) {
        console.error('Database error:', error);
        res.status(500).json({ error: 'Database error', message: error.message });
    }
});

// Get student by ID
app.get('/api/students/:id', async (req, res) => {
    try {
        const studentId = req.params.id;
        const [results] = await pool.query('SELECT * FROM students WHERE id = ?', [studentId]);
        if (results.length === 0) {
            return res.status(404).json({ error: 'Student not found' });
        }
        res.status(200).json({
            success: true,
            data: results[0]
        });
    } catch (error) {
        console.error('Database error:', error);
        res.status(500).json({ error: 'Database error', message: error.message });
    }
});

// Create new student
app.post('/api/students', async (req, res) => {
    try {
        const { name, email, phone, major } = req.body;

        if (!name || !email) {
            return res.status(400).json({ error: 'Name and email are required' });
        }

        const query = 'INSERT INTO students (name, email, phone, major, created_at) VALUES (?, ?, ?, ?, NOW())';
        const [results] = await pool.query(query, [name, email, phone || null, major || null]);
        res.status(201).json({
            success: true,
            message: 'Student created',
            id: results.insertId,
            data: { id: results.insertId, name, email, phone, major }
        });
    } catch (error) {
        console.error('Database error:', error);
        res.status(500).json({ error: 'Database error', message: error.message });
    }
});

// Update student
app.put('/api/students/:id', async (req, res) => {
    try {
        const studentId = req.params.id;
        const { name, email, phone, major } = req.body;

        const query = 'UPDATE students SET name = ?, email = ?, phone = ?, major = ?, updated_at = NOW() WHERE id = ?';
        const [results] = await pool.query(query, [name, email, phone, major, studentId]);
        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Student not found' });
        }
        res.status(200).json({
            success: true,
            message: 'Student updated',
            data: { id: studentId, name, email, phone, major }
        });
    } catch (error) {
        console.error('Database error:', error);
        res.status(500).json({ error: 'Database error', message: error.message });
    }
});

// Delete student
app.delete('/api/students/:id', async (req, res) => {
    try {
        const studentId = req.params.id;
        const [results] = await pool.query('DELETE FROM students WHERE id = ?', [studentId]);
        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Student not found' });
        }
        res.status(200).json({
            success: true,
            message: 'Student deleted'
        });
    } catch (error) {
        console.error('Database error:', error);
        res.status(500).json({ error: 'Database error', message: error.message });
    }
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`${APP_NAME} is running on port ${PORT}`);
    console.log(`Health check: http://localhost:${PORT}/health`);
    console.log(`About: http://localhost:${PORT}/about`);
    console.log(`API Docs: http://localhost:${PORT}/api/students`);
});

module.exports = app;
