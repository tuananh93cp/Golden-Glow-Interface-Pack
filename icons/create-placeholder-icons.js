#!/usr/bin/env node

// Script tạo icon placeholder cho Golden Glow Interface Pack
// Dùng cho test nhanh khi chưa có icon thật

const fs = require('fs');
const path = require('path');

console.log('🎨 Tạo icon placeholder cho Golden Glow...\n');

// Tạo SVG placeholder đơn giản
function createPlaceholderSVG(size) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="goldenGrad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" style="stop-color:#fff9c4"/>
      <stop offset="100%" style="stop-color:#ffd700"/>
    </radialGradient>
  </defs>
  <circle cx="${size/2}" cy="${size/2}" r="${size/2 - 2}" fill="url(#goldenGrad)" stroke="#ff8f00" stroke-width="2"/>
  <text x="${size/2}" y="${size/2 + 4}" text-anchor="middle" font-family="Arial" font-size="${size/4}" fill="#ff8f00" font-weight="bold">⭐</text>
</svg>`;
}

// Kích thước cần tạo
const sizes = [
  { size: 16, name: 'icon16.svg' },
  { size: 48, name: 'icon48.svg' },
  { size: 128, name: 'icon128.svg' }
];

const iconsDir = path.join(__dirname);

console.log('📁 Thư mục icons:', iconsDir);

// Tạo từng file SVG placeholder
sizes.forEach(({ size, name }) => {
  const svgContent = createPlaceholderSVG(size);
  const filePath = path.join(iconsDir, name);
  
  fs.writeFileSync(filePath, svgContent);
  console.log(`✅ Tạo thành công: ${name} (${size}x${size})`);
});

console.log('\n🎉 Đã tạo xong icon placeholder!');
console.log('💡 Để có icon PNG thật:');
console.log('   1. Vào https://svgtopng.com');
console.log('   2. Upload từng file SVG');
console.log('   3. Download thành PNG với đúng kích thước');
console.log('   4. Đổi tên thành icon16.png, icon48.png, icon128.png');
console.log('\n🚀 Hoặc chạy: node convert-icons.js (nếu đã cài sharp)'); 