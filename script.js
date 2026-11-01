document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const toggle = document.getElementById('menuToggle');
  const bar = document.querySelector('.topbar');
  if (toggle && bar) {
    toggle.addEventListener('click', () => {
      const opened = bar.classList.toggle('menu-open');
      toggle.setAttribute('aria-expanded', String(opened));
      toggle.textContent = opened ? '×' : '☰';
    });
    document.querySelectorAll('.topbar nav a').forEach(link => {
      link.addEventListener('click', () => {
        bar.classList.remove('menu-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.textContent = '☰';
      });
    });
  }

  document.querySelectorAll('.hint-toggle').forEach(button => {
    button.addEventListener('click', () => {
      const target = document.getElementById(button.id === 'hintOne' ? 'hintContentOne' : 'hintContentTwo');
      if (!target) return;
      const willOpen = target.hidden;
      target.hidden = !willOpen;
      button.setAttribute('aria-expanded', String(willOpen));
      button.querySelector('span').textContent = willOpen ? '−' : '＋';
    });
  });
});