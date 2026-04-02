# Student Information Form

## ✏️ Hãy điền thông tin của bạn vào dự án này

### 1. Basic Information / Thông Tin Cơ Bản

**Họ và Tên** (Full Name):
```
Phạm Nhân Tài
```

**Mã Số Sinh Viên** (Student ID):
```
2251220183
```

**Lớp** (Class):
```
22CT4```

### 2. Update Files / Cập Nhật Các File

Sau khi điền thông tin, hãy cập nhật những file sau:

#### File: `backend/server.js`
Tìm dòng này:
```javascript
app.get('/about', (req, res) => {
  res.json({
    studentName: 'Your Full Name',
    studentId: 'SV001',
    class: 'DevOps Class 2026',
    appName: process.env.APP_NAME || 'Student Management System'
  });
});
```

Và thay đổi:
- `studentName`: Phạm Nhân Tài
- `studentId`: 2251220183
- `class`: 22CT4

#### File: `README.md`
Tìm phần "Thông Tin Sinh Viên":
```markdown
## 👨‍🎓 Thông Tin Sinh Viên

- **Họ Tên**: Phạm Nhân Tài
- **Mã Số Sinh Viên**: 2251220183
- **Lớp**: 22CT4
```

Cập nhật với thông tin thực tế của bạn.

### 3. Verify Information
Sau khi cập nhật, hãy test:

```bash
# Kiểm tra endpoint /about
curl http://localhost/about

# Hoặc truy cập qua browser
http://localhost/about
```

Kết quả phải trả về thông tin của bạn.

### 4. Commit Changes
```bash
git add backend/server.js README.md
git commit -m "Update student information"
git push origin main
```

---

✅ Done! Thông tin sinh viên của bạn đã được thêm vào dự án.
