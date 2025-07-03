# ⚡ HƯỚNG DẪN NHANH: PUSH GITHUB & BUILD EXTENSION

## 🚀 TẤT CẢ TRONG 1 LỆNH

### Command tự động làm tất cả:
```bash
npm run push-github
```

**Script này sẽ:**
- ✅ Khởi tạo Git repository
- ✅ Thêm remote origin GitHub
- ✅ Tạo PNG icons
- ✅ Build extension packages
- ✅ Add & commit files
- ✅ Push lên GitHub

---

## 🛠️ HOẶC THỰC HIỆN TỪNG BƯỚC

### 1. Khởi tạo Git:
```bash
git init
git remote add origin https://github.com/tuananh93cp/Golden-Glow-Interface-Pack.git
```

### 2. Tạo icons và build:
```bash
npm run create-icons
npm run build
```

### 3. Push lên GitHub:
```bash
git add .
git commit -m "🎉 Initial commit: Golden Glow Interface Pack v1.0.0"
git push -u origin main
```

---

## 📦 KẾT QUẢ

Sau khi chạy thành công:
- **GitHub**: https://github.com/tuananh93cp/Golden-Glow-Interface-Pack
- **Chrome Package**: `dist/golden-glow-interface-pack-chrome.zip`
- **Firefox Package**: `dist/golden-glow-interface-pack-firefox.zip`

---

## 🏪 SUBMIT CHROME WEB STORE

### 1. Vào Chrome Web Store Developer Console:
```
https://chrome.google.com/webstore/devconsole
```

### 2. Upload:
- File: `dist/golden-glow-interface-pack-chrome.zip`
- Description: Copy từ `CHROME_STORE_SUBMISSION.md`

### 3. Store Info:
```
App name: Golden Glow Interface Pack
Summary: Transform your browsing experience with beautiful golden themes
Category: Accessibility
```

---

## 🎯 LỆNH NHANH NHẤT

```bash
# Tất cả trong 1 lệnh
npm run push-github

# Sau đó upload file này lên Chrome Web Store:
# dist/golden-glow-interface-pack-chrome.zip
```

**🌟 Xong! Extension sẽ sớm xuất hiện trên Chrome Web Store!** 