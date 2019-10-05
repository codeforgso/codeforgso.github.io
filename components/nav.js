import React, { useState } from "react";
import Link from "next/link";
import Logo from './logo';

const links = [
  { href: "/index", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/join", label: "Join Us" },
  { href: "/projects", label: "Our Projects" }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

function Nav() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Logo />
        <a
          role="button"
          className={`navbar-burger burger ${toggle && "is-active"} `}
          aria-label="menu"
          aria-expanded="false"
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>

      <div
        className={`navbar-menu ${toggle && "is-active"} `}
      >
        <div className="navbar-start">
          {links.map(({ href, label, key }) => (
            <Link href={href} key={key}>
              <a className="navbar-item">{label}</a>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
