<template>
  <form>
    <div class="container_register">
      <h1>Register</h1>
      <p>Please fill in this form to create an account.</p>
      <hr />
      <label for="text"><b>Username</b></label>
      <br />
      <small v-if="v$.form.username.$error">Name must be exists.</small>
      <!-- @input="v$.form.name.$touch()" -->
      <input v-model="v$.form.username.$model" type="text" placeholder="* Enter Name" name="username" id="username" autofocus />

      <label for="psw"><b>Name</b></label>
      <br />
      <small v-if="v$.form.fullname.$error">Fullname must be exists.</small>
      <input v-model="v$.form.fullname.$model" type="text" placeholder="* Enter fullname" name="psw" id="psw" />

      <label for="psw-repeat"><b>Password</b></label>
      <br />
      <small v-if="v$.form.password.$error">
        Your password must be 3 or more characters, and include at least one lowercase letter, one uppercase letter, and a number</small
      >
      <input v-model="v$.form.password.$model" type="password" placeholder="* Repeat Password" name="psw-repeat" id="psw-repeat" />
      <hr />
      <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
      <button class="registerbtn" @click="onSave()">Register</button>

      <div class="container_signin">
        <p>Already have an account? <router-link :to="{ name: 'Login' }">Giriş Yap</router-link></p>
      </div>
    </div>
  </form>

  <!-- {{ v$.form.password.$invalid }} -->
</template>

<!-- <script setup>
</script> -->

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
        fullname: null,
        password: null,
      },
    };
  },
  methods: {
    async onSave() {
      try {
        const password = CryptoJS.HmacSHA1(this.form.password, this.$store.getters._saltKey).toString();
        const login_response = await this.$appAxios.get(`/users?username=${this.form.username}&password=${password}`);

        if (login_response?.data?.length > 0) {
          this.$store.commit("setUser", login_response?.data[0]);
          this.$router.push({ name: "Home" });
          console.log(this.$router.currentRoute);
        } else {
          alert("Inputs must be exists.");
        }
      } catch (error) {
        console.log(error);
      }
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
.container_signin {
  padding: 10px;
  text-align: center;
}
</style>
