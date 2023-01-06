<template>
  <NavbarView />
  <h1 class="home_text">Home Page <span>E-Commerce</span></h1>
  <section class="hero-section">
    <div class="container-large relative">
      <div class="hero-content ">
        <h2>Save your money with us.</h2>
        <p>This site is created for demonstrative purposes only and does not offer any real products or services..</p>
      </div>
      <div class="hero-image text-right">
        <img src="../assets/images-svg/header.svg" />
      </div>
    </div>
  </section>
  <FooterView />
</template>

<script></script>

<style>
.home_text {
  display: flex;
  flex-direction: columns;
  justify-content: center;
  padding: 40px;
  word-spacing: 2px;
  letter-spacing: 2px;
  font-weight: 500;
  font-size: x-large;
  font-family: "Montserrat", sans-serif;
}

.home_text span {
  padding-left: 10px;
}

.home_text span {
  color: rgb(0, 180, 60);
  font-weight: bold;
}
/* Vue: Slider and Grids */
.home_img {
  height: 15rem;
  margin-left: 10px;
}

.container-large {
  max-width: 1024px;
  margin: 0 auto;
}

@media screen and (min-width: 1024px) {
  .hero-section .hero-content {
    max-width: 600px;
  }
  .hero-section .hero-content p {
    width: 380px;
  }
  .hero-section .hero-content {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
}

.hero-section .hero-content h1 {
  font-size: 80px;
}

.hero-section .hero-content p {
  color: #4b5d68;
  font-size: 18px;
  font-weight: 500;
  line-height: 2;
}

/* img {
  max-width: 100%;
  display: block;
} */

figure {
  margin: 0;
  display: grid;
  grid-template-rows: 1fr auto;
}

figure > img {
  grid-row: 1 / -1;
  grid-column: 1;
}

figure a {
  color: black;
  text-decoration: none;
}

figcaption {
  grid-row: 2;
  grid-column: 1;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 0.2em 0.5em;
  justify-self: start;
}

.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: masonry;
  gap: 1px;
  max-width: 60%;
  margin-top: 15px;
}

.landscape {
  grid-column-end: span 2;
}
</style>
