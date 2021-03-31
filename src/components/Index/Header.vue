<template>
  <div class="header-wrap">
    <div class="content-wrap">
      <div class="l-item">{{currentDay}}</div>
      <ul class="r-item">
        <li class="r-item-li">
          <i class="iconfont icon-dingdanchaxun"></i>
          <span>信息价查询</span>
        </li>
        <li class="r-item-li">
          <i class="iconfont icon-xunjia-"></i>
          <span>询价</span>
        </li>
        <li class="r-item-li">
          <i class="iconfont icon-denglu login"></i>
          <span class="login">登录</span>
          <span style="margin: 0 10px">|</span>
          <span class="register">注册</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "header-wrap",
  data() {
    return {
      currentDay: "",
    };
  },
  methods: {
    getCurrentDay() {
      this.currentDay = new Date().format("yyyy年MM月dd日 星期五 欢迎您");
    },
  },
  mounted() {
    this.getCurrentDay();
  },
};
</script>

<style scoped>
.register{
  cursor:pointer;
}
.login {
  cursor:pointer;
  color: #fd000e;
}
.iconfont {
  margin-right: 5px;
}
.r-item-li {
  margin-right: 18px;
}
.r-item {
  display: flex;
  cursor:default;
}
.l-item {
}
.content-wrap {
  margin: 0 auto;
  line-height: 34px;
  width: 1360px;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
}
.header-wrap {
  height: 34px;
  width: 100%;
  background: #dededf;
}
</style>