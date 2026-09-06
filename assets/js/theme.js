/* ============================================================
   theme.js — shared light/dark toggle (loaded by every page)
   ------------------------------------------------------------
   Follows the system preference unless the user overrides it.
   The <html data-theme> value is set before first paint by a tiny
   inline script in each page's <head> (avoids FOUC); this script
   wires up the nav toggle button + listens for system changes.
   ============================================================ */
(function () {
  var mq = window.matchMedia('(prefers-color-scheme: dark)');
  var root = document.documentElement;
  var btn = document.getElementById('theme-toggle');

  function apply() {
    var saved = null;
    try { saved = localStorage.getItem('theme'); } catch (e) {}
    var dark = saved ? saved === 'dark' : mq.matches;
    root.setAttribute('data-theme', dark ? 'dark' : 'light');
    if (btn) btn.setAttribute('aria-pressed', dark ? 'true' : 'false');
  }

  if (btn) {
    btn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem('theme', next); } catch (e) {}
      apply();
    });
  }

  if (mq.addEventListener) mq.addEventListener('change', apply);
  else if (mq.addListener) mq.addListener(apply);

  apply();
})();
