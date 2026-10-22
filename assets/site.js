// Bascule français / anglais.
// Ordre de préférence : ?lang=en dans l'adresse, puis le dernier choix du visiteur,
// puis la langue de son navigateur. Sans JavaScript, le site s'affiche en français.
(function () {
  var html = document.documentElement;

  function lire() {
    try { return localStorage.getItem("langue"); } catch (e) { return null; }
  }
  function ecrire(l) {
    try { localStorage.setItem("langue", l); } catch (e) { /* navigation privée : sans importance */ }
  }
  function appliquer(l) {
    html.setAttribute("data-lang", l);
    html.setAttribute("lang", l);
    var b = document.querySelector(".langue");
    if (b) {
      b.textContent = l === "fr" ? "English" : "Français";
      b.setAttribute("aria-label", l === "fr" ? "Read in English" : "Lire en français");
    }
    var titre = document.querySelector('meta[name="titre-' + l + '"]');
    if (titre) document.title = titre.content;
  }

  var demande = new URLSearchParams(location.search).get("lang");
  var langue = (demande === "fr" || demande === "en") ? demande
    : (lire() || ((navigator.language || "fr").toLowerCase().indexOf("fr") === 0 ? "fr" : "en"));
  appliquer(langue);

  document.addEventListener("DOMContentLoaded", function () {
    appliquer(html.getAttribute("data-lang"));
    var b = document.querySelector(".langue");
    if (b) b.addEventListener("click", function () {
      var l = html.getAttribute("data-lang") === "fr" ? "en" : "fr";
      appliquer(l); ecrire(l);
    });
  });
})();
