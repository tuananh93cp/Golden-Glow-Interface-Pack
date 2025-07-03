const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m'
};

function log(message, color = 'cyan') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function error(message) {
  console.error(`${colors.red}❌ ${message}${colors.reset}`);
}

function success(message) {
  console.log(`${colors.green}✅ ${message}${colors.reset}`);
}

function execCommand(command) {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(error);
      } else {
        resolve(stdout);
      }
    });
  });
}

async function main() {
  try {
    log('🚀 GOLDEN GLOW INTERFACE PACK - GITHUB PUSH SCRIPT', 'bright');
    log('===============================================', 'bright');
    
    // Step 1: Setup README for GitHub
    log('\n📋 BƯỚC 1: Chuẩn bị README.md cho GitHub...', 'yellow');
    if (fs.existsSync('README_GITHUB.md')) {
      if (fs.existsSync('README.md')) {
        fs.renameSync('README.md', 'README_LOCAL.md');
      }
      fs.renameSync('README_GITHUB.md', 'README.md');
      success('README.md đã được cập nhật cho GitHub');
    }
    
    // Step 2: Initialize Git
    log('\n📋 BƯỚC 2: Khởi tạo Git repository...', 'yellow');
    try {
      await execCommand('git init');
      success('Git repository đã khởi tạo');
    } catch (e) {
      log('Git repository đã tồn tại, bỏ qua...', 'blue');
    }
    
    // Step 3: Add remote origin
    log('\n📋 BƯỚC 3: Thêm remote origin...', 'yellow');
    try {
      await execCommand('git remote add origin https://github.com/tuananh93cp/Golden-Glow-Interface-Pack.git');
      success('Remote origin đã được thêm');
    } catch (e) {
      log('Remote origin đã tồn tại, bỏ qua...', 'blue');
    }
    
    // Step 4: Generate icons
    log('\n📋 BƯỚC 4: Tạo PNG icons...', 'yellow');
    try {
      await execCommand('node create-png-icons.js');
      success('PNG icons đã được tạo');
    } catch (e) {
      log('Lỗi tạo icons, tiếp tục...', 'blue');
    }
    
    // Step 5: Build extension packages
    log('\n📋 BƯỚC 5: Build extension packages...', 'yellow');
    try {
      await execCommand('node build.js');
      success('Extension packages đã được build');
    } catch (e) {
      log('Lỗi build packages, tiếp tục...', 'blue');
    }
    
    // Step 6: Add all files
    log('\n📋 BƯỚC 6: Add tất cả files...', 'yellow');
    await execCommand('git add .');
    success('Tất cả files đã được add');
    
    // Step 7: Commit
    log('\n📋 BƯỚC 7: Commit changes...', 'yellow');
    const commitMessage = `🎉 Initial commit: Golden Glow Interface Pack v1.0.0

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

📦 Ready for Chrome Web Store submission`;
    
    await execCommand(`git commit -m "${commitMessage}"`);
    success('Changes đã được commit');
    
    // Step 8: Push to GitHub
    log('\n📋 BƯỚC 8: Push lên GitHub...', 'yellow');
    try {
      await execCommand('git pull origin main --allow-unrelated-histories');
      log('Đã pull từ GitHub', 'blue');
    } catch (e) {
      log('Không thể pull, tiếp tục push...', 'blue');
    }
    
    await execCommand('git push -u origin main');
    success('Code đã được push lên GitHub thành công!');
    
    // Step 9: Display results
    log('\n🎉 HOÀN THÀNH!', 'green');
    log('===============================================', 'bright');
    log('✅ GitHub Repository: https://github.com/tuananh93cp/Golden-Glow-Interface-Pack', 'green');
    log('✅ Chrome Package: dist/golden-glow-interface-pack-chrome.zip', 'green');
    log('✅ Firefox Package: dist/golden-glow-interface-pack-firefox.zip', 'green');
    log('\n📋 TIẾP THEO:', 'yellow');
    log('1. Vào Chrome Web Store Developer Console', 'cyan');
    log('2. Upload file: dist/golden-glow-interface-pack-chrome.zip', 'cyan');
    log('3. Điền thông tin store listing từ CHROME_STORE_SUBMISSION.md', 'cyan');
    log('4. Submit để review', 'cyan');
    log('\n🌟 Extension sẽ sớm xuất hiện trên Chrome Web Store!', 'magenta');
    
  } catch (err) {
    error(`Lỗi: ${err.message}`);
    process.exit(1);
  }
}

main(); 