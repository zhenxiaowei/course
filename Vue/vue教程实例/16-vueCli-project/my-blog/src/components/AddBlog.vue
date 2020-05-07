<template>
  <div id="add-blog">
    <h2>添加博客</h2>
    <form v-if="!submmited">
      <label for="">博客标题</label>
      <input type="text" v-model="blog.title">
      <label for="">博客内容</label>
      <textarea name="" id="" cols="30" rows="10" v-model="blog.content">

        </textarea>
      <div id="checkboxs">
        <label for="">vue.js</label>
        <input type="checkbox" value="vue.js" v-model="blog.categories">
        <label for="">Node.js</label>
        <input type="checkbox" value="Node.js" v-model="blog.categories">
        <label for="">React.js</label>
        <input type="checkbox" value="React.js" v-model="blog.categories">
        <label for="">Abgular.js</label>
        <input type="checkbox" value="Abgular.js" v-model="blog.categories">
      </div>
      <label for="">作者：</label>
      <select name="" v-model="blog.author">
        <option value="" v-for="author in authors">
          {{author}}
        </option>
      </select>
      <button v-on:click.prevent="post">添加博客</button>
    </form>
    <div v-if="submmited">
      <h3>你的博客发布成功</h3>
    </div>
    <div id="preview">
      <h3>博客总览</h3>
      <p>博客标题:{{blog.title}}</p>
      <p>博客内容：</p>
      <p>{{blog.content}}</p>
      <p>博客分类：</p>
      <ul>
        <li v-for="categorie in blog.categories">
          {{categorie}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "add-blog",
    data() {
      return {
        blog: {
          title: '',
          content: '',
          categories: [],
          author: " "
        },
        authors: ["Hemiah", "Henry", "Bucky"],
        submmited: false
      }
    },
    methods: {
      post() {
        //使用https://firebase.google.cn/中的database数据库
        // this.$http.post("https://vuedemo-b1233.firebaseio.com/posts.json", this.blog).then(function (data) {
        //   console.log(data);
        //   this.submmited = true;
        // })
        this.$http.post("http://jsonplaceholder.typicode.com/posts", {
          title: this.blog.title,
          body: this.blog.content,
          userId: 1
        }).then(function (data) {
          console.log(data);
          this.submmited = true;
        })
      }
    }
  }
</script>

<style scoped>
  #add-blog *{
    box-sizing: border-box;
  }
  #add-blog{
    margin: 20px auto;
    max-width: 600px;
    padding: 20px;
  }
  label{
    display: block;
    margin: 20px 0 10px;
  }
  input[type="text"],textarea,select{
    display: block;
    width: 100%;
    padding: 8px;
  }
  textarea{
    height: 200px;
  }
  #checkboxs label{
    display: inline-block;
    margin-top: 0;
  }
  #checkboxs input{
    display: inline-block;
    margin-right: 10px;
  }

  button{
    display: block;
    margin: 20px;
    background: crimson;
    color: #fff;
    border: 0;
    padding: 14px;
    border-radius: 4px;
    font-size: 18px;
    cursor: pointer;
  }

  #preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
  }
  h3{
    margin-top: 10px;
  }
</style>
