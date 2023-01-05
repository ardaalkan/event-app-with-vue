<template>
  <NavbarView />
  <div>
    <h1 class="home_text">Home Page <span>E-Commerce</span></h1>
  </div>
  <FooterView />
</template>

<script></script>

<style>
.home_text {
  margin-left: 2rem;
  margin-top: 2rem;
  word-spacing: 2px;
  letter-spacing: 2px;
  font-weight: 500;
  font-size: x-large;
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

.blop-background-component {
  width: 50%;
  display: absolute;
  z-index: -1;
}

img {
  max-width: 100%;
  display: block;
}

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
