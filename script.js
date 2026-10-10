// CHANGE THIS to the email address where you want customer quote requests.
const BUSINESS_EMAIL = 'YOUR_EMAIL@example.com';
const menuButton = document.getElementById('menuButton');
const navLinks = document.getElementById('navLinks');
menuButton.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.textContent = open ? '✕' : '☰';
});
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuButton.setAttribute('aria-expanded','false');
  menuButton.textContent = '☰';
}));
document.getElementById('year').textContent = new Date().getFullYear();
document.querySelectorAll('[data-service]').forEach(link => link.addEventListener('click', () => {
  document.getElementById('service').value = link.dataset.service === 'Custom App or Branding' ? 'Web App / Business Tool' : link.dataset.service;
}));
document.getElementById('quoteForm').addEventListener('submit', function(event){
  event.preventDefault();
  const status = document.getElementById('formStatus');
  if (BUSINESS_EMAIL === 'YOUR_EMAIL@example.com') {
    status.textContent = 'Site owner: set BUSINESS_EMAIL in script.js to receive quote requests.';
    return;
  }
  const value = id => document.getElementById(id).value.trim();
  const subject = `Apex SiteForge Quote Request — ${value('service')}`;
  const body = `Name: ${value('name')}\nEmail: ${value('email')}\nBusiness: ${value('business') || 'Not provided'}\nService: ${value('service')}\n\nProject details:\n${value('details') || 'Please contact me to discuss my project.'}`;
  const url = `mailto:${encodeURIComponent(BUSINESS_EMAIL)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  status.textContent = 'Opening your email app. Please press Send to complete your request.';
  window.location.href = url;
});
