<template>
  <NavbarView />
  <div class="masonary_view">
    <h1 class="home_text">Home Page <span>E-Commerce</span></h1>
    <span class="blob-background-component">
      <!-- <svg width="1000" height="1000" viewBox="0 0 1000 1000">
        <defs>
          <filter id="grain" x="-50vw" y="-50vh" width="100vw" height="100vh">
            <feFlood flood-color="#ffffff" result="neutral-gray" />

            <feTurbulence in="neutral-gray" type="fractalNoise" baseFrequency="2.5" numOctaves="100" stitchTiles="stitch" result="noise" />

            <feColorMatrix in="noise" type="saturate" values="0" result="destaturatedNoise"></feColorMatrix>

            <feComponentTransfer in="desaturatedNoise" result="theNoise">
              <feFuncA type="table" tableValues="0 0 0.1 0"></feFuncA>
            </feComponentTransfer>

            <feBlend in="SourceGraphic" in2="theNoise" mode="soft-light" result="noisy-image" />
          </filter>

          <clipPath id="shape">
            <path
              fill="currentColor"
              d="M855,614.5Q773,729,677,845Q581,961,482,832Q383,703,259,668Q135,633,137,501Q139,369,240,297Q341,225,457.5,154Q574,83,651.5,195.5Q729,308,833,404Q937,500,855,614.5Z"
            ></path>
          </clipPath>
        </defs>

        <g filter="url(#grain)" clip-path="url(#shape)">
          <path
            fill="#e9fff6"
            d="M855,614.5Q773,729,677,845Q581,961,482,832Q383,703,259,668Q135,633,137,501Q139,369,240,297Q341,225,457.5,154Q574,83,651.5,195.5Q729,308,833,404Q937,500,855,614.5Z"
          />
        </g>
      </svg> -->
    </span>
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

.masonary_view {
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  margin: auto;
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
