<template>
  <div class="messageBox">
      <div class="messageBox_left">
          <div style="margin:2% 0 10% 0">
              <span style="margin-right:25%;font-size:18px">政策文件</span>
              <span v-html="'查看更多&nbsp;&nbsp;&nbsp;&gt;&nbsp;&gt;'" style="color:#666666; cursor: pointer"></span>
          </div>
          <ul>
              <li>
                  <a class="title">关于开展评选2020年度先进单位和优秀个人活动的通知</a>
                  <div class="time">2021-02-04</div>
              </li>
              <li>
                  <a class="title">【支部动态】深航建党支部开展民主评选和召开组织...</a>
                  <div class="time">2021-02-04</div>
              </li>
              <li>
                  <a class="title">深圳市造价工程师协会2021年1月新会员公告</a>
                  <div class="time">2021-02-04</div>
              </li>
              <li>
                  <a class="title">【支部动态】华阳造价党支部召开组织生活会和进行民...</a>
                  <div class="time">2021-02-04</div>
              </li>
              <li>
                  <a class="title">【支部动态】深航建党支部开展民主评选和召开组织...</a>
                  <div class="time">2021-02-04</div>
              </li>
          </ul>
      </div>
      <div class="messageBox_center">
          <div style="margin:2% 0 10% 0">
              <span style="margin-right:25%;font-size:18px">综合答疑</span>
              <span v-html="'查看更多&nbsp;&nbsp;&nbsp;&gt;&nbsp;&gt;'" style="color:#666666; cursor: pointer"></span>
          </div>
          <ul>
              <li>
                  <a class="title">关于办理造价师注册有关问题的说明</a>
                  <div class="time">2021-02-04</div>
              </li>
              <li>
                  <a class="title">造价工程师注册有那些规定？</a>
                  <div class="time">2021-02-04</div>
              </li>
              <li>
                  <a class="title">关于印发《造价工程师继续教育实行网络教育的...</a>
                  <div class="time">2021-02-04</div>
              </li>
              <li>
                  <a class="title">造价工程师年度考试时间安排</a>
                  <div class="time">2021-02-04</div>
              </li>
              <li>
                  <a class="title">造价工程师资格考试成绩管理</a>
                  <div class="time">2021-02-04</div>
              </li>
          </ul>
      </div>
      <div class="messageBox_right">
          <div>会员单位</div>
          <ul>
              <li>深圳华粤城市建设工程设计有限公司</li>
              <li>深圳市耀鹏工程咨询有限公司</li>
              <li>深圳市广汇源环境水务有限公司</li>
              <li>深圳市精确工程造价咨询有限公司</li>
              <li>深圳市大湾工程顾问有限公司</li>
              <li>深圳市建恒源工程造价咨询有限公司</li>
              <li>深圳市栋森工程项目管理有限公司</li>
              <li>深圳高速工程顾问有限公司</li>
              <li>深圳市合创建设工程顾问有限公司</li>
              <li>广东诚安信工程造价咨询有限公司</li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
    name:"materiaFile",
}
</script>

<style>
.messageBox{
    width: 1360px;
    margin: 0 auto;
    display: flex;
    padding: 50px 0 0 0 ;
    justify-content: space-between;
}
.messageBox_left{
    width: 32%;
    height: 100%;
}
.messageBox_center{
    width: 32%;
    height: 100%;
}
.messageBox_right{
    width: 32%;
    height: 100%;
}
.messageBox ul{
    /* margin: 0 5px; */
    border: 1px solid #eee;
    box-shadow: 0 0 7px 0px rgba(30, 33, 34, 0.13);
}
.messageBox li{
    margin: 5% 6% ;
}
.messageBox_right ul{
    /* margin: 0 5px; */
    padding: 3% 0 ;
}
.messageBox_right li{
    margin: 4.2% 10% ;
    cursor: pointer;
    font-size: 14px;
}
.messageBox_right div{
    margin:2% 0 10% 0;
    font-size:18px;
}
.title{
    font-size: 14px;
    cursor:pointer;
    display: inline-block;
    /* height: 20px; */
    padding: 10px 0;
}
.time{
    font-size: 13px;
    color:#909399;
}
</style>