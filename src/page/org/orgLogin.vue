<template>
  <el-container>
    <el-header>
      <!-- <myHeader></myHeader> -->
      区块链智慧教育平台
    </el-header>
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
                    <el-input v-model="org.orgName" placeholder="公司名称(不可修改)" disabled></el-input>
                  </el-form-item>
                  <el-form-item prop="repassword" label="手机号码">
                    <el-input
                      v-model="org.orgphone"
                      placeholder="手机号码"
                      v-bind:disabled="flag!=true"
                    ></el-input>
                  </el-form-item>
                  <el-form-item prop="repassword" label="公司电话">
                    <el-input
                      v-model="org.orgPhone"
                      placeholder="公司电话"
                      v-bind:disabled="flag!=true"
                    ></el-input>
                  </el-form-item>
                  <el-form-item prop="repassword" label="邮箱地址">
                    <el-input v-model="org.orgEmail" placeholder="邮箱地址(不可修改)" disabled></el-input>
                  </el-form-item>
                  <el-form-item prop="password" label="密码">
                    <el-input
                      v-model="org.passwd"
                      show-password
                      placeholder="密码"
                      v-bind:disabled="flag!=true"
                    ></el-input>
                  </el-form-item>
                  <el-button type="primary" @click="toReverseFlag" round>修 改</el-button>
                  <el-button type="success" @click="toReverseFlagFalse"  round>确 定</el-button>
                </el-form>
              </el-row>
            </div>
          </div>
          <div v-else-if="stepActive === 2">
            <div class="register-wrap">
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span style="float: left; padding: 3px;" type="text" >基本信息</span>
                  <el-button style="float: right; padding: 3px" type="text" @click="toReverseFflagFalse">确  定</el-button>
                  <el-button style="float: right; padding: 3px" type="text" @click="toReverseFflag">修 改</el-button>

                </div>
                <div class="text item">
                  <el-form ref="loginForm" :model="user" status-icon label-width="80px">
                    <el-row type="flex" justify="center">
                      <el-form-item label="常用联系人1">
                        <el-input v-model="org.linkmanOne" placeholder v-bind:disabled="fflag!=true"></el-input>
                      </el-form-item>
                      <el-form-item label="常用联系人1-手机">
                        <el-input v-model="org.linkmanOnePhone" placeholder v-bind:disabled="fflag!=true"></el-input>
                      </el-form-item>
                    </el-row>
                    <el-row type="flex" justify="center">
                      <el-form-item label="常用联系人2">
                        <el-input v-model="org.linkmanTwo" placeholder v-bind:disabled="fflag!=true"></el-input>
                      </el-form-item>
                      <el-form-item label="常用联系人2-手机">
                        <el-input v-model="org.linkmanTwoPhone" placeholder v-bind:disabled="fflag!=true"></el-input>
                      </el-form-item>
                    </el-row>
                    <el-row type="flex" justify="center">
                      <el-form-item label="企业电话">
                        <el-input v-model="org.orgPhone" placeholder v-bind:disabled="fflag!=true"></el-input>
                      </el-form-item>
                      <el-form-item label="场地性质">
                        <el-select v-model="org.siteProperties" placeholder v-bind:disabled="fflag!=true">
                          <el-option label="自有" value="自有"></el-option>
                          <el-option label="租用" value="租用"></el-option>
                          <el-option label="其他" value="其他"></el-option>
                        </el-select>
                      </el-form-item>
                    </el-row>
                  </el-form>
                </div>
              </el-card>
            </div>
            <div class="register-wrap">
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span style="float: left; padding: 3px;" type="text" >重要信息</span>
                </div>
                <div class="text item">
                  <el-form ref="loginForm" :model="user" status-icon label-width="80px">
                    <el-row type="flex" justify="center">
                      <el-form-item label="企业名">
                        <el-input v-model="org.orgName" placeholder="企业名称" disabled></el-input>
                      </el-form-item>
                      <el-form-item label="企业简称">
                        <el-input v-model="org.orgSimpleName" placeholder="企业简称" disabled></el-input>
                      </el-form-item>
                    </el-row>
                    <el-row type="flex" justify="center">
                      <el-form-item label="注册地址">
                        <el-input v-model="org.registerAddress" placeholder disabled></el-input>
                      </el-form-item>
                      <el-form-item label="常用地址">
                        <el-input v-model="org.oftenAddress" placeholder disabled></el-input>
                      </el-form-item>
                    </el-row>
                    <el-row type="flex" justify="center">
                      <el-form-item label="统一社会信用代码">
                        <el-input v-model="org.unifiedCode" placeholder disabled></el-input>
                      </el-form-item>
                      <el-form-item label="资质类别">
                        <el-select v-model="org.qualificationCategory" placeholder disabled>
                          <el-option label="有办学许可证" value="有办学许可证"></el-option>
                          <el-option label="无办学许可证，有营业执照" value="无办学许可证，有营业执照"></el-option>
                          <el-option label="无办学许可证，无营业执照" value="无办学许可证，无营业执照"></el-option>
                        </el-select>
                      </el-form-item>
                    </el-row>
                  </el-form>
                </div>
              </el-card>
            </div>
          </div>

          <div v-else-if="stepActive === 3">
            <div class="register-wrap">
              <div class="certification">
                <el-row type="flex" justify="center">
                  <el-form ref="loginForm" :model="user" status-icon label-width="80px">
                    <el-form-item prop="accountPhone" label="ICP备案号">
                      <el-input v-model="org.orgName" placeholder disabled></el-input>
                    </el-form-item>
                    <el-form-item prop="repassword" label="电信业务经营许可证">
                      <el-input v-model="org.orgphone" placeholder="手机号码" disabled></el-input>
                    </el-form-item>
                    <el-form-item prop="repassword" label="网络安全等级保护定级备案证明">
                      <el-input v-model="org.orgPhone" placeholder disabled></el-input>
                    </el-form-item>

                    <el-button type="primary" @click="toReverseFlag" round>修 改</el-button>
                    <el-button type="success" round>确 定</el-button>
                  </el-form>
                </el-row>
              </div>
            </div>
          </div>
          <div v-else-if="stepActive === 4">
          <teachermanager></teachermanager>
          </div>
          <div v-else>
            <course></course>
          </div>
        </el-main>
      </el-container>
    </el-container>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
import myHeader from "@/components/home/my-header";
import Teachermanager from "./teachermanager";
import Course from "./course";
export default {
  components: {
    Course,
    Teachermanager,
    myHeader,
  },
  data() {
    return {
      stepActive: 1,
      flag: false,
      fflag: false,
      org: {
        orgEmail: "mayun@Alibaba",
        passwd: "333333",
        orgPhone: "377",
        orgphone: "155",
        orgName: "阿里巴巴",
        orgSimpleName:"阿里",
        registerAddress:"杭州市余杭区",
        oftenAddress:"杭州阿里巴巴",
        unifiedCode:"37xxxxxxxx",
        qualificationCategory:"有办学许可证",
        siteProperties:"自有",
        linkmanTwoPhone:"3778818",
        linkmanTwo:"蔡崇信",
        linkmanOne:"马云",
        linkmanOnePhone:"3778817",
      }
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
    },
    toReverseFlagFalse() {
      this.flag = false;
    },
    toReverseFflag(){
      this.fflag = true;
    },
    toReverseFflagFalse(){
      this.fflag = false;
    }
  }
};
</script>


<style lang="scss" scoped>
@import "@/styles/org.scss";
/deep/.certification .el-form-item__content {
  margin-left: 280px !important;
}
/deep/.certification .el-form-item__label {
  width: 250px !important;
}
/deep/ .box-card .el-form-item__content{
  margin-left: 180px !important;
}
/deep/ .box-card .el-form-item__label{
  width: 180px !important;
}
/deep/ .el-input.is-disabled .el-input__inner {
  background-color: white;
}
// card模块
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.clearfix {
  height: 30px;
}
.box-card {
  width: 960px;
}
</style>
