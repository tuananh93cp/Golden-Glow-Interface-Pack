const fs = require('fs');
const { createCanvas } = require('canvas');

function createIcon(size) {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');
  
  // Gradient vàng
  const gradient = ctx.createRadialGradient(size/2, size/2, 0, size/2, size/2, size/2);
  gradient.addColorStop(0, '#fff9c4');
  gradient.addColorStop(1, '#ffd700');
  
  // Vẽ circle
  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.arc(size/2, size/2, size/2-2, 0, 2*Math.PI);
  ctx.fill();
  
  // Viền vàng
  ctx.strokeStyle = '#ff8f00';
  ctx.lineWidth = 2;
  ctx.stroke();
  
  // Ngôi sao
  ctx.fillStyle = '#ff8f00';
  ctx.font = `${size/3}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('⭐', size/2, size/2 + size/8);
  
  return canvas.toBuffer('image/png');
}

// Tạo icons
['16', '48', '128'].forEach(size => {
  const buffer = createIcon(parseInt(size));
  fs.writeFileSync(`icons/icon${size}.png`, buffer);
  console.log(`✅ Tạo icon${size}.png`);
});

console.log('🎉 Hoàn thành! Extension đã sẵn sàng!'); 