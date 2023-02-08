<template>
  <NavbarView />
  <h1 class="product_detail_text">Product Detail</h1>
  <p class="product-router-info">
    PRODUCT / <span @click="goToProductDetails(this.$route.params.products)">{{ this.$route.params.products.toUpperCase() }}</span>
  </p>
  <div class="product_title" v-for="detail in detailList" :key="detail.id" value="detail.id">
    <img class="product-detail-image" :src="detail.image" />
    <div class="product_details_container">
      <h1>{{ detail.name }}</h1>
      <hr />
      <div class="product_details_title">
        <h2>{{ detail.description }}</h2>
        <p>Price : {{ detail.price }}$</p>
        <p class="free-shipping-container">Free shipping over 100 $</p>
      </div>
      <hr />
      <!-- <small>You must be logged in to see the size</small> -->
      <div class="detail-page-event-container">
        <div class="product-detail-event-buttons">
          <button
            class="product-detail-button"
            @click="saveCarts"
            :class="{
              'cart-item-active': alreadyInCart,
            }"
          >
            <img v-bind:src="svgContent1" width="30" height="30" />
            <span class="product-detail-button-text">Add basket</span>
          </button>
          <button
            class="product-detail-button"
            @click="saveFavorites"
            :class="{
              'favorite-item-active': alreadyInFav,
            }"
          >
            <img v-bind:src="svgContent" width="30" height="30" />
            <span class="product-detail-button-text">Favorite</span>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div>
    <!-- <small> Todo : Similar Products && SliderJs</small> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      detailList: null,
      svgContent: require("@/assets/images-svg/tick-heart.svg"),
      svg1: require("@/assets/images-svg/tick-heart.svg"),
      svg2: require("@/assets/images-svg/close-heart.svg"),
      svgContent1: require("@/assets/images-svg/tick-cart.svg"),
      svg3: require("@/assets/images-svg/tick-cart.svg"),
      svg4: require("@/assets/images-svg/close-cart.svg"),
    };
  },

  created() {
    this.detailPageApiCall();
  },

  methods: {
    detailPageApiCall() {
      let param = this.$route.params.id;
      let category = this.$route.params.products;
      this.$appAxios.get(`/products?id=${param}`).then((category_response) => {
        this.detailList = category_response?.data || [];
        console.log(category);
        // let arr = (this.arrayDetaillist = JSON.parse(JSON.stringify(this.detailList[0].id)));
        // console.log(arr, "hey");
        // console.log(arr[0].id);
        console.log(this.detailList[0].id);
      });
    },
    saveFavorites() {
      this.svgContent = this.svgContent === this.svg1 ? this.svg2 : this.svg1;
      const arr = (this.arrayDetaillist = JSON.parse(JSON.stringify(this.detailList[0].id)));
      let favorites = [...this._userFavorites];

      if (!this.alreadyInFav) {
        favorites = [...favorites, arr];
        this.$toast.success(`Added your favorite page...`);
      } else {
        favorites = favorites.filter((l) => l !== arr);
        this.$toast.info(`Removed from favorites page...`);
      }

      this.$appAxios.patch(`/users/${this._getCurrentUser.id}`, { favorites }).then((cart_response) => {
        console.log(cart_response);
        console.log(JSON.parse(JSON.stringify(this.detailList[0].id)), "this.arr");
        this.$store.commit("setFavorite", favorites);
      });
    },

    saveCarts() {
      this.svgContent1 = this.svgContent1 === this.svg3 ? this.svg4 : this.svg3;
      const arr = (this.arrayDetaillist = JSON.parse(JSON.stringify(this.detailList[0].id)));
      let carts = [...this._userCarts];

      if (!this.alreadyInCart) {
        carts = [...carts, arr];
        this.$toast.success(`Added your carts page...`);
      } else {
        carts = carts.filter((l) => l !== arr);
        this.$toast.info(`Removed from carts page...`);
      }

      this.$appAxios.patch(`/users/${this._getCurrentUser.id}`, { carts }).then((cart_response) => {
        console.log(cart_response);
        console.log(JSON.parse(JSON.stringify(this.detailList[0].id)), "this.arr");
        this.$store.commit("setCart", carts);
      });
    },
    goToProductDetails(products) {
      // console.log(products);
      this.$router.push({ name: "Products", params: { products: products } });
    },
  },

  computed: {
    ...mapGetters(["_getCurrentUser", "_userFavorites", "_userCarts"]),

    alreadyInFav() {
      console.log(JSON.parse(JSON.stringify(this.detailList[0].id)), "already in fav id");
      return this._userFavorites?.indexOf(JSON.parse(JSON.stringify(this.detailList[0].id))) > -1;
    },
    alreadyInCart() {
      console.log(JSON.parse(JSON.stringify(this.detailList[0].id)), "already in cart id");
      return this._userCarts?.indexOf(JSON.parse(JSON.stringify(this.detailList[0].id))) > -1;
    },
  },
};
</script>

<style>
hr {
  border: 1px solid #e9e9e9;
  margin-bottom: 25px;
}

.product_title {
  width: 85%;
  margin-left: 2rem;
  margin-top: 2rem;
  display: flex;
  margin: auto;
  justify-content: center;
  background-color: #ececec8e;
  border: 1px solid rgb(238, 238, 238);
}

.product-router-info {
  padding-left: 50px;
  padding-bottom: 10px;
  margin-left: 5%;
  font-size: 12px;
  cursor: pointer;
}

.product-router-info span:hover {
  text-decoration: underline;
}

@media screen and (max-width: 950px) {
  .product_title {
    width: 95%;
    margin-left: 2rem;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    margin: auto;
    align-items: center;
  }
  .product-router-info {
    padding-left: 10px;
    padding-bottom: 5px;
    margin-left: 1%;
    font-size: 10px;
  }
}

.product-detail-image {
  margin-left: 0;
  margin-right: 0;
  width: 50%;
  max-width: 500px;
  min-width: 400px;
  padding-right: 20px;
}

.product_detail_text {
  display: flex;
  padding-top: 55px;
  padding-bottom: 25px;
  margin-left: 5%;
  word-spacing: 2px;
  letter-spacing: 2px;
  font-weight: 500;
  font-size: x-large;
  padding-top: 15px;
  justify-content: center;
}

.product_details_container {
  width: 80%;
  display: flex;
  flex-direction: column;
}

@media screen and (max-width: 950px) {
  .product_details_container > h1 {
    width: 95%;
    margin-left: 2rem;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    margin: auto;
    align-items: center;
  }
}

.product_details_title {
  margin-top: 10px;
  margin-bottom: 20px;
}

.free-shipping-container {
  font-size: 12px;
}

@media screen and (max-width: 950px) {
  .product_details_title {
    width: 95%;
    margin-left: 2rem;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    margin: auto;
    align-items: center;
  }
}

.products_text {
  margin-left: 5%;
}

.card_container {
  display: flex;
  flex-wrap: wrap;
}

.router-card {
  display: flex;
  flex-wrap: wrap;
}

.main {
  margin-left: 5%;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 300px;
  margin-right: 50px;
  margin-top: 25px;
  cursor: pointer;
  background-color: rgb(250, 250, 250);
}

.products_image {
  margin: 0;
  display: block;
  width: 100%;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

/* .detail-page-event-container {
} */

@media screen and (max-width: 950px) {
  .detail-page-event-container {
    width: 95%;
    margin-left: 2rem;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    margin: auto;
    align-items: center;
    margin-bottom: 10px;
  }
}

.custom-select-detail-page {
  margin-top: 10px;
}

/* @media screen and (max-width: 950px) {
  .custom-select-detail-page {
    width: 95%;
    margin-left: 2rem;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    margin: auto;
    align-items: center;
  }
} */

.container {
  padding: 1px 1px;
}

.product-detail-event-buttons {
  display: flex;
  flex-direction: row;
}

.product-detail-button {
  margin-right: 10px;
  height: 55px;
  background-color: #364147;
  margin-top: 10px;
  padding-top: 5px;
  width: 135px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.favorite-item-active {
  background-color: rgb(0, 177, 0);
  transition: 0.15s;
}

.cart-item-active {
  background-color: rgb(57, 44, 175);
  transition: 0.15s;
}

/* .product-detail-button:hover {
  background-color: #303030ad;
} */

/* .product-detail-button:hover {
  height: 45px;
  padding: 5px;
  background-color: rgb(43, 43, 43);
  margin-top: 10px;
  padding-top: 5px;
  width: 12rem;
} */

.product-detail-button-text {
  width: 75px;
  color: rgb(255, 255, 255);
}

/* Section Component */
/* Section Component */
/* Section Component */
details {
  position: relative;
  width: 300px;
  margin-right: 1rem;
}

details[open] {
  z-index: 1;
}

summary {
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  background-color: #ddd;
  list-style: none;
}

summary::-webkit-details-marker {
  display: none;
}

details[open] summary:before {
  content: "";
  display: block;
  width: 100vw;
  height: 100vh;
  background: transparent;
  position: fixed;
  top: 0;
  left: 0;
}

summary:after {
  content: "";
  display: inline-block;
  float: right;
  width: 0.5rem;
  height: 0.5rem;
  border-bottom: 1px solid currentColor;
  border-left: 1px solid currentColor;
  border-bottom-left-radius: 2px;
  transform: rotate(45deg) translate(50%, 0%);
  transform-origin: center center;
  transition: transform ease-in-out 100ms;
}

summary:focus {
  outline: none;
}

details[open] summary:after {
  transform: rotate(-45deg) translate(0%, 0%);
}

ul {
  width: 100%;
  background: #ddd;
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 0;
  padding: 1rem;
  margin: 0;
  box-sizing: border-box;
  border-radius: 5px;
  max-height: 200px;
  overflow-y: auto;
}

li {
  margin: 0;
  padding: 1rem 0;
  border-bottom: 1px solid #ccc;
}

li:first-child {
  padding-top: 0;
}

li:last-child {
  padding-bottom: 0;
  border-bottom: none;
}

/* FAKE SELECT */
summary.detail-page-radios {
  counter-reset: radios;
}

summary.detail-page-radios:before {
  content: var(--selection);
}

input[type="radio"] {
  counter-increment: radios;
  appearance: none;
  display: none;
}

input[type="radio"]:checked {
  display: inline;
  --display: block;
}

input[type="radio"]:after {
  content: attr(title);
  display: inline;
  font-size: 1rem;
}

ul.list {
  counter-reset: labels;
}

label {
  width: 100%;
  display: flex;
  cursor: pointer;
  justify-content: space-between;
}

label span {
  --display: none;
  display: var(--display);
  width: 1rem;
  height: 1rem;
  border: 1px solid #727272;
  border-radius: 3px;
}
/* Section Component */
/* Section Component */
/* Section Component */
</style>
