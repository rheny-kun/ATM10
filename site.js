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

  document.documentElement.classList.add("has-nav-js");

  const nav = document.querySelector(".site-nav");
  const toggle = nav?.querySelector(".site-nav-toggle");
  const links = nav?.querySelector(".site-nav-links");

  if (!nav || !toggle || !links) return;

  const setOpen = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "メニューを閉じる" : "メニューを開く");
    links.classList.toggle("is-open", open);
  };

  setOpen(false);
  toggle.addEventListener("click", () => {
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });
  links.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setOpen(false);
  });
  document.addEventListener("click", (event) => {
    if (!nav.contains(event.target)) setOpen(false);
  });

  const media = window.matchMedia("(min-width: 701px)");
  media.addEventListener?.("change", () => setOpen(false));
})();
