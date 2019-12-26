<template>
  <div id="app">
    <transition v-if="!$route.meta.NoNeedHome">
      <div>
        <el-menu default-active="1" class="el-menu-container" mode="horizontal">
          <el-menu-item index="0">
            <router-link class="menu-title" to="/" style=" text-decoration:none">Hey Tom</router-link>
          </el-menu-item>
          <el-menu-item index="1">
            <router-link class="menu-title" to="/" style=" text-decoration:none">首页</router-link>
          </el-menu-item>
          <el-menu-item index="2">
            <router-link class="menu-title" to="/about">领养</router-link>
          </el-menu-item>
          <el-menu-item index="3">
            <router-link class="menu-title" to="/login">社区</router-link>
          </el-menu-item>
          <el-menu-item index="4">
            <router-link class="menu-title" to="/about">猫咪百科</router-link>
          </el-menu-item>
          <el-dropdown style="float:right;margin-right:20px;text-align: center;line-height: 60px;">
            <i class="el-icon-user-solid">{{userInfo.Name}}</i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人资料</el-dropdown-item>
              <el-dropdown-item>我的贴子</el-dropdown-item>
              <el-dropdown-item @click.native="logOut">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-menu-item
            index="5"
            style="float:right;margin-right:20px;text-align: center;line-height: 60px;"
          >
            <router-link class="menu-title" to="/Vip/Post" style="color:black">
              <i class="el-icon-edit"></i>发布
            </router-link>
          </el-menu-item>
        </el-menu>
        <div style="margin:20px">
            <router-view />
        </div>
      </div>
    </transition>
    <transition v-else name="fade" mode="out-in">
        <router-view></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userInfo: {
        Name: "",
        Id: 0,
        Role: ""
      }
    };
  },
  methods: {
    logOut() {
      window.localStorage.removeItem("userInfo");
      window.localStorage.removeItem("token");
      this.userInfo = { Name: "未登录" };
    }
  },
  beforecreate: function() {},
  created: function() {
    var userInfoStr = window.localStorage.getItem("userInfo");
    if (userInfoStr) {
      this.userInfo = JSON.parse(userInfoStr);
    } else {
      this.userInfo = { Name: "未登录" };
    }

    window.console.log(this.userInfo);
  },
  mounted() {
    window.console.log("1111111111111");
  },
  watch: {
    "$route.path": function(newVal, oldVal) {
      if (oldVal === "/login") {
        var userInfoStr = window.localStorage.getItem("userInfo");
        this.userInfo = JSON.parse(userInfoStr);
      }
    }
  }
};
</script>
<style>
.menu-title {
  text-decoration: none;
  /* font-size: x-small; */
}
/* .AdPosition
{
  background-color:white;
  margin: 10px;
  margin-left: 10px; 
  height: 1000px;
  float: right;
  text-align: left;
  border-style: solid;
  border-color: grey;
  border-width: medium;
} */
</style>