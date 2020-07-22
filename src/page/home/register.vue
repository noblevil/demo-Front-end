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
            <h4 class="login-title">注册</h4>

            <el-form ref="registerForm" :label-position="left" :model="registerForm" label-width="100px" >
              <el-form-item label="登录账号" prop="orgAccount" >
                <el-input v-model="registerForm.orgAccount" auto-complete="off" placeholder="用户名" style="width: 300px" ></el-input>
              </el-form-item>
              <el-form-item label="登录密码" prop="passwd">
                <el-input v-model="registerForm.passwd" auto-complete="off" placeholder="密码"style="width: 300px"></el-input>
              </el-form-item>
              <el-form-item label="确认密码"prop="checkpasswd">
                <el-input v-model="registerForm.checkpasswd" auto-complete="off" placeholder="确认密码" style="width: 300px"></el-input>
              </el-form-item>
              <el-form-item label="验证邮箱" prop="email">
                <el-input v-model="registerForm.orgEmail" auto-complete="off" placeholder="邮箱" style="width: 300px"></el-input>
              </el-form-item>
              <el-form-item label="手机号码"prop="orgPhone">
                <el-input v-model="registerForm.orgPhone" auto-complete="off" placeholder="手机号" style="width: 300px"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="orgregister">注册</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </div>





  </div>
</template>
<script>
import myHeader from "@/components/home/my-header";


export default {
  name:"orgRegister",
  components: {
    myHeader
  },
  data(){
    return{
      registerForm:{
        orgAccount:'',
        orgPhone:'',
        orgEmail:'',
        passwd:'',
        checkpasswd:'',
  }
    }
  },
  methods:{
    orgregister(){
      console.log(JSON.stringify(this.registerForm))
    }
  }
};
</script>

<style lang="scss">
  @import "@/styles/login.scss";
.registerForm {
  padding-top: 100px;
  text-align: center;
}
</style>
