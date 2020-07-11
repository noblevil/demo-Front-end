<template>
<div>
  <el-container>
    <el-header>Header</el-header>
    <el-main>
      <el-input v-model="userName" placeholder="请输入内容"></el-input>
      <el-input placeholder="请输入密码" v-model="passWord" show-password></el-input>
      <el-button type="primary" @click="login">登录</el-button>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</div>
</template>

<script>
  import {teacherLogin} from '@/api/teacher/teacher_after_login/teacher_after_login'
    export default {
        name: "teacher_test",
      data(){
          return{
            userName:'',
            passWord:''

          }
      },
      methods:{
          login(){
            teacherLogin(this.userName,this.passWord).then(res=>{
              console.log(res)
            })
          }
      },
    }
</script>

<style scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

</style>
