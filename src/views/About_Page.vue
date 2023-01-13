<template>
  <NavbarView />
  <h1 class="about_text">Contact page</h1>
  <hr />
  <form action="action" @submit.prevent="submitForm">
    <div class="container_register">
      <h1>Send Ticket</h1>
      <p>Please fill in this form to create an ticket.</p>
      <hr />
      <!-- Name -->
      <label for="email"><b>Name</b></label>
      <br />
      <small class="form-valid-error" v-if="v$.form.name.$error">Name doesnt exists.</small>
      <input
        type="text"
        placeholder="Enter Name"
        name="name"
        id="name"
        v-model="v$.form.name.$model"
        :class="{ 'is-invalid': v$.form.name.$error }"
      />
      <!-- Name -->
      <!-- Surname -->
      <label for="psw"><b>Username</b></label>
      <br />
      <small class="form-valid-error" v-if="v$.form.surname.$error">Surname doesnt exists.</small>
      <input type="text" placeholder="Enter Surname" name="surname" id="surname" v-model="v$.form.surname.$model" />
      <!-- Surname -->
      <br />
      <!-- Description -->
      <label for="psw-repeat"><b>Contact / Description</b></label>
      <br />
      <small class="form-valid-error" v-if="v$.form.description.$invalid">At least 41 characters must be written.</small>
      <input class="textarea-input" type="text" placeholder="Text area" name="description" id="description" v-model="form.description" />
      <!-- Description -->
      <hr />
      <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
      <button class="sendbtn">Submit</button>
    </div>
  </form>
</template>

<script>
// import { reactive } from "vue";
import useValidate from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";

export default {
  setup() {
    return {
      v$: useValidate(),
    };
  },

  data() {
    return {
      form: {
        name: null,
        surname: null,
        description: null,
      },
      submitted: false,
    };
  },

  validations() {
    return {
      form: {
        name: { required },
        surname: { required },
        description: {
          minLength: minLength(41),
          required,
        },
      },
    };
  },

  methods: {
    submitForm() {
      this.submitted = true;
      alert("Submitted.");
    },
  },
};
</script>

<style>
.about_text {
  padding: 20px;
  text-align: center;
}
/* Add padding to containers */
.container_register {
  padding: 16px;
  width: 40%;
  margin: auto;
  justify-content: center;
  font-family: "Montserrat", sans-serif;
}

.textarea-input {
  margin: 30px;
  height: 100px;
}

.textarea-input {
  margin: 30px;
  height: 100px;
}

.form-valid-error {
  color: rgb(163, 163, 163);
  font-size: 11px;
}

/* Full-width input fields */
input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 15px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

/* Full-width input fields */

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
.sendbtn {
  background-color: #04aa6d;
  color: white;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

.sendbtn:hover {
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
