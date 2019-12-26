<template>
  <div>
    <el-col :span="4">
      <el-menu default-active="2" class="el-menu-vertical-demo">
        <el-menu-item index="1">
          <template slot="title">
            <router-link to="/Vip/Post" style="text-decoration:none">
              <i class="el-icon-location"></i>
              <span>个人资料</span>
            </router-link>
          </template>
        </el-menu-item>
        <el-menu-item index="2">
          <template slot="title">
            <router-link to="/Vip/Post" style="text-decoration:none">
              <i class="el-icon-menu"></i>
              <span>发布</span>
            </router-link>
          </template>
        </el-menu-item>
        <el-menu-item index="3">
          <template slot="title">
            <router-link to="/Vip/Post" style="text-decoration:none">
              <i class="el-icon-document"></i>
              <span>我的动态</span>
            </router-link>
          </template>
        </el-menu-item>
        <el-menu-item index="4">
          <template slot="title">
            <router-link to="/Vip/Post" style="text-decoration:none">
              <i class="el-icon-setting"></i>
              <span>我的领养</span>
            </router-link>
          </template>
        </el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="20">
      <router-view></router-view>
    </el-col>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>