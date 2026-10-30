"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  ["About", "#about"],
  ["Expertise", "#expertise"],
  ["Work", "#work"],
  ["Enterprise", "#enterprise"],
  ["Global affairs", "#global"],
  ["Writing", "#writing"]
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={() => setOpen(false)}>
          <span className="brand-mark">SJ</span>
          <span>SHALOM JEREMIAH</span>
        </a>

        <div className={`nav-links ${open ? "is-open" : ""}`}>
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a className="nav-contact" href="#contact" onClick={() => setOpen(false)}>
            Let&apos;s connect <ArrowUpRight size={15} />
          </a>
        </div>

        <button
          className="menu-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>
    </header>
  );
}
