<template>
  <div class="navigation-wrap">
    <div class="content-wrap">
      <img class="n-c-img" :src="brandImg" alt="">
      <ul class="c-ul">
        <li class="c-li" v-for="(item, index) in navigationList" :key="index">{{item.name}}</li>
        <div class="ipt-wrap">
          <input type="text" name="" value="" placeholder="Seach...">
          <i class="iconfont icon-sousuo"></i>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "navigation",
  data() {
    return {
      brandImg: require("@/assets/img/h-logo.png"),
      navigationList: [
        {
          name: "首页",
          isSel: true,
        },
        {
          name: "造价要闻",
          isSel: false,
        },
        {
          name: "政策文件",
          isSel: false,
        },
        {
          name: "信息价",
          isSel: false,
        },
        {
          name: "综合答疑",
          isSel: false,
        },
        {
          name: "关于我们",
          isSel: false,
        },
      ],
    };
  },
};
</script>

<style scoped>
.n-c-img{
  height: 100%;
  margin-left: -12px
}
::-webkit-input-placeholder {
	color: #bbbbbb;
}
.icon-sousuo {
  width: 36px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  background: #c2c2c2;
	cursor: pointer;
}
.ipt-wrap input {
  border: 1px solid #e1e1e1;
  padding-left: 8px;
  width: 188px;
  height: 32px;

  background: none;
  outline: none;
}
.ipt-wrap {
  font-size: 12px;
  display: flex;
	margin-left: 10px;
	color:#fff;
}
.c-li {
  font-size: 16px;
  margin: 0 25px;
	cursor: pointer;
}
.c-ul {
  width: 894px;
  display: flex;
	justify-content: space-between;
  align-items: center;
}
.content-wrap {
  width: 1360px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.navigation-wrap {
  height: 90px;
  width: 100%;
}
</style>