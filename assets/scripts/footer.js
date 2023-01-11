function generateFooter(currentPage) {


  return `
<div class="footer">
<section class="footer-about-section">
  <div class="footer-about-container container">
    <picture class="footer-image-container">
      <source
        media="(min-width: 992px)"
        srcset="./assets/shared/desktop/image-best-gear.jpg"
      />
      <source
        media="(min-width: 768px)"
        srcset="./assets/shared/tablet/image-best-gear.jpg"
      />
      <img
        class="footer-image"
        src="./assets/shared/mobile/image-best-gear.jpg"
        alt="man with headphones"
      />
    </picture>
    <div class="footer-text-block">
      <h2 class="footer-h2">
        BRINGING YOU THE <span>BEST</span> AUDIO GEAR
      </h2>
      <p class="footer-p footer-p-about">
        Located at the heart of New York City, Audiophile is the premier
        store for high end headphones, earphones, speakers, and audio
        accessories. We have a large showroom and luxury demonstration
        rooms available for you to browse and experience a wide range of
        our products. Stop by our store to meet some of the fantastic
        people who make Audiophile the best place to buy your portable
        audio equipment.
      </p>
    </div>
  </div>
</section>

<section class="footer-info-section">
  <div class="footer-info-inner container">
    <div class="footer-nav container">
      <img
        src="./assets/shared/desktop/logo.svg"
        alt="audiophole"
        class="footer-logo"
      />
      <ul class="footer-links">
        <li>
          <a href="./index.html" class="nav-link ${currentPage === 'home' ? 'nav-link-current-page' : ''}">HOME</a>
        </li>
        <li>
          <a
            href="./headphones.html"
            class="nav-link ${currentPage === 'headphones' ? 'nav-link-current-page' : ''}"
            >HEADPHONES</a
          >
        </li>
        <li>
          <a href="./speakers.html" class="nav-link ${currentPage === 'speakers' ? 'nav-link-current-page' : ''}">SPEAKERS</a>
        </li>
        <li>
          <a href="./earphones.html" class="nav-link ${currentPage === 'earphones' ? 'nav-link-current-page' : ''}">EARPHONES</a>
        </li>
      </ul>
    </div>

    <div class="footer-info container">
      <p class="footer-p footer-p-info text-white">
        Audiophile is an all in one stop to fulfill your audio needs.
        We're a small team of music lovers and sound specialists who are
        devoted to helping you get the most out of personal audio. Come
        and visit our demo facility - we’re open 7 days a week.
      </p>
      <p class="footer-copyright text-white">
        Copyright 2021. All Rights Reserved
      </p>
      <ul class="footer-social">
        <li>
          <a href="https://www.facebook.com/" target="_blank">
            <img
              src="./assets/shared/desktop/icon-facebook.svg"
              alt="facebook"
              class="footer-icon"
            />
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com/" target="_blank">
            <img
              src="./assets/shared/desktop/icon-twitter.svg"
              alt="twitter"
              class="footer-icon"
          /></a>
        </li>
        <li>
          <a href="https://www.instagram.com/" target="_blank">
            <img
              src="./assets/shared/desktop/icon-instagram.svg"
              alt="instagram"
              class="footer-icon"
          /></a>
        </li>
      </ul>
    </div>
  </div>
</section>
</div>
`;
}


