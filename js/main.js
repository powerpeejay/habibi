// New Look by Habibi — main.js
// Minimal: sticky-nav state on scroll. No frameworks, no listeners on every frame.

(() => {
  const topbar = document.querySelector('.topbar');
  if (!topbar) return;

  // Toggle data-state="scrolled" once scrolled past the hero. IntersectionObserver
  // keeps the listener cheap (no scroll event firing 60×/sec).
  const sentinel = document.createElement('div');
  sentinel.setAttribute('aria-hidden', 'true');
  sentinel.style.cssText = 'position:absolute;top:80px;left:0;width:1px;height:1px;pointer-events:none;';
  document.body.prepend(sentinel);

  const io = new IntersectionObserver(
    ([entry]) => {
      topbar.dataset.state = entry.isIntersecting ? 'hero' : 'scrolled';
    },
    { rootMargin: '0px' }
  );
  io.observe(sentinel);
})();
