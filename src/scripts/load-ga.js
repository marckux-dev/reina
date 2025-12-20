export function loadGoogleAnalytics() {
  if (window.gtag) return;
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-B6KSK9JMB5';
  script.onload = () => {
    window.gtag = function () {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push(arguments);
    }
    window.gtag('js', new Date());
    window.gtag('config', 'G-B6KSK9JMB5', {
      anonymize_ip: true,
    });
  };
  document.head.appendChild(script);
}
