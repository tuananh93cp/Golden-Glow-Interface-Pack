#!/usr/bin/env node

// Script chuyển đổi SVG thành PNG cho Golden Glow Interface Pack
// Cần cài đặt: npm install sharp

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

console.log('🎨 Đang chuyển đổi icon SVG thành PNG...\n');

// Đường dẫn file
const svgPath = path.join(__dirname, 'icons', 'icon.svg');
const iconsDir = path.join(__dirname, 'icons');

// Kích thước cần tạo
const sizes = [
  { width: 16, height: 16, name: 'icon16.png' },
  { width: 48, height: 48, name: 'icon48.png' },
  { width: 128, height: 128, name: 'icon128.png' }
];

async function convertIcons() {
  try {
    // Kiểm tra file SVG có tồn tại không
    if (!fs.existsSync(svgPath)) {
      console.error('❌ Không tìm thấy file icon.svg trong thư mục icons/');
      console.log('💡 Hãy chắc chắn file icon.svg đã được tạo');
      process.exit(1);
    }

    console.log('📁 Tìm thấy file icon.svg');
    console.log('🔄 Bắt đầu chuyển đổi...\n');

    // Chuyển đổi từng kích thước
    for (const size of sizes) {
      const outputPath = path.join(iconsDir, size.name);
      
      await sharp(svgPath)
        .resize(size.width, size.height)
        .png({ quality: 100 })
        .toFile(outputPath);
      
      console.log(`✅ Tạo thành công: ${size.name} (${size.width}x${size.height})`);
    }

    console.log('\n🎉 Hoàn thành! Đã tạo tất cả các icon PNG');
    console.log('📋 Danh sách file đã tạo:');
    
    sizes.forEach(size => {
      const filePath = path.join(iconsDir, size.name);
      const stats = fs.statSync(filePath);
      console.log(`   📄 ${size.name} - ${(stats.size / 1024).toFixed(1)} KB`);
    });

    console.log('\n🚀 Extension đã sẵn sàng để test và submit!');
    
  } catch (error) {
    console.error('❌ Lỗi khi chuyển đổi icon:', error.message);
    
    if (error.message.includes('sharp')) {
      console.log('\n💡 Hướng dẫn cài đặt sharp:');
      console.log('   npm install sharp');
    }
    
    console.log('\n🌐 Hoặc bạn có thể dùng công cụ online:');
    console.log('   1. Vào https://svgtopng.com');
    console.log('   2. Upload file icon.svg');
    console.log('   3. Tải về các kích thước: 16x16, 48x48, 128x128');
    
    process.exit(1);
  }
}

// Chạy script
convertIcons(); 