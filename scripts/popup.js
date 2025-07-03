// Golden Glow Interface Pack - Popup Script
// Copyright (c) 2025 XMP

document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const mainToggle = document.getElementById('mainToggle');
    const animationsToggle = document.getElementById('animationsToggle');
    const backgroundToggle = document.getElementById('backgroundToggle');
    const intensitySlider = document.getElementById('intensitySlider');
    const intensityValue = document.getElementById('intensityValue');
    const status = document.getElementById('status');
    const statusText = document.getElementById('statusText');
    const settingsBtn = document.getElementById('settingsBtn');
    const refreshBtn = document.getElementById('refreshBtn');
    const aboutBtn = document.getElementById('aboutBtn');

    // Load current settings
    loadSettings();

    // Event listeners
    mainToggle.addEventListener('click', toggleMainFeature);
    animationsToggle.addEventListener('click', toggleAnimations);
    backgroundToggle.addEventListener('click', toggleBackground);
    intensitySlider.addEventListener('input', updateIntensity);
    settingsBtn.addEventListener('click', openSettings);
    refreshBtn.addEventListener('click', refreshAllTabs);
    aboutBtn.addEventListener('click', openAbout);

    function loadSettings() {
        chrome.storage.sync.get([
            'enabled', 
            'glowIntensity', 
            'animations', 
            'customBackground'
        ], function(result) {
            const settings = {
                enabled: result.enabled !== undefined ? result.enabled : true,
                glowIntensity: result.glowIntensity !== undefined ? result.glowIntensity : 0.8,
                animations: result.animations !== undefined ? result.animations : true,
                customBackground: result.customBackground !== undefined ? result.customBackground : true
            };

            // Update UI
            updateToggleState(mainToggle, settings.enabled);
            updateToggleState(animationsToggle, settings.animations);
            updateToggleState(backgroundToggle, settings.customBackground);
            
            intensitySlider.value = Math.round(settings.glowIntensity * 100);
            intensityValue.textContent = Math.round(settings.glowIntensity * 100) + '%';
            
            updateStatus(settings.enabled);
        });
    }

    function updateToggleState(toggle, isActive) {
        if (isActive) {
            toggle.classList.add('active');
        } else {
            toggle.classList.remove('active');
        }
    }

    function updateStatus(isEnabled) {
        if (isEnabled) {
            status.className = 'status-indicator status-active';
            statusText.textContent = '✅ Golden Glow is Active';
        } else {
            status.className = 'status-indicator status-inactive';
            statusText.textContent = '❌ Golden Glow is Disabled';
        }
    }

    function toggleMainFeature() {
        chrome.storage.sync.get(['enabled'], function(result) {
            const newState = !result.enabled;
            chrome.storage.sync.set({ enabled: newState }, function() {
                updateToggleState(mainToggle, newState);
                updateStatus(newState);
                
                // Update extension icon
                chrome.action.setIcon({
                    path: {
                        16: newState ? 'icons/icon16.png' : 'icons/icon16-disabled.png',
                        48: newState ? 'icons/icon48.png' : 'icons/icon48-disabled.png',
                        128: newState ? 'icons/icon128.png' : 'icons/icon128-disabled.png'
                    }
                });
            });
        });
    }

    function toggleAnimations() {
        chrome.storage.sync.get(['animations'], function(result) {
            const newState = !result.animations;
            chrome.storage.sync.set({ animations: newState }, function() {
                updateToggleState(animationsToggle, newState);
            });
        });
    }

    function toggleBackground() {
        chrome.storage.sync.get(['customBackground'], function(result) {
            const newState = !result.customBackground;
            chrome.storage.sync.set({ customBackground: newState }, function() {
                updateToggleState(backgroundToggle, newState);
            });
        });
    }

    function updateIntensity() {
        const intensity = parseInt(intensitySlider.value) / 100;
        intensityValue.textContent = intensitySlider.value + '%';
        
        chrome.storage.sync.set({ glowIntensity: intensity }, function() {
            // Immediately update current tab
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                chrome.tabs.sendMessage(tabs[0].id, {
                    action: 'updateIntensity',
                    intensity: intensity
                });
            });
        });
    }

    function openSettings() {
        chrome.tabs.create({
            url: chrome.runtime.getURL('options.html')
        });
        window.close();
    }

    function refreshAllTabs() {
        refreshBtn.textContent = 'Refreshing...';
        refreshBtn.disabled = true;
        
        chrome.tabs.query({}, function(tabs) {
            let refreshCount = 0;
            tabs.forEach(function(tab) {
                if (tab.url && !tab.url.startsWith('chrome://') && !tab.url.startsWith('chrome-extension://')) {
                    chrome.tabs.reload(tab.id, function() {
                        refreshCount++;
                        if (refreshCount === tabs.length) {
                            refreshBtn.textContent = 'Refresh';
                            refreshBtn.disabled = false;
                            setTimeout(() => {
                                refreshBtn.textContent = 'Refresh';
                            }, 1000);
                        }
                    });
                } else {
                    refreshCount++;
                }
            });
            
            if (refreshCount === tabs.length) {
                refreshBtn.textContent = 'Refresh';
                refreshBtn.disabled = false;
            }
        });
    }

    function openAbout() {
        chrome.tabs.create({
            url: 'https://github.com/tuananh93cp/Golden-Glow-Interface-Pack'
        });
        window.close();
    }

    // Listen for storage changes
    chrome.storage.onChanged.addListener(function(changes, namespace) {
        if (namespace === 'sync') {
            loadSettings();
        }
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            window.close();
        } else if (e.key === 'Enter' || e.key === ' ') {
            if (e.target === mainToggle) {
                toggleMainFeature();
            } else if (e.target === animationsToggle) {
                toggleAnimations();
            } else if (e.target === backgroundToggle) {
                toggleBackground();
            }
        }
    });

    // Auto-refresh status every 2 seconds
    setInterval(function() {
        chrome.storage.sync.get(['enabled'], function(result) {
            updateStatus(result.enabled);
        });
    }, 2000);
}); 