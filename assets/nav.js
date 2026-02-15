(function () {
  var toggle = document.getElementById('nav-toggle');
  var navbar = document.getElementById('navbar');
  if (!toggle || !navbar) return;

  function openMenu() {
    navbar.classList.add('is-open');
    document.body.classList.add('menu-open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Close menu');
  }

  function closeMenu() {
    navbar.classList.remove('is-open');
    document.body.classList.remove('menu-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
  }

  toggle.addEventListener('click', function () {
    if (navbar.classList.contains('is-open')) closeMenu();
    else openMenu();
  });

  document.querySelectorAll('.navbar__links a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) closeMenu();
  });
})();
