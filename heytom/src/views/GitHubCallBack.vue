<template>
  <div>等待</div>
</template>

<script>
import { githubCallBack, getUserInfoRequest } from "../api/api";
export default {
  data() {
    return {};
  },
  created() {
    var requestCode = this.$utils.getUrlKey("code");

    var param = { code: requestCode };
    window.console.log(param);
    this.CallBack(param);
  },
  methods: {
    CallBack(param) {
      githubCallBack(param)
        .then(
          function(res) {
            if (res.IsSuccess) {
              window.localStorage.setItem("token", res.TModel.Token);
              this.$notify({
                type: "success",
                message: `成功获取令牌，项目初始化中...`,
                duration: 2000
              });
              this.GetUserInfo();
            } else {
              this.$message.error({
                message: "授权失败"
              });
            }
          }.bind(this)
        )
        .catch(
          function() {
            this.$notify.error({
              title: "错误",
              message: "无法连接服务器"
            });
          }.bind(this)
        );
    },

    GetUserInfo() {
      getUserInfoRequest()
        .then(
          function(res) {
            if (res.IsSuccess) {
              this.$notify({
                type: "success",
                message: `获取用户信息成功`,
                duration: 2000
              });
              var userInfoStr = JSON.stringify(res.TModel);
              window.console.log(userInfoStr);
              window.localStorage.setItem("userInfo", userInfoStr);
            }
            this.$router.push("/");
          }.bind(this)
        )
        .catch(
          function(err) {
            if (err.response) {
              this.$message({
                message: "获取用户信息失败",
                type: "error"
              });
            }
          }.bind(this)
        );
    }
  }
};
</script>
