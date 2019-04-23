<template>
  <div>admin</div>
</template>

<script>
  export default {
    name: "Admin",
    data() {
      return {
        name: 'zxw'
      }
    },
    //组件中的守卫
    // beforeRouteEnter:(to,from,next)=>{
    //   // alert("hello"+this.name);
    //   // next()
    //   next(vm=>{
    //     alert("hello "+vm.name);
    //   })
    // }
    // beforeRouteLeave:(to,from,next)=>{//确定是否离开当前组件
    //   if(confirm("确定离开吗？")==true){
    //     next()
    //   }else{
    //     next(false)
    //   }
    // }
  }
</script>

<style scoped>

</style>
