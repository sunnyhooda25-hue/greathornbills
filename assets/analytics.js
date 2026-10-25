/* Great Hornbills GA4. Public measurement ID, not a secret. */
(() => {
  const measurementId = 'G-G8T78B119F';
  const productionHosts = ['greathornbills.com', 'www.greathornbills.com'];
  const internalPage = /^\/(?:qa|samples)(?:\/|$)|^\/website\/public\/|^\/(?:direction|hero-options)\.html$/;
  if (!productionHosts.includes(location.hostname) || internalPage.test(location.pathname)) return;
  if (window.__ghGA4Initialized) return;
  window.__ghGA4Initialized = true;

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', measurementId);

  // Click tracking (MEAS-CLICK-001): book_call_click and email_click. No PII is sent.
  const brand = 'great_hornbills';
  const clean = (value) => String(value || '').replace(/\s+/g, ' ').trim();
  // Any text containing an address or Cloudflare's placeholder is replaced, so no address can leak via link_text.
  const emailText = /\[email(?:\u00a0|\s)protected\]|[^\s@]+@[^\s@]+\.[^\s@]+/i;
  const linkText = (link) => {
    let text = clean(link.innerText || link.textContent) || clean(link.getAttribute('aria-label'));
    if (emailText.test(text)) text = 'email_link';
    return text.slice(0, 100);
  };
  const placementFor = (link) => {
    const explicit = link.closest('[data-track-placement]');
    if (explicit) return explicit.getAttribute('data-track-placement');
    if (link.matches('.nav-cta, .clinic-nav-cta') || link.closest('header, nav')) return 'nav';
    if (link.closest('#book-call')) return 'booking_section';
    if (/Foundation|Growth|Scale/.test(link.getAttribute('data-interest') || '')) return 'pricing';
    if (link.matches('.clinic-closing-email')) return 'closing';
    if (link.matches('.contact-email')) return 'contact';
    if (link.closest('footer')) return 'footer';
    if (link.closest('[class*="hero"], #hero')) return 'hero';
    return 'body';
  };
  const emailDomain = (link) => {
    const href = link.getAttribute('href') || '';
    const match = /^mailto:[^?@]*@([^?&#]+)/i.exec(href);
    if (match) return clean(decodeURIComponent(match[1])).toLowerCase();
    return 'greathornbills.com'; // Undecoded Cloudflare-protected links only ever point at our own inboxes.
  };
  const send = (name, params) => {
    window.gtag('event', name, Object.assign({ page_path: location.pathname, brand, transport_type: 'beacon' }, params));
  };
  window.ghTrackEmail = (placement) => {
    send('email_click', { link_url: 'mailto:@greathornbills.com', link_text: 'email_link', placement, email_domain: 'greathornbills.com' });
  };
  document.addEventListener('click', (event) => {
    const link = event.target instanceof Element ? event.target.closest('a') : null;
    if (!link) return;
    const href = link.getAttribute('href') || '';
    const interest = link.getAttribute('data-interest');
    const params = { link_text: linkText(link), placement: placementFor(link) };
    if (interest) params.interest = interest;
    if (href === '#book-call' || href.startsWith('https://cal.com/greathornbills/')) {
      send('book_call_click', Object.assign({ link_url: href.split('?')[0] }, params));
    } else if (/^mailto:/i.test(href) || href.startsWith('/cdn-cgi/l/email-protection') || link.classList.contains('__cf_email__')) {
      const domain = emailDomain(link);
      send('email_click', Object.assign({ link_url: `mailto:@${domain}`, email_domain: domain }, params));
    }
  }, true);

  // Reuse an existing Google tag on older pages. Configure this destination once.
  if (!document.querySelector('script[src*="googletagmanager.com/gtag/js"]')) {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.append(script);
  }
})();
