
  document.getElementById('year').textContent = new Date().getFullYear();

  // Reveal on scroll
  const revealEls = document.querySelectorAll('[data-reveal]');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, {threshold:0.15}); 
  revealEls.forEach(el=>io.observe(el));

  // Contact form (front-end only demo)
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    status.textContent = 'Thanks! Your message has been noted. (Connect a backend or form service to receive these.)';
    form.reset();
  });