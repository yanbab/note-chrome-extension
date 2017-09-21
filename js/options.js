
function save_options() {
  // get options values
  var darkTheme = document.getElementById('darkTheme').checked;
  // set options values
  chrome.storage.sync.set({
    darkTheme: darkTheme
  }, function() {});
}

// Restores options
function restore_options() {
  chrome.storage.sync.get({
    darkTheme: false
  }, function(opts) {
    console.log(opts)
    document.getElementById('darkTheme').checked = opts.darkTheme;
  });
}

// restore options on load
document.addEventListener('DOMContentLoaded', restore_options);

// save options on change
document.getElementById('darkTheme').addEventListener('click', save_options);