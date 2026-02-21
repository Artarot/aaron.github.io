(() => {
  const banner = document.getElementById("cookie-banner");
  const btn = document.getElementById("cookie-accept");
  if (!banner) return;

  const hide = () => { banner.style.display = "none"; };

  if (btn) btn.addEventListener("click", hide);
  setTimeout(hide, 5000);
})();
