<template>
  <body>
    <NavbarView />
    <section>
      <h1 class="products_text">Products page</h1>
      <h2 class="products_text">{{ this.$route.params.products }}</h2>
      <div class="main">
        <div class="card_container">
          <div class="card" v-for="category in categoryList" :key="category.id" value="category.id">
            <img alt="Avatar" class="products_image" :src="category.image" />
            <div class="container">
              <h4>
                <b>{{ category.name }}</b>
              </h4>
              <p>{{ category.price }}$</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </body>
</template>

<script>
export default {
  data() {
    return {
      categoryList: [],
    };
  },

  async mounted() {
    let param = this.$route.params;
    await this.$appAxios.get(`/products?category=${param.products}`).then((category_response) => {
      this.categoryList = category_response?.data || [];
      console.log(category_response.data);
      console.log(this.$route.params.products);
    });
  },
};
</script>

<style>
.products_text {
  margin-left: 5%;
}

.card_container {
  display: flex;
  flex-wrap: wrap;
}

.main {
  margin-left: 5%;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 300px;
  margin-right: 50px;
  margin-top: 25px;
  cursor: pointer;
  background-color: rgb(250, 250, 250);
}

.products_image {
  margin: 0;
  display: block;
  width: 100%;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.container {
  padding: 2px 16px;
}
</style>
