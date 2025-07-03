# 🚀 HƯỚNG DẪN PUSH GITHUB VÀ BUILD EXTENSION

## 📋 BƯỚC 1: TẠO GITHUB REPOSITORY

### 1.1 Vào GitHub.com
1. **Đăng nhập** tài khoản GitHub
2. **Click nút "New"** (hoặc dấu + → New repository)

### 1.2 Tạo Repository
```
Repository name: Golden-Glow-Interface-Pack
Description: Transform your browsing experience with beautiful golden themes and interface enhancements
✅ Public (để mọi người có thể xem)
✅ Add README file
❌ Add .gitignore (chúng ta sẽ tạo custom)
❌ Choose a license (sẽ thêm sau)
```

### 1.3 Click "Create Repository"

## 📋 BƯỚC 2: SETUP LOCAL GIT

### 2.1 Tạo .gitignore
```bash
# File này sẽ tạo ở bước sau
```

### 2.2 Khởi tạo Git (trong thư mục Extension4)
```bash
# Khởi tạo git repository
git init

# Thêm remote origin
git remote add origin https://github.com/tuananh93cp/Golden-Glow-Interface-Pack.git

# Kiểm tra remote
git remote -v
```

## 📋 BƯỚC 3: CHUẨN BỊ CODE

### 3.1 Tạo .gitignore
```gitignore
# Thư mục build
dist/
node_modules/

# Files tạm thời
*.tmp
*.temp
temp-*

# Icons tạm thời (giữ icons chính)
icons/temp-*.svg
icons/icon*-temp.svg

# OS files
.DS_Store
Thumbs.db

# IDE files
.vscode/
.idea/

# Logs
*.log
npm-debug.log*

# Runtime files
*.pid
*.seed
*.lock
```

### 3.2 Cập nhật README.md cho GitHub
```markdown
# Nội dung sẽ tạo ở file tiếp theo
```

## 📋 BƯỚC 4: COMMIT VÀ PUSH

### 4.1 Add và Commit
```bash
# Add tất cả files
git add .

# Commit đầu tiên
git commit -m "🎉 Initial commit: Golden Glow Interface Pack v1.0.0

✨ Features:
- Beautiful golden glow effects for web interfaces
- Customizable intensity and themes (Golden, Silver, Bronze)  
- Popup interface with controls
- Settings page with advanced options
- Custom new tab page
- Context menu integration
- Chrome and Firefox support

🔧 Technical:
- Manifest V3 for Chrome
- Manifest V2 for Firefox
- Content scripts with golden glow CSS
- Background service worker
- Storage API for settings
- Responsive design

📦 Ready for Chrome Web Store submission"
```

### 4.2 Push lên GitHub
```bash
# Pull trước để merge README từ GitHub
git pull origin main --allow-unrelated-histories

# Push code lên
git push -u origin main
```

## 📋 BƯỚC 5: BUILD EXTENSION PACKAGES

### 5.1 Chạy Build Script
```bash
# Build packages cho Chrome và Firefox
npm run build
```

### 5.2 Kết quả Build
```
dist/
├── chrome/                               # Chrome extension files
├── firefox/                              # Firefox extension files  
├── golden-glow-interface-pack-chrome.zip # 📦 Tải lên Chrome Store
├── golden-glow-interface-pack-firefox.zip # 📦 Tải lên Firefox Add-ons
└── build-info.json                       # Build information
```

## 📋 BƯỚC 6: SUBMIT CHROME WEB STORE

### 6.1 Vào Chrome Web Store Developer Console
```
https://chrome.google.com/webstore/devconsole
```

### 6.2 Upload Package
1. **Click "New Item"**
2. **Upload file:** `dist/golden-glow-interface-pack-chrome.zip`
3. **Điền thông tin store listing:**

```
App name: Golden Glow Interface Pack

Summary: Transform your browsing experience with beautiful golden themes

Detailed description: [Copy từ CHROME_STORE_SUBMISSION.md]

Category: Accessibility  

Language: English

Screenshots: [Cần chụp 5 screenshots]
```

### 6.3 Store Listing Info (Copy/Paste)
```
Single purpose: Golden Glow Interface Pack enhances web browsing by applying beautiful golden glow effects and themes to web interfaces, providing users with a visually appealing and customizable browsing experience.

Permissions justification:
- activeTab: Apply golden glow effects to current tab
- storage: Save user preferences locally  
- scripting: Inject CSS styles into web pages
- contextMenus: Provide right-click menu options
- <all_urls>: Apply effects on all websites
```

## 📋 BƯỚC 7: CẬP NHẬT THÔNG TIN

### 7.1 Update Website URL trong manifest
```json
"homepage_url": "https://github.com/tuananh93cp/Golden-Glow-Interface-Pack"
```

### 7.2 Update package.json
```json
"repository": {
  "type": "git",
  "url": "https://github.com/tuananh93cp/Golden-Glow-Interface-Pack.git"
}
```

## 📋 BƯỚC 8: FINAL CHECKLIST

### ✅ GitHub Repository
- [ ] Code đã push thành công
- [ ] README.md đầy đủ thông tin
- [ ] .gitignore loại trừ files không cần
- [ ] Repository public và accessible

### ✅ Extension Packages  
- [ ] `golden-glow-interface-pack-chrome.zip` tạo thành công
- [ ] `golden-glow-interface-pack-firefox.zip` tạo thành công
- [ ] Test extension hoạt động không lỗi
- [ ] Icons PNG đầy đủ

### ✅ Store Submission
- [ ] Chrome Web Store Developer account ($5)
- [ ] Store listing info chuẩn bị sẵn
- [ ] Screenshots app chụp sẵn (1280x800)
- [ ] Privacy policy URL ready

## 🎉 KẾT QUẢ

Sau khi hoàn thành:
- 📦 **Extension packages** sẵn sàng submit
- 🌐 **GitHub repository** public với code đầy đủ  
- 🏪 **Chrome Web Store** review 1-7 ngày
- 🦊 **Firefox Add-ons** submit tương tự

---

**🌟 Extension Golden Glow sẽ sớm xuất hiện trên stores!** ✨ 