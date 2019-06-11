<template>
  <div class="edit container">
    <Alert v-if="alert" v-bind:message="alert"></Alert>
    <h1 class="page-header">编辑用户</h1>
    <form v-on:submit="updateCustomers">
      <div class="well">
        <h4>用户信息</h4>
        <div class="form-group">
          <label for="">姓名</label>
          <input type="text" class="form-control" placeholder="name" v-model="customer.name">
        </div>
        <div class="form-group">
          <label for="">电话</label>
          <input type="text" class="form-control" placeholder="phone" v-model="customer.phone">
        </div>
        <div class="form-group">
          <label for="">邮箱</label>
          <input type="text" class="form-control" placeholder="email" v-model="customer.email">
        </div>
        <div class="form-group">
          <label for="">学历</label>
          <input type="text" class="form-control" placeholder="education" v-model="customer.education">
        </div>
        <div class="form-group">
          <label for="">毕业学校</label>
          <input type="text" class="form-control" placeholder="graduationsschool" v-model="customer.graduationsschool">
        </div>
        <div class="form-group">
          <label for="">职业</label>
          <input type="text" class="form-control" placeholder="profession" v-model="customer.profession">
        </div>
        <div class="form-group">
          <label for="">个人简介</label>
          <!--<input type="text" class="form-control" placeholder="profile" v-model="customer.profile">-->
          <textarea rows="10" class="form-control" v-model="customer.profile" placeholder="profile">

          </textarea>
        </div>
        <button type="submit" class="btn btn-primary">确认</button>
      </div>
    </form>
  </div>
</template>

<script>
  import Alert from './Alert'
  export default {
    name: "edit",
    data() {
      return {
        customer: {},
        alert:""
      }
    },
    methods: {
      fetchCustomers(id){
        this.$http.get("http://localhost:3000/users/"+id)
          .then((data)=>{
            // console.log(data);
            this.customer=data.data;
          })
      },
      updateCustomers(e) {
        if (!this.customer.name || !this.customer.phone || !this.customer.email) {
          //console.log("请添加对应的信息");
          this.alert="请添加对应的信息";

        }else {
          let updateCustomer={
            name:this.customer.name,
            phone:this.customer.phone,
            email:this.customer.email,
            education:this.customer.education,
            graduationsschool:this.customer.graduationsschool,
            profession:this.customer.profession,
            profile:this.customer.profile
          }
          this.$http.put("http://localhost:3000/users/"+this.$route.params.id,updateCustomer)
            .then((data)=>{
             // console.log(data);
              this.$router.push({"path":"/",query:{alert:"用户信息更新成功"}})
            })
        }
        e.preventDefault()
      }
    },
    created(){
      this.fetchCustomers(this.$route.params.id)
    },
    components:{
      Alert
    }
  }
</script>

<style scoped>

</style>
