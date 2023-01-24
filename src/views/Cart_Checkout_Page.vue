<template>
  <h1 class="cart_text">Cart Checkout Page</h1>
  <div class="checkout-container">
    <p class="checkout-description-text">ENTER YOUR ADRESS</p>
    <hr />
    <div>
      <form v-if="!submitted" ref="form" @submit.prevent="sendMail">
        <label>City</label>
        <small class="form-valid-error" v-if="v$.form.city.$error">City doesnt exists.</small>
        <input type="text" placeholder="Enter City" name="city" id="city" v-model="v$.form.city.$model" />
        <br />
        <label>Country</label>
        <small class="form-valid-error" v-if="v$.form.country.$error">Country doesnt exists.</small>
        <input type="text" placeholder="Enter Country" name="country" id="country" v-model="v$.form.country.$model" />
        <br />
        <label>Detail Adress</label>
        <small class="form-valid-error" v-if="v$.form.detail.$error">At least 20 characters must be written.</small>
        <input type="text" placeholder="Enter address details." name="detail" id="detail" v-model="v$.form.detail.$model" />
        <button class="submitbtn" @click="onRegisterTap">Submit</button>
      </form>
      <div v-else>
        <h1 class="shopping-description-text">THANKS FOR SHOPPİNG</h1>
        <router-link :to="{ path: '/' }"><button class="backbtn" @click="removeAllCarts">Go To Home Page</button></router-link>
      </div>
    </div>
  </div>
  <!-- TODO:
The page to be validated after receiving all the products on the Cart Page. -->
</template>

<script>
import useValidate from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";
import { mapGetters } from "vuex";
import Swal from "sweetalert2";

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
        Swal.fire("City", "City must be exists...", "info");
        // console.log("SWAL works - 1");
        return;
      }
      if (!this.form.country) {
        Swal.fire("Country", "Country must be exists...", "info");
        // console.log("SWAL works - 2");
        return;
      }
      if (!this.form.detail) {
        Swal.fire("Detail", "Detail must be exists...", "info");
        return;
      } else Swal.fire("Cart Items", "Successfully Handle...", "info");
      this.submitted = true;
    },

    removeAllCarts() {
      let carts = [...this._userCarts];
      carts = [];
      // this.$toast.info("Removed all items from the cart...");
      this.$appAxios
        .patch(`/users/${this._getCurrentUser.id}`, { carts })
        .then((response) => {
          console.log(response);
          this.$store.commit("setCart", carts);
          this.$router.go();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  computed: {
    ...mapGetters(["_getCurrentUser", "_userCarts"]),
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

.backbtn {
  background-color: #04aa6d;
  color: white;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

.backbtn:hover {
  opacity: 1;
}

.form-valid-error {
  font-size: 10px;
  padding: 5px;
}

.shopping-description-text {
  padding: 10px;
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
