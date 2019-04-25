<template>
    <div>
      <h3>指示器</h3>
<p>可以将指示器的显示位置设置在容器外部</p>
      <p>
        indicator-position属性定义了指示器的位置。默认情况下，它会显示在走马灯内部，设置为outside则会显示在外部；设置为none则不会显示指示器。
      </p>
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
</template>

<script>
    export default {
        name: "Carousel1"
    }
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
    text-align: center;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
