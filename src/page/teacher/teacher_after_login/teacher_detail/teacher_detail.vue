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
        <el-menu-item index="2" @click="institution">所在培训机构</el-menu-item>
        <el-menu-item index="3" @click="detail">学历专业技术职称</el-menu-item>
        <el-menu-item index="4" @click="experience">工作经历</el-menu-item>
        <el-menu-item index="5" @click="other">其他</el-menu-item>

      </el-menu>
    </el-row>

    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="18"><div class="grid-content bg-purple">
        <el-form

          :rules="teacherDetailRules"
          ref="teacherDetail"
          :model="teacherDetail"
          id="teacherDetail"
          label-width="0">
        <table cellpadding="20">
          <tr>
            <td style="padding-top: 2px">最高学历：</td>
            <td>
              <el-form-item prop="qualification">
              <el-input v-model="teacherDetail.highestEducation" id="qualification"  placeholder="teacherDetail.highestEducation"></el-input>
              </el-form-item>
            </td>
            <td width="200px"></td>
            <td style="padding-top: 2px">所学专业：</td>
            <td>
              <el-form-item prop="major">
              <el-input v-model="teacherDetail.major" id="major"  placeholder="teacherDetail.major"></el-input>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td style="padding-top: 2px">学历获得院校或机构：</td>
            <td>
              <el-form-item prop="institutionWithQualification">
              <el-input v-model="teacherDetail.educationalInstitution" id="institutionWithQualification"  placeholder="teacherDetail.educationalInstitution"></el-input>
              </el-form-item>
            </td>
            <td></td>
            <td style="padding-top: 2px">毕业时间：</td><td>
            <div style="width: 200px">

              <el-form-item prop="graduatedDate">
              <el-date-picker
                style="width: 200px"
                v-model="teacherDetail.graduationDate"
                id="graduatedDate"
                align="right"
                type="date"
                placeholder="teacherDetail.graduationDate"
                :picker-options="pickerOptions">
              </el-date-picker>
              </el-form-item>
            </div>
          </td>
          </tr>
          <tr>
            <td style="padding-top: 2px">最高学位：</td>
            <td>
              <el-form-item prop="degree">
              <el-input v-model="teacherDetail.highestDegree" id="degree"  placeholder="teacherDetail.highestDegree"></el-input>
              </el-form-item>
            </td>
            <td></td>
            <td style="padding-top: 2px">专业技术职称：</td>
            <td>
              <el-form-item prop="title">
              <el-input v-model="teacherDetail.professionalTitle" id="title"  placeholder="teacherDetail.professionalTitle"></el-input>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td style="padding-top: 2px">学位获得院校或机构：</td>
            <td>
              <el-form-item prop="institutionWithDegree">
              <el-input v-model="teacherDetail.degreeObtainedInstitution" id="institutionWithDegree" @change="saveForm('institutionWithDegree')" placeholder="teacherDetail.degreeObtainedInstitution"></el-input>
              </el-form-item>
            </td>
          </tr>
        </table>
        </el-form>
      </div></el-col>

    </el-row>

    <el-row type="flex" class="row-bg" justify="end">

      <el-col :span="2" style="margin-top: 20px">
        <el-row>
          <el-button  @click="submitForm('teacherDetail')" >表单检验</el-button>
        </el-row>
      </el-col>

      <el-col :span="2" style="margin-top: 20px">
        <el-row>
          <el-button @click="resetForm('teacherDetail')">重置</el-button>
        </el-row>
      </el-col>

      <el-col :span="2" style="margin-top: 20px">
        <el-row>
          <el-button @click="nextStep">下一步</el-button>
        </el-row>
      </el-col>
      <el-col :span="2" style="margin-top: 20px">
        <el-row>
          <el-button>提交</el-button>
        </el-row>
      </el-col>
      <el-col :span="2" style="margin-top: 20px">
        <el-row>
          <el-button @click="lastStep">返回</el-button>
        </el-row>
      </el-col>
    </el-row>


  </div>
</template>

<script>
  import {getDetail} from "@/api/teacher/teacher_after_login/teacher_after_login";

  export default {
    data() {
      return {
        teacherDetail:{
          highestEducation: '',
          major: '',
          educationalInstitution: '',
          graduationDate: '',
          highestDegree: '',
          degreeObtainedInstitution: '',
          professionalTitle: '',

        },
        teacherDetailRules:{
          qualification: [
            {required: true, message: "请输入最高学历", trigger: "blur"},
          ],
          major: [
            {required: true, message: "请输入所学专业", trigger: "blur"},
          ],
          institutionWithQualification: [
            {required: true, message: "请输入学历获得院校或机构", trigger: "blur"},
          ],
          graduatedDate: [
            {required: true, message: "请输入毕业时间", trigger: "blur"},
          ],
          degree: [
            {required: true, message: "请输入最高学位", trigger: "blur"},
          ],
          title: [
            {required: true, message: "请输入专业技术职称", trigger: "blur"},
          ],
          institutionWithDegree: [
            {required: true, message: "请输入学位获得院校或机构", trigger: "blur"},
          ],

        },

        activeName: 'second',
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


      }


    },
    created() {
      getDetail(JSON.parse(sessionStorage.getItem('saber-tenantId')).content).then(res => {
        console.log(res)
        this.teacherDetail=res.data.data.teacherDetail
      })
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
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



      nextStep(){
        this.$router.push({path: "/experience"});
      },
      lastStep(){
        this.$router.push({path: "/institution"});
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


    }
  };
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

