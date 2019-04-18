<template>
  <footer>
    <h1>{{Copyright}}{{title}}</h1>
  </footer>
</template>

<script>
  export default {
    name: "app-footer",
    props:{
      title:{
        type:String
      }
    },
    data() {
      return {
        Copyright: "Copyright 2017"
      }
    }
  }
</script>

<style scoped>
  footer {
    background: #222;
    padding: 10px;
  }

  h1 {
    color: firebrick;
    text-align: center;
  }
</style>
