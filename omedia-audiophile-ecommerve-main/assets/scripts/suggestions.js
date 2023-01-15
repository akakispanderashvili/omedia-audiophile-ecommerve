const renderSuggestions = document.querySelector('.render-suggestions');
renderSuggestions.innerHTML = `

<section class="suggestions container">
<h2 class="suggestions-h2">YOU MAY ALSO LIKE</h2>
<div class="suggestions-blocks">
  <div class="suggestions-block">
    <picture>
      <source
        media="(min-width: 1000px)"
        srcset="./assets/shared/desktop/image-zx7-speaker.jpg"
      />
      <source
        media="(min-width: 700px)"
        srcset="./assets/shared/tablet/image-zx7-speaker.jpg"
      />
      <img
        loading="lazy"
        src="./assets/shared/mobile/image-zx7-speaker.jpg"
        alt="ZX7 Speaker"
        class="suggestions-image"
      />
    </picture>
    <h3 class="suggestions-h3">ZX7 SPEAKER</h3>
    <a
      href="./product.html"
      class="btn btn-beige"
      data-link="product"
      data-item="zx7-speaker"
      data-name="zx7 speaker"
      >SEE PRODUCT</a
    >
  </div>
  <div class="suggestions-block">
    <picture>
      <source
        media="(min-width: 1000px)"
        srcset="
          ./assets/shared/desktop/image-xx99-mark-one-headphones.jpg
        "
      />
      <source
        media="(min-width: 700px)"
        srcset="
          ./assets/shared/tablet/image-xx99-mark-one-headphones.jpg
        "
      />
      <img
        loading="lazy"
        src="./assets/shared/mobile/image-xx99-mark-one-headphones.jpg"
        alt="XX99 Mark I"
        class="suggestions-image"
      />
    </picture>
    <h3 class="suggestions-h3">XX99 MARK I</h3>
    <a
      href="./product.html"
      class="btn btn-beige"
      data-link="product"
      data-item="xx99-mark-one-headphones"
      data-name="xx99 mark i"
      >SEE PRODUCT</a
    >
  </div>
  <div class="suggestions-block">
    <picture>
      <source
        media="(min-width: 1000px)"
        srcset="./assets/shared/desktop/image-xx59-headphones.jpg"
      />
      <source
        media="(min-width: 700px)"
        srcset="./assets/shared/tablet/image-xx59-headphones.jpg"
      />
      <img
        loading="lazy"
        src="./assets/shared/mobile/image-xx59-headphones.jpg"
        alt="XX59"
        class="suggestions-image"
      />
    </picture>
    <h3 class="suggestions-h3">XX59</h3>
    <a
      href="./product.html"
      class="btn btn-beige"
      data-link="product"
      data-item="xx59-headphones"
      data-name="xx59"
      >SEE PRODUCT</a
    >
  </div>
</div>
</section>
`;

