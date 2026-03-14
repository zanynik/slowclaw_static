document.addEventListener('DOMContentLoaded', () => {
  const runFeed = document.getElementById('runFeed');

  const ops = [
    { label: '[TRANSCRIPT]', action: 'Syncing transcript sidecars for new audio journals', time: '2m ago', color: '#E35335' },
    { label: '[OUTPUT]', action: 'Writing 4 keepable insight drafts into posts/', time: 'Just now', color: '#5E5BEC' },
    { label: '[CURATION]', action: 'Refreshing interest signals from kept artifacts and incoming feed sources', time: 'Processing', color: '#246B50' }
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
      }, 800 + i * 1500);
    });
  }

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

  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.transform = 'translateY(-0.5rem)';
    } else {
      header.style.transform = 'translateY(0)';
    }
  });
});
