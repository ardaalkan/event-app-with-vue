<template>
  <div action="action">
    <!-- {{ this.$store.getters._saltKey }} -->
    <div class="container_login">
      <h1>Login</h1>
      <hr />

      <label for="username"><b>Username</b></label>
      <input v-model="userData.username" type="text" placeholder="Enter Username" name="username" id="username" required />

      <label for="psw"><b>Password</b></label>
      <input v-model="userData.password" type="password" placeholder="Enter Password" name="psw" id="psw" required />
      <hr />

      <router-link :to="{ name: 'Register' }">Register</router-link>
      <button class="registerbtn" @click="onSubmit()">Login</button>
    </div>

    <!-- <div class="container signin">
      <p>Already have an account? <a href="#">Sign in</a>.</p>
    </div> -->
  </div>
</template>

<script>
import CryptoJS from "crypto-js";
export default {
  data() {
    return {
      userData: {
        username: null,
        password: null,
      },
    };
  },
  methods: {
    onSubmit() {
      const password = CryptoJS.HmacSHA1(this.userData.password, this.$store.getters._saltKey).toString();
      this.$appAxios
        .get(`/users?username=${this.userData.username}&password=${password}`)
        .then((login_response) => {
          if (login_response?.data?.length > 0) {
            this.$store.commit("setUser", login_response?.data[0]);
            this.$router.push({ name: "Home" });
            console.log(this.$router.push({ name: "Home_Page"}));
          } else {
            alert("Users doesnt exists.");
          }
          console.log(login_response);
        })
        .catch((e) => console.log(e));
      // .finally(() => {
      //   this.loader = false;
      // });
    },
  },
};
</script>

<style>
/* Add padding to containers */
.container_login {
  padding: 16px;
  width: 40%;
  margin: auto;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;
}

/* Full-width input fields */
input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type="text"]:focus,
input[type="password"]:focus {
  background-color: #ddd;
  outline: none;
}

/* Overwrite default styles of hr */
hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

/* Set a style for the submit/register button */
.registerbtn {
  background-color: #04aa6d;
  color: white;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

.registerbtn:hover {
  opacity: 1;
}

/* Add a blue text color to links */
a {
  color: dodgerblue;
}

/* Set a grey background color and center the text of the "sign in" section */
.signin {
  background-color: #f1f1f1;
  text-align: center;
}
</style>
