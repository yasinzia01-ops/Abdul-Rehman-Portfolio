import Link from "next/link";
import { bookCallHref } from "../siteData";
import Logo from "./Logo";

export default function Nav() {
  return (
    <header className="nav">
      <a href="#content" className="skipLink">
        Skip to content
      </a>
      <div className="nav__inner">
        <Link href="/#top" className="nav__logo">
          <Logo />
        </Link>
        <nav className="nav__links" aria-label="Primary">
          <Link href="/#work">Work</Link>
          <Link href="/#case-studies">Case Study</Link>
          <Link href="/#about">About</Link>
          <Link href="/#faq">FAQ</Link>
        </nav>
        <a
          href={bookCallHref}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--primary btn--small"
        >
          Book a Free Call
        </a>
      </div>
    </header>
  );
}
