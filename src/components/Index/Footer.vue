<template>
  <div class="footer-wrap">
    <div class="content-wrap">
      <img :src="brandImg" class="brand-img" alt="">
      <ul class="f-text">
        <li>联系我们</li>
        <li>主办：深圳市造价工程师协会<i style="padding-left:40px">电话：（0755）83231498</i></li>
        <li>地址：深圳市福田区汽车大厦四楼A409室</li>
        <li>I粤ICP备14012334号-1</li>
      </ul>
      <img :src="QRcodeImg" class="qr-img" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "footer-wrap",
  data(){
    return {
      brandImg:require('@/assets/img/f-logo.png'),
      QRcodeImg:require('@/assets/img/qr.png')
    }
  }
};
</script>

<style scoped>
.f-text li{
  padding-bottom: 22px;
}
.f-text{
  padding-top: 14px;
  font-size: 12px;
  width: 444px;
}
.qr-img{
  height: 158px;
  width: 158px;
}
.brand-img{
  width: 334px;
  height: 82px;
}
.content-wrap{
  padding: 48px 0 0 0;
  margin: 0 auto;
  width: 1360px;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
}
.footer-wrap{
    width: 100%;
    height: 252px;
    background: #F1F1F1;
}
</style>