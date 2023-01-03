<template>
  <body>
    <NavbarView />
    <!-- TODO: Filtering Component -->
    <!-- TODO: Filtering Component -->
    <!-- TODO: Filtering Component -->
    <details class="custom-select">
      <summary class="radios">
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
    <!-- TODO: Filtering Component -->
    <!-- TODO: Filtering Component -->
    <!-- TODO: Filtering Component -->
    <section>
      <!-- <h1 class="products_text">Products page</h1> -->
      <h2 class="products_text">{{ this.$route.params.products.toUpperCase() }}</h2>
      <div class="main">
        <div class="card_container">
          <!-- to={`/${category}/${p.id}`} -->
          <router-link class="router-card" to="/products/id">
            <div class="card" v-for="category in categoryList" :key="category.id" value="category.id">
              <img alt="Avatar" class="products_image" :src="category.image" />
              <div class="container">
                <h4>
                  <b>{{ category.name }}</b>
                </h4>
                <p>{{ category.price }}$</p>
              </div>
            </div>
          </router-link>
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
    };
  },

  watch: {
    $route: "performApiCall",
  },

  created() {
    this.performApiCall();
  },

  //TODO: Add active render
  methods: {
    async performApiCall() {
      let param = this.$route.params;
      this.$appAxios.get(`/products?category=${param.products}`).then((category_response) => {
        this.categoryList = category_response?.data || [];
        console.log(category_response.data);
        console.log(this.$route.params.products);
      });
    },
  },
};
</script>

<style>
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

.custom-select {
  margin-top: 15px;
  margin-left: 5%;
}

.container {
  padding: 2px 16px;
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
