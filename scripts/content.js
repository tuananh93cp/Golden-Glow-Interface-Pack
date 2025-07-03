// Golden Glow Interface Pack - Content Script
// Copyright (c) 2025 XMP

(function() {
  'use strict';

  let settings = {
    enabled: true,
    glowIntensity: 0.8,
    theme: 'golden',
    animations: true,
    customBackground: true
  };

  // Load settings from storage
  chrome.storage.sync.get(['enabled', 'glowIntensity', 'theme', 'animations', 'customBackground'], (result) => {
    settings = { ...settings, ...result };
    if (settings.enabled) {
      applyGoldenGlow();
    }
  });

  // Listen for settings changes
  chrome.storage.onChanged.addListener((changes, namespace) => {
    if (namespace === 'sync') {
      Object.keys(changes).forEach(key => {
        settings[key] = changes[key].newValue;
      });
      
      if (changes.enabled) {
        if (changes.enabled.newValue) {
          applyGoldenGlow();
        } else {
          removeGoldenGlow();
        }
      } else {
        applyGoldenGlow();
      }
    }
  });

  function applyGoldenGlow() {
    // Remove existing styles first
    removeGoldenGlow();
    
    // Add main golden glow class to body (only if body exists)
    if (document.body) {
      document.body.classList.add('golden-glow-active');
    }
    
    // Apply dynamic styles based on settings
    const dynamicStyles = document.createElement('style');
    dynamicStyles.id = 'golden-glow-dynamic';
    dynamicStyles.textContent = `
      :root {
        --golden-glow-intensity: ${settings.glowIntensity};
        --golden-glow-theme: ${settings.theme};
        --golden-glow-animations: ${settings.animations ? 'running' : 'paused'};
      }
    `;
    document.head.appendChild(dynamicStyles);
    
    // Apply specific enhancements
    enhanceElements();
    
    // Add custom background if enabled
    if (settings.customBackground) {
      applyCustomBackground();
    }
  }

  function removeGoldenGlow() {
    if (document.body) {
      document.body.classList.remove('golden-glow-active');
    }
    
    // Remove dynamic styles
    const dynamicStyles = document.getElementById('golden-glow-dynamic');
    if (dynamicStyles) {
      dynamicStyles.remove();
    }
    
    // Remove custom background
    const customBg = document.getElementById('golden-glow-background');
    if (customBg) {
      customBg.remove();
    }
  }

  function enhanceElements() {
    // Enhance buttons
    const buttons = document.querySelectorAll('button, input[type="button"], input[type="submit"], .btn');
    buttons.forEach(button => {
      button.classList.add('golden-glow-button');
    });
    
    // Enhance input fields
    const inputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="password"], textarea');
    inputs.forEach(input => {
      input.classList.add('golden-glow-input');
    });
    
    // Enhance cards and containers
    const cards = document.querySelectorAll('.card, .panel, .container, .box');
    cards.forEach(card => {
      card.classList.add('golden-glow-card');
    });
    
    // Enhance navigation elements
    const navs = document.querySelectorAll('nav, .nav, .navbar, .menu');
    navs.forEach(nav => {
      nav.classList.add('golden-glow-nav');
    });
  }

  function applyCustomBackground() {
    // Create custom background overlay
    const backgroundOverlay = document.createElement('div');
    backgroundOverlay.id = 'golden-glow-background';
    backgroundOverlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, 
        rgba(255, 215, 0, 0.05) 0%, 
        rgba(255, 193, 7, 0.03) 25%, 
        rgba(255, 235, 59, 0.02) 50%, 
        rgba(255, 215, 0, 0.03) 75%, 
        rgba(255, 193, 7, 0.05) 100%);
      pointer-events: none;
      z-index: -1;
      opacity: ${settings.glowIntensity};
    `;
    if (document.body) {
      document.body.appendChild(backgroundOverlay);
    }
  }

  // Handle dynamic content
  const observer = new MutationObserver((mutations) => {
    if (settings.enabled) {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          // Re-apply enhancements to new elements
          setTimeout(enhanceElements, 100);
        }
      });
    }
  });

  // Initialize when DOM is ready
  function initializeExtension() {
    if (settings.enabled) {
      applyGoldenGlow();
    }
    
    // Start observing for dynamic content only when document.body exists
    if (document.body) {
      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeExtension);
  } else {
    initializeExtension();
  }

})(); 