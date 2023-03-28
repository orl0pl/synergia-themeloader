document.addEventListener('DOMContentLoaded', function() {
    var applyThemeButton = document.getElementById('applyTheme');
  
    applyThemeButton.addEventListener('click', function() {
      var cssUrl = document.getElementById('cssUrl').value;
      chrome.storage.sync.set({themeUrl: cssUrl}, function() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.tabs.sendMessage(tabs[0].id, {action: "applyTheme"});
        });
      });
    });
  });
  