import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-greeting">Merhaba, ben</span>
            <span className="hero-name">Cenk Aktaş</span>
          </h1>
          <p className="hero-subtitle">
            Bağımsız oyun geliştiricisi. Masaüstü ve mobil platformlarda
            eğlenceli oyun deneyimleri yaratıyorum.
          </p>
          <div className="hero-cta">
            <Link to="/dark-ninja" className="cta-btn primary">Dark Ninja</Link>
            <Link to="/pipsy" className="cta-btn secondary">Pipsy</Link>
          </div>
        </div>
      </section>

      {/* Game Cards */}
      <section className="games-section">
        <h2 className="section-title">Oyunlarım</h2>
        <div className="games-grid">
          {/* Dark Ninja Card */}
          <Link to="/dark-ninja" className="game-card">
            <div className="game-card-image dark-ninja-placeholder">
              <img src="/images/dark-ninja-cover.png" alt="Dark Ninja" className="game-cover-img" />
            </div>
            <div className="game-card-body">
              <h3>Dark Ninja</h3>
              <span className="platform-badge windows">Windows</span>
              <p>Karanlık bir dünyada hayatta kalmaya çalışan bir ninja olarak
                maceraya atılın.</p>
            </div>
          </Link>

          {/* Pipsy Card */}
          <Link to="/pipsy" className="game-card">
            <div className="game-card-image pipsy-placeholder">
              <img src="/images/pipsy-cover.png" alt="Pipsy" className="game-cover-img" />
            </div>
            <div className="game-card-body">
              <h3>Pipsy</h3>
              <div className="platform-badges">
                <span className="platform-badge ios">iOS</span>
                <span className="platform-badge android">Android</span>
              </div>
              <p>Sevimli karakterlerle dolu renkli bir dünyada eğlenceli bir
                mobil macera.</p>
            </div>
          </Link>

          {/* Thief Card */}
          <div className="game-card" style={{ cursor: 'default', opacity: 0.75 }}>
            <div className="game-card-image" style={{ background: 'linear-gradient(135deg, #2b2b2b, #111)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'rgba(255, 255, 255, 0.4)', textTransform: 'uppercase', letterSpacing: '2px' }}>Yakında</div>
            </div>
            <div className="game-card-body">
              <h3>Thief <span style={{ fontSize: '0.85rem', color: 'var(--accent)', marginLeft: '0.5rem', fontWeight: '600' }}>(Yakında)</span></h3>
              <p>Gizlilik ve stratejinin ön planda olduğu heyecan verici yepyeni bir macera çok yakında sizlerle.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
