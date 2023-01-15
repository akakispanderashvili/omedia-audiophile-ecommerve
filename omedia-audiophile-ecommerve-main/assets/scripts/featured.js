const renderFeatured = document.querySelector('.render-featured');
renderFeatured.innerHTML = `
<section class="featured-items container">
<div class="featured-items-card-beige featured-items-card">
  <picture class="featured-items-featured-image-container">
    <source
      media="(min-width: 992px)"
      srcset="./assets/home/desktop/image-speaker-zx9.png"
    />
    <source
      media="(min-width: 768px)"
      srcset="./assets/home/tablet/image-speaker-zx9.png"
    />
    <img
      src="./assets/home/mobile/image-speaker-zx9.png"
      alt="zx9 speaker"
      class="featured-items-featured-image"
    />
  </picture>
  <div class="featured-items-text-block">
    <h2 class="featured-items-h2 text-white">ZX9 SPEAKER</h2>
    <p class="text-white featured-items-p">
      Upgrade to premium speakers that are phenomenally built to deliver
      truly remarkable sound.
    </p>
    <a href="./product.html" class="btn btn-black">SEE PRODUCT</a>
  </div>
</div>

<div class="featured-items-card featured-items-card-grey">
  <picture>
    <source
      media="(min-width: 992px)"
      srcset="./assets/home/desktop/image-speaker-zx7.jpg"
    />
    <source
      media="(min-width: 768px)"
      srcset="./assets/home/tablet/image-speaker-zx7.jpg"
    />
    <img
      src="./assets/home/mobile/image-speaker-zx7.jpg"
      alt="zx7 speaker"
      class="featured-items-image"
    />
  </picture>
  <div class="featured-items-link">
    <h2 class="featured-items-h2-small">ZX7 SPEAKER</h2>
    <a href="./product.html" class="btn btn-transparent">SEE PRODUCT</a>
  </div>
</div>

<div class="featured-items-card featured-items-card-double">
  <div class="featured-items-card featured-items-card-small">
    <picture>
      <source
        media="(min-width: 992px)"
        srcset="./assets/home/desktop/image-earphones-yx1.jpg"
      />
      <source
        media="(min-width: 768px)"
        srcset="./assets/home/tablet/image-earphones-yx1.jpg"
      />
      <img
        src="./assets/home/mobile/image-earphones-yx1.jpg"
        alt="yx1 earphones"
        class="featured-items-image featured-item1"
      />
    </picture>
  </div>
  <div
    class="featured-items-card-small featured-items-card-small2 featured-items-card"
  >
    <div class="featured-items-link">
      <h2 class="featured-items-h2-small">YX1 EARPHONES</h2>
      <a href="./product.html" class="btn btn-transparent"
        >SEE PRODUCT</a
      >
    </div>
  </div>
</div>
</section>
`;
