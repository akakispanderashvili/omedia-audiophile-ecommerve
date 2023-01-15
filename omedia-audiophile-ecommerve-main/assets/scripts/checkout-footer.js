const renderCheckoutFooter = document.querySelector('.render-checkout-footer');
renderCheckoutFooter.innerHTML = `<div class="footer">


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
          <a href="./index.html" class="nav-link">HOME</a>
        </li>
        <li>
          <a
            href="./headphones.html"
            class="nav-link"            >HEADPHONES</a
          >
        </li>
        <li>
          <a href="./speakers.html" class="nav-link">SPEAKERS</a>
        </li>
        <li>
          <a href="./earphones.html" class="nav-link">EARPHONES</a>
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