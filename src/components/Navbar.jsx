import { NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useState } from 'react';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [pipsyOpen, setPipsyOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* Sol: Ana Sayfa */}
        <div className="nav-left">
          <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} end>
            Ana Sayfa
          </NavLink>
        </div>

        {/* Orta: Oyunlar */}
        <div className="nav-center">
          <NavLink to="/dark-ninja" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Dark Ninja
          </NavLink>

          <div
            className="nav-dropdown"
            onMouseEnter={() => setPipsyOpen(true)}
            onMouseLeave={() => setPipsyOpen(false)}
          >
            <NavLink to="/pipsy" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Pipsy
            </NavLink>
            {pipsyOpen && (
              <div className="dropdown-menu">
                <NavLink
                  to="/pipsy/gizlilik-politikasi"
                  className={({ isActive }) => `dropdown-link ${isActive ? 'active' : ''}`}
                  onClick={() => setPipsyOpen(false)}
                >
                  Gizlilik Politikası
                </NavLink>
              </div>
            )}
          </div>

          <span className="nav-link" style={{ cursor: 'not-allowed', opacity: 0.6 }}>
            Thief <small>(Yakında)</small>
          </span>
        </div>

        {/* Sağ: Tema Toggle */}
        <div className="nav-right">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            <span className="theme-icon">{theme === 'dark' ? '☀️' : '🌙'}</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
