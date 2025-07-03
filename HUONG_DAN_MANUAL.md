# 🛠️ HƯỚNG DẪN MANUAL: PUSH GITHUB & BUILD EXTENSION

## 🚀 THỰC HIỆN CỤ THỂ TỪNG BƯỚC

### BƯỚC 1: TẠO GITHUB REPOSITORY
1. Vào https://github.com/tuananh93cp
2. Click **"New"** hoặc **"+"** → **"New repository"**
3. Điền thông tin:
   ```
   Repository name: Golden-Glow-Interface-Pack
   Description: Transform your browsing experience with beautiful golden themes and interface enhancements
   ✅ Public
   ✅ Add a README file
   ```
4. Click **"Create repository"**

### BƯỚC 2: KHỞI TẠO GIT LOCAL
```bash
# Khởi tạo git repository
git init

# Thêm remote origin
git remote add origin https://github.com/tuananh93cp/Golden-Glow-Interface-Pack.git

# Kiểm tra remote
git remote -v
```

### BƯỚC 3: CHUẨN BỊ FILES
1. **Copy README cho GitHub:**
   ```bash
   # Backup README hiện tại
   copy README.md README_LOCAL.md
   
   # Sử dụng README cho GitHub
   copy README_GITHUB.md README.md
   ```

2. **Tạo PNG icons thủ công:**
   - Mở file `create-icons-auto.html` trong browser
   - Click **"Generate All Icons"**
   - Download các file: `icon16.png`, `icon48.png`, `icon128.png`
   - Copy vào thư mục `icons/`

### BƯỚC 4: BUILD EXTENSION PACKAGES
```bash
# Tạo thư mục dist
mkdir dist
mkdir dist\chrome
mkdir dist\firefox

# Copy files cho Chrome
xcopy /E /H /Y . dist\chrome\ /EXCLUDE:exclude.txt

# Copy files cho Firefox
xcopy /E /H /Y . dist\firefox\ /EXCLUDE:exclude.txt

# Copy manifest cho từng browser
copy manifest.json dist\chrome\manifest.json
copy manifest_firefox.json dist\firefox\manifest.json
```

### BƯỚC 5: TẠO ZIP FILES
```bash
# Tạo Chrome package
powershell Compress-Archive -Path "dist\chrome\*" -DestinationPath "dist\golden-glow-interface-pack-chrome.zip"

# Tạo Firefox package  
powershell Compress-Archive -Path "dist\firefox\*" -DestinationPath "dist\golden-glow-interface-pack-firefox.zip"
```

### BƯỚC 6: PUSH LÊN GITHUB
```bash
# Add tất cả files
git add .

# Commit
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

# Pull để merge README từ GitHub
git pull origin main --allow-unrelated-histories

# Push lên GitHub
git push -u origin main
```

## 📦 KẾT QUẢ

Sau khi hoàn thành:
- ✅ **GitHub**: https://github.com/tuananh93cp/Golden-Glow-Interface-Pack
- ✅ **Chrome Package**: `dist/golden-glow-interface-pack-chrome.zip`
- ✅ **Firefox Package**: `dist/golden-glow-interface-pack-firefox.zip`

## 🏪 SUBMIT CHROME WEB STORE

### 1. Vào Chrome Developer Console:
```
https://chrome.google.com/webstore/devconsole
```

### 2. Upload Extension:
- Click **"New Item"**
- Upload file: `dist/golden-glow-interface-pack-chrome.zip`

### 3. Store Listing:
```
App name: Golden Glow Interface Pack
Summary: Transform your browsing experience with beautiful golden themes
Detailed description: [Copy từ CHROME_STORE_SUBMISSION.md]
Category: Accessibility
Language: English
```

### 4. Screenshots:
- Cần chụp 5 screenshots (1280x800)
- Chụp popup, settings, new tab page, golden glow effects

### 5. Privacy:
```
Single purpose: Golden Glow Interface Pack enhances web browsing by applying beautiful golden glow effects and themes to web interfaces.

Permissions:
- activeTab: Apply golden glow effects to current tab
- storage: Save user preferences locally
- scripting: Inject CSS styles into web pages
- contextMenus: Right-click menu functionality
- <all_urls>: Apply effects across all websites
```

### 6. Submit for Review:
- Click **"Submit for review"**
- Đợi 1-7 ngày để Chrome review

## 🎯 LỆNH NHANH

```bash
# Tất cả lệnh liền:
git init
git remote add origin https://github.com/tuananh93cp/Golden-Glow-Interface-Pack.git
git add .
git commit -m "🎉 Initial commit: Golden Glow Interface Pack v1.0.0"
git pull origin main --allow-unrelated-histories
git push -u origin main
```

**🌟 Extension sẽ sớm xuất hiện trên Chrome Web Store!** 