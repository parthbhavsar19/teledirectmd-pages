/* TeleDirectMD theme for the static health guides.
   Same mechanism as the main site (app/layout.js and SiteHeader):
   <html data-theme="dark|light">, saved in localStorage 'tdmd-theme'.
   With no saved choice, the page follows the system setting.
   Load this script early (in <head> or first thing in <body>) so the theme
   is applied before the page paints. */
(function () {
  var root = document.documentElement;
  var KEY = 'tdmd-theme';
  var LEGACY_KEY = 'tdmd-dark-mode';
  var mq = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;

  function stored() {
    try {
      var t = localStorage.getItem(KEY);
      if (t === 'dark' || t === 'light') return t;
      var legacy = localStorage.getItem(LEGACY_KEY);
      if (legacy === 'true') return 'dark';
      if (legacy === 'false') return 'light';
    } catch (e) { /* storage blocked */ }
    return null;
  }
  function system() { return mq && mq.matches ? 'dark' : 'light'; }

  function syncToggles(theme) {
    var buttons = document.querySelectorAll('.tdmd-dark-toggle, .tdmd-theme-toggle');
    for (var i = 0; i < buttons.length; i++) {
      var b = buttons[i];
      b.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
      b.setAttribute('aria-label', 'Dark mode');
      b.setAttribute('title', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
      if (!b.getAttribute('type')) b.setAttribute('type', 'button');
      var icons = b.querySelectorAll('svg');
      for (var j = 0; j < icons.length; j++) icons[j].setAttribute('aria-hidden', 'true');
    }
  }

  function apply(theme) {
    root.setAttribute('data-theme', theme);
    // Older guide styles keyed off this class; keep it in step.
    if (root.classList) root.classList.toggle('tdmd-dark', theme === 'dark');
    syncToggles(theme);
  }

  apply(stored() || system());

  if (mq) {
    var onSystem = function (e) { if (!stored()) apply(e.matches ? 'dark' : 'light'); };
    if (mq.addEventListener) mq.addEventListener('change', onSystem);
    else if (mq.addListener) mq.addListener(onSystem);
  }
  window.addEventListener('storage', function (e) {
    if (e.key === KEY) apply(stored() || system());
  });

  function wire() {
    syncToggles(root.getAttribute('data-theme'));
    // One delegated listener covers every toggle on the page, including the
    // hub page's .tdmd-theme-toggle, which has its own handler: skip those.
    document.addEventListener('click', function (e) {
      var btn = e.target && e.target.closest ? e.target.closest('.tdmd-dark-toggle') : null;
      if (!btn) return;
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      apply(next);
      try {
        localStorage.setItem(KEY, next);
        localStorage.setItem(LEGACY_KEY, String(next === 'dark'));
      } catch (err) { /* storage blocked: the choice lasts for this page only */ }
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', wire);
  else wire();
})();
