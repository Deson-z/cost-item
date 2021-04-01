<template>
  <div class="footerImgCss-wrap">
    <div class="footerImgCss-content">
      <img :src="ico1" alt="">
      <img :src="ico2" alt="">
      <img :src="ico3" alt="">
      <img :src="ico4" alt="">
      <img :src="ico5" alt="">
      <img :src="ico6" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "footerImg",
  data() {
    return {
      ico1: require("@/assets/img/ico1.png"),
      ico2: require("@/assets/img/ico2.png"),
      ico3: require("@/assets/img/ico3.png"),
      ico4: require("@/assets/img/ico4.png"),
      ico5: require("@/assets/img/ico5.png"),
      ico6: require("@/assets/img/ico6.png"),
    };
  },
};
</script>

<style>
.footerImgCss-wrap {
  /* height: 156px;
    width: 100%; */
}
.footerImgCss-content {
  width: 1360px;
  margin: 0 auto;
  padding: 40px 0;
  display: flex;
  justify-content: space-between;
}
.footerImgCss-content img{
  border: 1px solid #eee;
  width: 222px;
  height: auto;
}
</style>