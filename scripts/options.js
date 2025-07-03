// Golden Glow Interface Pack - Options Script
// Copyright (c) 2025 XMP

document.addEventListener('DOMContentLoaded', function() {
    // Get all DOM elements
    const elements = {
        enabledToggle: document.getElementById('enabledToggle'),
        intensitySlider: document.getElementById('intensitySlider'),
        intensityValue: document.getElementById('intensityValue'),
        animationsToggle: document.getElementById('animationsToggle'),
        backgroundToggle: document.getElementById('backgroundToggle'),
        autoRefreshToggle: document.getElementById('autoRefreshToggle'),
        respectSystemToggle: document.getElementById('respectSystemToggle'),
        animationSpeedSlider: document.getElementById('animationSpeedSlider'),
        animationSpeedValue: document.getElementById('animationSpeedValue'),
        saveBtn: document.getElementById('saveBtn'),
        resetBtn: document.getElementById('resetBtn'),
        clearDataBtn: document.getElementById('clearDataBtn'),
        statusMessage: document.getElementById('statusMessage'),
        toggleAdvanced: document.getElementById('toggleAdvanced'),
        advancedSettings: document.getElementById('advancedSettings'),
        aboutLink: document.getElementById('aboutLink'),
        themeOptions: document.querySelectorAll('.theme-option')
    };

    // Default settings
    const defaultSettings = {
        enabled: true,
        glowIntensity: 0.8,
        animations: true,
        customBackground: true,
        theme: 'golden',
        autoRefresh: true,
        respectSystem: true,
        animationSpeed: 1.0
    };

    // Load settings on page load
    loadSettings();

    // Event listeners
    elements.enabledToggle.addEventListener('click', () => toggleSetting('enabled'));
    elements.animationsToggle.addEventListener('click', () => toggleSetting('animations'));
    elements.backgroundToggle.addEventListener('click', () => toggleSetting('customBackground'));
    elements.autoRefreshToggle.addEventListener('click', () => toggleSetting('autoRefresh'));
    elements.respectSystemToggle.addEventListener('click', () => toggleSetting('respectSystem'));
    
    elements.intensitySlider.addEventListener('input', updateIntensity);
    elements.animationSpeedSlider.addEventListener('input', updateAnimationSpeed);
    
    elements.saveBtn.addEventListener('click', saveAllSettings);
    elements.resetBtn.addEventListener('click', resetToDefaults);
    elements.clearDataBtn.addEventListener('click', clearAllData);
    elements.toggleAdvanced.addEventListener('click', toggleAdvancedSettings);
    elements.aboutLink.addEventListener('click', showAbout);

    // Theme selection
    elements.themeOptions.forEach(option => {
        option.addEventListener('click', () => selectTheme(option.dataset.theme));
    });

    function loadSettings() {
        chrome.storage.sync.get(Object.keys(defaultSettings), function(result) {
            const settings = { ...defaultSettings, ...result };
            
            // Update UI elements
            updateToggleState(elements.enabledToggle, settings.enabled);
            updateToggleState(elements.animationsToggle, settings.animations);
            updateToggleState(elements.backgroundToggle, settings.customBackground);
            updateToggleState(elements.autoRefreshToggle, settings.autoRefresh);
            updateToggleState(elements.respectSystemToggle, settings.respectSystem);
            
            elements.intensitySlider.value = Math.round(settings.glowIntensity * 100);
            elements.intensityValue.textContent = Math.round(settings.glowIntensity * 100) + '%';
            
            elements.animationSpeedSlider.value = settings.animationSpeed;
            elements.animationSpeedValue.textContent = settings.animationSpeed.toFixed(1) + 'x';
            
            // Update theme selection
            elements.themeOptions.forEach(option => {
                option.classList.toggle('active', option.dataset.theme === settings.theme);
            });
        });
    }

    function updateToggleState(toggle, isActive) {
        toggle.classList.toggle('active', isActive);
    }

    function toggleSetting(settingName) {
        chrome.storage.sync.get([settingName], function(result) {
            const currentValue = result[settingName] !== undefined ? result[settingName] : defaultSettings[settingName];
            const newValue = !currentValue;
            
            chrome.storage.sync.set({ [settingName]: newValue }, function() {
                loadSettings();
                showStatus('Setting updated successfully!', 'success');
            });
        });
    }

    function updateIntensity() {
        const intensity = parseInt(elements.intensitySlider.value) / 100;
        elements.intensityValue.textContent = elements.intensitySlider.value + '%';
        
        chrome.storage.sync.set({ glowIntensity: intensity }, function() {
            showStatus('Intensity updated!', 'success');
        });
    }

    function updateAnimationSpeed() {
        const speed = parseFloat(elements.animationSpeedSlider.value);
        elements.animationSpeedValue.textContent = speed.toFixed(1) + 'x';
        
        chrome.storage.sync.set({ animationSpeed: speed }, function() {
            showStatus('Animation speed updated!', 'success');
        });
    }

    function selectTheme(theme) {
        elements.themeOptions.forEach(option => {
            option.classList.toggle('active', option.dataset.theme === theme);
        });
        
        chrome.storage.sync.set({ theme: theme }, function() {
            showStatus(`Theme changed to ${theme}!`, 'success');
        });
    }

    function saveAllSettings() {
        elements.saveBtn.textContent = 'Saving...';
        elements.saveBtn.disabled = true;
        
        const settings = {
            enabled: elements.enabledToggle.classList.contains('active'),
            glowIntensity: parseInt(elements.intensitySlider.value) / 100,
            animations: elements.animationsToggle.classList.contains('active'),
            customBackground: elements.backgroundToggle.classList.contains('active'),
            autoRefresh: elements.autoRefreshToggle.classList.contains('active'),
            respectSystem: elements.respectSystemToggle.classList.contains('active'),
            animationSpeed: parseFloat(elements.animationSpeedSlider.value),
            theme: document.querySelector('.theme-option.active').dataset.theme
        };
        
        chrome.storage.sync.set(settings, function() {
            elements.saveBtn.textContent = '💾 Save Settings';
            elements.saveBtn.disabled = false;
            showStatus('All settings saved successfully!', 'success');
            
            // Refresh all tabs if auto-refresh is enabled
            if (settings.autoRefresh) {
                refreshAllTabs();
            }
        });
    }

    function resetToDefaults() {
        if (confirm('Are you sure you want to reset all settings to default values?')) {
            chrome.storage.sync.set(defaultSettings, function() {
                loadSettings();
                showStatus('Settings reset to defaults!', 'success');
                refreshAllTabs();
            });
        }
    }

    function clearAllData() {
        if (confirm('Are you sure you want to clear all extension data? This action cannot be undone.')) {
            chrome.storage.sync.clear(function() {
                chrome.storage.local.clear(function() {
                    loadSettings();
                    showStatus('All data cleared!', 'success');
                });
            });
        }
    }

    function toggleAdvancedSettings() {
        const isShowing = elements.advancedSettings.classList.contains('show');
        elements.advancedSettings.classList.toggle('show', !isShowing);
        elements.toggleAdvanced.textContent = isShowing ? '▶ Show Advanced Options' : '▼ Hide Advanced Options';
    }

    function showAbout() {
        const aboutText = `
Golden Glow Interface Pack v1.0.0

Transform your browsing experience with beautiful golden themes and interface enhancements.

Features:
• Beautiful golden glow effects
• Customizable intensity and themes
• Smooth animations and transitions
• Responsive design
• Multiple theme variants

Developer: XMP
Email: lanhanh64529@gmail.com
GitHub: https://github.com/tuananh93cp/Golden-Glow-Interface-Pack
Location: Vietnam

Created: March 7, 2025

© 2025 XMP. All rights reserved.
        `;
        
        alert(aboutText);
    }

    function showStatus(message, type) {
        elements.statusMessage.textContent = message;
        elements.statusMessage.className = `status-message status-${type}`;
        elements.statusMessage.style.display = 'block';
        
        setTimeout(() => {
            elements.statusMessage.style.display = 'none';
        }, 3000);
    }

    function refreshAllTabs() {
        chrome.tabs.query({}, function(tabs) {
            tabs.forEach(function(tab) {
                if (tab.url && !tab.url.startsWith('chrome://') && !tab.url.startsWith('chrome-extension://')) {
                    chrome.tabs.reload(tab.id);
                }
            });
        });
    }

    // Auto-save settings when changed
    const autoSaveElements = [
        elements.intensitySlider,
        elements.animationSpeedSlider
    ];

    autoSaveElements.forEach(element => {
        element.addEventListener('change', function() {
            setTimeout(() => {
                saveAllSettings();
            }, 500);
        });
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey || e.metaKey) {
            switch (e.key) {
                case 's':
                    e.preventDefault();
                    saveAllSettings();
                    break;
                case 'r':
                    e.preventDefault();
                    resetToDefaults();
                    break;
            }
        }
    });

    // Import/Export settings
    window.exportSettings = function() {
        chrome.storage.sync.get(null, function(settings) {
            const dataStr = JSON.stringify(settings, null, 2);
            const dataBlob = new Blob([dataStr], { type: 'application/json' });
            const url = URL.createObjectURL(dataBlob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'golden-glow-settings.json';
            link.click();
            URL.revokeObjectURL(url);
        });
    };

    window.importSettings = function(file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                const settings = JSON.parse(e.target.result);
                chrome.storage.sync.set(settings, function() {
                    loadSettings();
                    showStatus('Settings imported successfully!', 'success');
                });
            } catch (error) {
                showStatus('Error importing settings: Invalid file format', 'error');
            }
        };
        reader.readAsText(file);
    };

    // Performance monitoring
    console.log('Golden Glow Options page loaded successfully');
    console.log('Extension version: 1.0.0');
    console.log('Developer: XMP');
}); 