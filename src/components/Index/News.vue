<template>
  <div class="news-wrap">
    <div class="n-content">
      <div class="n-c-l">
        <div class="n-c-title">
          <h3>造价要闻</h3>
          <span v-html="'查看更多&nbsp;&nbsp;&nbsp;&gt;&nbsp;&gt;'"></span>
        </div>
        <ul class="important-news-wrap">
          <li class="important-news-content" v-for="(item, index) in importantNewsList" :key="index">
            <div class="important-news-card">
              <img :src="item.cardImg" alt="">
              <div class="important-news-card-text">
                <h4>{{item.cardTitle}}</h4>
                <span>{{item.cardDay}}</span>
              </div>
            </div>
            <div class="important-news-text-wrap">
              <div class="important-news-list-wrap" v-for="(nItem, nIndex) in item.importantNewsText" :key='nIndex'>
                <h3>{{nItem.importantNewsTitle}}</h3>
                <div class="important-news-text-describe">{{nItem.importantNewsDescribe}}</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="n-c-r">
        <div class="n-c-title">
          <h3>公告通知</h3>
          <span v-html="'查看更多&nbsp;&nbsp;&gt;&nbsp;&gt;'"></span>
        </div>
        <ul class="bulletin-wrap">
          <li class="bulletin-content" v-for="(item, index) in bulletinList">
            <h3>{{item.bulletinTitle}}</h3>
            <span class="bulletin-day">{{item.bulletinDay}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "news",
  data() {
    return {
      importantNewsList: [
        {
          cardImg: require("@/assets/img/news1.png"),
          cardTitle: "深价协2020年度秘书处工作总结会议新闻稿",
          cardDay: "2020-12-02",
          importantNewsText: [
            {
              importantNewsTitle: "深价协2020年度秘书处工作总结会议新闻稿",
              importantNewsDescribe:
                " 2021年是中国共产党成立100周年，是实施“十四五”规划、开启全面建设社会主义现代化国家新征程的第一年。协会要勇于适应新形式，做好专业服务，作为先行示范区，在改革前沿，进一步推动工程造价管理改革，为我市工程造价咨询行业健康发展贡献力量，先行示范，再创辉煌！",
            },
            {
              importantNewsTitle: "广州市工程造价行业协会到深价协考察交流",
              importantNewsDescribe:
                "  1月14日下午，广州市工程造价行业协会黄华英会长携第三届粤港澳大湾区大型基建项目管理创新高峰论坛筹备组、广州协会会员单位代表孙权总经理、丘文总经理等莅临深价协开展交流座谈，我协会吴慧博会长、赛绪志副会长、黄维芬副会长、张燕燕秘书长协同秘书处成员陪同交流座谈。",
            },
          ],
        },
        {
          cardImg: require("@/assets/img/news2.png"),
          cardTitle: "深圳市2020年建筑工程（工程造价）专业职称",
          cardDay: "2020-11-18",
          importantNewsText: [
            {
              importantNewsTitle: "2020年深圳市建设工程造价相关政策宣贯培训活动揭开序幕",
              importantNewsDescribe:
                "为更好地加强工程造价从业人员对今年新出台的相关工程造价政策的认识和理解,提高建设工程造价管理水平，受深圳市住房和建设局委托,深圳市建设工程造价管理站主办、深圳市造价工程师协会承办的2020年深圳市建设工程造价相关政策宣贯培训活动，于2020年11月26日至27日拉开帷幕。",
            },
            {
              importantNewsTitle: "协会领导赴江苏工程造价管理协会开展交流工作",
              importantNewsDescribe:
                " 为贯彻落实住房和城乡建设部关于《工程造价改革工作方案》的要求，为了学习更多的优质管理经验，共同探讨工程造价改革，促进企业造价数据积累，进一步推动工程造价改革落实。2020年11月26日至27日，深圳市造价工程师协会会长吴慧博率领协会协会副会长、咨询公司代表等一行17人赴江苏省工程造价管理协会、捷宏润安工程顾问有限公司开展交流工作。交流工作主要围绕“面对行业变革，造价咨询企业向智慧造价转型、造价云数据的发展、质控及人才管理如何适应发展需求”等主题展开。随行参加本次考察调研的有党委书记吴慧燕、协会党委副书记、纪委书记程晓丹、副会长赛绪志、副会长黄维芬及11位咨询公司代表。",
            },
          ],
        },
      ],
      bulletinList:[
        {
          bulletinTitle:"关于开展评选2020年度先进单位和优秀个人活动的通知",
          bulletinDay:'2021-02-04'
        },
        {
          bulletinTitle:"关于开展评选2020年度先进单位和优秀个人活动的通知",
          bulletinDay:'2021-02-04'
        },
        {
          bulletinTitle:"关于开展评选2020年度先进单位和优秀个人活动的通知",
          bulletinDay:'2021-02-04'
        },
        {
          bulletinTitle:"关于开展评选2020年度先进单位和优秀个人活动的通知",
          bulletinDay:'2021-02-04'
        },
        {
          bulletinTitle:"关于开展评选2020年度先进单位和优秀个人活动的通知",
          bulletinDay:'2021-02-04'
        },
        {
          bulletinTitle:"关于开展评选2020年度先进单位和优秀个人活动的通知",
          bulletinDay:'2021-02-04'
        },
        {
          bulletinTitle:"关于开展评选2020年度先进单位和优秀个人活动的通知",
          bulletinDay:'2021-02-04'
        }
      ]
    };
  },
};
</script>

<style scoped>
.bulletin-day{
  font-size: 14px;
  color: #666666;
}
.bulletin-content h3{
  font-size: 16px;
  padding-bottom: 8px;
}
.bulletin-content{
  padding: 14px 0;
}
.bulletin-wrap{
  padding: 24px 20px;
  /* height: 100%; */
  box-shadow: 0 0 7px 0px rgba(30, 33, 34, 0.13);
}
.important-news-wrap :nth-last-child(1).important-news-content{
  margin-left: 14px;
}
.important-news-wrap :nth-last-child(1) .important-news-list-wrap{
  margin-bottom: 20px;
}
.important-news-content {
  width: 450px;
}
.important-news-text-describe {
  color: #888888;
  font-size: 14px;
  line-height: 20px;
  padding-right: 34px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.important-news-list-wrap h3 {
  font-size: 16px;
  padding: 12px 0;
}
.important-news-text-wrap {
  padding-top: 26px;
}
.important-news-card-text span {
  font-size: 14px;
  color: #666666;
}
.important-news-card-text h4 {
  font-size: 16px;
  padding-bottom: 14px;
}
.important-news-card-text {
  padding: 20px 52px 18px 52px;
}
.important-news-card {
  height: 318px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 7px 0px rgba(30, 33, 34, 0.13);
}
.important-news-card:hover {
  box-shadow: 0 2px 15px 0 rgba(30, 33, 34, 0.13);
}
.important-news-wrap {
  width: 100%;
  /* height: 100%; */
  display: flex;
  /* justify-content: space-between; */
}
.n-c-title span {
  font-size: 16px;
  margin-left: 64px;
  color: #666666;
  cursor: pointer;
}
.n-c-title h3 {
  font-size: 20px;
}
.n-c-title {
  display: flex;
  align-items: center;
  padding: 42px 0 40px;
}
.n-c-r {
  width: calc(1360px - 930px);
  height: 100%;
  /* background: pink; */
}
.n-c-l {
  width: 930px;
  height: 100%;
  /* background: skyblue; */
}
.n-content {
  width: 1360px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: start;
}
.news-wrap {
  height: 658px;
  width: 100%;
}
</style>