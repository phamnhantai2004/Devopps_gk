const API_URL = 'http://localhost:3000';

// Check health status on load
document.addEventListener('DOMContentLoaded', () => {
    checkHealth();
    loadStudents();
    setupEventListeners();
});

// Check health endpoint
async function checkHealth() {
    try {
        const response = await fetch(`${API_URL}/health`);
        const data = await response.json();
        const statusElement = document.getElementById('health-status');

        if (data.status === 'ok') {
            statusElement.classList.add('ok');
            statusElement.classList.remove('error');
            statusElement.textContent = '✓ Server is running - Status: OK';
        }
    } catch (error) {
        const statusElement = document.getElementById('health-status');
        statusElement.classList.add('error');
        statusElement.classList.remove('ok');
        statusElement.textContent = '✗ Server is not responding - Error: ' + error.message;
    }
}

// Load all students
async function loadStudents() {
    const tbody = document.getElementById('students-body');

    try {
        const response = await fetch(`${API_URL}/api/students`);

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const students = await response.json();

        if (students.length === 0) {
            tbody.innerHTML = '<tr><td colspan="5" class="loading">No students found. Add one to get started!</td></tr>';
            return;
        }

        tbody.innerHTML = students.map(student => `
            <tr>
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.email}</td>
                <td>${student.class_name}</td>
                <td>
                    <div class="action-buttons">
                        <button class="btn btn-edit" onclick="editStudent(${student.id}, '${student.name}', '${student.email}', '${student.class_name}')">Edit</button>
                        <button class="btn btn-danger" onclick="deleteStudent(${student.id})">Delete</button>
                    </div>
                </td>
            </tr>
        `).join('');
    } catch (error) {
        tbody.innerHTML = `<tr><td colspan="5" class="error">Error loading students: ${error.message}</td></tr>`;
        console.error('Error:', error);
    }
}

// Add or update student
async function addStudent(event) {
    event.preventDefault();

    const id = document.getElementById('student-id').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const class_name = document.getElementById('class_name').value;

    const data = { name, email, class_name };

    try {
        const url = id ? `${API_URL}/api/students/${id}` : `${API_URL}/api/students`;
        const method = id ? 'PUT' : 'POST';

        const response = await fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        // Reset form
        document.getElementById('student-form').reset();
        document.getElementById('student-id').value = '';
        document.getElementById('form-title').textContent = 'Add New Student';
        document.getElementById('submit-btn').textContent = 'Add Student';
        document.getElementById('cancel-btn').style.display = 'none';

        // Reload students
        loadStudents();

        alert(id ? 'Student updated successfully!' : 'Student added successfully!');
    } catch (error) {
        alert('Error: ' + error.message);
        console.error('Error:', error);
    }
}

// Edit student
function editStudent(id, name, email, class_name) {
    document.getElementById('student-id').value = id;
    document.getElementById('name').value = name;
    document.getElementById('email').value = email;
    document.getElementById('class_name').value = class_name;

    document.getElementById('form-title').textContent = 'Edit Student';
    document.getElementById('submit-btn').textContent = 'Update Student';
    document.getElementById('cancel-btn').style.display = 'inline-block';

    // Scroll to form
    document.getElementById('add-student').scrollIntoView({ behavior: 'smooth' });
}

// Cancel edit
function cancelEdit() {
    document.getElementById('student-form').reset();
    document.getElementById('student-id').value = '';
    document.getElementById('form-title').textContent = 'Add New Student';
    document.getElementById('submit-btn').textContent = 'Add Student';
    document.getElementById('cancel-btn').style.display = 'none';
}

// Delete student
async function deleteStudent(id) {
    if (!confirm('Are you sure you want to delete this student?')) {
        return;
    }

    try {
        const response = await fetch(`${API_URL}/api/students/${id}`, {
            method: 'DELETE'
        });

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        loadStudents();
        alert('Student deleted successfully!');
    } catch (error) {
        alert('Error: ' + error.message);
        console.error('Error:', error);
    }
}

// Setup event listeners
function setupEventListeners() {
    document.getElementById('student-form').addEventListener('submit', addStudent);
    document.getElementById('refresh-btn').addEventListener('click', () => {
        loadStudents();
        checkHealth();
    });
    document.getElementById('cancel-btn').addEventListener('click', cancelEdit);
}

// Refresh every 30 seconds
setInterval(checkHealth, 30000);
