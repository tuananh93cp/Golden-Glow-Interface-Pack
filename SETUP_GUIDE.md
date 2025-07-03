# 🚀 Golden Glow Interface Pack - Setup Guide

Complete setup guide for the Golden Glow Interface Pack browser extension.

## 📁 Project Structure Overview

```
Extension4/
├── 📄 manifest.json              # Chrome extension manifest (Manifest V3)
├── 📄 manifest_firefox.json      # Firefox extension manifest (Manifest V2)
├── 📄 background.js              # Background service worker
├── 📂 scripts/
│   ├── 📄 content.js            # Content script (applies golden glow)
│   ├── 📄 popup.js              # Popup interface functionality
│   └── 📄 options.js            # Settings page functionality
├── 📂 styles/
│   └── 📄 golden-glow.css       # Main stylesheet with golden effects
├── 📄 popup.html                # Extension popup interface
├── 📄 options.html              # Settings/options page
├── 📄 newtab.html               # Custom new tab page
├── 📂 icons/                    # Extension icons (16x16, 48x48, 128x128)
│   └── 📄 README.md             # Icon requirements guide
├── 📄 build.js                  # Build script for distribution
├── 📄 package.json              # Node.js package configuration
├── 📄 README.md                 # Main documentation
├── 📄 CHROME_STORE_SUBMISSION.md # Chrome Web Store submission guide
└── 📄 SETUP_GUIDE.md            # This file
```

## 🛠️ Development Setup

### Prerequisites
- Node.js 14+ (for build script)
- Chrome browser (for testing)
- Firefox browser (for testing)
- Code editor (VS Code recommended)

### 1. Clone or Download
```bash
# If using Git
git clone https://github.com/tuananh93cp/Golden-Glow-Interface-Pack.git
cd Golden-Glow-Interface-Pack

# Or download and extract the ZIP file
```

### 2. Install Dependencies (Optional)
```bash
# Only needed if you want to use the build script
npm install
```

### 3. Create Extension Icons
⚠️ **IMPORTANT**: You need to create the actual icon files before testing or submitting.

Required icons in `icons/` directory:
- `icon16.png` (16x16 pixels)
- `icon48.png` (48x48 pixels) 
- `icon128.png` (128x128 pixels)

See `icons/README.md` for detailed requirements.

## 🧪 Testing the Extension

### Chrome Testing
1. Open Chrome and navigate to `chrome://extensions/`
2. Enable "Developer mode" (toggle in top right)
3. Click "Load unpacked"
4. Select the Extension4 folder
5. The extension should now appear in your extensions list
6. Test all functionality:
   - Click the extension icon in toolbar
   - Visit various websites to see golden glow effects
   - Open settings page and test customization options
   - Open new tab to see custom new tab page

### Firefox Testing
1. Open Firefox and navigate to `about:debugging`
2. Click "This Firefox"
3. Click "Load Temporary Add-on"
4. Select `manifest_firefox.json` from the Extension4 folder
5. Test the same functionality as in Chrome

## 🔧 Customization

### Modifying Colors
Edit `styles/golden-glow.css` and update CSS variables:
```css
:root {
  --golden-primary: #ffd700;    /* Main golden color */
  --golden-secondary: #ffc107;  /* Secondary golden color */
  --golden-accent: #ffeb3b;     /* Accent color */
  /* ... more variables ... */
}
```

### Adding New Features
1. Update content script (`scripts/content.js`)
2. Add new CSS rules to `styles/golden-glow.css`
3. Update popup or options interfaces if needed
4. Test thoroughly in both browsers

### Changing Default Settings
Edit the `defaultSettings` object in:
- `scripts/popup.js`
- `scripts/options.js`
- `background.js`

## 📦 Building for Distribution

### Using Build Script
```bash
# Create distribution packages
npm run build

# This creates:
# - dist/chrome/ (Chrome extension files)
# - dist/firefox/ (Firefox extension files)
# - dist/golden-glow-interface-pack-chrome.zip
# - dist/golden-glow-interface-pack-firefox.zip
```

### Manual Build
1. Create separate folders for Chrome and Firefox
2. Copy common files to both folders
3. Copy `manifest.json` to Chrome folder
4. Copy `manifest_firefox.json` to Firefox folder as `manifest.json`
5. Create ZIP files for submission

## 🏪 Store Submission

### Chrome Web Store
1. Review `CHROME_STORE_SUBMISSION.md` for complete guide
2. Create developer account
3. Prepare screenshots (1280x800)
4. Upload ZIP package
5. Fill in store listing details
6. Submit for review

### Firefox Add-ons
1. Create Mozilla developer account
2. Visit https://addons.mozilla.org/developers/
3. Upload ZIP package
4. Fill in listing details
5. Submit for review

## 🔍 Required Information for Submission

### Single Purpose Statement
"Golden Glow Interface Pack enhances web browsing by applying beautiful golden glow effects and themes to web interfaces, providing users with a visually appealing and customizable browsing experience."

### Permission Justifications
1. **activeTab**: Apply golden glow effects to current tab
2. **storage**: Save user preferences locally
3. **scripting**: Inject CSS styles into web pages
4. **<all_urls>**: Apply effects to all websites

## 🐛 Troubleshooting

### Extension Not Loading
- Check console for error messages
- Verify all files are present
- Ensure manifest.json is valid JSON
- Check icon files exist

### Effects Not Applying
- Check if extension is enabled
- Verify content script is loading
- Test on different websites
- Check browser console for errors

### Settings Not Saving
- Check storage permissions
- Verify popup.js and options.js are working
- Test with developer tools open

## 🔐 Privacy & Security

### Data Handling
- No personal data collected
- Settings stored locally only
- No external server communication
- No tracking or analytics

### Security Considerations
- Uses Manifest V3 for Chrome (enhanced security)
- Minimal permissions requested
- Content Security Policy compliant
- No inline scripts or eval()

## 📋 Pre-Submission Checklist

- [ ] Extension works in Chrome
- [ ] Extension works in Firefox  
- [ ] All icons created and included
- [ ] Screenshots prepared
- [ ] Privacy policy reviewed
- [ ] Permission justifications documented
- [ ] Store listing descriptions written
- [ ] Build packages created
- [ ] Testing completed on multiple websites
- [ ] No console errors present

## 📞 Support

### Developer Contact
- **Name**: XMP
- **Email**: lanhanh64529@gmail.com
- **GitHub**: https://github.com/tuananh93cp/Golden-Glow-Interface-Pack

### Getting Help
1. Check this setup guide
2. Review browser extension documentation
3. Search existing GitHub issues
4. Create new issue with detailed description
5. Contact developer via email

## 📝 Version History

### v1.0.0 (March 7, 2025)
- Initial release
- Golden glow effects for web interfaces
- Customizable intensity and themes
- Chrome and Firefox support
- Custom new tab page
- Comprehensive settings panel

---

**🌟 Made with ❤️ by XMP**

*Happy coding and may your browser glow golden!* ✨ 