const renderCategories = document.querySelector('.render-categories');
renderCategories.innerHTML = `

<section class="categories categories-home container">
        <a href="./headphones.html" class="categories-card">
          <img
            src="./assets/shared/desktop/image-category-thumbnail-headphones.png"
            alt="headphones"
            class="categories-image"
          />
          <div class="categories-text-block">
            <p class="categories-h6">HEADPHONES</p>
            <div class="btn btn-shop">
              <p class="sub-title">SHOP</p>
              <img
                src="./assets/shared/desktop/icon-arrow-right.svg"
                alt="arrow right"
              />
            </div>
          </div>
        </a>
        <a href="./speakers.html" class="categories-card">
          <img
            src="./assets/shared/desktop/image-category-thumbnail-speakers.png"
            alt="headphones"
            class="categories-image"
          />
          <div class="categories-text-block">
            <p class="categories-h6">SPEAKERS</p>
            <div class="btn btn-shop">
              <p class="sub-title">SHOP</p>
              <img
                src="./assets/shared/desktop/icon-arrow-right.svg"
                alt="arrow right"
              />
            </div>
          </div>
        </a>
        <a href="./earphones.html" class="categories-card">
          <img
            src="./assets/shared/desktop/image-category-thumbnail-earphones.png"
            alt="headphones"
            class="categories-image"
          />
          <div class="categories-text-block">
            <p class="categories-h6">EARPHONES</p>
            <div class="btn btn-shop">
              <p class="sub-title">SHOP</p>
              <img
                src="./assets/shared/desktop/icon-arrow-right.svg"
                alt="arrow right"
              />
            </div>
          </div>
        </a>
      </section> `;
