const renderHomeHeader = document.querySelector('.render-home-header');
renderHomeHeader.innerHTML = `
<div class="header header-home">
        <nav class="header-nav container">
          <button id="hamburger-toggle" class="header-hamburger-toggle" href="javascript:void(0);" class="icon" onclick="myFunction()">
          <a>
          <i class="fa fa-bars"></i>
        </a>
            <img
              src="./assets/shared/tablet/icon-hamburger.svg"
              alt="hamburger menu icon"
              class="header-hamburger"
            />
          </button>
          <a href="./index.html">
            <img
              src="./assets/shared/desktop/logo.svg"
              alt="audiophile logo"
              class="header-logo"
            />
          </a>
          <ul class="header-links">
            <li>
              <a href="./index.html" class="nav-link nav-link-current-page"
                >HOME</a
              >
            </li>
            <li>
              <a href="./headphones.html" class="nav-link">HEADPHONES</a>
            </li>
            <li>
              <a href="./speakers.html" class="nav-link">SPEAKERS</a>
            </li>

            <li>
              <a href="./earphones.html" class="nav-link">EARPHONES</a>
            </li>
          </ul>
          <a>
            <img
              src="./assets/shared/desktop/icon-cart.svg"
              alt="cart"
              id="cart"
            />
          </a>
        </nav>
        <span class="header-border container"></span>
        <section class="hero container">
          <div class="hero-text">
            <p class="header-title text-white hero-title">NEW PRODUCT</p>
            <h1 class="hero-h1 text-white">XX99 MARK II HEADPHONES</h1>
            <p class="text-white hero-p">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <a href="./product.html" class="btn btn-beige">SEE PRODUCT</a>
          </div>
        </section>
      </div>`;
