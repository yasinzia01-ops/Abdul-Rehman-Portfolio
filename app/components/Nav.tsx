import { mailtoHref, site } from "../siteData";

export default function Nav() {
  return (
    <header className="nav">
      <a href="#content" className="skipLink">
        Skip to content
      </a>
      <div className="nav__inner">
        <a href="#top" className="nav__logo">
          {site.name}
        </a>
        <nav className="nav__links" aria-label="Primary">
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a href={mailtoHref} className="btn btn--primary btn--small">
          Book a Free Call
        </a>
      </div>
    </header>
  );
}
