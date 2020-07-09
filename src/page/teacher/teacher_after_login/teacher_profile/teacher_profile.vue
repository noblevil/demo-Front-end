<template>
  <div>


    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="22"><div class="grid-content bg-purple"><h2>培训机构线上管理平台</h2></div></el-col>
      <el-col :span="2">
        <table  style="color: #e5e9f2" cellpadding="2px">
          <tr>
            <td rowspan="2">xxx老师</td>
            <td rowspan="2">
              <div class="grid-content bg-purple"><div class="el-icon-user-solid"></div></div>
            </td>
            <td ><el-button @click="gotoInfo(teacherId)">信息维护</el-button></td>
          </tr>
          <tr>
            <td><el-button @click="changePassword(teacherId)">修改密码</el-button></td>
          </tr>
        </table>
      </el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="center">
      <div class="line"></div>
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#20222a"
        text-color="#fff"
        active-text-color="#409EFF">
        <el-menu-item index="1" @click="profile">基本信息</el-menu-item>
        <el-menu-item index="2" @click="institution()">所在培训机构</el-menu-item>
        <el-menu-item index="3" @click="detail">学历专业技术职称</el-menu-item>
        <el-menu-item index="4" @click="experience">工作经历</el-menu-item>
        <el-menu-item index="5" @click="other">其他</el-menu-item>

      </el-menu>
    </el-row>

    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="12"><div class="grid-content bg-purple">
        <el-form

          :rules="profileRules"
          ref="profile"
          :model="profile"
          label-width="0">
          <table cellpadding="20">
            <tr>
              <td>姓名：</td>
              <td>{{profile.teachName}}</td>
              <td></td>
              <td width="100px"></td>
              <td>证件类型：</td>
              <td>{{profile.idType}}</td>
            </tr>
            <tr>
              <td>性别：</td>
              <td>{{profile.sex}}</td>
              <td></td>
              <td width="200px"></td>
              <td>证件号码：</td>
              <td>{{profile.idNum}}</td>
            </tr>
            <tr>
              <td>手机号码：</td>
              <td>{{profile.teachPhone}}</td>
              <td><el-button>修改</el-button></td>
              <td width="200px"></td>
              <td>出生日期：</td>
              <td>{{profile.teachBirth}}</td>
            </tr>
            <tr>
              <td>邮箱：</td>
              <td>{{profile.teachEmail}}</td>
              <td><el-button>修改</el-button></td>
              <td width="200px"></td>
              <td>国家地区：</td>
              <td>{{profile.nationality}}</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td width="200px"></td>
              <td>籍贯：</td>
              <td>{{profile.nationality}}</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td width="200px"></td>
              <td>政治面貌：</td>
              <td>
                <el-input  v-model="profile.politicalStatus" placeholder="profile.politicalStatus"></el-input>
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td width="200px"></td>
              <td>居住地址：</td>
              <td>
                <el-input   placeholder="请输入内容"></el-input>
              </td>
            </tr>

          </table>
        </el-form>
      </div></el-col>


    </el-row>
    <el-row type="flex" class="row-bg" justify="end">
      <el-col :span="2" style="margin-top: 20px">
        <el-row>
          <el-button  @click="submitForm('teacher')" >表单检验</el-button>
        </el-row>
      </el-col>

      <el-col :span="2" style="margin-top: 20px">
        <el-row>
          <el-button @click="resetForm('teacher')">重置</el-button>
        </el-row>
      </el-col>

      <el-col :span="2" style="margin-top: 20px">
        <el-row>
          <el-button>下一步</el-button>
        </el-row>
      </el-col>
      <el-col :span="2" style="margin-top: 20px">
        <el-row>
          <el-button>提交</el-button>
        </el-row>
       </el-col>
      <el-col :span="2" style="margin-top: 20px">
        <el-row>
          <el-button>返回</el-button>
        </el-row>
      </el-col>
    </el-row>

  </div>
</template>

<script>

import {getProfile} from "@/api/teacher/teacher_after_login/teacher_after_login";

export default {
        name: "profile",
      props: {
        value: {
          type: [String, Number, Array],
          default: ''
        }
      },
      data() {
        return {
          profile: {
            teachName: '',
            sex: '',
            teachPhone:'',
            teachEmail:'',
            idType:'',
            idNum:'',
            teachBirth:'',
            nationality:'',
            nativePlace:'',
            politicalStatus:''
            //address
          },
          profileRules: {},


          pickerOptions: {
            disabledDate(time) {
              return time.getTime() > Date.now();
            },
            shortcuts: [{
              text: '今天',
              onClick(picker) {
                picker.$emit('pick', new Date());
              }
            }, {
              text: '昨天',
              onClick(picker) {
                const date = new Date();
                date.setTime(date.getTime() - 3600 * 1000 * 24);
                picker.$emit('pick', date);
              }
            }, {
              text: '一周前',
              onClick(picker) {
                const date = new Date();
                date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                picker.$emit('pick', date);
              }
            }]
          },
          value1: '',
          value2: '',
        };
      },

      created(){
        getProfile(JSON.parse(sessionStorage.getItem('saber-tenantId')).content).then(res => {
          console.log(res)
          this.profile=res.data.data.profile
        })

      },




        methods:{
          institution(){
            this.$router.push({path: "/teacher-after-login/teacher-institution"});
          },
          profile(){
            this.$router.push({path: "/teacher-after-login/teacher-profile"});
          },
          detail(){
            this.$router.push({path: "/teacher-after-login/teacher-detail"});
          },
          other(){
            this.$router.push({path: "/teacher-after-login/teacher-other"});
          },
          experience(){
            this.$router.push({path: "/teacher-after-login/teacher-experience"});
          },

          gotoInfo(teacherId)
          {
            this.$router.push({
              path: "/teacher-after-login/teacher-profile",
              query: {
                id: teacherId

              }
            });
          },
          changePassword(teacherId){
            this.$router.push({
              path: "/teacher-after-login/teacher-password",
              query: {
                id: teacherId

              }
            });
          },




          submitForm(formName) {
            this.$refs[formName].validate((valid) => {
              if (valid) {
                console.log('error submit!!');
                alert('submit!');
              } else {
                console.log('error submit!!');
                //return callback(new Error('格式错误'));
                return false;
              }
            });
          },
          resetForm(formName) {
            this.$refs[formName].resetFields();
          },


          change (val) {
            this.$emit('input', val)
          }
        }
    }
</script>

<style scoped>

  .el-row {
    margin-bottom: 20px;
  &:last-child {
     margin-bottom: 0;
   }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #20222a;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    text-align: center;
    color: #e5e9f2;
    padding-top: 10px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #20222a;
  }


</style>
