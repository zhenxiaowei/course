<template>
  <div id="product-list-one">
    <h1>product-list-one</h1>
    <ul>
      <li v-for="product in  saleProducts">
        <span class="name">{{product.name}}</span>
        <span class="price">{{product.price}}</span>
      </li>
    </ul>
    <button @click="reducePrice(4)">商品降价</button>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {mapActions} from 'vuex'
  export default {
    computed: {//接收vuex的数据时，用computed计算属性
      products() {
        return this.$store.state.products
      },
      // saleProducts() {//getters的使用
      //   return this.$store.getters.saleProducts;
      // }
      ...mapGetters([
        "saleProducts"
      ])
    },
    methods: {
      // reducePrice: function (amount) {
      //   /*        this.$store.state.products.forEach(product => {
      //             product.price -= 1
      //           })*/
      //  // this.$store.commit('reducePrice')//更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。
      //   this.$store.dispatch("reducePrice",amount);//传参  使用payload接收    异步操作
      // }
      ...mapActions([
        "reducePrice"
      ])
    },

  }
</script>

<style scoped>
  #product-list-one {
    background: #fff8b1;
    margin-bottom: 30px;
    padding: 10px 20px;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  }

  #product-list-one ul {
    padding: 0;
  }

  #product-list-one li {
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
