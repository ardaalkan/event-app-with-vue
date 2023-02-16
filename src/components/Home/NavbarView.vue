<template>
  <div class="topnav">
    <img class="navbar-image" src="../../assets/png_logo.png" />
    <div class="hamburger-menu" @click="showMenu = !showMenu">
      <img v-bind:src="svg2" width="40" height="35" />
    </div>
    <div class="navbar-router-link-container" :class="{ active: showMenu }">
      <div :class="{ 'router-link': true, active: $route.path === '/' }">
        <router-link to="/">Home</router-link>
      </div>
      <div :class="{ 'router-link': true, active: $route.path === '/shoes' }">
        <router-link to="/shoes">Shoes</router-link>
      </div>
      <div :class="{ 'router-link': true, active: $route.path === '/backpacks' }">
        <router-link to="/backpacks">Backpacks</router-link>
      </div>
      <div :class="{ 'router-link': true, active: $route.path === '/cart' }" v-if="_isAuthenticated">
        <router-link to="/cart">Cart</router-link>
      </div>
      <div :class="{ 'router-link': true, active: $route.path === '/favorite' }" v-if="_isAuthenticated">
        <router-link to="/favorite">Favorites</router-link>
      </div>
      <div :class="{ 'router-link': true, active: $route.path === '/about' }">
        <router-link to="/about">About</router-link>
      </div>
      <div :class="{ 'router-link': true }" v-if="_isAuthenticated">
        <a @click="onLogout">Logout</a>
      </div>
      <div :class="{ 'router-link': true }" v-else>
        <router-link to="/">Login</router-link>
      </div>
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
  data() {
    return {
      svg1: require("@/assets/images-svg/close-menu.svg"),
      svg2: require("@/assets/images-svg/menu-2.svg"),
      showMenu: false,
    };
  },

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

.hamburger-menu {
  display: none;
  height: 45px;
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

.router-link.active {
  background-color: rgb(60, 60, 60);
}

@media screen and (max-width: 1100px) {
  .navbar-router-link-container {
    /* display: flex; */
  }
  .topnav {
    background-color: #333;
    overflow: hidden;
    height: 6.5rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    box-shadow: 0 4px 3px 0 rgba(0, 0, 0, 0.2);
    align-items: center;
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

@media screen and (max-width: 655px) {
  .topnav {
    background-color: #333;
    overflow: hidden;
    height: 6.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 4px 3px 0 rgba(0, 0, 0, 0.2);
  }
  .topnav router-link {
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 0;
    right: 0;
    width: 80vw;
    background: #11101b;
  }
  .navbar-image {
    width: 85px;
    height: 85px;
    padding: 1px;
  }
  .hamburger-menu {
    display: block;
    cursor: pointer;
    margin-right: 30px;
    margin-left: auto;
    position: absolute;
    right: 0;
  }
  .hamburger-menu img {
    display: block;
    margin: auto;
  }
  .hamburger-menu img:hover {
    transition: 0.2s;
    filter: invert(30%);
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
    overflow: hidden;
  }

  .navbar-router-link-container {
    flex-direction: column;
    position: absolute;
    top: 100px;
    left: 0;
    right: 0;
    width: 100vw;
    background: #11101b;
    overflow: hidden;
    z-index: 3;
    display: none;
  }
  .navbar-router-link-container.active {
    display: flex;
  }
}

/* .topnav a.active {
  color: rgb(252, 252, 252);
} */
</style>
