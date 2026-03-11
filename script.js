document.addEventListener('DOMContentLoaded', () => {
  const runFeed = document.getElementById('runFeed');

  // Terminal animation simulation
  const ops = [
    { label: '[AUDIO]', action: 'Transcribing 12m journal...', time: '1m ago', color: '#E35335' },
    { label: '[VECTOR]', action: 'Updating personal interest graph', time: 'Just now', color: '#5E5BEC' },
    { label: '[FEED]', action: 'Filtering 402 new Blue Sky posts', time: 'Processing', color: '#246B50' }
  ];

  if (runFeed) {
    ops.forEach((op, i) => {
      setTimeout(() => {
        const row = document.createElement('div');
        row.className = 'run-item';
        row.innerHTML = `
          <div class="header">
            <strong style="color: ${op.color}">${op.label}</strong>
            <small>${op.time}</small>
          </div>
          <span>${op.action}</span>
        `;
        runFeed.appendChild(row);
      }, 800 + i * 1500); // Staggered entry for dramatic terminal effect
    });
  }

  // Scroll Reveal Observer
  const reveals = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

  reveals.forEach((el, idx) => {
    el.style.transitionDelay = `${(idx % 3) * 100}ms`;
    io.observe(el);
  });

  // Smooth scroll for anchors
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Navbar blur effect on scroll
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.transform = 'translateY(-0.5rem)';
    } else {
      header.style.transform = 'translateY(0)';
    }
  });
});
