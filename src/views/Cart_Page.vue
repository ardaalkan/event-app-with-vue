<template>
  <NavbarView />
  <h1 class="cart_text">Cart page</h1>
  <div class="body-container">
    <!-- Basket -->
    <!-- <div class="basket-container">
      <div class="basket-count">
        <p>0</p>
      </div>
      <div class="basket-icon">
        <span class="oi oi-box"></span>
      </div>
      <div class="basket-content">
        <h3>Products</h3>
        <div class="basket-products">
          <ul></ul>
        </div>
        <p class="basket-total">TOTAL:</p>
        <p class="basket-total-amount">&euro; 0</p>
        <div class="clear"></div>
        <button class="basket-checkout">CHECKOUT</button>
      </div>
    </div> -->
    <div class="price-counter">
      <h2>Item Counter - {2} && Total Price {300}</h2>
    </div>

    <!-- Top Header -->

    <div class="products">
      <div class="product">
        <img src="http://via.placeholder.com/100/ffffff" />
        <h2>Horizon | Backpacks &euro; 100,-</h2>
        <p>Best backpacks from horizon..!</p>
        <div class="clear"></div>
        <button class="basket-add" data-basket-product-price="100" data-basket-product-id="prod1" data-basket-product-name="Apples">+</button>
        <button class="basket-add" data-basket-product-price="100" data-basket-product-id="prod1" data-basket-product-name="Apples">-</button>
      </div>
    </div>
  </div>
</template>

<scrip></scrip>

<style>
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
  margin: 25px 0px;
  padding: 15px;
}
.body-container .products .product img {
  float: left;
  margin: 0px 15px 0px 0px;
}
.body-container .products .product button {
  margin: 15px 0px 0px 0px;
  background-color: rgb(29, 29, 29);
  color: white;
  border-radius: 10px;
  padding: 0px 15px;
  font-size: 30px;
  margin-left: 5px;
}
.body-container .products .product button:hover {
  background-color: #2a3f63;

  cursor: pointer;
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
