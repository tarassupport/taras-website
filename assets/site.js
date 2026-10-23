// Progressive enhancement only. Every page and language link works without JavaScript.
(() => {
  'use strict';
  const copy = document.querySelector('[data-copy-email]');
  if (!copy || !navigator.clipboard || !window.isSecureContext) return;
  copy.hidden = false;
  copy.addEventListener('click', async () => {
    const status = document.querySelector('[data-copy-status]');
    try {
      await navigator.clipboard.writeText('taras.support.sa@gmail.com');
      status.textContent = document.documentElement.lang === 'ar' ? 'تم نسخ البريد الإلكتروني.' : 'Email address copied.';
    } catch {
      status.textContent = document.documentElement.lang === 'ar' ? 'يمكنك تحديد البريد ونسخه يدوياً.' : 'You can select and copy the address manually.';
    }
  });
})();
