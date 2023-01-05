<template>
  <NavbarView />
  <h1 class="product_detail_text">This is product detail page</h1>
  <div class="product_title">
    <img class="product-detail-image" src="../assets/shoe1.jpg" />
    <div class="product_details_container">
      <h1>Hiker</h1>
      <!-- <hr /> -->
      <div class="product_details_title">
        <h2>This rugged boot will get you up the mountain safely.</h2>
        <p>Price : $94.95</p>
      </div>
      <!-- <hr /> -->
      <small>You must be logged in to see the size</small>
      <details class="custom-select-detail-page">
        <summary class="detail-page-radios">
          <input type="radio" name="item" id="default" title="Filtering" checked />
          <input type="radio" name="item" id="item1" title="Item 1" />
          <input type="radio" name="item" id="item2" title="Item 2" />
          <input type="radio" name="item" id="item3" title="Item 3" />
          <input type="radio" name="item" id="item4" title="Item 4" />
          <input type="radio" name="item" id="item5" title="Item 5" />
        </summary>
        <ul class="list">
          <li>
            <label for="item1">
              Item 1
              <span></span>
            </label>
          </li>
          <li>
            <label for="item2">Item 2</label>
          </li>
          <li>
            <label for="item3">Item 3</label>
          </li>
          <li>
            <label for="item4">Item 4</label>
          </li>
          <li>
            <label for="item5">Item 5</label>
          </li>
        </ul>
      </details>
      <button class="product-detail-button">
        <span>Add basket</span>
      </button>
    </div>
  </div>
</template>
<!-- :to="`/${param.products}/${param.id}`" -->

<script>

// export default {
//   data() {
//     return {
//       categoryList: [],
//     };
//   },

//   created() {
//     this.detailPageApiCall();
//   },

//   methods: {
//     async detailPageApiCall() {
//       let param = this.$route.params;
//       this.$appAxios.get(`/products?category=${param.products}`).then((category_response) => {
//         this.categoryList = category_response?.data || [];
//         console.log(category_response.data);
//         console.log(this.$route.params.products);
//       });
//     },
//   },
// };

</script>

<style>
.product_title {
  width: 85%;
  margin-left: 2rem;
  margin-top: 2rem;
  display: flex;
  margin: auto;
  justify-content: center;
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
}

.product-detail-image {
  margin-left: 0;
  margin-right: 0;
  width: 60%;
  min-width: 100px;
  padding-right: 20px;
}

.product_detail_text {
  margin-left: 2rem;
  margin-top: 2rem;
  word-spacing: 2px;
  letter-spacing: 2px;
  font-weight: 500;
  font-size: x-large;
}

.product_details_container {
  width: 80%;
}

.product_details_title {
  margin-top: 10px;
  margin-bottom: 20px;
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

.custom-select-detail-page {
  margin-top: 10px;
}

.container {
  padding: 1px 1px;
}

.product-detail-button {
  justify-content: center;
  height: 45px;
  background-color: rgb(19, 19, 19);
  margin-top: 10px;
  padding-top: 5px;
  width: 135px;
  border-radius: 10px;
}

.product-detail-button:hover {
  background-color: #3d3d3d;
}

/* .product-detail-button:hover {
  height: 45px;
  padding: 5px;
  background-color: rgb(43, 43, 43);
  margin-top: 10px;
  padding-top: 5px;
  width: 12rem;
} */

.product-detail-button span {
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
