export function scrollToSection(selector) {
  const el = document.querySelector(selector);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });

  // If navigating to the contact section, focus the first input field
  if (selector === '#contact') {
    setTimeout(() => {
      const nameInput = document.getElementById('contact-form-name');
      if (nameInput) {
        nameInput.focus({ preventScroll: true });
      }
    }, 800); // Wait for smooth scroll to finish
  }
}
