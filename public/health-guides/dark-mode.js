/* TeleDirectMD Dark Mode Toggle */
(function() {
  var STORAGE_KEY = 'tdmd-dark-mode';

  // Apply saved preference immediately (before DOM renders) to prevent flash
  var saved = localStorage.getItem(STORAGE_KEY);
  if (saved === 'true') {
    document.documentElement.classList.add('tdmd-dark');
  }

  document.addEventListener('DOMContentLoaded', function() {
    // Find toggle button
    var toggle = document.querySelector('.tdmd-dark-toggle');
    if (!toggle) return;

    toggle.addEventListener('click', function() {
      var isDark = document.documentElement.classList.toggle('tdmd-dark');
      localStorage.setItem(STORAGE_KEY, isDark);
    });
  });
})();
