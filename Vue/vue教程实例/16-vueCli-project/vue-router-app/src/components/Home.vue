<template>
  <div class="row">
    <div id="home" class="col-sm-12 text-center">
      <div class="background">
        <h1>shdjkalsdkls</h1>
        <h2>shdjkalsdkls</h2>
        <button class="btn btn-success" @click="gotoMenu">go to router</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Home",
    methods: {
      gotoMenu() {
        //跳转到上一次的页面   返回上一页
        // this.$router.go(-1)

        //跳转到指定的地址
        //this.$router.replace('/menu')

        //跳转到指定路由的名字下
        //this.$router.replace({name:'menuLink'})

        //通过push进行跳转
        // this.$router.push('/menu')
        //this.$router.push({name:'menuLink'})
      }
    },
    created() {
      // fetch("/apis/test/testToken.php", {
      //   method: "post",
      //   body: "hello"
      // }).then(result => {
      //   return result.json()
      // }).then(data => {
      //   console.log(data);
      // })

      //axios
      this.$axios.post("/apis/test/testToken.php", {
        username: "hello", password: "123"
      }).then(data => {
        console.log(data);
      })
    }
  }
</script>

<style scoped>
  #home {
    background: url("../../src/assets/11.jpg");
    height: 85vh;
    padding: 10%;
  }

  h1, h2 {
    margin: 6%;
  }

  .background {
    background: #eee;
    opacity: 0.8;
    max-width: 70vw;
    margin: 0 auto;
    padding: 20px 0;
  }
</style>
