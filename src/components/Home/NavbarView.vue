<template>
  <div class="topnav">
    <img class="navbar-image" src="../../assets/png_logo.png" />
    <div class="router-link">
      <router-link to="/">Home</router-link>
    </div>
    <div class="router-link">
      <router-link to="/shoes">Shoes</router-link>
    </div>
    <div class="router-link">
      <router-link to="/backpacks">Backpacks</router-link>
    </div>
    <div class="router-link" v-if="_isAuthenticated">
      <router-link to="/cart">Cart</router-link>
    </div>
    <div class="router-link">
      <router-link to="/favorite" v-if="_isAuthenticated">Favorites</router-link>
    </div>
    <div class="router-link">
      <router-link to="/about">About</router-link>
    </div>

    <div class="router-link" v-if="_isAuthenticated">
      <a @click="onLogout">Logout</a>
    </div>
    <div class="router-link" v-else>
      <router-link to="/">Login</router-link>
    </div>
  </div>

  <!-- <div style="padding-left: 16px">
      <h2>Top Navigation Example</h2>
      <p>Some content..</p>
    </div> -->
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["_isAuthenticated"]),
  },
  methods: {
    onLogout() {
      this.$store.commit("logoutUser");
      this.$router.push({ name: "Login" });
    },
  },
};
</script>

<style>
body {
  margin: 0;
  font-family: "Montserrat", sans-serif;
}

.navbar-image {
  width: 95px;
  height: 95px;
  padding: 10px;
}

.topnav {
  background-color: #333;
  overflow: hidden;
  height: 6.5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  box-shadow: 0 4px 3px 0 rgba(0, 0, 0, 0.2);
}

/* Style the links inside the navigation bar */
.topnav a {
  border-radius: 5px;
  padding: 40px;
  align-items: center;
  float: left;
  color: #e4e4e4;
  text-align: center;
  text-decoration: none;
  font-size: 15px;
  display: flex;
  letter-spacing: 1px;
}

.router-link {
  border-radius: 5px;
  padding: 5px;
  align-items: center;
  float: left;
  color: #e4e4e4;
  text-align: center;
  text-decoration: none;
  font-size: 17px;
  display: flex;
  justify-content: center;
  letter-spacing: 1px;
  cursor: pointer;
  background-color: #333;
}

.router-link:hover {
  background-color: rgb(65, 65, 65);
}

@media screen and (max-width: 945px) {
  .topnav {
    background-color: #333;
    overflow: hidden;
    height: 6.5rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    box-shadow: 0 4px 3px 0 rgba(0, 0, 0, 0.2);
  }
  .topnav a {
    border-radius: 2px;
    padding: 5px;
    align-items: center;
    float: left;
    color: #e4e4e4;
    text-align: center;
    text-decoration: none;
    font-size: 15px;
    display: flex;
    letter-spacing: 1px;
  }
  .navbar-image {
    width: 85px;
    height: 85px;
    padding: 1px;
  }
}

@media screen and (max-width: 600px) {
  .topnav {
    background-color: #333;
    overflow: hidden;
    height: 6.5rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    box-shadow: 0 4px 3px 0 rgba(0, 0, 0, 0.2);
  }
  .topnav a {
    border-radius: 2px;
    padding: 5px;
    align-items: center;
    float: left;
    color: #e4e4e4;
    text-align: center;
    text-decoration: none;
    font-size: 13px;
    display: flex;
    letter-spacing: 1px;
  }
  .navbar-image {
    width: 85px;
    height: 85px;
    padding: 10px;
  }
}

/* .topnav a.active {
  color: rgb(252, 252, 252);
} */
</style>
