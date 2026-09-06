import Logo from "./Logo";
import ContactForm from "./ContactForm";
import Header from "./Header";
import HeroVideo from "./HeroVideo";

export default function Home() {
  return (
    <main className="site">
      <Header />

      <section className="hero" id="top">
        <div className="hero-inner">
          <div className="eyebrow">
            <span></span>
            USS X SOLAR
          </div>

          <h1>
            Слънчева енергия, <em>изградена от</em>
            <br />
            хората, които я разбират.
          </h1>

          <p className="lead">
            Проектиране, доставка, монтаж и поддръжка на фотоволтаични
            системи за дома и бизнеса. Реални екипи, реални обекти,
            без посредници.
          </p>

          <div className="actions">
            <a href="#contact" className="primary-button">
              Поискай оферта
            </a>
            <a href="#projects" className="secondary-button">
              Нашите проекти ↓
            </a>
          </div>

          <div className="hero-media"><HeroVideo /></div>
</div>
</section>

      <section className="numbers">
        <div className="numbers-intro">
          <span className="section-label">Към днешна дата</span>
        </div>

        <div className="number">
          <strong>270+</strong>
          <span>реализирани централи</span>
        </div>

        <div className="number">
          <strong>2</strong>
          <span>екипа по 6 монтажници</span>
        </div>

        <div className="number">
          <strong>37</strong>
          <span>централи на поддръжка</span>
        </div>
      </section>

      <section className="services" id="services">
        <div className="section-title">
          <span className="section-label">Какво правим</span>
          <h2>Три направления. Един екип.</h2>
          <p>
            От първоначалния проект до сервиза след пускането на системата.
          </p>
        </div>

        <div className="cards">
          <article>
            <span className="card-tag">01</span>
            <h3>Изграждане на фотоволтаични централи</h3>
            <p>
              Проектиране и монтаж на покривни, наземни и индустриални
              системи.
            </p>
            <a href="#contact">Разгледайте →</a>
          </article>

          <article>
            <span className="card-tag">02</span>
            <h3>Доставка на оборудване</h3>
            <p>
              Панели, инвертори, батерии и монтажни конструкции от доказани
              производители.
            </p>
            <a href="#equipment">Разгледайте →</a>
          </article>

          <article>
            <span className="card-tag">03</span>
            <h3>Абонаментна поддръжка</h3>
            <p>
              Диагностика, профилактика и техническа поддръжка на
              фотоволтаични системи.
            </p>
            <a href="#contact">Разгледайте →</a>
          </article>
        </div>
      </section>

      <section className="projects" id="projects">
  <div className="gallery-divider">
    <span>РЕАЛИЗИРАНИ ОБЕКТИ</span>
  </div>

  <div className="gallery-heading">
    <h2>
      Реална работа.
      <br />
      <em>Реални обекти.</em>
    </h2>

    <p>
      Част от изградените от USS-X Solar фотоволтаични системи
      за жилищни, бизнес и индустриални обекти.
    </p>
  </div>

  <div className="project-gallery">
    <article className="gallery-card gallery-card-large">
      <div className="gallery-image gallery-image-1" style={{ backgroundImage: 'url(/gallery/large-roof.jpg)' }}>
        <span>01</span>
      </div>
      <div className="gallery-caption">
        <div>
          <small>Жилищни системи</small>
          <h3>Покривна фотоволтаична централа</h3>
        </div>
        <span className="gallery-arrow">↗</span>
      </div>
    </article>

    <article className="gallery-card">
      <div className="gallery-image gallery-image-2" style={{ backgroundImage: 'url(/gallery/red-tile-roof.jpg)' }}>
        <span>02</span>
      </div>
      <div className="gallery-caption">
        <div>
          <small>Хибридни решения</small>
          <h3>Панели, инвертор и батерии</h3>
        </div>
        <span className="gallery-arrow">↗</span>
      </div>
    </article>

    <article className="gallery-card">
      <div className="gallery-image gallery-image-3" style={{ backgroundImage: 'url(/gallery/mounting-structure.jpg)' }}>
        <span>03</span>
      </div>
      <div className="gallery-caption">
        <div>
          <small>Монтаж</small>
          <h3>Професионална покривна конструкция</h3>
        </div>
        <span className="gallery-arrow">↗</span>
      </div>
    </article>

    <article className="gallery-card">
      <div className="gallery-image gallery-image-4" style={{ backgroundImage: 'url(/gallery/batteries.jpg)' }}>
        <span>04</span>
      </div>
      <div className="gallery-caption">
        <div>
          <small>Оборудване</small>
          <h3>Инвертори и системи за съхранение</h3>
        </div>
        <span className="gallery-arrow">↗</span>
      </div>
    </article>

    <article className="gallery-card gallery-card-wide">
      <div className="gallery-image gallery-image-5" style={{ backgroundImage: 'url(/gallery/sea-project.jpg)' }}>
        <span>05</span>
      </div>
      <div className="gallery-caption">
        <div>
          <small>Реализиран проект</small>
          <h3>Фотоволтаична система край морето</h3>
        </div>
        <span className="gallery-arrow">↗</span>
      </div>
    </article>
  </div>
</section>

      <section className="equipment" id="equipment">
  <div className="equipment-divider"></div>

  <div className="equipment-inner">
    <div className="equipment-heading">
      <span className="equipment-kicker">— ПАРТНЬОРИ</span>
      <h2>Оборудване, на което разчитаме.</h2>
      <p>
        Работим с утвърдени производители на панели, инвертори
        и системи за съхранение на енергия.
      </p>
    </div>
  </div>

  <div className="brand-marquee">
    <div className="brand-track">
      <div className="brand-logo-item">
        <img src="/brands/deye.png" alt="Deye" />
      </div>
      <div className="brand-logo-item">
        <img src="/brands/jinko.png" alt="Jinko Solar" />
      </div>
      <div className="brand-logo-item">
        <img src="/brands/huawei.png" alt="Huawei Digital Power" />
      </div>

      <div className="brand-logo-item">
        <img src="/brands/deye.png" alt="Deye" />
      </div>
      <div className="brand-logo-item">
        <img src="/brands/jinko.png" alt="Jinko Solar" />
      </div>
      <div className="brand-logo-item">
        <img src="/brands/huawei.png" alt="Huawei Digital Power" />
      </div>
    </div>
  </div>
</section>

      <section className="why-note">
  <div className="why-note-line"></div>

  <div className="why-note-inner">
    <span>ЗАЩО USS-X?</span>

    <p>
      Защото една фотоволтаична система не приключва с монтажа.
      Искаме да знаем как работи, какво произвежда и че ще сме
      насреща и след пускането ѝ.
    </p>
  </div>
</section>
<section className="contact" id="contact">
        <div className="contact-copy">
          <span className="section-label">Контакти</span>
          <h2>Разкажете ни за вашия проект.</h2>
          <p>
            Ще се свържем с вас за уточняване на обекта и подходящото
            решение.
          </p>
        </div>

        <ContactForm />
      </section>

      <footer className="site-footer">
  <div className="footer-main">
    <div className="footer-brand-block">
      <a href="#top" className="footer-logo"><Logo footer /></a>

      <p>
        Проектиране, изграждане и поддръжка на
        фотоволтаични системи.
      </p>
    </div>

    <div className="footer-column">
      <span className="footer-title">Контакти</span>

      <a href="tel:+359878881815">0878 881 815</a>
      <a href="mailto:office@ussone.com">office@ussone.com</a>
      <span>Пловдив, ул. Христо Ботев 27А</span>
    </div>

    <div className="footer-column">
      <span className="footer-title">Навигация</span>

      <a href="#services">Услуги</a>
      <a href="#projects">Проекти</a>
      <a href="#equipment">Оборудване</a>
      <a href="#contact">Запитване</a>
    </div>

    <div className="footer-column footer-action">
      <span className="footer-title">Имате проект?</span>
      <p>Разкажете ни какво искате да изградите.</p>
      <a className="footer-cta" href="#contact">
        Изпрати запитване ↗
      </a>
    </div>
  </div>

  <div className="footer-bottom">
    <span>© 2026 USS-X Solar. Всички права запазени.</span>
    <a href="tel:+359878881815">0878 881 815</a>
  </div>
</footer>
    </main>
  );
}
