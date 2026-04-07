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


// Section  - Founding Members Section
document.addEventListener('DOMContentLoaded', () => {
  const foundingMembersSections = document.querySelectorAll('.section__founding-members');
  if (!foundingMembersSections.length) return;

  const sectionTweens = new WeakMap();
  const animationConfigs = [
    {
      selector: '.founding-members__image--top-left',
      x: 0,
      y: 30,
      duration: 5,
      delay: 0,
      ease: 'sine.inOut',
    },
    {
      selector: '.founding-members__image--top-right',
      x: -26,
      y: 10,
      duration: 5,
      delay: 0.12,
      ease: 'sine.inOut',
    },
    {
      selector: '.founding-members__image--bottom-left',
      x: 18,
      y: 36,
      duration: 5,
      delay: 0.22,
      ease: 'sine.inOut',
    },
    {
      selector: '.founding-members__image--bottom-right',
      x: -14,
      y: 28,
      duration: 5,
      delay: 0.08,
      ease: 'sine.inOut',
    },
  ];

  const startFoundingMembersAnimation = (sectionEl) => {
    if (sectionTweens.get(sectionEl)) return;

    const tweens = [];
    animationConfigs.forEach((config) => {
      const imageEl = sectionEl.querySelector(config.selector);
      if (!imageEl) return;

      const tween = gsap.to(imageEl, {
        x: config.x ?? 0,
        y: config.y,
        duration: config.duration,
        ease: config.ease ?? 'sine.inOut',
        yoyo: true,
        repeat: -1,
        delay: config.delay,
      });
      tweens.push(tween);
    });

    if (!tweens.length) return;
    sectionTweens.set(sectionEl, tweens);
  };

  const stopFoundingMembersAnimation = (sectionEl) => {
    const tweens = sectionTweens.get(sectionEl);
    if (!tweens) return;

    tweens.forEach((tween) => tween.kill());
    sectionTweens.delete(sectionEl);
    gsap.set(sectionEl.querySelectorAll('.founding-members__image'), { x: 0, y: 0 });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
          startFoundingMembersAnimation(entry.target);
          return;
        }

        stopFoundingMembersAnimation(entry.target);
      });
    },
    { threshold: [0, 0.2, 1] }
  );

  foundingMembersSections.forEach((sectionEl) => observer.observe(sectionEl));
});
// End Section  - Founding Members Section