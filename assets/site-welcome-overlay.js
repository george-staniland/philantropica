(function () {
  var DISMISSED_KEY = 'siteWelcomeOverlayDismissed';
  // Set to true during testing to always show the overlay.
  var FORCE_SHOW_FOR_TESTING = false;
  var root = document.getElementById('SiteWelcomeOverlay');

  function setHiddenState(hidden) {
    if (!root) {
      return;
    }

    root.classList.toggle('is-hidden', hidden);
    root.setAttribute('aria-hidden', hidden ? 'true' : 'false');
  }

  function hasBeenDismissed() {
    try {
      return window.localStorage.getItem(DISMISSED_KEY) === 'true';
    } catch (error) {
      return false;
    }
  }

  function markDismissed() {
    try {
      window.localStorage.setItem(DISMISSED_KEY, 'true');
      window.dispatchEvent(
        new CustomEvent('siteWelcomeOverlayDismissedChange', {
          detail: { dismissed: true },
        })
      );
    } catch (error) {
      // Ignore storage issues and continue with UI state.
    }
  }

  function clearDismissed() {
    try {
      window.localStorage.removeItem(DISMISSED_KEY);
    } catch (error) {
      // Ignore storage issues and continue with UI state.
    }
  }

  function hideSiteWelcomeOverlay() {
    markDismissed();
    setHiddenState(true);
  }

  function showSiteWelcomeOverlay() {
    clearDismissed();
    setHiddenState(false);
  }

  window.hideSiteWelcomeOverlay = hideSiteWelcomeOverlay;
  window.showSiteWelcomeOverlay = showSiteWelcomeOverlay;

  if (!root) {
    return;
  }

  var backdrop = root.querySelector('[data-site-welcome-overlay-backdrop]');
  var closeButton = root.querySelector('[data-site-welcome-overlay-close]');

  if (backdrop) {
    backdrop.addEventListener('click', hideSiteWelcomeOverlay);
  }

  if (closeButton) {
    closeButton.addEventListener('click', hideSiteWelcomeOverlay);
  }

  setHiddenState(FORCE_SHOW_FOR_TESTING ? false : hasBeenDismissed());
})();
