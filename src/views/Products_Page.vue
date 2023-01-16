<template>
  <body>
    <NavbarView />
    <!-- TODO: Filtering Component -->
    <!-- TODO: Filtering Component -->
    <!-- TODO: Filtering Component -->
    <!-- <div class="products-filter-container">
      <span> Selected: {{ selected }}</span>
      <select v-model="selected">
        <option value="">Please select one</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
      </select>
    </div> -->
    <!-- TODO: Filtering Component -->
    <!-- TODO: Filtering Component -->
    <!-- TODO: Filtering Component -->
    <section>
      <div class="product-item-count">
        <h2 class="products-text">
          {{ this.$route.params.products.toUpperCase() }}<span>/&nbsp;{{ this.categoryList?.length }} Item Exists</span>
        </h2>
      </div>
      <div class="main">
        <div class="card_container">
          <div class="card" v-for="category in categoryList" :key="category.id" value="category.id">
            <router-link :to="`/${this.$route.params.products}/${category.id}`" class="router-card" name="Detail">
              <img alt="Avatar" class="products_image" :src="category.image" />
              <div class="container">
                <h4>
                  <b class="container-category-name">{{ category.name }}</b>
                </h4>
                <p class="container-category-price">{{ category.price }}$</p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </body>
</template>

<script>
export default {
  data() {
    return {
      categoryList: [],
      selected: "",
    };
  },

  watch: {
    $route: "performApiCall",
  },

  created() {
    this.performApiCall();
  },

  methods: {
    async performApiCall() {
      let param = this.$route.params;
      this.$appAxios.get(`/products?category=${param.products}`).then((category_response) => {
        this.categoryList = category_response?.data || [];
        console.log(JSON.parse(JSON.stringify(...this.categoryList)), "product-page");
      });
    },
  },

  computed: {
    filtered() {
      return this.categoryList.filter((item) => item.skus === this.selected);
    },
  },
};
</script>

<style>
body {
  height: 100%;
}

.products-filter-container {
  display: flex;
  flex-direction: row;
}

.products-text {
  padding-top: 15px;
  margin-left: 5%;
}

.products-text span {
  font-size: 15;
  padding-left: 12px;
  color: #5f5f5f;
  font-weight: 400;
}

.products-item-count {
  display: flex;
  margin-top: 150px;
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

.card img {
  margin-bottom: 10px;
}

.products_image {
  margin: 0;
  display: block;
  width: 100%;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  filter: contrast(0.85);
}

.custom-select {
  margin-top: 15px;
  margin-left: 5%;
}

.container {
  width: 300px;
  height: 55px;
  padding: 2px 16px;
  display: flex;
  flex-direction: column;
  color: rgb(49, 49, 49);
}

details {
  position: relative;
  width: 300px;
  margin-right: 1rem;
}

details[open] {
  z-index: 1;
}

summary {
  padding: 1rem;
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

summary.radios {
  counter-reset: radios;
}

summary.radios:before {
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
</style>
