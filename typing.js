var typed = new Typed('.typing', {
    strings: ["Web Developer", "Data Analyst", "Data Scientist"], 
    typeSpeed: 65, 
    backSpeed: 65,
    loop: true
});

ScrollReveal().reveal('#about h2, #about p, #about img, #about .row, #about .interest-container, #about .interest-grid', {
  delay: 200,
  distance: '30px',
  origin: 'bottom',
  duration: 1000,
  interval: 150,
});

new Typed(".typing-about", {
  strings: ["Data Analyst", "Web Developer", "Tech Enthusiast"],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true
});
