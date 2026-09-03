// Youth Impact Project — shared site behavior

document.addEventListener('DOMContentLoaded', () => {
  /* ---- mobile nav toggle ---- */
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const isOpen = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    links.querySelectorAll('a').forEach((a) =>
      a.addEventListener('click', () => {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      })
    );
  }

  /* ---- animated stat counters (one orchestrated reveal, respects reduced motion) ---- */
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const counters = document.querySelectorAll('[data-count-to]');
  if (counters.length) {
    const animate = (el) => {
      const to = el.getAttribute('data-count-to');
      const suffix = el.getAttribute('data-suffix') || '';
      const numeric = parseFloat(to);
      if (isNaN(numeric)) return;
      if (prefersReduced) {
        el.textContent = numeric + suffix;
        return;
      }
      const duration = 900;
      const start = performance.now();
      const step = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const val = (numeric * eased).toFixed(numeric % 1 !== 0 ? 1 : 0);
        el.textContent = val + suffix;
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(entry.target);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    counters.forEach((c) => io.observe(c));
  }

  /* ---- video category tabs ---- */
  const tabs = document.querySelectorAll('.tab-btn');
  const videoCards = document.querySelectorAll('[data-category]');
  if (tabs.length) {
    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        tabs.forEach((t) => t.classList.remove('active'));
        tab.classList.add('active');
        const cat = tab.getAttribute('data-tab');
        videoCards.forEach((card) => {
          const show = cat === 'all' || card.getAttribute('data-category') === cat;
          card.style.display = show ? '' : 'none';
        });
      });
    });
  }

  /* ---- registration plan toggle ---- */
  const planOptions = document.querySelectorAll('.plan-option');
  planOptions.forEach((opt) => {
    opt.addEventListener('click', () => {
      planOptions.forEach((o) => o.classList.remove('selected'));
      opt.classList.add('selected');
      const radio = opt.querySelector('input[type="radio"]');
      if (radio) radio.checked = true;
    });
  });

  /* ---- demo form submissions (no backend wired yet — MVP placeholder) ---- */
  document.querySelectorAll('form[data-demo-form]').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const successEl = form.parentElement.querySelector('.form-success');
      if (successEl) {
        form.style.display = 'none';
        successEl.classList.add('show');
      }
    });
  });
});
