const renderHamburger = document.querySelector('.render-hamburger-toggle');
renderHamburger.innerHTML = `

<section
    id="is-open"
    class="categories categories-home container categories-nav nav-is-open"
>
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
</section>
`;


function myFunction() {
    var x = document.getElementById("is-open");
    var y = document.getElementById("hamburger"); {

        if (x.style.display === "flex") {
            x.style.display = "none";
            y.style.transform = "rotate(0deg)";


        } else {
            x.style.display = "flex";
            y.style.transform = "rotate(90deg)";
        }
    }
}
