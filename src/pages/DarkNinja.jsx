import './DarkNinja.css';

export default function DarkNinja() {
  return (
    <div className="game-page dark-ninja-page">
      {/* Hero Banner */}
      <section className="game-hero dark-ninja-hero">
        <div className="game-hero-overlay">
          <h1>Dark Ninja</h1>
          <p className="game-tagline">Karanlıkta gizlenen tehlikelere karşı savaş</p>
          <div className="game-meta">
            <span className="meta-badge">Windows</span>
            <span className="meta-badge">Aksiyon</span>
            <span className="meta-badge">Tek Oyunculu</span>
          </div>
        </div>
      </section>

      <section className="game-content">
        {/* ── Bilgi 1 ── */}
        <div className="game-description">
          <h2>Oyun Hakkında</h2>
          <p>
            Dark Ninja, karanlık ve gizemli bir dünyada geçen aksiyon dolu bir
            macera oyunudur. Antik bir ninja klanının son savaşçısı olarak,
            düşmanlarınızı alt etmek için tehlikeli görevlere çıkacaksınız.
          </p>
          <p>
            Bu benim bir arkadaşım ile beraber Unity'de geliştirdiğim ilk oyunum
            olduğu için biraz acemice olabilir ama öğrenerek elimizden geleni yaptık.
            Diğer oyunlarımız daha profesyonel olacak kuşkunuz olmasın. İyi oyunlar dilerim.
          </p>
        </div>

        {/* ── Ekran Görüntüleri 1-2 ── */}
        <div className="landscape-showcase">
          <div className="landscape-frame">
            <img src="/images/dark-ninja/screenshot-1.png" alt="Dark Ninja ekran görüntüsü 1" className="landscape-screenshot" />
          </div>
          <div className="landscape-frame">
            <img src="/images/dark-ninja/screenshot-2.png" alt="Dark Ninja ekran görüntüsü 2" className="landscape-screenshot" />
          </div>
        </div>

        {/* ── Bilgi 1 ── */}
        <div className="game-description">
          <h2>Oynanış</h2>
          <p>
            Oyunda karakterimizi yönlendirerek düşmanları alt etmemiz gerekiyor.
            "WASD" veya "yön tuşları" ile karakterimizi hareket ettirebiliriz. "shift"
            tuşuna basılı tutarak hızlıca koşabilirsin. Ek olarak "dash" özelliğini
            kullanmak için "A" veya "D" tuşuna basarken space tuşuna basman yeterli.
            hangi yöne gidiyorsan o yöne doğru dash atacaktır.
            sol tık ile kılıcımızla saldırı gerçekleştirebiliriz ama unutma art arda
            hızlıca saldırmak manamızı bitirebilir o yüzden doğru zamanı kolla.
            100 can ile başlıyoruz her bölüm can toplayabiliriz yine de dikkatli olman gerek.
          </p>
        </div>

        {/* ── Ekran Görüntüleri 3-4 ── */}
        <div className="landscape-showcase">
          <div className="landscape-frame">
            <img src="/images/dark-ninja/screenshot-3.png" alt="Dark Ninja ekran görüntüsü 3" className="landscape-screenshot" />
          </div>
          <div className="landscape-frame">
            <img src="/images/dark-ninja/screenshot-4.png" alt="Dark Ninja ekran görüntüsü 4" className="landscape-screenshot" />
          </div>
        </div>

        {/* ── Bilgi 3 ── */}
        <div className="game-description">
          <p>
            Oyun 5 levelden oluşuyor. Her levelde belli sayıda farklı düşmanlar çıkıyor. Son
            levelde ise boss ile karşılaşıp onu yenmemiz gerekiyor. Boss'un can barı ekranın
            en üst ortasında görünüyor. Ayrıca canı azalınca düşman çağırabiliyor.
            5 level haricinde sonsuz mod var, orada ise dayanabildiğin kadar dayanmaya çalış
            ve en yüksek skoru elde et!
          </p>
        </div>

        {/* ── Ekran Görüntüleri 5-6 ── */}
        <div className="landscape-showcase">
          <div className="landscape-frame">
            <img src="/images/dark-ninja/screenshot-5.png" alt="Dark Ninja ekran görüntüsü 5" className="landscape-screenshot" />
          </div>
          <div className="landscape-frame">
            <img src="/images/dark-ninja/screenshot-6.png" alt="Dark Ninja ekran görüntüsü 6" className="landscape-screenshot" />
          </div>
        </div>

        {/* Download */}
        <div className="download-section">
          <h2>İndir</h2>
          <p>Windows için hemen indirin ve maceraya başlayın!</p>
          <a href="/DarkNinja.zip" download className="download-btn windows-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
            </svg>
            Windows için İndir
          </a>
        </div>
      </section>
    </div>
  );
}
