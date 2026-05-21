import './Pipsy.css';

export default function Pipsy() {
  return (
    <div className="game-page pipsy-page">
      {/* Hero Banner */}
      <section className="game-hero pipsy-hero">
        <div className="game-hero-overlay">
          <h1>Pipsy</h1>
          <p className="game-tagline">Renkli dünyada eğlenceli bir macera</p>
          <div className="game-meta">
            <span className="meta-badge">iOS</span>
            <span className="meta-badge">Android</span>
            <span className="meta-badge">Mobil</span>
          </div>
        </div>
      </section>

      {/* ── Bölüm 1: Oyun Hakkında ── */}
      <section className="game-content">
        <div className="game-description">
          <h2>Oyun Hakkında</h2>
          <p>
            Pipsy, göz yormayan renkler ile hazırlanmış neon temalı bir dünyada
            geçen eğlenceli bir gündelik ve arcade türünde bir oyundur. Tek
            parmakla oynanan kontrolleri ile aynı renkteki engellerden geçmeye
            ve giderek artan tempoya ayak uydurmaya çalışın. Bu oynanışı sayesinde
            her yaştan insana hitap eder.
          </p>
          <p>
            Oyunun minimalist tasarımı ve göz yormayan renkleri ile rahatlatıcı
            ama bir o kadar da eğlenceli bir oyun deneyimi sunar. Levelleri geç,
            yeni özelliklerin kilidini aç reflekslerini test et ve eğlen!
          </p>
        </div>

        {/* ── Ekran Görüntüleri 1-3 ── */}
        <div className="phone-showcase">
          <div className="phone-frame">
            <div className="phone-notch"></div>
            <div className="phone-screen">
              <img src="/images/pipsy/screenshot-1.jpg" alt="Pipsy oyun içi görüntü" className="phone-screenshot" />
            </div>
          </div>
          <div className="phone-frame">
            <div className="phone-notch"></div>
            <div className="phone-screen">
              <img src="/images/pipsy/screenshot-2.jpg" alt="Pipsy oyun içi görüntü" className="phone-screenshot" />
            </div>
          </div>
          <div className="phone-frame">
            <div className="phone-notch"></div>
            <div className="phone-screen">
              <img src="/images/pipsy/screenshot-3.jpg" alt="Pipsy oyun içi görüntü" className="phone-screenshot" />
            </div>
          </div>
        </div>

        {/* ── Bölüm 2: Oynanış ── */}
        <div className="game-description">
          <h2>Oynanış</h2>
          <p>
            Pipsy, ekrana tek tıklanarak oynanan bir 2D bir mobil oyundur. Oyunda pipsy;
            soldayken magenta, sağdayken turkuaz olmak üzere iki farklı renkte engellerden
            geçmeye çalışır. Bu engeller, her seviyenin başında rastgele üretilir.
            Pipsy'nin rengi ile farklı renkteki engellerden geçilmeye çalışılmamalıdır.
            Aksi halde oyun biter. Leveller geçtikçe hız artar ve oyunun zorluk
            seviyesi yükselir. Ayrıca her levelin topladığınız yıldıza göre geçilme başarısı
            bulunur. Yani 3 yıldızla bitirmeyi unutma!
          </p>
          <p>
            Oyunda 2 tür oynanış mevcuttur: sonsuz ve seviyeli. Sonsuz modda
            engeller sonsuza kadar devam eder. Amaç sadece en yüksek skoru
            elde etmektir. Seviyeli modda ise her bölümde rastgele üretilen
            engelleri geçmeye çalışırsınız. Oyunda şuanda 20 level mevcuttur.
            5. levelde power up güçlendirmesi, 10. levelde ise slow motion özelliği
            açılır.
          </p>
        </div>

        {/* ── Ekran Görüntüleri 4-6 ── */}
        <div className="phone-showcase">
          <div className="phone-frame">
            <div className="phone-notch"></div>
            <div className="phone-screen">
              <img src="/images/pipsy/screenshot-4.jpg" alt="Pipsy seviye görüntüsü" className="phone-screenshot" />
            </div>
          </div>
          <div className="phone-frame">
            <div className="phone-notch"></div>
            <div className="phone-screen">
              <img src="/images/pipsy/screenshot-5.jpg" alt="Pipsy seviye görüntüsü" className="phone-screenshot" />
            </div>
          </div>
          <div className="phone-frame">
            <div className="phone-notch"></div>
            <div className="phone-screen">
              <img src="/images/pipsy/screenshot-6.jpg" alt="Pipsy seviye görüntüsü" className="phone-screenshot" />
            </div>
          </div>
        </div>

        {/* ── Bölüm 4: özellikler ── */}
        <div className="game-description">
          <h3>Power Up</h3>
          <p>
            Bu özellik 5. levelde açılır ve bu özelliği kullanabilmek için
            ekranda gelen parlak elmas şeklindeki güçlendiriciyi yakalamanız gerekir.
            Bu özellik aktifken pipsy yeşil renge bürünür ve 5 saniye boyunca
            her renkteki engelden geçebilir.
          </p>
          <h3>Slow Motion</h3>
          <p>
            Bu özellik 10. levelde açılır ve bu özelliği kullanabilmek için
            ekranda gelen yavaş yavaş yanan kum saati şeklindeki güçlendiriciyi
            yakalamanız gerekir. Bu özellik aktifken zaman yavaşlar ve her şey
            5 saniye boyunca yarı yarıya yavaşlar. Bu sayede engellerin
            arasından daha rahat geçebilirsiniz.
          </p>
        </div>

        {/* ── Ekran Görüntüleri 7-8 ── */}
        <div className="phone-showcase">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="phone-frame">
              <div className="phone-notch"></div>
              <div className="phone-screen">
                <img src="/images/pipsy/screenshot-7.jpg" alt="Pipsy Power Up görüntüsü" className="phone-screenshot" />
              </div>
            </div>
            <div className="phone-label" style={{ color: 'var(--text-primary)', marginTop: '1rem', marginBottom: '0' }}>Power Up</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="phone-frame">
              <div className="phone-notch"></div>
              <div className="phone-screen">
                <img src="/images/pipsy/screenshot-8.jpg" alt="Pipsy Slow Motion görüntüsü" className="phone-screenshot" />
              </div>
            </div>
            <div className="phone-label" style={{ color: 'var(--text-primary)', marginTop: '1rem', marginBottom: '0' }}>Slow Motion</div>
          </div>
        </div>

        {/* ── İndir ── */}
        <div className="download-section">
          <h2>İndir</h2>
          <p>Hemen indirin ve eğlenceye katılın!</p>
          <div className="store-buttons">
            <a href="#" className="download-btn appstore-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              App Store
            </a>
            <a href="https://apps.apple.com/app/id6768647575" className="download-btn playstore-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              Google Play
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
