<template>
  <h1 class="cart_text">Cart Checkout Page</h1>
  <div class="checkout-container">
    <p class="checkout-description-text">ENTER YOUR ADRESS</p>
    <hr />
    <div>
      <form>
        <label>City</label>
        <small class="form-valid-error" v-if="v$.form.city.$error">City doesnt exists.</small>
        <input type="text" placeholder="Enter City" name="city" id="city" v-model="v$.form.city.$model" />
        <br />
        <label>Country</label>
        <small class="form-valid-error" v-if="v$.form.country.$error">Country doesnt exists.</small>
        <input type="text" placeholder="Enter Country" name="country" id="country" v-model="v$.form.country.$model" />
        <br />
        <label>Detail Adress</label>
        <small class="form-valid-error" v-if="v$.form.detail.$error">Detail doesnt exists.</small>
        <input type="text" placeholder="Enter address details." name="detail" id="detail" v-model="v$.form.detail.$model" />
        <button class="submitbtn" @click="onRegisterTap">Submit</button>
      </form>
    </div>
  </div>
  <!-- TODO:
The page to be validated after receiving all the products on the Cart Page. -->
</template>

<script>
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
        city: null,
        country: null,
        detail: null,
      },
      submitted: false,
    };
  },

  validations() {
    return {
      form: {
        city: { required },
        country: { required },
        detail: {
          minLength: minLength(20),
          required,
        },
      },
    };
  },

  methods: {
    onRegisterTap: function () {
      if (!this.form.city) {
        alert("Required city");
        return;
      }
      if (!this.form.country) {
        alert("Required country");
        return;
      }
      if (!this.form.detail) {
        alert("Required detail");
        return;
      } else alert("submitted");
    },
  },
};
</script>

<style>
.cart_text {
  padding-top: 30px;
  display: flex;
  justify-content: center;
}

.checkout-description-text {
  padding: 20px;
}

.checkout-container {
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 400px;
  margin: auto;
  background-color: rgb(250, 250, 250);
}

.submitbtn {
  background-color: #04aa6d;
  color: white;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

.submitbtn:hover {
  opacity: 1;
}

.form-valid-error {
  font-size: 10px;
}

input {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 1px solid #ccc;
}

/* input[type=submit] {
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
} */

hr {
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #ccc;
  padding: 0;
  padding-bottom: 10px;
}

label {
  padding: 5px;
}
</style>
