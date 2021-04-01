<template>
  <div class="banner-wrap">
    <el-carousel height="100%" class="img-wrap" :interval="5000">
      <el-carousel-item v-for="(item, index) in imgList" :key="index">
        <img class="banner-img" :src="item" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "banner-wrap",
  data() {
    return {
      imgList: [
        require("@/assets/img/banner1.png"),
        require("@/assets/img/banner1.png"),
        require("@/assets/img/banner1.png"),
      ],
    };
  },
};
</script>

<style scoped land='less'>
.img-wrap >>> .el-carousel__button {
  width: 40px !important;
  height: 6px !important;
  background: #fff;
  opacity: 1;
}
.img-wrap >>> .is-active .el-carousel__button {
  width: 40px !important;
  height: 6px !important;
  background: #fd0f0d;
}
.img-wrap {
  height: 100%;
}
.banner-img {
  width: 100%;
  height: 100%;
  display: block;
}
.banner-wrap {
  height: 540px;
  width: 100%;
}
</style>