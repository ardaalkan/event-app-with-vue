<template>
  <NavbarView />
  <h1 class="cart_text">Cart page</h1>
  <div class="body-container">
    <div class="price-counter">
      <p>{{ cartList.length }} <span>item in your cart</span></p>
    </div>
    <div class="price-container">
      <div class="products">
        <div class="product" v-for="cartItem in cartList" :key="cartItem.id" value="cartItem">
          <img :src="cartItem.image" />
          <h2 class="cart-item-category-text">{{ cartItem.category }}</h2>
          <p class="cart-item-category-description">{{ cartItem.description }}</p>
          <p class="cart-item-category-price">Price: {{ cartItem.price }}&nbsp;$</p>
          <button class="basket-add" data-basket-product-price="100" data-basket-product-id="prod1" data-basket-product-name="Apples">+</button>
          <button class="basket-add" data-basket-product-price="100" data-basket-product-id="prod1" data-basket-product-name="Apples">-</button>
        </div>
      </div>
      <div class="order-summary">
        <h2>Order Summary</h2>
        <p>Product Total: 444$</p>
        <p>Total:{{ totalPrice }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      detailList: "",
      cartList: [],
      totalPrice: 0,
      allPrice: [],
    };
  },

  created() {
    this.cartId();
  },

  methods: {
    cartId() {
      this.$appAxios.get(`users?username=${this._getCurrentUser.fullname}`).then((res) => {
        this.detailList = res?.data || [];
        let arr = (this.arrayDetaillist = JSON.parse(JSON.stringify(this.detailList[0].carts)));
        // console.log(arr, " // arr //");
        arr.map((arr) => {
          this.$appAxios.get(`/products?id=${arr}`).then((arr_response) => {
            arr_response.data.push(...this.cartList);
            this.cartList = arr_response?.data || [];
            let priceObject = JSON.parse(JSON.stringify(...this.cartList));
            this.allPrice.push(priceObject.price);
            this.calculateTotal();
          });
        });
      });
    },
    calculateTotal() {
      this.totalPrice = this.allPrice.reduce((a, b) => a + b, 0);
    },
  },
  computed: {
    ...mapGetters(["_getCurrentUser", "_userCarts"]),

    alreadyInCarts() {
      console.log(JSON.parse(JSON.stringify(this.detailList[0].id)), "already in cart id");
      return this._userCarts?.indexOf(JSON.parse(JSON.stringify(this.detailList[0].id))) > -1;
    },
  },
};
</script>

<style>
.order-summary {
  margin: 15px;
  margin-top: 35px;
  background-color: rgb(245, 245, 245);
  max-height: 200px;
  min-width: 350px;
  position: sticky;
  top: 10px;
  border-style: solid;
  border-width: 1px;
  padding: 5px;
  border-color: rgb(230, 230, 230);
}

.price-container {
  display: flex;
  width: 60%;
  margin: auto;
}

.cart_text {
  display: flex;
  justify-content: center;
}

.body-container {
  width: 100%;
  position: relative;
}
.body-container .products {
  width: 60%;
  margin: auto;
}
.body-container .products .product {
  background-color: #009b77;
  color: white;
  margin: 35px 0px;
  padding: 15px;
  width: 100%;
  height: 200px;
}

.cart-item-category-text {
  text-transform: uppercase;
}

.body-container .products .product img {
  float: left;
  margin: 0px 15px 0px 0px;
  height: 100%;
}
.body-container .products .product button {
  margin: 15px 0px 0px 0px;
  background-color: rgb(29, 29, 29);
  color: white;
  border-radius: 10px;
  padding: 0px 15px;
  font-size: 30px;
  margin-left: 2px;
  box-shadow: 1px 1px 1px 1px rgba(75, 75, 75, 0.2);
}

.cart-item-category-price {
  font-style: italic;
}

.body-container .products .product button:hover {
  background-color: #2a3f63;
  cursor: pointer;
  transition: 0.3s;
}
.body-container .basket-container {
  position: fixed;
  top: 75px;
  right: 15px;
  height: 50px;
  border-radius: 30px;
  background-color: black;
  color: black;
  padding: 15px;
  transition: width 0.5s, height 0.5s, top 0.2s;
}
.body-container .basket-container .basket-icon {
  color: white;
  position: absolute;
  top: 13px;
  right: 17px;
}

.price-counter {
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: rgb(245, 245, 245);
  padding: 10px;
}

/* .body-container .basket-container .basket-count {
  width: 25px;
  height: 25px;
  z-index: 2;
  background-color: #cccccc;
  border-radius: 10px;
  text-align: center;
  position: absolute;
  top: -5px;
  right: -5px;
}
.body-container .basket-container .basket-count p {
  padding: 0px;
  margin: 2px 0px 0px 0px;
  color: white;
  font-size: 0.9rem;
} */

.body-container .basket-container .basket-content {
  opacity: 0;
  width: 0px;
  overflow: hidden;
  transition: opacity 0.2s;
  transition-delay: 0.4s;
}
.body-container .basket-container .basket-content .basket-products {
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  height: 200px;
  overflow-y: auto;
}
/* .body-container .basket-container .basket-content .basket-products ul {
  list-style-type: none;
  margin: 0px;
  padding: 0px;
}
.body-container .basket-container .basket-content .basket-products ul li {
  width: 100%;
  padding: 10px 0px;
}
.body-container .basket-container .basket-content .basket-products ul li input {
  margin-right: 5px;
  width: 50px;
  height: 20px;
}
.body-container .basket-container .basket-content .basket-products ul li .remove-product {
  color: #c02800;
  margin-right: 5px;
}
.body-container .basket-container .basket-content .basket-products ul li .remove-product:hover {
  color: #de4800;
  cursor: pointer;
}
.body-container .basket-container .basket-content .basket-products ul li .amount {
  float: right;
  margin-right: 5px;
}
.body-container .basket-container .basket-content .basket-total-amount {
  margin-top: 5px;
  float: right;
}
.body-container .basket-container .basket-content .basket-total {
  margin-top: 5px;
  float: left;
}
.body-container .basket-container .basket-content .basket-checkout {
  background-color: #c02800;
  color: white;
  border: 0px;
  padding: 5px 10px;
  border-radius: 10px;
  float: right;
} */
.body-container .basket-container .basket-content .basket-checkout:hover {
  background-color: #de4800;
  cursor: pointer;
}
.body-container .basket-scrolling {
  top: 15px;
}
.body-container .open-basket {
  height: 360px;
  color: white;
}
.body-container .open-basket .basket-content {
  opacity: 1;
  width: 100%;
}
/* .body-container .header {
  width: 100%;
  background-color: rgb(235, 235, 235);
  color: white;
}
.body-container .header ul {
  float: right;
  list-style-type: none;
  margin: 15px 15px 0px 0px;
}
.body-container .header ul li {
  display: inline;
  margin: 0px 0px 0px 10px;
} */

@media (min-width: 575px) {
  .basket-container {
    width: 50px;
  }

  .open-basket {
    width: 350px;
  }
}
@media (max-width: 575px) {
  .basket-container {
    width: 50px;
  }

  .open-basket {
    width: 300px;
  }
}
</style>
