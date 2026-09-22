import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    'about',
    'skills',
    'experience',
    'projects',
    'services',
    'contact',
  ];

  return (
    <header className="navbar">
      <a
        className="brand"
        href="#top"
        onClick={() => setOpen(false)}
      >
        YM<span>.</span>
      </a>

      <button
        className="menu-btn"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <X /> : <Menu />}
      </button>

      <nav className={open ? 'nav-open' : ''}>
        {links.map((x) => (
          <a
            key={x}
            href={`#${x}`}
            onClick={() => setOpen(false)}
          >
            {x}
          </a>
        ))}

        <a
          className="nav-resume"
          href="/yogita-portfolio/resume.pdf"
          download
        >
          Download CV
        </a>
      </nav>
    </header>
  );
}