<template>
  <div>
    <div>
      <my-header></my-header>
    </div>

    <div class="login-container" ref="login" @keyup.enter.native="handleLogin">
      <div class="login-weaper animated bounceInDown">
        <div class="login-left">
          <!--          <img class="img"-->
          <!--               src="/img/logo.png"-->
          <!--               alt="">-->
          <!-- logo预留位-->
          <p class="title">{{ $t('login.info') }}</p>
        </div>

        <div class="login-border">
          <div class="loginForm">
            <h4 class="login-title">登录</h4>
            <el-form :inline="true" ref="form" :model="loginForm" label-width="100px">
              <el-row>
                <el-form-item label="角色：">
                  <el-select v-model="loginForm.role" style="width:360px" placeholder="请选择">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </el-row>

              <el-row>
                <el-form-item label="账号：">
                  <el-input
                    v-model="loginForm.account"
                    style="width:360px"
                    placeholder="Email"
                    clearable
                  ></el-input>
                </el-form-item>
              </el-row>

              <el-row>
                <el-form-item label="密码：">
                  <el-input
                    v-model="loginForm.password"
                    style="width:360px"
                    placeholder="请输入密码"
                    clearable
                    show-password
                  ></el-input>
                </el-form-item>
              </el-row>
              <el-button type="primary" @click="userLogin">登录</el-button>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import myHeader from "@/components/home/my-header";
import { login } from "@/api/home/home";
import { mapMutations } from "vuex";

export default {
  components: {
    myHeader
  },
  data() {
    return {
      options: [
        {
          value: "org",
          label: "机构"
        },
        {
          value: "teach",
          label: "教师"
        }
      ],
      loginForm: {
        role: "",
        account: "",
        password: ""
      }
    };
  },
  methods: {
    ...mapMutations(["changeLogin"]),
    userLogin() {
      let _this = this;
      if (this.loginForm.account === "" || this.loginForm.password === "") {
        alert("账号或密码不能为空");
      } else {
        login(
          this.loginForm.account,
          this.loginForm.password,
          this.loginForm.role
        ).then(res => {
          console.log(res.data.data.token);
          _this.userToken = "Bearer " + res.data.data.token;
          // 将用户token保存到vuex中
          _this.changeLogin({ Authorization: _this.userToken });
          _this.$router.push("/home");
          alert("登陆成功");
        });
      }
    }
  }
};
</script>

<style>
.loginForm {
  /*padding-top: 100px;*/
  text-align: center;
}

.el-form-item {
  padding-top: 20px;
}
</style>
