// Central place for placeholder content, contact details, and links.
// Replace the placeholder values below with your real information.

export const site = {
  name: "Hamza",
  initials: "H",
  role: "Meta Ads & Google Ads Specialist",
  tagline: "Paid Ads & Lead Gen Specialist", // shown under the logo wordmark
  email: "hamzaabdurrehman18@gmail.com",
  bookCallSubject: "Free 20-min strategy call",
  upwork: "https://www.upwork.com/freelancers/~01138f396ecb532772",
  calendly: "https://calendly.com/hamzaabdurrehman18/30min",
  capacityNote: "Taking on 2 new clients this month", // TODO: update monthly
};

export const mailtoHref = `mailto:${site.email}?subject=${encodeURIComponent(
  site.bookCallSubject
)}`;

// Used for every "Book a Free Call" button across the site.
export const bookCallHref = site.calendly;
