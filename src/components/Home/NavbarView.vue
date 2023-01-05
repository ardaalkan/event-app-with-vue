<template>
  <body>
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
  </body>
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
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.navbar-image {
  width: 95px;
  height: 105px;
  margin-left: 10px;
  margin-right: 10px;
}

.topnav {
  background-color: #333;
  overflow: hidden;
  height: 6.5rem;
  display: flex;
  flex-direction: row;
  box-shadow: 0 4px 3px 0 rgba(0, 0, 0, 0.2);
}

/* Style the links inside the navigation bar */
.topnav a {
  border-radius: 5px;
  margin: 15px;
  align-items: center;
  float: left;
  color: #e4e4e4;
  text-align: center;
  text-decoration: none;
  font-size: 17px;
  display: flex;
  justify-content: center;
  letter-spacing: 1px;
}

.router-link {
  border-radius: 5px;
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
  background-color: rgb(66, 66, 66);
}

/* Change the color of links on hover */
/* .topnav a:hover {
  background-color: rgb(219, 219, 219);
  color: black;
} */

/* Add a color to the active/current link */
.topnav a.active {
  /* background-color: #04aa6d; */
  color: rgb(252, 252, 252);
}
</style>
