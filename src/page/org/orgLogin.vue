<template>
  <el-container>
    <el-header>区块链智慧教育平台</el-header>
    <!-- <div class="register clearfix"> -->

    <el-container style="height:700px">
      <el-aside style="background-color: rgb(84, 92, 100);width:'200px'">
        <!-- <div class="register-wrap"> -->
        <el-col :span="12" style="width:200px">
          <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-menu-item index="1" @click="toAccountInfo">
              <i class="el-icon-user"></i>
              <span slot="title">账号信息</span>
            </el-menu-item>

            <el-menu-item index="2" @click="toOrgInfo">
              <i class="el-icon-user-solid"></i>
              <span slot="title">机构信息</span>
            </el-menu-item>

            <el-menu-item index="3" @click="toCertification">
              <i class="el-icon-document"></i>
              <span slot="title">资质材料</span>
            </el-menu-item>
            <el-menu-item index="4" @click="toTeach">
              <i class="el-icon-s-operation"></i>
              <span slot="title">教师管理</span>
            </el-menu-item>
            <el-menu-item index="5" @click="toTrainCourse">
              <i class="el-icon-setting"></i>
              <span slot="title">培训课程</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-aside>

      <el-container>
        <el-main>
          <div v-if="stepActive === 1">
            <div class="register-wrap">
              <el-row type="flex" justify="center">
                <el-form ref="loginForm" :model="user" status-icon label-width="80px">
                  <el-form-item prop="accountPhone" label="公司名称">
                    <el-input v-model="orgName" placeholder="公司名称(不可修改)" disabled></el-input>
                  </el-form-item>
                  <el-form-item prop="repassword" label="手机号码">
                    <el-input v-model="orgphone" placeholder="手机号码" :disabled="flag"></el-input>
                  </el-form-item>
                  <el-form-item prop="repassword" label="公司电话">
                    <el-input v-model="orgPhone" placeholder="公司电话" :disabled="flag"></el-input>
                  </el-form-item>
                  <el-form-item prop="repassword" label="邮箱地址">
                    <el-input v-model="orgEmail" placeholder="邮箱地址(不可修改)" disabled></el-input>
                  </el-form-item>
                  <el-form-item prop="password" label="密码">
                    <el-input v-model="passwd" placeholder="密码" :disabled="flag"></el-input>
                  </el-form-item>
                  <el-button type="primary" @click="toReverseFlag" round>修 改</el-button>
                  <el-button type="success" round>确 定</el-button>
                </el-form>
              </el-row>
            </div>
          </div>
          <div v-else-if="stepActive === 2">
            <div>机构信息</div>
          </div>
          <div v-else-if="stepActive === 3">资质材料</div>
          <div v-else-if="stepActive === 4">教师管理</div>
          <div v-else>培训课程</div>
        </el-main>
      </el-container>
    </el-container>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
export default {
  props: {
    disabled: {
      default: false
    }
  },
  data() {
    return {
      stepActive: 1,
      org: {}
    };
  },
  computed: {},
  methods: {
    toAccountInfo() {
      this.stepActive = 1;
    },
    toOrgInfo() {
      this.stepActive = 2;
    },
    toCertification() {
      this.stepActive = 3;
    },
    toTeach() {
      this.stepActive = 4;
    },
    toTrainCourse() {
      this.stepActive = 5;
    },
    toReverseFlag() {
      this.flag = true;
    }
  }
};
</script>


<style lang="scss" scoped>
@import "@/styles/org.scss";
</style>