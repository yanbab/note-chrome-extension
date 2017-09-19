/**
 * Note chrome extension
 * popup.js
 */

// Store textarea value in localStorage on text change

var textarea = document.querySelector('textarea');
textarea.value = localStorage.note || ""
textarea.addEventListener('keyup', () => {
  console.log("save",textarea.value)
  localStorage.note = textarea.value
})
