<template>
  <div id="single-blog">
    <h1>{{blog.title}}</h1>
    <article>{{blog.body}}</article>
  </div>
</template>

<script>
  export default {
    name: "SingleBlog",
    data() {
      return {
        id: this.$route.params.id,
        blog: {}
      }
    },
    created() {
      this.$http.get("https://jsonplaceholder.typicode.com/posts/" + this.id).then(function (data) {//读取本地文件
        this.blog = data.body;
      })
    }
  }
</script>

<style scoped>
  #single-blog {
    max-width: 960px;
    margin: 0 auto;
    padding: 20px;
    background: #eee;
  }
</style>
