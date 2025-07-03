// Golden Glow Interface Pack - Background Script
// Copyright (c) 2025 XMP

// Extension installation and initialization
chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install') {
    console.log('Golden Glow Interface Pack installed successfully');
    
    // Set default settings
    chrome.storage.sync.set({
      enabled: true,
      glowIntensity: 0.8,
      theme: 'golden',
      animations: true,
      customBackground: true
    });
    
    // Open welcome page
    chrome.tabs.create({
      url: chrome.runtime.getURL('options.html')
    });
  }
  
  // Create context menus
  chrome.contextMenus.create({
    id: 'golden-glow-toggle',
    title: 'Toggle Golden Glow',
    contexts: ['all']
  });
  
  chrome.contextMenus.create({
    id: 'golden-glow-settings',
    title: 'Golden Glow Settings',
    contexts: ['all']
  });
});

// Handle extension icon click
chrome.action.onClicked.addListener((tab) => {
  // Toggle extension on/off
  chrome.storage.sync.get(['enabled'], (result) => {
    const newState = !result.enabled;
    chrome.storage.sync.set({ enabled: newState });
    
    // Update icon to reflect state
    chrome.action.setIcon({
      path: {
        16: newState ? 'icons/icon16.png' : 'icons/icon16-disabled.png',
        48: newState ? 'icons/icon48.png' : 'icons/icon48-disabled.png',
        128: newState ? 'icons/icon128.png' : 'icons/icon128-disabled.png'
      }
    });
  });
});

// Listen for storage changes
chrome.storage.onChanged.addListener((changes, namespace) => {
  if (namespace === 'sync' && changes.enabled) {
    // Refresh all tabs when extension is toggled
    chrome.tabs.query({}, (tabs) => {
      tabs.forEach(tab => {
        chrome.tabs.reload(tab.id);
      });
    });
  }
});

// Context menu click handler
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === 'golden-glow-toggle') {
    chrome.storage.sync.get(['enabled'], (result) => {
      chrome.storage.sync.set({ enabled: !result.enabled });
    });
  } else if (info.menuItemId === 'golden-glow-settings') {
    chrome.tabs.create({
      url: chrome.runtime.getURL('options.html')
    });
  }
}); 