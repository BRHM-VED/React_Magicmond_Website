import { useState } from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../../data/nav.data';
import { CALENDLY } from '../../utils/constants';

interface Props {
  /** Suffix shown after the wordmark, e.g. "InfraEdge" or "Sports". */
  suffix?: string;
  /** Route whose nav link should be highlighted. */
  activePath?: string;
}

export function Navbar({ suffix, activePath }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <header className={`nav${open ? ' open' : ''}`}>
      <div className="nav__inner">
        <Link className="nav__logo" to="/" onClick={() => setOpen(false)}>
          <img src="/assets/icons/logo-wand.svg" alt="MagicMond" />
          MagicMond{suffix ? <>&nbsp;<span className="font-normal opacity-95">{suffix}</span></> : null}
        </Link>
        <nav className="nav__links">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              className={`nav__link${activePath === l.to ? ' nav__link--active' : ''}`}
              to={l.to}
              onClick={() => setOpen(false)}
            >
              {l.label}
              {l.badge && <span className="badge">{l.badge}</span>}
            </Link>
          ))}
        </nav>
        <a className="btn btn--sm nav__cta" href={CALENDLY}>Get Started</a>
        <button className="nav__toggle" aria-label="Menu" onClick={() => setOpen((o) => !o)}>
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  );
}
