<template>
  <div class="hello">
    <button @click="increase">增加</button>
    <button @click="decrease">减去</button>
    <h1>{{name}}</h1>
    <h1>{{myname}}</h1>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapMutations,mapActions,mapState,mapGetters} from 'vuex'
  import {INCREASE,DECREASE} from '@/store/mutations-types'

  export default {
    name: 'HelloWorld',
    methods: {
      ...mapMutations([INCREASE], [DECREASE]),
      ...mapActions(['myIncrease', 'myDecrease']),
     async increase () {
       // this.$store.commit(INCREASE)
        //this.increase()
        //this.$store.state.count += 1
        const data=await this.myIncrease({
          id:111
        })
       console.log(data)
     },
      decrease () {
       // this.$store.commit(DECREASE)
        //this.decrease()
        //this.$store.state.count -= 1
        this.myDecrease()

      }
    },
    computed:{
      ...mapState({
        name:state=>{//获取user.js中定义的变量name
          return state.user.name
        }
      }),
      ...mapGetters(['myname'])//获取user.js中gettters中的myname方法
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
