const renderCheckoutHeader = document.querySelector('.render-checkout-header');
renderCheckoutHeader.innerHTML = `    <div class="render-hamburger-toggle"></div>
<div class="header">
<nav class="header-nav container">

<button id="hamburger-toggle" class="header-hamburger-toggle" href="javascript:void(0);" class="icon" onclick="myFunction()">
<img
      src="./assets/shared/tablet/icon-hamburger.svg"
      alt="hamburger menu icon"
      class="header-hamburger"
      id="hamburger"
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
      <a href="./index.html" class="nav-link"
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
  <a href="#" class="header-cart" id="cart-link">
    <img
      src="./assets/shared/desktop/icon-cart.svg"
      alt="cart"
      id="cart"
    />
  </a>
</nav>

</div>
<script src="./assets/scripts/hamburger-toggle.js"></script>
`;
