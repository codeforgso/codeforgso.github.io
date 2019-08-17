import React, { useState } from 'react';
import Link from 'next/link';

const links = [
  { href: '/home', label: 'Home' },
  { href: '/about', label: 'About' },
].map((link) => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

function Nav() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        {/* <a className="navbar-item" href="https://bulma.io"> */}
        <a className="navbar-item" href="./">

          <img src="/static/cfg_logo_name.png" />
        </a>
        <a
          role="button"
          className={`navbar-burger burger ${toggle && 'is-active'} `}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
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
        id="navbarBasicExample"
        className={`navbar-menu ${toggle && 'is-active'} `}
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
