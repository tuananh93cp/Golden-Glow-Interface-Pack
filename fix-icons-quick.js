const fs = require('fs');

// Tạo PNG đơn giản bằng Buffer (màu vàng solid)
function createSimplePNG(size) {
  // PNG header + màu vàng đơn giản
  const yellow = '#FFD700';
  
  // Tạo SVG string đơn giản
  const svg = `<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
    <circle cx="${size/2}" cy="${size/2}" r="${size/2-1}" fill="${yellow}" stroke="#FF8F00" stroke-width="1"/>
    <text x="${size/2}" y="${size/2+size/6}" text-anchor="middle" font-size="${size/3}" fill="#FF8F00">⭐</text>
  </svg>`;
  
  return svg;
}

console.log('🎨 Tạo icon SVG tạm thời...');

// Tạo SVG cho test nhanh
[16, 48, 128].forEach(size => {
  const svg = createSimplePNG(size);
  fs.writeFileSync(`icons/temp-icon${size}.svg`, svg);
  console.log(`✅ Tạo temp-icon${size}.svg`);
});

console.log('\n📝 Hướng dẫn tạo PNG nhanh:');
console.log('1. Vào: https://svgtopng.com');
console.log('2. Upload từng file temp-icon*.svg');  
console.log('3. Download PNG với đúng kích thước');
console.log('4. Đổi tên: icon16.png, icon48.png, icon128.png');
console.log('5. Xóa file temp-icon*.svg');
console.log('\n🚀 Extension sẽ hoạt động ngay!'); 