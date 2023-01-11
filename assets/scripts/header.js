function generateHeader(currentPage) {
  let title;
  if (currentPage === 'speakers') {
    title = 'SPEAKERS';
  } else if (currentPage === 'earphones') {
    title = 'EARPHONES';
  } else if (currentPage === 'headphones') {
    title = 'HEADPHONES';
  } else {
    title = 'AUDIOPHILE';
  }

  return `
      <div class="header header-category">
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
              <a href="./index.html" class="nav-link ${currentPage === 'home' ? 'nav-link-current-page' : ''}">HOME</a>
            </li>
            <li>
              <a href="./headphones.html" class="nav-link ${currentPage === 'headphones' ? 'nav-link-current-page' : ''}">HEADPHONES</a>
            </li>
            <li>
              <a href="./speakers.html" class="nav-link ${currentPage === 'speakers' ? 'nav-link-current-page' : ''}">SPEAKERS</a>
            </li>
            <li>
              <a href="./earphones.html" class="nav-link ${currentPage === 'earphones' ? 'nav-link-current-page' : ''}">EARPHONES</a>
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
        <section class="header-category-title">
          <h1 class="text-white header-category-header">${title} </h1>
        </section>
      </div>
    `;
}
