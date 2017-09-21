/**
 * Note chrome extension
 * popup.js
 */

// Store textarea value in localStorage on text change
var textarea = document.querySelector('textarea');
textarea.value = localStorage.note || ""
textarea.addEventListener('keyup', () => {
  localStorage.note = textarea.value
})

// Restore options from chrome storage sync
chrome.storage.sync.get(function(opts) {
  if(opts.darkTheme) {
    document.querySelector('body').className = 'darkTheme'
  }
});
