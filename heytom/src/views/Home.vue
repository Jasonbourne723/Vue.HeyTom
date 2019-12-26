<template>
  <div>
    <el-carousel :interval="4000" type="card" height="400px">
      <el-carousel-item v-for="(item,index) in images" :key="index">
        <img :src="item" style="width:100%;" />
      </el-carousel-item>
    </el-carousel>
    <el-container class="newsContainer">
      <el-header class="SearchForLostPetsHeader">
        <el-link href="#" style="margin-left:30px;color:black">
          <i class="el-icon-platform-eleme"></i>
          {{news[newsFirstIndex].content}}
        </el-link>
        <el-link href="#" style="margin-left:30px;color:black">
          <i class="el-icon-platform-eleme"></i>
          {{news[newsSecondIndex].content}}
        </el-link>
        <el-link href="http://www.baidu.com" style="float:right;" type="success">
          <span>更多</span>
          <i class="el-icon-d-arrow-right"></i>
        </el-link>
      </el-header>
    </el-container>
    <div style="margin:20px">
      <el-container class="SearchForLostPetsContainer">
        <el-header class="SearchForLostPetsHeader">
          <span>猫咪想要一个温暖的家</span>
          <el-link href="http://www.baidu.com" style="float:right;" type="success">
            <span>更多</span>
            <i class="el-icon-d-arrow-right"></i>
          </el-link>
        </el-header>
        <div class="SearchForLostPets">
          <el-col :span="6" v-for="(o, index) in 8" :key="index">
            <PetCard :item="petCardData"></PetCard>
          </el-col>
        </div>
      </el-container>
    </div>
    <el-backtop></el-backtop>
  </div>
</template>
<script>
import PetCard from "../components/PetCard";
export default {
  components: { PetCard },
  data() {
    return {
      news: [
        {
          id: 1,
          content: "青春是一个短暂的美梦, 当你醒来时, 它早已消失无踪少量的邪"
        },
        {
          id: 2,
          content:
            "小黑唐小黑唐小黑唐小黑唐小黑唐小黑唐小黑唐小黑唐小黑唐小黑唐"
        },
        {
          id: 3,
          content:
            "你好旧时光你好旧时光你好旧时光你好旧时光你好旧时光你好旧时光你好旧时光"
        }
      ],
      newsFirstIndex: 0,
      newsSecondIndex: 1,
      newsCount: 0,
      images: [
        "http://img.mp.itc.cn/upload/20170505/2bf4608308dc4e0ba8aac1fb0cfd7e34_th.jpeg",
        "http://file02.16sucai.com/d/file/2014/1013/dbc4a4d81dfb9f1cfaec983bf624bf1c.jpg",
        "http://img5.imgtn.bdimg.com/it/u=384371537,2335498098&fm=26&gp=0.jpg",
        "http://img.pconline.com.cn/images/upload/upc/tx/wallpaper/1209/18/c1/13928428_1347952057245.jpg"
      ],
      newImage:
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576669764986&di=11492d5d7399eef81f6c794d24485ce2&imgtype=jpg&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D4082295213%2C2085352175%26fm%3D214%26gp%3D0.jpg",
      petCardData: {
        image:
          "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
        title: "好吃的汉堡"
      }
    };
  },
  methods: {
    RefreshNews() {
      this.newsCount = this.newsCount + 1;
      this.newsFirstIndex = this.newsCount % this.news.length;
      this.newsCount = this.newsCount + 1;
      this.newsSecondIndex = this.newsCount % this.news.length;
    }
  },
  mounted() {
    this.timer = setInterval(this.RefreshNews, 3000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  activated() {
    window.console.log("触发homeactivated");
  }

};
</script>
<style>
.newsLogo {
  /* background-color: #ffffff; */
  color: #333;
  text-align: center;
}
.el-main {
  background-color: cadetblue;
  color: #333;
  text-align: right;
  height: 300px;
}
.newsHead {
  background-color: honeydew;
  color: black;
  font-size: medium;
  text-align: left;
  line-height: 60px;
}
/* .newsContainer {
   background-color: honeydew;
} */
.newsDetail {
  text-align: left;
  font-size: x-large;
  line-height: 200%;
}
.SearchForLostPetsHeader {
  background-color: gainsboro;
  line-height: 60px;
}
.SearchForLostPets {
  margin-left: 50px;
  margin-right: 50px;
}
</style>