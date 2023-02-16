<template>
  <body>
    <NavbarView />
    <section class="favorite-section">
      <div class="favorite-container-item">
        <h1 class="favorite-text">Favorite Page</h1>
        <!-- <div class="favorite-counter">
          <p>{{ favoriteList.length }} <span>item in your favorite list</span></p>
        </div> -->
        <div v-if="favoriteList.length">
          <div class="favorite-filter-container">
            <label class="selected">
              <select v-model="pricesSelect">
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
            <!-- <label class="selected">
              <select v-model="productSelect">
                <option value="">All Products</option>
                <option value="Low to High">Shoes</option>
                <option value="High to Low">Backpacks</option>
              </select>
            </label> -->
          </div>
        </div>
        <div class="favorite-item-iterate" v-if="filtered.length">
          <div class="card" v-for="favorite in filtered" :key="favorite.id" value="favorite.id">
            <img class="favorite-image" :src="favorite.image" alt="favorite-product" @click="goToProductDetails(favorite)" />
            <div class="favorite-container-descriptions">
              <h1>{{ favorite.category }}</h1>
              <p class="price">{{ favorite.price }}$</p>
              <p class="favorite-container-desc">{{ favorite.description }}</p>
              <p>
                <button class="favorite-container-btn" @click="removeFavorites(favorite)">
                  <img v-bind:src="svgContent" width="30" height="30" /><span class="favorite-remove-text">Remove</span>
                </button>
              </p>
            </div>
          </div>
        </div>
        <div v-else class="empty-container-text">Favorite item does not exists.</div>
      </div>
    </section>
  </body>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      detailList: "",
      favoriteList: [],
      pricesSelect: "",
      productSelect: "",
      svgContent: require("@/assets/images-svg/full-heart.svg"),
      svg1: require("@/assets/images-svg/full-heart.svg"),
      svg2: require("@/assets/images-svg/empty-heart.svg"),
    };
  },

  created() {
    this.favoritesIds();
  },

  methods: {
    favoritesIds() {
      this.$appAxios.get(`users?username=${this._getCurrentUser.fullname}`).then((res) => {
        this.detailList = res?.data || [];
        let arr = (this.arrayDetaillist = JSON.parse(JSON.stringify(this.detailList[0].favorites)));
        console.log(arr, "favorite id");
        arr.map((arr) => {
          this.$appAxios.get(`/products?id=${arr}`).then((arr_response) => {
            arr_response.data.push(...this.favoriteList);
            this.favoriteList = arr_response?.data || [];
            // console.log(arr_response.data, "data");
            // console.log(arr_response, "arr_response_Here");
            // console.log(this.favoriteList.length, "favorite-list-length");
          });
        });
      });
    },
    removeFavorites(favorite) {
      this.svgContent = this.svgContent === this.svg1 ? this.svg2 : this.svg1;
      let favorites = [...this._userFavorites];
      console.log(favorite.id, "favorite-id");
      if (this._userFavorites.indexOf(favorite.id) > -1) {
        favorites = favorites.filter((l) => l !== favorite.id);
        this.$toast.info(`Removed from favorites page...`);
        this.$appAxios
          .patch(`/users/${this._getCurrentUser.id}`, { favorites })
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      }
      this.$store.commit("setFavorite", favorites);
      this.$router.go();
    },
    goToProductDetails(favorite) {
      this.$router.push({ name: "Detail", params: { products: favorite.category, id: favorite.id } });
    },
  },
  computed: {
    ...mapGetters(["_getCurrentUser", "_userFavorites"]),

    alreadyInFav() {
      return this._userFavorites?.indexOf(JSON.parse(JSON.stringify(this.detailList[0].id))) > -1;
    },

    filteredList() {
      return JSON.parse(JSON.stringify(this.favoriteList)).filter((item) => {
        // console.log(JSON.parse(JSON.stringify(this.favoriteList)), "catch");
        return item.skus.some((sku) => sku.size === parseInt(this.pricesSelect));
      });
    },

    // pricesList() {
    //   const list = JSON.parse(JSON.stringify(this.favoriteList));
    //   // console.log(...list, "New List");
    //   // console.log(JSON.parse(JSON.stringify(this.categoryList)), "catch");
    //   if (this.pricesSelected === "High to Low") {
    //     return [...list.sort((a, b) => b.price - a.price)];
    //   }
    //   if (this.pricesSelected === "Low to High") {
    //     return [...list.sort((a, b) => a.price - b.price)];
    //   } else return list;
    // },

    filtered() {
      if (!this.pricesSelect && !this.productSelect) {
        return this.favoriteList;
      } else {
        return this.filteredList;
      }
    },
  },
};
</script>

<style>
.favorite-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
  text-transform: capitalize;
}

.favorite-filter-container {
  display: flex;
  flex-direction: row;
  background-color: transparent;
  padding: 5px;
  margin-top: 15px;
  justify-content: center;
}

/* .favorite-filter-container select {
  margin-right: 10px;
  padding: 10px;
  border: 2px solid #c5c5c5;
  padding-left: 25px;
  padding-right: 25px;
} */

.favorite-filter-container label {
  max-width: 190px;
  margin-right: 10px;
}

.favorite-text {
  display: flex;
  justify-content: center;
  font-size: 30px;
  padding: 5px;
}

.favorite-counter {
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: rgb(245, 245, 245);
  padding: 10px;
}

.favorite-item-iterate {
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: auto;
  justify-content: center;
}

@media screen and (max-width: 945px) {
  .favorite-item-iterate {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
}

.favorite-container-descriptions {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.favorite-container-desc {
  padding: 10px;
}

.favorite-container-btn {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
}

.favorite-remove-text {
  align-self: center;
  padding-left: 10px;
}

.empty-container-text {
  padding: 50px;
  font-size: 30px;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 300px;
  text-align: center;
  font-family: "Montserrat", sans-serif;
}

.price {
  color: grey;
  font-size: 22px;
}

.card button {
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

.favorite-image {
  min-height: 350px;
  width: 300px;
  cursor: pointer;
}

.card button:hover {
  opacity: 0.7;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  filter: contrast(0.85);
  transition: 0.9s;
}

body {
  height: 100%;
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
body {
  width: 100%;
}
</style>
