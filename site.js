(() => {
  "use strict";

  const root = document.documentElement;
  const header = document.querySelector(".site-header");
  const filterBar = document.querySelector(".filter-bar");

  const updateStickyOffsets = () => {
    if (header) {
      root.style.setProperty(
        "--site-header-height",
        `${Math.ceil(header.getBoundingClientRect().height)}px`,
      );
    }
    if (filterBar) {
      root.style.setProperty(
        "--filter-bar-height",
        `${Math.ceil(filterBar.getBoundingClientRect().height)}px`,
      );
    }
  };

  updateStickyOffsets();
  window.addEventListener("resize", updateStickyOffsets, { passive: true });

  if ("ResizeObserver" in window) {
    const observer = new ResizeObserver(updateStickyOffsets);
    if (header) observer.observe(header);
    if (filterBar) observer.observe(filterBar);
  }
})();
