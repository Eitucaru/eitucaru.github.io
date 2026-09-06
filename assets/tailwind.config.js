/* ============================================================
   MineJ — Candy Pop design tokens (Tailwind config)
   ------------------------------------------------------------
   This is the SINGLE SOURCE OF TRUTH for the Candy Pop design.
   Change a color/shadow/font here and it updates everywhere the
   utilities are used in the HTML.

   How it's used (no build step):
   1. Load the Tailwind Play CDN:   <script src="https://cdn.tailwindcss.com"></script>
   2. Load this file AFTER it:       <script src="assets/tailwind.config.js"></script>
   3. Use the utility classes in your HTML, e.g.:
        <a class="bg-candy-purple text-white shadow-lift-4 ...">Download</a>
   ============================================================ */
tailwind.config = {
  theme: {
    extend: {
      /* ---- Candy Pop palette ---- */
      colors: {
        'candy-purple': '#7b2ff7',
        'candy-purple-deep': '#5a17c9',
        'candy-purple-soft': '#ece5ff',

        'candy-pink': '#ff4fa3',
        'candy-pink-soft': '#ffe3f1',

        'candy-yellow': '#ffcf00',
        'candy-yellow-soft': '#ffe9a8',

        'candy-teal': '#00b8a9',
        'candy-teal-deep': '#009c90',
        'candy-teal-soft': '#d8ffe8',

        'candy-orange': '#ff8a3d',
        'candy-orange-soft': '#ffd2b8',

        'candy-sky-soft': '#d8f4ff',
        'candy-lav-soft': '#e6e0ff',
        'candy-cream-soft': '#fff3d6',

        'candy-ink': '#2b2450',
        'candy-ink-deep': '#241d44',
        'candy-muted': '#5a5488',
        'candy-paper': '#fbf6ff',
        'candy-footer-text': '#cfc9f2',
      },

      /* ---- Friendly rounded font (loaded from Google Fonts) ---- */
      fontFamily: {
        candy: ['"Nunito Sans"', '"Segoe UI"', 'system-ui', 'sans-serif'],
      },

      /* ---- Chunky "pops up" shadows (playful depth) ----
         shadow-lift-4 = the element sits 4px above its shadow.  */
      boxShadow: {
        'lift-1': '0 1px 0 #2b2450',
        'lift-2': '0 2px 0 #2b2450',
        'lift-3': '0 3px 0 #2b2450',
        'lift-4': '0 4px 0 #2b2450',
        'lift-5': '0 5px 0 #2b2450',
        'lift-6': '0 6px 0 #2b2450',
        'lift-8': '0 8px 0 #2b2450',
      },
    },
  },
};
