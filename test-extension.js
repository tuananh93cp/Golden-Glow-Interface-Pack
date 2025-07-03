// Test script để kiểm tra extension
console.log('🧪 Testing Golden Glow Extension...');

// Test 1: Kiểm tra manifest.json
console.log('\n📋 Test 1: Checking manifest.json...');
try {
  const fs = require('fs');
  const manifest = JSON.parse(fs.readFileSync('manifest.json', 'utf8'));
  
  console.log('✅ Manifest loaded successfully');
  console.log('📦 Extension name:', manifest.name);
  console.log('🔢 Version:', manifest.version);
  console.log('🔑 Permissions:', manifest.permissions);
  
  // Kiểm tra permissions cần thiết
  const requiredPerms = ['activeTab', 'storage', 'scripting', 'contextMenus'];
  const missingPerms = requiredPerms.filter(perm => !manifest.permissions.includes(perm));
  
  if (missingPerms.length === 0) {
    console.log('✅ All required permissions present');
  } else {
    console.log('❌ Missing permissions:', missingPerms);
  }
  
} catch (error) {
  console.log('❌ Manifest error:', error.message);
}

// Test 2: Kiểm tra background.js
console.log('\n🔧 Test 2: Checking background.js...');
try {
  const fs = require('fs');
  const background = fs.readFileSync('background.js', 'utf8');
  
  console.log('✅ Background script loaded');
  
  // Kiểm tra các API calls
  const apiCalls = [
    'chrome.runtime.onInstalled',
    'chrome.action.onClicked', 
    'chrome.storage.sync',
    'chrome.contextMenus.create',
    'chrome.contextMenus.onClicked'
  ];
  
  apiCalls.forEach(api => {
    if (background.includes(api)) {
      console.log(`✅ ${api} found`);
    } else {
      console.log(`❌ ${api} missing`);
    }
  });
  
  // Kiểm tra duplicate listeners
  const onInstalledCount = (background.match(/chrome\.runtime\.onInstalled\.addListener/g) || []).length;
  if (onInstalledCount === 1) {
    console.log('✅ Single onInstalled listener (good)');
  } else {
    console.log(`⚠️  Found ${onInstalledCount} onInstalled listeners (may cause issues)`);
  }
  
} catch (error) {
  console.log('❌ Background script error:', error.message);
}

// Test 3: Kiểm tra files cần thiết
console.log('\n📁 Test 3: Checking required files...');
const requiredFiles = [
  'manifest.json',
  'background.js',
  'popup.html',
  'options.html', 
  'newtab.html',
  'scripts/content.js',
  'scripts/popup.js',
  'scripts/options.js',
  'styles/golden-glow.css'
];

const fs = require('fs');
requiredFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file}`);
  } else {
    console.log(`❌ ${file} missing`);
  }
});

// Test 4: Kiểm tra icons
console.log('\n🎨 Test 4: Checking icons...');
const iconFiles = ['icons/icon16.png', 'icons/icon48.png', 'icons/icon128.png'];
iconFiles.forEach(icon => {
  if (fs.existsSync(icon)) {
    console.log(`✅ ${icon}`);
  } else {
    console.log(`⚠️  ${icon} missing - use create-icons-auto.html to generate`);
  }
});

console.log('\n🎉 Extension test completed!');
console.log('\n📋 Next steps:');
console.log('1. Generate PNG icons if missing');
console.log('2. Load extension in Chrome developer mode'); 
console.log('3. Test all functionality');
console.log('4. Build and submit to store'); 