<template>
  <div id="banner">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in slide">
          {{item}}
        </div>
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev"></div><!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
      <div class="swiper-button-next"></div><!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->
    </div>

  </div>
</template>

<script>
  //使用swiper
  import Swiper from "swiper"
  import "swiper/dist/css/swiper.css"

  export default {
    name: 'Swiper',
    data() {
      return {
        slide: [1, 2, 3, 4, 5]
      }
    },
    mounted() {

      //配置Swiper  建议关于Swiper配置方面可以前往Swiper官网
      new Swiper('.swiper-container', {
        pagination: {
          el: '.swiper-pagination',
        },
        loop: true,
        autoplay: {
          delay: 4000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      })
    }
  }
</script>

<style scoped lang="less">
  .swiper-container{
    .swiper-wrapper{
      .swiper-slide {
        width: 100%;
        height: 500px;
        line-height: 500px;
        font-size: 50px;
        text-align: center;
        background-color: rosybrown;
      }
    }
  }

</style>
