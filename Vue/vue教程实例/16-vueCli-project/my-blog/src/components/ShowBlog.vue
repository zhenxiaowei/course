<template>
  <div v-theme:column="'wide'" id="show-blog"><!--自定义指令，传递的是字符串-->
    <h1>博客总览</h1>
    <input type="text" placeholder="搜索" v-model="search">
    <div v-for="blog in filteredBlogs" class="single-blog">
      <router-link :to="'/blog/'+blog.id" tag="div">
        <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
      </router-link>
      <article>
        {{blog.body | snippet}}
      </article>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ShowBlog",
    data() {
      return {
        blogs: [],
        search:''
      }
    },
    created() {
      this.$http.get("https://jsonplaceholder.typicode.com/posts").then(function (data) {
        this.blogs = data.body.slice(0, 10);
        console.log(this.blogs);
      })
      // this.$http.get("./../static/posts.json").then(function (data) {//读取本地文件
      //   this.blogs = data.body.slice(0, 10);
      //   console.log(this.blogs);
      // })
    },
    computed:{
      filteredBlogs:function () {//定义过滤器  增加搜索功能
        return this.blogs.filter(blog=>{
          return blog.title.match(this.search)
        })
      }
    },
    filters:{//局部注册过滤器
      // "to-uppercase":function (value) {
      //   return value.toUpperCase();
      // },
      toUppercase(value) {
        return value.toUpperCase();
      }
    },
    directives:{//局部注册指令
      'rainbow':{
        bind(el, binding, vnode) {
          el.style.color = '#' + Math.random().toString(16).slice(2, 8);
        }
      }
    }
  }
</script>

<style scoped>
#show-blog{
  max-width: 800px;
  margin: 0 auto;
}
  .single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
  }
</style>
