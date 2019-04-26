<template>
  <div>
    1
  </div>
</template>

<script>
  export default {
    name: "Axios",
    methods: {
      get() {
// 为给定 ID 的 user 创建请求
        this.$http.get('/user?ID=12345')
          .then((response) => {
            this.$notify.success({
              title: '请求成功'
            });
          })
          .catch((error) => {
            this.$notify.error({
              title: '请求失败',
            });
          });

// 可选地，上面的请求可以这样做
        this.$http.get('/user', {
          params: {
            ID: 12345
          }
        })
          .then((response) => {
            this.$notify.success({
              title: '请求成功'
            });
          })
          .catch((error) => {
            this.$notify.error({
              title: '请求失败',
            });
          });
      },
      post() {
        this.$http.post('/user', {
          firstName: 'Fred',
          lastName: 'Flintstone'
        })
          .then((response) => {
            this.$notify.success({
              title: '请求成功'
            });
          })
          .catch((error) => {
            this.$notify.error({
              title: '请求失败',
            });
          });
      }
    },
    mounted() {
      this.get();
      this.post();
    },
  }
</script>

<style scoped>

</style>
