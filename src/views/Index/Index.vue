<template>
  <div>
    <Header></Header>
    <Navigation></Navigation>
    <Banner></Banner>
    <News></News>
    <TableData></TableData>
    <MaterialFile></MaterialFile>
    <FooterImg></FooterImg>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Index/Header.vue";
import Navigation from "@/components/Index/Navigation.vue";
import Banner from "@/components/Index/Banner.vue";
import News from "@/components/Index/News.vue";
import TableData from "@/components/Index/Table.vue";
import MaterialFile from "@/components/Index/MaterialFile.vue";
import FooterImg from "@/components/Index/FooterImg.vue";
import Footer from "@/components/Index/Footer.vue";
export default {
  name: "index",
  components: {
    Header,
    Footer,
    Banner,
    News,
    TableData,
    MaterialFile,
    FooterImg,
    Navigation
  },
};
</script>

<style>
</style>