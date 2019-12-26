<template>
  <div>
    <el-form
      class="register-container"
      :model="RegisterParm"
      status-icon
      :rules="rules"
      ref="RegisterParm"
    >
      <h3 class="title">注册</h3>
      <el-form-item
        prop="email"
        :rules="[
      { required: true, message: '请输入邮箱地址', trigger: 'blur' },
      { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
    ]"
      >
        <el-input v-model="RegisterParm.email" placeholder="邮箱"></el-input>
      </el-form-item>
      <el-form-item
        prop="NickName"
        :rules="[{ required: true, message: '请输入昵称', trigger: 'blur' }]"
      >
        <el-input v-model="RegisterParm.NickName" placeholder="昵称"></el-input>
      </el-form-item>
      <el-form-item prop="Password">
        <el-input
          type="password"
          v-model="RegisterParm.Password"
          auto-complete="off"
          placeholder="密码"
        ></el-input>
      </el-form-item>
      <el-form-item prop="CheckPassword">
        <el-input
          type="password"
          v-model="RegisterParm.CheckPassword"
          auto-complete="off"
          placeholder="确认密码"
        ></el-input>
      </el-form-item>
      <el-form-item prop="Code">
        <el-input v-model="RegisterParm.Code" placeholder="验证码" style="width:200px"></el-input>
        <el-button type="info" @click="SendVerCode">发送验证码</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="RegisterRequest" style="width:350px">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { sendVerificationCode, Register } from "../api/api";
export default {
  data() {
    var vaildatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    var validateCheckPass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.RegisterParm.Password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    var validateCode = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入验证码"));
      } else {
        callback();
      }
    };
    return {
      RegisterParm: {
        email: "",
        NickName: "",
        Password: "",
        CheckPassword: "",
        Code: ""
      },
      rules: {
        Password: [{ validator: vaildatePass, trigger: "blur" }],
        CheckPassword: [{ validator: validateCheckPass, trigger: "blur" }],
        Code: [{ validator: validateCode, trigger: "blur" }]
      }
    };
  },
  methods: {
    SendVerCode() {
      var requestParam = {
        Email: this.RegisterParm.email
      };
      window.console.log(requestParam);
      sendVerificationCode(requestParam)
        .then(
          function(res) {
            if (res.IsSuccess) {
              this.$notify({
                type: "success",
                message: `发送成功,请注意查收`,
                duration: 2000
              });
            } else {
               this.$message.error({
                message: "用户名或密码错误"
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
    RegisterRequest() {
      var requestParam = {
        email: this.RegisterParm.email,
        password: this.RegisterParm.Password,
        nickName: this.RegisterParm.NickName,
        code: this.RegisterParm.Code
      };
      Register(requestParam)
        .then(
          function(res) {
              window.console.log(res);
            if (res.IsSuccess) {
              this.$notify({
                type: "success",
                message: `注册成功`,
                duration: 2000
              });
              this.$router.push("/login");
            }
            else
            {
                this.$notify.error({
                    title:"错误",
                    message:res.Message
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
    }
  }
};
</script>
<style>
.register-container {
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  background-clip: padding-box;
  margin: 100px;
  /* margin-left: 300px; */
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
  z-index: 9999;
  position: relative;
}
.title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}
</style>