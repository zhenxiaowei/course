<template>
  <div id="app">
    <!--属性传递-->
    <product-list-one></product-list-one>
    <product-list-two></product-list-two>
  </div>
</template>

<script>
  import ProductOne from './components/ProductOne'
  import ProductTwo from './components/ProductTwo'

  export default {
    name: 'app',
    components: {
      "product-list-one": ProductOne,
      "product-list-two": ProductTwo,
    },
    data() {
      return {

      }
    }
  }
</script>

<style>

</style>
