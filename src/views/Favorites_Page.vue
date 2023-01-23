<template>
  <body>
    <NavbarView />
    <section class="favorite-section">
      <div class="favorite-container-item">
        <div class="favorite-item-iterate" v-if="favoriteList.length">
          <div class="card" v-for="favorite in favoriteList" :key="favorite.id" value="favorite.id">
            <img class="favorite-image" :src="favorite.image" alt="favorite-product" />
            <div class="favorite-container-descriptions">
              <h1>{{ favorite.category }}</h1>
              <p class="price">{{ favorite.price }}$</p>
              <p class="favorite-container-desc">{{ favorite.description }}</p>
              <p><button @click="removeFavorites(favorite)">Remove</button></p>
            </div>
          </div>
        </div>
        <div v-else class="empty-container-text">Favorite Item is Empty</div>
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
      let favorites = [...this._userFavorites];
      console.log(favorite.id, 'favorite-id')
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
      this.$router.go()
    },
  },
  computed: {
    ...mapGetters(["_getCurrentUser", "_userFavorites"]),

    alreadyInFav() {
      return this._userFavorites?.indexOf(JSON.parse(JSON.stringify(this.detailList[0].id))) > -1;
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

.favorite-item-iterate {
  display: flex;
  flex-direction: row;
  margin: auto;
  justify-content: center;
}

.favorite-container-descriptions {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.favorite-container-desc {
  padding: 10px;
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
