/* eslint-disable */
(($) => {
  'use strict';

  const classes = {
    style: 'custom-style',
    container: 'container',
    headerContainer: 'header-container',
    headerContent: 'header-content',
    logo: 'logo',
    logoImg: 'logo-img',
    logoText: 'logo-text',
    searchContainer: 'search-container',
    searchIcon: 'search-icon',
    productActions: 'product-actions',
    action: 'action',
    cart: 'cart',
    favs: 'favs',
    carouselContainer: 'carousel-container',
    inner: 'inner',
    swiper: 'swiper',
    firstSwiper: 'first-swiper',
    swiperWrapper: 'swiper-wrapper',
    swiperSlide: 'swiper-slide',
    swiperPagination: 'swiper-pagination',
    swiperButtonPrev: 'swiper-button-prev',
    swiperButtonNext: 'swiper-button-next',
    featureBox: 'feature-box',
    feature: 'feature',
    featureIcon: 'feature-icon',
    featureText: 'feature-text',
    secondText: 'second-text',
    featuredHeader: 'featured-header',
    customArrowGroup: 'custom-arrow-group',
    secondSwiperArrow: 'second-swiper-arrow',
    productCard: 'product-card',
    productImage: 'product-image',
    badge: 'badge',
    addfavBtn: 'addfav-btn',
    productBody: 'product-body',
    productInfo: 'product-info',
    productName: 'product-name',
    review: 'review',
    stars: 'stars',
    productPrice: 'product-price',
    addcartBtn: 'addcart-btn',
    mainProductsContent: 'main-products-content',
    productFilters: 'product-filters',
    filterActive: 'filter-active',
    productList: 'product-list',
    clientsHeader: 'clients-header',
    thirdSwiperArrow: 'third-swiper-arrow',
    clientsList: 'clients-list',
    clientCard: 'client-card',
    clientOpinion: 'client-opinion',
    clientInfo: 'client-info',
    footerContent: 'footer-content',
    aboutUs: 'about-us',
    contact: 'contact',
    contactInfos: 'contact-infos',
    email: 'email',
    phone: 'phone',
    github: 'github',
    linkedin: 'linkedin',
    cartPanel: 'cart-panel',
    cartPanelHeader: 'cart-panel-header',
    cartCloseBtn: 'cart-close-btn',
    cartPanelContent: 'cart-panel-content',
  };

  const selectors = {
    style: `.${classes.style}`,
    appendLocation: '#container', // Append location for the HTML - Don't change this.
    container: `.${classes.container}`,
    headerContainer: `.${classes.headerContainer}`,
    headerContent: `.${classes.headerContent}`,
    logo: `.${classes.logo}`,
    logoImg: `.${classes.logoImg}`,
    logoText: `.${classes.logoText}`,
    searchContainer: `.${classes.searchContainer}`,
    searchIcon: `.${classes.searchIcon}`,
    productActions: `.${classes.productActions}`,
    action: `.${classes.action}`,
    cart: `.${classes.cart}`,
    favs: `.${classes.favs}`,
    carouselContainer: `.${classes.carouselContainer}`,
    inner: `.${classes.inner}`,
    swiper: `.${classes.swiper}`,
    firstSwiper: `.${classes.firstSwiper}`,
    swiperWrapper: `.${classes.swiperWrapper}`,
    swiperSlide: `.${classes.swiperSlide}`,
    swiperPagination: `.${classes.swiperPagination}`,
    swiperButtonPrev: `.${classes.swiperButtonPrev}`,
    swiperButtonNext: `.${classes.swiperButtonNext}`,
    featureBox: `.${classes.featureBox}`,
    feature: `.${classes.feature}`,
    featureIcon: `.${classes.featureIcon}`,
    featureText: `.${classes.featureText}`,
    secondText: `.${classes.secondText}`,
    featuredHeader: `.${classes.featuredHeader}`,
    customArrowGroup: `.${classes.customArrowGroup}`,
    secondSwiperArrow: `.${classes.secondSwiperArrow}`,
    productCard: `.${classes.productCard}`,
    productImage: `.${classes.productImage}`,
    badge: `.${classes.badge}`,
    addfavBtn: `.${classes.addfavBtn}`,
    productBody: `.${classes.productBody}`,
    productInfo: `.${classes.productInfo}`,
    productName: `.${classes.productName}`,
    review: `.${classes.review}`,
    stars: `.${classes.stars}`,
    productPrice: `.${classes.productPrice}`,
    addcartBtn: `.${classes.addcartBtn}`,
    mainProductsContent: `.${classes.mainProductsContent}`,
    productFilters: `.${classes.productFilters}`,
    filterActive: `.${classes.filterActive}`,
    productList: `.${classes.productList}`,
    clientsHeader: `.${classes.clientsHeader}`,
    thirdSwiperArrow: `.${classes.thirdSwiperArrow}`,
    clientsList: `.${classes.clientsList}`,
    clientCard: `.${classes.clientCard}`,
    clientOpinion: `.${classes.clientOpinion}`,
    clientInfo: `.${classes.clientInfo}`,
    footerContent: `.${classes.footerContent}`,
    aboutUs: `.${classes.aboutUs}`,
    contact: `.${classes.contact}`,
    contactInfos: `.${classes.contactInfos}`,
    email: `.${classes.email}`,
    phone: `.${classes.phone}`,
    github: `.${classes.github}`,
    linkedin: `.${classes.linkedin}`,
    cartPanel: `.${classes.cartPanel}`,
    cartPanelHeader: `.${classes.cartPanelHeader}`,
    cartCloseBtn: `.${classes.cartCloseBtn}`,
    cartPanelContent: `.${classes.cartPanelContent}`,
    // id'ler için:
    featuredSection: '#featured-section',
    ourProducts: '#our-products',
    productCarousel: '#product-carousel',
    productListId: '#productList',
    clients: '#clients',
    footer: '#footer',
  };

  const self = {};

  self.init = () => {
    self.reset();
    self.addCDNLinks();
    self.buildCSS();
    self.buildHTML();
    self.setEvents();
    self.initSwipers();
    self.apiRequest();
  };

  self.reset = () => {
    $(selectors.style).remove();
    $(document).off('.eventListener');
  };

  //STYLES
  self.buildCSS = () => {
    const customStyle = `
            <style class="${classes.style}">
              #container {
                font-family: 'Inter', sans-serif;
                color: #000427;
              }

              #container h2{
                font-weight: 700;
                font-size: 1.4rem
              }

              #container h3{
                font-weight: 700;
                font-size: 1.2rem
              }

              #container header{
                position: sticky;
                top: 0;
                width: 100%;
                z-index: 3;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
              }

              .container {
                width: 100%;
                max-width: 1140px;
                margin: 0 auto;
              }

              .hover-effect {
                transition: all 0.3s ease;
                opacity: 0.6;
              }
              

              .header-container {
                background-color: #f0f2f3;
              }

              .header-content {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 12px 0;
              }

              .logo {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 10px;
                font-weight: 500;
                font-size: 1.8rem;
              }

              .logo i {
                color: #029fae;
              }

              .logo-img {
                width: 50px;
                height: auto;
              }

              .search-container {
                display: flex;
                justify-content: center;
                align-items: center;
                position: relative;
              }

              .search-container input {
                border: none;
                border-radius: 8px;
                background-color: #fff;
                padding: 10px;
                box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
                width: 300px;
                height: 40px;
              }

              .search-container .search-icon {
                position: absolute;
                top: 50%;
                right: 4px;
                transform: translate(-50%, -50%);
                background-color: #fff;
                border: none;
                cursor: pointer;
              }

              .product-actions {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 15px;
              }

              .product-actions .action {
                background-color: #fff;
                height: 40px;
                padding: 10px;
                border-radius: 8px;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 10px;
                box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
                cursor: pointer;
              }

              .product-actions .cart span {
                font-size: 0.9rem;
              }

              .product-actions .cart i {
                color: #029fae;
              }

              .product-actions .favs i {
                color: #029fae;
              }

              .carousel-container {
                height: 600px;
                background-color: #f0f2f3;
                border-radius: 0 0 50px 50px;
                margin: 0 auto;
                width: 90%;
                position: relative;
              }

              .carousel-container .inner {
                height: 100%;
              }

              .swiper {
                width: 100%;
                height: 100%;
              }

              .swiper-pagination {
                padding-bottom: 60px;
              }

              .feature-box {
                width: 100%;
                max-width: 1000px;
                position: absolute;
                bottom: -130px;
                left: 50%;
                transform: translate(-50%, -50%);
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #fff;
                box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
                padding: 30px 50px;
                gap: 30px;
              }

              .feature {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 10px;
              }

              .feature-icon {
                font-size: 2.3rem;
                color: #000a5a;
              }

              .feature-text {
                display: flex;
                justify-content: center;
                flex-direction: column;
                font-weight: 600;
              }

              .second-text {
                font-weight: 400;
                font-size: 0.7rem;
                color: #9a9caa;
              }

              #featured-section {
                margin-top: 120px;
              }

              #product-carousel .swiper-slide{
                display: flex;
                justify-content: center;
              }

              .featured-header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 35px;
              }

              .second-swiper-arrow {
                position: unset !important;
                width: 40px !important;
                height: 40px !important;
                border-radius: 50%;
                background-color: #f0f2f3;
              }

              .second-swiper-arrow::after {
                font-size: 1.5rem !important;
                color: #029fae;
              }

              .custom-arrow-group {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 15px;
              }

              .product-card {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                max-width: 250px;
                width: 100%;
                height: 500px;
                border: #e5e5e5 solid 1px;
                border-radius: 8px;
              }

              .product-image {
                position: relative;
                width: 100%;
                height: 250px;
                border-radius: 8px 8px 0 0;
                overflow: hidden;
                flex-shrink: 0;
                padding: 10px;
              }

              .product-image img {
                position: relative;
                object-fit: cover;
                width: 100%;
                height: 100%;
                border: #e5e5e5 solid 1px;
                border-radius: 10px;
              }

              .addfav-btn {
                display: flex;
                justify-content: center;
                align-items: center;
                position: absolute;
                top: 15px;
                right: 15px;
                background-color: #fff;
                border: none;
                padding: 10px;
                border-radius: 8px;
                box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
                cursor: pointer;
              }

              .addfav-btn i {
                font-size: 1.2rem;
              }

              .badge {
                position: absolute;
                top: 15px;
                left: 15px;
                border-radius: 5px;
                background-color: #01ad5a;
                color: white;
                font-size: 0.8rem;
                padding: 5px 10px;
              }

              .product-body {
                width: 100%;
                display: flex;
                flex-direction: column;
                padding: 20px 15px;
                border-radius: 0 0 8px 8px;
                gap: 10px;
                flex: 1;
                justify-content: space-between;
              }

              .product-info {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                gap: 10px;
                flex: 1;
                min-height: 120px;
              }

              .product-name {
                font-size: 1rem;
                font-weight: 600;
                line-height: 1.3;
                margin-bottom: 8px;
                height: 60px;
                overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
              }

              .review {
                display: flex;
                align-items: center;
                gap: 10px;
              }

              .review span {
                color: #9a9caa;
                font-size: 0.9rem;
              }

              .stars {
                color: #c0c0c0;
              }

              .product-price {
                font-size: 1.2rem;
                font-weight: 700;
                color: #029fae;
              }

              .addcart-btn {
                border: none;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 10px;
                border-radius: 8px;
                padding: 10px;
                background-color: #fff;
                font-size: 1.2rem;
                background-color: #029fae;
                color: #fff;
                cursor: pointer;
              }

              #our-products {
                margin-top: 120px;
              }

              .main-products-content {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
              }

              .product-filters {
                margin: 30px 0;
              }

              .product-filters ul {
                display: flex;
                align-items: center;
                justify-content: center;
                list-style-type: none;
                gap: 25px;
                color: #9a9caa;
              }

              .filter-active {
                position: relative;
                color: #000;
                font-size: 1.2rem;
              }

              .filter-active::after {
                content: '';
                position: absolute;
                left: -5%;
                bottom: -8px;
                width: 110%;
                height: 3px;
                background-color: #029fae;
              }

              .product-list {
                display: grid;
                grid-template-columns: repeat(auto-fit, 250px);
                width: 100%;
                gap: 30px;
                margin-bottom: 50px;
                justify-content: center;
              }

              #clients {
                padding: 80px 0;
                background-color: #f0f2f3;
              }

              .clients-list {
                margin-top: 60px;
              }

              .client-card {
                display: flex;
                flex-direction: column;
                justify-content: center;
                gap: 20px;
                background-color: #fff;
                padding: 30px;
                border-radius: 10px;
                box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
              }

              .client-opinion {
                display: flex;
                position: relative;
                padding-left: 20px;
              }

              .client-opinion::before {
                content: '';
                position: absolute;
                left: 0;
                top: 0;
                bottom: 0;
                width: 4px;
                background-color: #029fae;
                border-radius: 2px;
              }

              .client-info {
                padding-left: 20px;
                font-size: 1.2rem;
              }

              .third-swiper-arrow {
                position: unset !important;
                width: 40px !important;
                height: 40px !important;
                border-radius: 50%;
                background-color: #fff;
              }

              .third-swiper-arrow::after {
                font-size: 1.5rem !important;
                color: #029fae;
              }

              .clients-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
              }

              #footer {
                padding: 50px 0;
              }

              .footer-content {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
              }

              .about-us {
                display: flex;
                flex-direction: column;
                justify-content: center;
                gap: 20px;
              }

              .about-us p {
                color: #c0c0c0;
              }

              .contact {
                display: flex;
                flex-direction: column;
                justify-content: center;
                gap: 20px;
              }

              .contact-infos {
                display: flex;
                flex-direction: column;
                justify-content: center;
                gap: 15px;
              }

              .contact-infos a {
                text-decoration: none;
                color: #000427;
              }

              .contact-infos i {
                color: #029fae;
                margin-right: 10px;
              }

              .cart-panel {
                position: fixed;
                top: 0;
                right: 0;
                width: 350px;
                height: 100vh;
                background: #fff;
                box-shadow: -2px 0 16px rgba(0,0,0,0.08);
                z-index: 9999;
                transform: translateX(100%);
                transition: transform 0.3s cubic-bezier(.4,0,.2,1);
                display: flex;
                flex-direction: column;
              }

              .cart-panel.open {
                transform: translateX(0);
              }

              .cart-panel-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 20px;
                border-bottom: 1px solid #eee;
                font-size: 1.2rem;
                font-weight: 600;
              }

              .cart-close-btn {
                background: none;
                border: none;
                font-size: 2rem;
                color: #029fae;
                cursor: pointer;
              }

              .cart-panel-content {
                flex: 1;
                padding: 20px;
                overflow-y: auto;
              }

              @media (max-width: 1400px) {
                .container {
                  max-width: 950px;
                }
              }

              @media (max-width: 1200px) {
                .container {
                  max-width: 700px;
                }
              }

              @media (max-width: 1024px) {
                .container {
                  max-width: 540px;
                }
              }

              @media (max-width: 768px) {
                .container {
                  max-width: 540px;
                }
              }

            </style>
        `;
    $('head').append(customStyle);
  };

  //HTML
  self.buildHTML = () => {
    const html = `
    <header>
      <div class="${classes.headerContainer}">
        <div class="${classes.headerContent} ${classes.container}">
          <div class="${classes.logo}">
            <i class="fa-solid fa-shirt"></i>
            <span class="${classes.logoText}">Clothy</span>
          </div>
          <div class="${classes.searchContainer}">
            <input type="text" placeholder="Search here..." />
            <button class="${classes.searchIcon}">
              <svg
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
              >
                <path
                  d="M10.5833 17.4167C14.6334 17.4167 17.9167 14.1334 17.9167 10.0833C17.9167 6.03325 14.6334 2.75 10.5833 2.75C6.53325 2.75 3.25 6.03325 3.25 10.0833C3.25 14.1334 6.53325 17.4167 10.5833 17.4167Z"
                  stroke="#272343"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19.75 19.25L15.7625 15.2625"
                  stroke="#272343"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <div class="${classes.productActions}">
            <div class="${classes.action} ${classes.cart}">
              <i class="fa-solid fa-cart-shopping"></i>
              <span>Cart</span>
            </div>
            <div class="${classes.action} ${classes.favs}">
              <i class="fa-solid fa-heart"></i>
            </div>
          </div>
        </div>
      </div>
    </header>
    <main>
      <section id="carousel-section">
        <div class="${classes.carouselContainer}">
          <div class="${classes.inner} ${classes.container}">
            <!-- Slider main container -->
            <div class="${classes.swiper} ${classes.firstSwiper}">
              <!-- Additional required wrapper -->
              <div class="${classes.swiperWrapper}">
                <!-- Slides -->
                <div class="${classes.swiperSlide}">Slide 1</div>
                <div class="${classes.swiperSlide}">Slide 2</div>
                <div class="${classes.swiperSlide}">Slide 3</div>
                ...
              </div>
              <!-- If we need pagination -->
              <div class="${classes.swiperPagination}"></div>

              <!-- If we need navigation buttons -->
              <div class="${classes.swiperButtonPrev}"></div>
              <div class="${classes.swiperButtonNext}"></div>
            </div>
            <div class="${classes.featureBox}">
              <div class="${classes.feature}">
                <div class="${classes.featureIcon}">
                  <i class="fa-solid fa-percent"></i>
                </div>
                <div class="${classes.featureText}">
                  <p>Discount</p>
                  <p class="${classes.secondText}">Every week new sales</p>
                </div>
              </div>
              <div class="${classes.feature}">
                <div class="${classes.featureIcon}">
                  <i class="fa-solid fa-truck"></i>
                </div>
                <div class="${classes.featureText}">
                  <p>Free Delivery</p>
                  <p class="${classes.secondText}">100% Free for all orders</p>
                </div>
              </div>
              <div class="${classes.feature}">
                <div class="${classes.featureIcon}">
                  <i class="fa-regular fa-clock"></i>
                </div>
                <div class="${classes.featureText}">
                  <p>Great Support 24/7</p>
                  <p class="${classes.secondText}">We care your experiences</p>
                </div>
              </div>
              <div class="${classes.feature}">
                <div class="${classes.featureIcon}">
                  <i class="fa-solid fa-shield-halved"></i>
                </div>
                <div class="${classes.featureText}">
                  <p>Secure Payment</p>
                  <p class="${classes.secondText}">100% Secure Payment Method</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="featured-section">
        <div class="${classes.container}">
          <div class="${classes.featuredHeader}">
            <h2>Featured Products</h2>
            <!-- kaydırma butonları -->
            <div class="${classes.customArrowGroup}">
              <div class="${classes.secondSwiperArrow} swiper-button-prev"></div>
              <div class="${classes.secondSwiperArrow} swiper-button-next"></div>
            </div>
          </div>

          <div id="product-carousel">
            <div class="${classes.swiper} second-swiper">
              <!-- Additional required wrapper -->
              <div class="${classes.swiperWrapper}">
                <!-- ürün carouselindeki ürünler buraya gelecek -->           
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="our-products">
        <div class="${classes.container}">
          <div class="${classes.mainProductsContent}">
            <h2>Our Products</h2>

            <nav class="${classes.productFilters}">
              <ul>
                <li class="${classes.filterActive}">All</li>
                <li>Newest</li>
                <li>Trending</li>
              </ul>
            </nav>

            <div id="productList" class="${classes.productList}">
              <!--ürünler buraya gelecek-->
            </div>
          </div>
        </div>
      </section>

      <section id="clients">
        <div class="${classes.container}">
          <div class="${classes.clientsHeader}">
            <h2>What Client Says About Us</h2>
            <!-- kaydırma butonları -->
            <div class="${classes.customArrowGroup}">
              <div class="${classes.thirdSwiperArrow} swiper-button-prev"></div>
              <div class="${classes.thirdSwiperArrow} swiper-button-next"></div>
            </div>
          </div>
          <div class="${classes.clientsList}">
            <div class="${classes.swiper} third-swiper">
              <div class="${classes.swiperWrapper}">
                <div class="${classes.swiperSlide}">
                  <div class="${classes.clientCard}">
                    <div class="${classes.clientOpinion}">
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Itaque inventore repudiandae ad aspernatur quod
                        tempora tempore ipsa non reiciendis fugit eligendi,
                        obcaecati aut quasi, at error saepe voluptatem minus,
                        voluptatibus esse quam doloremque? Consequuntur pariatur
                        hic perferendis non sunt, quos, ut sapiente perspiciatis
                        nostrum ab neque quaerat illum magnam laborum. Nemo cum
                        inventore quam ducimus, odit ex modi consectetur iure,
                        corporis, ut nisi placeat nesciunt tenetur quas fugit.
                        Quo ipsam voluptatibus cumque amet repudiandae accusamus
                        labore tempora voluptas, reprehenderit suscipit itaque
                        quibusdam, fugit ex deleniti magni doloremque! Enim,
                        esse dicta! Natus molestiae ab officiis excepturi error
                        sapiente, officia saepe exercitationem!
                      </p>
                    </div>
                    <div class="${classes.clientInfo}">
                      <div class="client-first">Kristin</div>
                      <div class="client-second">Watson</div>
                    </div>
                  </div>
                </div>
                <div class="${classes.swiperSlide}">
                  <div class="${classes.clientCard}">
                    <div class="${classes.clientOpinion}">
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Itaque inventore repudiandae ad aspernatur quod
                        tempora tempore ipsa non reiciendis fugit eligendi,
                        obcaecati aut quasi, at error saepe voluptatem minus,
                        voluptatibus esse quam doloremque? Consequuntur pariatur
                        hic perferendis non sunt, quos, ut sapiente perspiciatis
                        nostrum ab neque quaerat illum magnam laborum. Nemo cum
                        inventore quam ducimus, odit ex modi consectetur iure,
                        corporis, ut nisi placeat nesciunt tenetur quas fugit.
                        Quo ipsam voluptatibus cumque amet repudiandae accusamus
                        labore tempora voluptas, reprehenderit suscipit itaque
                        quibusdam, fugit ex deleniti magni doloremque! Enim,
                        esse dicta! Natus molestiae ab officiis excepturi error
                        sapiente, officia saepe exercitationem!
                      </p>
                    </div>
                    <div class="${classes.clientInfo}">
                      <div class="client-first">Kristin</div>
                      <div class="client-second">Watson</div>
                    </div>
                  </div>
                </div>
                <div class="${classes.swiperSlide}">
                  <div class="${classes.clientCard}">
                    <div class="${classes.clientOpinion}">
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Itaque inventore repudiandae ad aspernatur quod
                        tempora tempore ipsa non reiciendis fugit eligendi,
                        obcaecati aut quasi, at error saepe voluptatem minus,
                        voluptatibus esse quam doloremque? Consequuntur pariatur
                        hic perferendis non sunt, quos, ut sapiente perspiciatis
                        nostrum ab neque quaerat illum magnam laborum. Nemo cum
                        inventore quam ducimus, odit ex modi consectetur iure,
                        corporis, ut nisi placeat nesciunt tenetur quas fugit.
                        Quo ipsam voluptatibus cumque amet repudiandae accusamus
                        labore tempora voluptas, reprehenderit suscipit itaque
                        quibusdam, fugit ex deleniti magni doloremque! Enim,
                        esse dicta! Natus molestiae ab officiis excepturi error
                        sapiente, officia saepe exercitationem!
                      </p>
                    </div>
                    <div class="${classes.clientInfo}">
                      <div class="client-first">Kristin</div>
                      <div class="client-second">Watson</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div id="cartPanel" class="${classes.cartPanel}">
        <div class="${classes.cartPanelHeader}">
          <span>My Cart</span>
          <button id="closeCart" class="${classes.cartCloseBtn}">&times;</button>
        </div>
        <div class="${classes.cartPanelContent}">
          <!-- Sepet ürünleri buraya gelecek -->
          <p>Your cart is empty.</p>
        </div>
      </div>
    </main>

    <footer id="footer">
      <div class="${classes.container} ${classes.footerContent}">
        <div class="${classes.aboutUs}">
          <h3>About Us</h3>
          <p>
            This Mini E-Commerce project made by Insider's CodeCraft Bootcamp
          </p>
        </div>
        <div class="${classes.contact}">
          <h3>Contact</h3>
          <div class="${classes.contactInfos}">
            <div class="${classes.email}">
              <i class="fa-solid fa-envelope"></i>
              <a href="mailto:irfannsubasi@gmail.com">irfannsubasi@gmail.com</a>
            </div>
            <div class="${classes.phone}">
              <i class="fa-solid fa-phone"></i>
              <a href="tel:+905312544351">+90 531 254 43 51</a>
            </div>
            <div class="${classes.github}">
              <i class="fa-brands fa-github"></i>
              <a target="_blank" href="https://github.com/irfansubasi"
                >Github</a
              >
            </div>
            <div class="${classes.linkedin}">
              <i class="fa-brands fa-linkedin"></i>
              <a target="_blank" href="https://www.linkedin.com/in/irfansubasi/"
                >Linkedin</a
              >
            </div>
          </div>
        </div>
      </div>
    </footer>`;
    $(selectors.appendLocation).append(html);
  };

  //CDN
  self.addCDNLinks = () => {
    const cssLinks = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
      'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css',
      'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css',
      'https://cdn.jsdelivr.net/npm/@fancyapps/ui@6.0/dist/fancybox/fancybox.css',
    ];

    //link ve preconnect ayrımı
    cssLinks.forEach((href) => {
      if (
        href.includes('fonts.googleapis.com') ||
        href.includes('fonts.gstatic.com')
      ) {
        if (
          !$('head link[rel="preconnect"]').filter(
            (_, link) => link.href === href
          ).length
        ) {
          const $link = $('<link>', {
            rel: 'preconnect',
            href: href,
            crossOrigin: href.includes('fonts.gstatic.com')
              ? 'anonymous'
              : undefined,
          });
          $('head').append($link);
        }
      } else {
        if (
          !$('head link[rel="stylesheet"]').filter(
            (_, link) => link.href === href
          ).length
        ) {
          const $link = $('<link>', {
            rel: 'stylesheet',
            href: href,
          });
          if (href.includes('font-awesome')) {
            $link.attr(
              'integrity',
              'sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=='
            );
            $link.attr('crossorigin', 'anonymous');
            $link.attr('referrerpolicy', 'no-referrer');
          }
          $('head').append($link);
        }
      }
    });

    const jsLinks = [
      //jquery codetour'da ekli olduğu için script'i eklemedim
      'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js',
      'https://cdn.jsdelivr.net/npm/@fancyapps/ui@6.0/dist/fancybox/fancybox.umd.js',
    ];
    jsLinks.forEach((src) => {
      if (!$('head script').filter((_, script) => script.src === src).length) {
        const $script = $('<script>', {
          src: src,
        });
        $('head').append($script);
      }
    });
  };

  //SWIPER
  self.initSwipers = () => {
    //First
    if (typeof Swiper !== 'undefined') {
      new Swiper(`.${classes.firstSwiper}`, {
        loop: true,
        pagination: {
          el: `.${classes.swiperPagination}`,
          clickable: true,
        },
        navigation: {
          nextEl: `.${classes.swiperButtonNext}`,
          prevEl: `.${classes.swiperButtonPrev}`,
        },
      });
      //Second
      new Swiper('.second-swiper', {
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
          nextEl: '.second-swiper-arrow.swiper-button-next',
          prevEl: '.second-swiper-arrow.swiper-button-prev',
        },
        breakpoints: {
          1400: { slidesPerView: 4 },
          1200: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          480: { slidesPerView: 1 },
        },
      });
      //Third
      new Swiper('.third-swiper', {
        slidesPerView: 2,
        spaceBetween: 30,
        navigation: {
          nextEl: '.third-swiper-arrow.swiper-button-next',
          prevEl: '.third-swiper-arrow.swiper-button-prev',
        },
        breakpoints: {
          1024: { slidesPerView: 2 },
          768: { slidesPerView: 1 },
        },
      });
    } else {
      // Swiper hemen yüklenmeyebiliyor. bı yüzden script yüklenince başlatıyorum eğer yüklenmemişse
      const swiperScript = $('script[src*="swiper-bundle.min.js"]');
      if (swiperScript.length) {
        swiperScript.on('load', () => self.initSwipers());
      }
    }
  };

  // Event listeners
  self.setEvents = () => {
    // Favorite cart event, etc.

    //hover
    $(
      `.${classes.cart}, .${classes.favs}, .${classes.addcartBtn}, .${classes.addfavBtn}, .${classes.contact} a, .${classes.swiperButtonNext}, .${classes.swiperButtonPrev}`
    )
      .mouseenter(function () {
        $(this).addClass('hover-effect');
      })
      .mouseleave(function () {
        $(this).removeClass('hover-effect');
      });
  };

  // Extra functions (localStorage, api requests, etc.)
  self.apiRequest = () => {
    $(document).ready(function () {
      //AJAX product api get
      $.ajax({
        url: 'https://fakestoreapi.com/products',
        method: 'GET',
        dataType: 'json',
      })
        .done(function (datas) {
          datas.forEach((data) => {
            const productCard = ` 
          <div class="${classes.productCard}">
            <div class="${classes.productImage}">
              <img src="${data.image}" alt="" />
              <span class="${classes.badge}">New</span>
              <button class="${classes.addfavBtn}">
                <i class="fa-regular fa-heart"></i>
              </button>
            </div>
            <div class="${classes.productBody}">
              <div class="${classes.productInfo}">
                <p class="${classes.productName}">${data.title}</p>
                <div class="${classes.review}">
                  <div class="${classes.stars}">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                  <span>(${data.rating.count})</span>
                </div>

                <p class="${classes.productPrice}">${data.price} ₺</p>
              </div>

              <button class="${classes.addcartBtn}">
                <i class="fa-solid fa-cart-plus"></i>
                <span>Add to Cart</span>
              </button>
            </div>
            </div>`;

            $('#productList').append(productCard);
          });

          const shuffleData = datas.sort(() => Math.random() - 0.5);
          const randomData = shuffleData.slice(0, 6);
          randomData.forEach((data) => {
            const productCard = `
            <div class="${classes.swiperSlide}">
              <div class="${classes.productCard}">
                <div class="${classes.productImage}">
                  <img src="${data.image}" alt="" />
                  <span class="${classes.badge}">New</span>
                  <button class="${classes.addfavBtn}">
                    <i class="fa-regular fa-heart"></i>
                  </button>
                </div>
                <div class="${classes.productBody}">
                  <div class="${classes.productInfo}">
                    <p class="${classes.productName}">${data.title}</p>
                    <div class="${classes.review}">
                      <div class="${classes.stars}">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                      </div>
                      <span>(${data.rating.count})</span>
                    </div>

                    <p class="${classes.productPrice}">${data.price} ₺</p>
                  </div>

                  <button class="${classes.addcartBtn}">
                    <i class="fa-solid fa-cart-plus"></i>
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>`;

            $('#product-carousel .swiper-wrapper').append(productCard);
          });
        })
        .fail(function (xhr, status, error) {
          console.log(xhr, status, error);
        });
    });
  };

  $(document).ready(self.init);
})(jQuery);
