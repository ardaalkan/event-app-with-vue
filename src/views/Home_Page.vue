<template>
  <NavbarView />
  <h1 class="home_text">Home Page <span>E-Commerce</span></h1>
  <section class="hero-section">
    <div class="container-large relative">
      <div class="hero-content">
        <h2>Save your money <br />with us.</h2>
        <p>This site is created for demonstrative purposes only and does not offer any <br />real products or services..</p>
      </div>
      <div class="hero-image text-right">
        <img src="../assets/images-svg/header.svg" />
      </div>
    </div>
  </section>
  <section class="section-bg container-large">
    <div class="container-large">
      <div class="row">
        <div class="column">
          <img src="../assets/images-svg/section-1.svg" alt="We are the high level storage e-commerce" />
        </div>
        <div class="column flex-fill">
          <h2>We are the high level <br />storage e-commerce</h2>
          <p>This site is created for demonstrative purposes only and does not offer any real products or services.</p>
        </div>
      </div>
    </div>
  </section>
  <FooterView />
</template>

<script setup></script>

<style>
/* Section One */
.home_text {
  display: flex;
  flex-direction: columns;
  justify-content: center;
  padding: 40px;
  word-spacing: 2px;
  letter-spacing: 2px;
  font-weight: 500;
  font-size: 30px;
  font-family: "Montserrat", sans-serif;
}

.home_text span {
  padding-left: 10px;
}

.home_text span {
  color: rgb(0, 180, 60);
  font-weight: bold;
}
.home_img {
  height: 15rem;
  margin-left: 10px;
}

.container-large {
  max-width: 1024px;
  margin: 0 auto;
}

@media screen and (min-width: 1024px) {
  .hero-section {
    padding: 0.1rem 0;
    margin-bottom: 50px;
  }

  .hero-section .hero-image {
    padding-top: 80px;
    width: 100%;
    padding: 20px;
  }

  .hero-section .hero-content {
    max-width: 645px;
    font-size: 30px;
  }
  .hero-section .hero-content p {
    width: 380px;
    margin-bottom: 50px;
    font-size: 18px;
  }
  .hero-section .hero-content {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
}

.hero-section .hero-content p {
  color: #000000;
  font-size: 18px;
  font-weight: 500;
  line-height: 2;
}

.hero-content {
  padding: 20px;
}

.row {
  width: auto;
  display: flex;
  align-items: center;
}
/* Section One */

/* Section Two */
.section-bg {
  margin-top: 1rem;
  background-color: rgb(228, 255, 255);
  border-radius: 10px;
  margin-bottom: 80px;
}

.section-bg h2 {
  color: #212353;
  font-weight: 700;
  line-height: 52px;
  font-size: 40px;
  padding-left: 10px;
  margin-bottom: 40px;
}

.section-bg p {
  color: #485d68;
  font-size: 18px;
  font-weight: 500;
  padding-top: 10px;
  padding-left: 10px;
  line-height: 25px;
}

@media screen and (max-width: 600px) {
  .row {
    display: flex;
    flex-direction: column;
  }
  .hero-section {
    text-align-last: center;
  }
  .hero-section .hero-image {
    display: none;
  }
  .home_text {
    padding: 25px;
    font-size: 20px;
  }
  .hero-content {
    padding-left: 20px;
  }
}
/* Section Two */
</style>
