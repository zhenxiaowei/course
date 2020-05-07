<template>
  <div class="details container">
    <router-link to="/" class="btn btn-default">返回</router-link>
    <h1 class="page-header">{{customer.name}}
      <span class="pull-right">
      <router-link class="btn btn-primary" :to="'/edit/'+customer.id">编辑</router-link>
        <button class="btn btn-danger" @click="deleteCustomer(customer.id)">删除</button>
    </span>
    </h1>
    <ul class="list-group">
      <li class="list-group-item"><span class="glyphicon glyphicon-asterisk"></span>{{customer.phone}}</li>
      <li class="list-group-item"><span class="glyphicon glyphicon-asterisk"></span>{{customer.email}}</li>
    </ul>
    <ul class="list-group">
      <li class="list-group-item"><span class="glyphicon glyphicon-asterisk"></span>{{customer.education}}</li>
      <li class="list-group-item"><span class="glyphicon glyphicon-asterisk"></span>{{customer.graduationsschool}}</li>
      <li class="list-group-item"><span class="glyphicon glyphicon-asterisk"></span>{{customer.profession}}</li>
      <li class="list-group-item"><span class="glyphicon glyphicon-asterisk"></span>{{customer.profile}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "CustomerDetails",
    data() {
      return {
        customer: {}
      }
    },
    methods: {
      fetchCustomers(id) {
        this.$http.get("http://localhost:3000/users/" + id)
          .then( (data)=> {
            console.log(data);
            this.customer = data.data;
          })
      },
      deleteCustomer(id){
        this.$http.delete("http://localhost:3000/users/" + id)
          .then( (data)=> {
            this.$router.push({path:"/",query:{alert:"用户删除成功"}})
          })
      }
    },
    created() {
      this.fetchCustomers(this.$route.params.id)
    }
  }
</script>

<style scoped>

</style>
