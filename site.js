(function () {
  var KEY = "cvnivo.legal.lang";

  function apply(lang) {
    var next = lang === "en" ? "en" : "zh";
    document.documentElement.lang = next;
    try {
      localStorage.setItem(KEY, next);
    } catch (_) {}
    document.querySelectorAll(".lang button").forEach(function (btn) {
      var selected = btn.getAttribute("data-lang") === next;
      btn.classList.toggle("active", selected);
      btn.setAttribute("aria-pressed", selected ? "true" : "false");
    });
  }

  function initial() {
    try {
      var saved = localStorage.getItem(KEY);
      if (saved === "en" || saved === "zh") return saved;
    } catch (_) {}
    var nav = (navigator.language || "zh").toLowerCase();
    return nav.indexOf("zh") === 0 ? "zh" : "en";
  }

  document.addEventListener("DOMContentLoaded", function () {
    apply(initial());
    document.querySelectorAll(".lang button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        apply(btn.getAttribute("data-lang"));
      });
    });
  });
})();
