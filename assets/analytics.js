/* Great Hornbills GA4. Public measurement ID, not a secret. */
(() => {
  const measurementId = 'G-CVD4LR5MXN';
  const productionHosts = ['greathornbills.com', 'www.greathornbills.com'];
  const internalPage = /^\/(?:qa|samples)(?:\/|$)|^\/website\/public\/|^\/(?:direction|hero-options)\.html$/;
  if (!productionHosts.includes(location.hostname) || internalPage.test(location.pathname)) return;
  if (window.__ghGA4Initialized) return;
  window.__ghGA4Initialized = true;

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', measurementId);

  // Reuse an existing Google tag on older pages. Configure this destination once.
  if (!document.querySelector('script[src*="googletagmanager.com/gtag/js"]')) {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.append(script);
  }
})();
