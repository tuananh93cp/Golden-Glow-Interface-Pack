#!/usr/bin/env node

// Golden Glow Interface Pack - Build Script
// Copyright (c) 2025 XMP

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🌟 Golden Glow Interface Pack - Build Script');
console.log('Building extension for Chrome Web Store and Firefox Add-ons...\n');

// Build configuration
const buildConfig = {
  version: '1.0.0',
  name: 'Golden Glow Interface Pack',
  outputDir: 'dist',
  chromeDir: 'dist/chrome',
  firefoxDir: 'dist/firefox'
};

// Files to include in both builds
const commonFiles = [
  'background.js',
  'scripts/content.js',
  'scripts/popup.js',
  'scripts/options.js',
  'styles/golden-glow.css',
  'popup.html',
  'options.html',
  'newtab.html',
  'icons/',
  'README.md'
];

// Chrome-specific files
const chromeFiles = [
  'manifest.json'
];

// Firefox-specific files
const firefoxFiles = [
  'manifest_firefox.json'
];

function createDirectories() {
  console.log('📁 Creating build directories...');
  
  // Remove existing dist directory
  if (fs.existsSync(buildConfig.outputDir)) {
    fs.rmSync(buildConfig.outputDir, { recursive: true, force: true });
  }
  
  // Create new directories
  fs.mkdirSync(buildConfig.outputDir, { recursive: true });
  fs.mkdirSync(buildConfig.chromeDir, { recursive: true });
  fs.mkdirSync(buildConfig.firefoxDir, { recursive: true });
  
  console.log('✅ Directories created\n');
}

function copyFiles(sourceFiles, targetDir, specificManifest = null) {
  console.log(`📋 Copying files to ${targetDir}...`);
  
  sourceFiles.forEach(file => {
    const sourcePath = path.join('.', file);
    const targetPath = path.join(targetDir, file);
    
    if (fs.existsSync(sourcePath)) {
      // Create directory if it doesn't exist
      const targetDirPath = path.dirname(targetPath);
      if (!fs.existsSync(targetDirPath)) {
        fs.mkdirSync(targetDirPath, { recursive: true });
      }
      
      // Copy file or directory
      if (fs.lstatSync(sourcePath).isDirectory()) {
        copyDirectory(sourcePath, targetPath);
      } else {
        fs.copyFileSync(sourcePath, targetPath);
      }
      
      console.log(`  ✓ ${file}`);
    } else {
      console.log(`  ⚠️  ${file} (not found)`);
    }
  });
  
  // Copy specific manifest
  if (specificManifest) {
    const manifestSource = path.join('.', specificManifest);
    const manifestTarget = path.join(targetDir, 'manifest.json');
    
    if (fs.existsSync(manifestSource)) {
      fs.copyFileSync(manifestSource, manifestTarget);
      console.log(`  ✓ ${specificManifest} -> manifest.json`);
    }
  }
  
  console.log('');
}

function copyDirectory(source, target) {
  if (!fs.existsSync(target)) {
    fs.mkdirSync(target, { recursive: true });
  }
  
  const files = fs.readdirSync(source);
  files.forEach(file => {
    const sourcePath = path.join(source, file);
    const targetPath = path.join(target, file);
    
    if (fs.lstatSync(sourcePath).isDirectory()) {
      copyDirectory(sourcePath, targetPath);
    } else {
      fs.copyFileSync(sourcePath, targetPath);
    }
  });
}

function validateManifests() {
  console.log('🔍 Validating manifests...');
  
  // Check Chrome manifest
  const chromeManifestPath = path.join(buildConfig.chromeDir, 'manifest.json');
  if (fs.existsSync(chromeManifestPath)) {
    try {
      const chromeManifest = JSON.parse(fs.readFileSync(chromeManifestPath, 'utf8'));
      console.log(`  ✓ Chrome manifest v${chromeManifest.version} is valid`);
    } catch (error) {
      console.log(`  ❌ Chrome manifest is invalid: ${error.message}`);
      process.exit(1);
    }
  }
  
  // Check Firefox manifest
  const firefoxManifestPath = path.join(buildConfig.firefoxDir, 'manifest.json');
  if (fs.existsSync(firefoxManifestPath)) {
    try {
      const firefoxManifest = JSON.parse(fs.readFileSync(firefoxManifestPath, 'utf8'));
      console.log(`  ✓ Firefox manifest v${firefoxManifest.version} is valid`);
    } catch (error) {
      console.log(`  ❌ Firefox manifest is invalid: ${error.message}`);
      process.exit(1);
    }
  }
  
  console.log('');
}

function createZipFiles() {
  console.log('📦 Creating distribution packages...');
  
  try {
    // Create Chrome package
    process.chdir(buildConfig.chromeDir);
    execSync('zip -r ../golden-glow-interface-pack-chrome.zip .', { stdio: 'inherit' });
    process.chdir('../../');
    console.log('  ✓ Chrome package: dist/golden-glow-interface-pack-chrome.zip');
    
    // Create Firefox package
    process.chdir(buildConfig.firefoxDir);
    execSync('zip -r ../golden-glow-interface-pack-firefox.zip .', { stdio: 'inherit' });
    process.chdir('../../');
    console.log('  ✓ Firefox package: dist/golden-glow-interface-pack-firefox.zip');
    
  } catch (error) {
    console.log('  ⚠️  Zip creation failed. You may need to install zip utility or create packages manually.');
  }
  
  console.log('');
}

function generateBuildInfo() {
  console.log('📄 Generating build information...');
  
  const buildInfo = {
    name: buildConfig.name,
    version: buildConfig.version,
    buildDate: new Date().toISOString(),
    buildBy: 'XMP',
    platforms: ['Chrome', 'Firefox'],
    files: {
      chrome: fs.readdirSync(buildConfig.chromeDir).length + ' files',
      firefox: fs.readdirSync(buildConfig.firefoxDir).length + ' files'
    }
  };
  
  const buildInfoPath = path.join(buildConfig.outputDir, 'build-info.json');
  fs.writeFileSync(buildInfoPath, JSON.stringify(buildInfo, null, 2));
  
  console.log('  ✓ Build info saved to dist/build-info.json');
  console.log('');
}

function displaySummary() {
  console.log('🎉 Build completed successfully!\n');
  
  console.log('📋 Build Summary:');
  console.log(`  Extension: ${buildConfig.name}`);
  console.log(`  Version: ${buildConfig.version}`);
  console.log(`  Build Date: ${new Date().toLocaleString()}`);
  console.log('');
  
  console.log('📦 Distribution Packages:');
  console.log('  Chrome: dist/golden-glow-interface-pack-chrome.zip');
  console.log('  Firefox: dist/golden-glow-interface-pack-firefox.zip');
  console.log('');
  
  console.log('📁 Build Directories:');
  console.log('  Chrome: dist/chrome/');
  console.log('  Firefox: dist/firefox/');
  console.log('');
  
  console.log('📖 Next Steps:');
  console.log('  1. Test both extension packages in their respective browsers');
  console.log('  2. Review CHROME_STORE_SUBMISSION.md for store submission guidelines');
  console.log('  3. Upload to Chrome Web Store and Firefox Add-ons');
  console.log('  4. Monitor for review feedback and user reports');
  console.log('');
  
  console.log('🌟 Made with ❤️ by XMP');
}

// Main build process
function build() {
  try {
    createDirectories();
    
    // Build Chrome version
    console.log('🔧 Building Chrome version...');
    copyFiles([...commonFiles, ...chromeFiles], buildConfig.chromeDir);
    
    // Build Firefox version  
    console.log('🔧 Building Firefox version...');
    copyFiles([...commonFiles], buildConfig.firefoxDir, 'manifest_firefox.json');
    
    validateManifests();
    createZipFiles();
    generateBuildInfo();
    displaySummary();
    
  } catch (error) {
    console.error('❌ Build failed:', error.message);
    process.exit(1);
  }
}

// Run build if called directly
if (require.main === module) {
  build();
}

module.exports = { build, buildConfig }; 