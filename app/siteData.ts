// Central place for placeholder content, contact details, and links.
// Replace the placeholder values below with your real information.

export const site = {
  name: "Abdul Rehman",
  initials: "AR",
  role: "Meta Ads & Google Ads Specialist",
  tagline: "Paid Ads & Lead Gen Specialist", // shown under the logo wordmark
  email: "hello@example.com", // TODO: replace with your real email
  bookCallSubject: "Free 20-min strategy call",
  linkedin: "https://www.linkedin.com/in/your-profile", // TODO
  instagram: "https://www.instagram.com/your-profile", // TODO
  capacityNote: "Taking on 2 new clients this month", // TODO: update monthly
};

export const mailtoHref = `mailto:${site.email}?subject=${encodeURIComponent(
  site.bookCallSubject
)}`;
