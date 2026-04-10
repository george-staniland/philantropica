document.addEventListener('DOMContentLoaded', () => {
  if (typeof gsap === 'undefined') return;

  const overlayImage1 = document.querySelector('.heading-section__overlay--1 img');
  const overlayImage2 = document.querySelector('.heading-section__overlay--2 img');

  if (overlayImage1) {
    gsap.to(overlayImage1, {
      y: -10,
      x: 55,
      rotate: 8,
      duration: 3.4,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
    });
  }

  if (overlayImage2) {
    gsap.to(overlayImage2, {
      y: 115,
      x: -10,
      rotate: -20,
      duration: 4.9,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
    });
  }
});
