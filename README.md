# 🌟 Golden Glow Interface Pack

![Version](https://img.shields.io/badge/version-1.0.0-gold?style=flat-square)
![Chrome](https://img.shields.io/badge/Chrome-Extension-blue?style=flat-square&logo=google-chrome)
![Firefox](https://img.shields.io/badge/Firefox-Add--on-orange?style=flat-square&logo=firefox)
![License](https://img.shields.io/badge/license-Custom-green?style=flat-square)
![Made with Love](https://img.shields.io/badge/Made%20with-❤️-red?style=flat-square)

Transform your browsing experience with beautiful golden themes and interface enhancements.

## ✨ Features

- **🌟 Beautiful Golden Glow Effects**: Add stunning golden glow effects to web interfaces
- **⚙️ Customizable Intensity**: Control the intensity of the golden glow effect (0-100%)
- **🎨 Multiple Theme Variants**: Choose from Golden, Silver, and Bronze themes
- **✨ Smooth Animations**: Enjoy smooth transitions and shimmer effects
- **🏠 Custom New Tab Page**: Beautiful new tab page with time, search, and quick links
- **📱 Responsive Design**: Works perfectly on all screen sizes
- **🌓 System Theme Support**: Adapts to dark/light mode preferences
- **⚡ Performance Optimized**: Lightweight and efficient implementation

## 🚀 Installation

### From Chrome Web Store
```
🏪 Coming soon to Chrome Web Store
```

### From Firefox Add-ons
```
🦊 Coming soon to Firefox Add-ons
```

### Manual Installation (Developer Mode)
1. Download or clone this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right
4. Click "Load unpacked" and select the extension folder
5. The extension will be installed and ready to use

## 🛠️ Usage

1. **Enable/Disable**: Click the extension icon in your browser toolbar
2. **Customize Settings**: Right-click the extension icon and select "Options"
3. **Adjust Intensity**: Use the slider to control glow intensity
4. **Choose Theme**: Select from Golden, Silver, or Bronze variants
5. **Toggle Features**: Enable/disable animations, backgrounds, and other features

## ⚙️ Settings

### General Settings
- **Enable Golden Glow**: Turn the extension on/off globally
- **Glow Intensity**: Control the intensity of the golden glow effect (0-100%)

### Visual Effects
- **Enable Animations**: Show smooth animations and transitions
- **Custom Background**: Apply golden gradient background overlay
- **Theme Variant**: Choose between Golden, Silver, and Bronze themes

### Advanced Settings
- **Auto-refresh on Changes**: Automatically refresh tabs when settings change
- **Respect System Theme**: Adapt to dark/light mode preferences
- **Animation Speed**: Control animation playback speed (0.5x - 2.0x)

## 🎨 Screenshots

*Screenshots will be added when extension is published*

## 🔧 Development

### Prerequisites
- Node.js 14+
- Chrome or Firefox browser
- Git

### Setup
```bash
# Clone the repository
git clone https://github.com/tuananh93cp/Golden-Glow-Interface-Pack.git
cd Golden-Glow-Interface-Pack

# Install dependencies (optional)
npm install

# Generate PNG icons
npm run create-icons

# Build extension packages
npm run build
```

### Project Structure
```
Extension4/
├── manifest.json              # Chrome extension manifest
├── manifest_firefox.json      # Firefox extension manifest
├── background.js              # Background service worker
├── scripts/
│   ├── content.js            # Content script
│   ├── popup.js              # Popup functionality
│   └── options.js            # Options page functionality
├── styles/
│   └── golden-glow.css       # Main stylesheet
├── popup.html                # Extension popup
├── options.html              # Settings page
├── newtab.html               # New tab page
└── icons/                    # Extension icons
```

### Building for Production
```bash
npm run build
```

This creates distribution packages in the `dist/` directory:
- `golden-glow-interface-pack-chrome.zip` - For Chrome Web Store
- `golden-glow-interface-pack-firefox.zip` - For Firefox Add-ons

## 📋 Permissions

The extension requires the following permissions:

- **activeTab**: To apply golden glow effects to the current tab
- **storage**: To save user preferences and settings
- **scripting**: To inject CSS and JavaScript into web pages
- **contextMenus**: To provide right-click context menu options
- **<all_urls>**: To apply effects to all websites

## 🔒 Privacy Policy

This extension:
- ✅ **Does NOT collect personal data**
- ✅ **Does NOT track user behavior**
- ✅ **Does NOT send data to external servers**
- ✅ **Only stores settings locally** on your device
- ✅ **Works completely offline**

## 📈 Roadmap

- [ ] Additional theme variants (Rose Gold, Platinum)
- [ ] Custom color picker
- [ ] Website-specific settings
- [ ] Import/export settings
- [ ] Performance improvements
- [ ] More animation effects

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Changelog

### v1.0.0 (March 7, 2025)
- 🎉 Initial release
- ✨ Golden glow effects for web interfaces
- 🎨 Customizable intensity and themes
- 🏠 Beautiful new tab page
- ⚙️ Comprehensive settings panel
- 🔧 Support for Chrome and Firefox

## 👨‍💻 Developer

- **Name**: XMP
- **Email**: lanhanh64529@gmail.com
- **Location**: Vietnam
- **Created**: March 7, 2025

## 🤝 Support

If you encounter any issues or have suggestions:

1. **GitHub Issues**: [Report bugs or request features](https://github.com/tuananh93cp/Golden-Glow-Interface-Pack/issues)
2. **Email Support**: lanhanh64529@gmail.com
3. **Documentation**: Check this README for common solutions

## 📄 License

© 2025 XMP. All rights reserved.

This extension is provided as-is without warranty. Use at your own discretion.

## 🙏 Acknowledgments

- Thanks to the Chrome and Firefox extension development communities
- Special thanks to users who provide feedback and suggestions
- Inspired by the beauty of golden light and warm interfaces

---

**Made with ❤️ by XMP**

*Transform your browsing experience with the Golden Glow Interface Pack!* ✨

[![GitHub stars](https://img.shields.io/github/stars/tuananh93cp/Golden-Glow-Interface-Pack?style=social)](https://github.com/tuananh93cp/Golden-Glow-Interface-Pack/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/tuananh93cp/Golden-Glow-Interface-Pack?style=social)](https://github.com/tuananh93cp/Golden-Glow-Interface-Pack/network)
[![GitHub issues](https://img.shields.io/github/issues/tuananh93cp/Golden-Glow-Interface-Pack)](https://github.com/tuananh93cp/Golden-Glow-Interface-Pack/issues) 