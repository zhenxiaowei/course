<template>
  <div id="product-list-two">
    <h1>product-list-two</h1>
    <ul>
      <li v-for="product in  saleProducts">
        <span class="name">{{product.name}}</span>
        <span class="price">{{product.price}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    computed: {//接收vuex的数据时，用computed计算属性
      products() {
        return this.$store.state.products
      },
      // saleProducts() {
      //   return this.$store.getters.saleProducts;
      // },
      ...mapGetters([
        "saleProducts"
      ])
    },
    methods:{
    }
  }
</script>

<style scoped>
  #product-list-two {
    background: #fff8b1;
    margin-bottom: 30px;
    padding: 10px 20px;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  }

  #product-list-two ul {
    padding: 0;
  }

  #product-list-two li {
    display: inline-block;
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255, 255, 255, 0.7);
  }

  .price {
    font-weight: bold;
    color: #e8800c;
  }
</style>
