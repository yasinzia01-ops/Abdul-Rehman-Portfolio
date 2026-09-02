import { mailtoHref, site } from "../siteData";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="section__inner footer__inner">
        <a href="#top" className="footer__logo">
          <Logo />
        </a>
        <div className="footer__links">
          <a href={site.upwork} target="_blank" rel="noopener noreferrer">
            Upwork
          </a>
          <a href={mailtoHref}>{site.email}</a>
        </div>
        <p className="footer__copyright">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
