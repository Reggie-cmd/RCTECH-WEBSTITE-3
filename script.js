// RC TECH Part 3: navigation, client-side validation and email preparation.
(() => {
  const EMAIL_TO = 'rctech402@gmail.com';
  document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav-links');
    if (toggle && nav) {
      toggle.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('open');
        toggle.setAttribute('aria-expanded', String(isOpen));
        toggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
      });
      nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
        nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false');
      }));
    }
    document.querySelectorAll('form[data-email-form]').forEach(form => {
      form.addEventListener('submit', event => {
        event.preventDefault();
        const message = form.querySelector('[data-form-message]');
        if (!form.checkValidity()) {
          form.reportValidity();
          if (message) message.textContent = 'Please correct the highlighted fields before continuing.';
          return;
        }
        const values = Object.fromEntries(new FormData(form).entries());
        const kind = form.dataset.emailForm;
        const subject = kind === 'enquiry' ? `RC TECH Product Enquiry - ${values.product}` : `RC TECH Contact - ${values.type}`;
        const body = Object.entries(values).map(([key, value]) => `${key.replace(/([A-Z])/g, ' $1')}: ${value}`).join('\n');
        const mailto = `mailto:${EMAIL_TO}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        if (message) message.textContent = 'Your details passed validation. Your email application should open with the message prepared. Review it and press Send to submit.';
        window.location.href = mailto;
      });
    });
  });
})();
