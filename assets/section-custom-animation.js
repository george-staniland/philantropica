// Section  - Image Layout
document.addEventListener('DOMContentLoaded', () => {
  const imageLayoutSection = document.querySelector('.section__image-layout');
  if (!imageLayoutSection) return;

  gsap.set('.overlay-card__image', { y: 200, opacity: 0 });

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || entry.intersectionRatio < 0.4) return;

        gsap.to('.overlay-card__image', {
          y: 0,
          duration: 1.3,
          ease: "elastic.out(0.4,0.2)",
        });

        gsap.to('.overlay-card__image', {
          opacity: 1,
          duration: 0.2,
          ease: 'power1.in',
        });

        obs.unobserve(entry.target);
      });
    },
    { threshold: [0, 0.4, 1] }
  );

  observer.observe(imageLayoutSection);
});
// End Section  - Image Layout