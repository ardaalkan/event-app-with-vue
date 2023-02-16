<template>
  <body>
    <NavbarView />
    <div class="products-filter-container">
      <label class="selected">
        <select v-model="selected">
          <option value="">All Sizes</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
        </select>
      </label>
      <label class="selected">
        <select v-model="pricesSelected">
          <option value="">All Prices</option>
          <option value="Low to High">Price low to high</option>
          <option value="High to Low">Price high to low</option>
        </select>
      </label>
      <!-- <div class="products-filter" v-if="selected">
          <p>Selected :</p>
          <span class="filtered-selected-size">{{ selected }}</span>
        </div>
        <div class="products-filter" v-if="pricesSelected">
          <p>Prices Selected :</p>
          <span class="filtered-selected-size">{{ pricesSelected }}</span>
        </div> -->
    </div>
    <section>
      <div class="product-item-count">
        <h2 class="products-text">
          {{ this.$route.params.products.toUpperCase() }}<span>/&nbsp;{{ this.filtered.length }} Item Exists</span>
        </h2>
      </div>
      <div class="main">
        <div class="card_container" v-if="this.filtered.length">
          <div class="card" v-for="category in filtered" :key="category.id" :value="category.id">
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
        <div class="empty-container-text" v-else>{{ this.$route.params.products }} Sizes Doesnt Exists.</div>
      </div>
    </section>
    <FooterView />
  </body>
</template>

<script>
export default {
  data() {
    return {
      categoryList: [],
      selected: "",
      pricesSelected: "",
    };
  },
  components: {},
  watch: {
    $route: "performApiCall",
    selected: "performApiCall",
    pricesSelected: "performApiCall",
  },
  created() {
    this.performApiCall();
  },
  methods: {
    async performApiCall() {
      let param = this.$route.params;
      this.$appAxios.get(`/products?category=${param.products}`).then((category_response) => {
        this.categoryList = category_response?.data || [];
        // console.log(this.categoryList.map(item => item.name));
        // console.log(JSON.parse(JSON.stringify(...this.categoryList)));
        // console.log(category_response?.data, "category-response");
      });
    },
  },
  computed: {
    filteredList() {
      return JSON.parse(JSON.stringify(this.categoryList)).filter((item) => {
        // console.log(JSON.parse(JSON.stringify(this.categoryList)), "catch");
        return item.skus.some((sku) => sku.size === parseInt(this.selected));
      });
    },
    pricesList() {
      const list = JSON.parse(JSON.stringify(this.categoryList));
      // console.log(...list, "New List");
      // console.log(JSON.parse(JSON.stringify(this.categoryList)), "catch");
      if (this.pricesSelected === "High to Low") {
        return [...list.sort((a, b) => b.price - a.price)];
      }
      if (this.pricesSelected === "Low to High") {
        return [...list.sort((a, b) => a.price - b.price)];
      } else return list;
    },
    filtered() {
      if (!this.selected && !this.pricesSelected) {
        // console.log(this.categoryList, "Filtered Categorylist - !this.selected");
        return this.categoryList;
      } else if (this.selected && this.pricesSelected) {
        let filteredList = JSON.parse(JSON.stringify(this.categoryList)).filter((item) => {
          return item.skus.some((sku) => sku.size === parseInt(this.selected));
        });
        if (this.pricesSelected === "High to Low") {
          filteredList = filteredList.sort((a, b) => b.price - a.price);
        } else if (this.pricesSelected === "Low to High") {
          filteredList = filteredList.sort((a, b) => a.price - b.price);
        }
        return filteredList;
      } else if (this.selected) {
        return this.filteredList;
      } else if (this.pricesSelected) {
        // console.log(this.pricesList, "Filtered Prices Selected!");
        return this.pricesList;
      } else {
        // console.log(this.categoryList, "Filtered Categorylist Else Cond");
        return this.categoryList;
      }
    },
  },
};
</script>

<style>
body {
  height: 100%;
  width: 100%;
}

.empty-container-text {
  padding-top: 30px;
  font-size: 30px;
}

.empty-container-text::first-letter {
  text-transform: capitalize;
}

.products-filter-container {
  display: flex;
  flex-direction: row;
  background-color: rgb(241, 241, 241);
  padding: 20px;
  margin-top: 15px;
  margin-left: 5%;
  align-items: end;
}

.products-filter-container select {
  margin-right: 10px;
  border: 1px solid #dfdfdf;
  padding-left: 25px;
  padding-right: 25px;
}

.products-filter-container label {
  max-width: 190px;
}

.products-filter-container .products-filter {
  margin-right: 15px;
  padding: 5px;
  background-color: rgb(241, 241, 241);
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: larger;
  font-weight: 400;
}

.products-filter p {
  padding-right: 5px;
  padding-top: 5px;
  font-size: 15px;
  display: flex;
  align-items: end;
}

.filtered-selected-size {
  display: flex;
  flex-direction: column;
  background-color: transparent;
  max-width: 1200px;
  max-height: 40px;
  justify-content: end;
  align-items: self-end;
  font-size: 15px;
}

.products-text {
  padding-top: 15px;
  margin-left: 5%;
}

.products-text span {
  font-size: 15;
  padding-left: 5px;
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

.selected {
  position: relative;
  display: inline-block;
}

.selected:before {
  content: "";
  height: 31px;
  position: absolute;
  right: 7px;
  top: 3px;
  width: 22px;
  background: #fff;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  pointer-events: none;
  display: block;
}
.selected:after {
  content: " ";
  position: absolute;
  right: 15px;
  top: 46%;
  margin-top: -3px;
  z-index: 2;
  pointer-events: none;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 6.9px 4px 0 4px;
  border-color: #aaa transparent transparent transparent;
  pointer-events: none;
}
.selected select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: 0 30px 0 10px;
  border: 1px solid #e0e0e0;
  border-radius: 3px;
  line-height: 36px;
  height: 36px;
  background: #fff;
  margin: 0 5px 5px 0;
}
select::-ms-expand {
  display: none;
}

@media screen and (max-width: 655px) {
  .card_container {
    justify-content: center;
  }
}
</style>
