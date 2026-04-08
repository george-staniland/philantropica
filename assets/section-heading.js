document.addEventListener('DOMContentLoaded', () => {
  if (typeof gsap === 'undefined') return;

  const overlayImage1 = document.querySelector('.heading-section__overlay--1 img');
  const overlayImage2 = document.querySelector('.heading-section__overlay--2 img');

  if (overlayImage1) {
    gsap.to(overlayImage1, {
      y: -12,
      x: 9,
      duration: 3,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
    });
  }

  if (overlayImage2) {
    gsap.to(overlayImage2, {
      y: 40,
      x: -3,
      rotate: -20,
      duration: 3.2,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
    });
  }
});
