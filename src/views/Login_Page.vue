<template>
  <div action="action">
    <!-- {{ this.$store.getters._saltKey }} -->
    <div class="container_login">
      <h1>Login</h1>
      <hr />

      <label for="username"><b>Username</b></label>
      <br />
      <small v-if="v$.form.username.$error">Username must be exists.</small>
      <input v-model="v$.form.username.$model" type="text" placeholder="Enter Username" name="username" id="username" required />
      <br />
      <small v-if="v$.form.password.$error">
        Your password must be 3 or more characters, and include at least one lowercase letter, one uppercase letter, and a number</small
      >
      <label for="psw"><b>Password</b></label>
      <input v-model="v$.form.password.$model" type="password" placeholder="Enter Password" name="psw" id="psw" required />
      <br />
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
import useValidate from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";
export default {
  setup() {
    return {
      v$: useValidate(),
    };
  },

  validations() {
    return {
      form: {
        username: { required },
        fullname: { required },
        password: {
          minLength: minLength(3),
          required,
          valid: function (value) {
            const constrainsUppercase = /[A-Z]/.test(value);
            const constrainsLowercase = /[a-z]/.test(value);
            const constrainsNumber = /[0-9]/.test(value);
            return constrainsUppercase && constrainsLowercase && constrainsNumber;
          },
        },
      },
    };
  },

  data() {
    return {
      form: {
        username: null,
        password: null,
      },
    };
  },
  methods: {
    onSubmit() {
      const password = CryptoJS.HmacSHA1(this.form.password, this.$store.getters._saltKey).toString();
      this.$appAxios
        .get(`/users?username=${this.form.username}&password=${password}`)
        .then((login_response) => {
          if (login_response?.data?.length > 0) {
            this.$store.commit("setUser", login_response?.data[0]);
            this.$router.push({ name: "Home" });
            console.log(this.$router.push({ name: "Home_Page" }));
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
  font-family: "Montserrat", sans-serif;
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
