export function scrollToSection(selector) {
  const el = document.querySelector(selector);
  if (!el) return;
  // Calculate the position taking into account the fixed navbar height
  const headerOffset = 80;
  const elementPosition = el.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.scrollY - headerOffset;
  
  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
  // If navigating to the contact section, focus the first input field
  if (selector === '#contact') {
    setTimeout(() => {
      const nameInput = document.getElementById('contact-form-name');
      if (nameInput) {
        nameInput.focus({ preventScroll: true });
      }
    }, 1200); // Increased timeout to ensure smooth scroll finishes before focusing
  }
}
