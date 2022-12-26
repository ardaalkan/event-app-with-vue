<template>
  <div action="action">
    <div class="container_register">
      <h1>Register</h1>
      <p>Please fill in this form to create an account.</p>
      <hr />

      <label for="email"><b>Name</b></label>
      <input v-model="userData.fullname" type="text" placeholder="Enter Name" name="name" id="name" required />

      <label for="psw"><b>Username</b></label>
      <input v-model="userData.username" type="text" placeholder="Enter Password" name="psw" id="psw" required />

      <label for="psw-repeat"><b>Password</b></label>
      <input v-model="userData.password" type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required />
      <hr />

      <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
      <button class="registerbtn" @click="onSave()">Register</button>
    </div>

    <div class="container_signin">
      <p>Already have an account? <router-link :to="{ name: 'Login' }">Giriş Yap</router-link></p>
    </div>
  </div>
</template>

<script>
import CryptoJS from "crypto-js";

export default {
  data() {
    return {
      userData: {
        username: null,
        fullname: null,
        password: null,
      },
    };
  },
  methods: {
    onSave() {
      const password = this.userData.password;
      const key = "booklike123!456";
      const cryptedPassword = CryptoJS.AES.encrypt(password, key).toString();

      this.$appAxios.post("/users", { ...this.userData, password: cryptedPassword }).then((registered_user_response) => {
        console.log("registered_user_response :>>", registered_user_response);
        this.$router.push({ name: "Home" });
      });

      console.log(cryptedPassword);
      // console.log(this.userData);
    },
  },
};
</script>

<style>
/* Add padding to containers */
.container_register {
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
.container_signin {
  background-color: #f1f1f1;
  padding: 10px;
  text-align: center;
}
</style>
