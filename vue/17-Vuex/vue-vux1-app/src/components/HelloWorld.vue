<template>
  <div class="hello">
    <button @click="increment">增加</button>
    <button @click="decement">减少</button>
  </div>
</template>

<script>
  import {mapMutations, mapActions} from 'vuex'

  export default {
    name: 'HelloWorld',
    data() {
      return {}
    },
    methods: {
      ...mapMutations(['aaa', 'bbb']),
      ...mapActions(['myaaa', 'mybbb']),
      async increment() {
        //this.$store.commit('aaa')
        //this.aaa()
        //this.$store.state.count+=1
        //this.myaaa()
        //increment方法执行后actions中的myaaa执行
        const data=await this.myaaa({
          id:111//向store中actions中的myaaa传参数
        });
        console.log(data);//接收到store中actions中的myaaa返回的数据
      },
      decement() {
        //this.$store.commit('bbb')
        // this.bbb()
        //this.$store.state.count-=1
        this.mybbb()
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
