<template>
  <div>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="22"><div class="grid-content bg-purple"><h2>培训机构线上管理平台</h2></div></el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="center">
      <div class="line"></div>
      <el-menu
        default-active="3"
        class="el-menu-demo"
        mode="horizontal"
        text-color="#000000"
        active-text-color="#409EFF">
        <el-menu-item index="1" @click="profile">基本信息</el-menu-item>
        <el-menu-item index="2" @click="institution">所在培训机构</el-menu-item>
        <el-menu-item index="3" @click="detail">学历专业技术职称</el-menu-item>
        <el-menu-item index="4" @click="experience">工作经历</el-menu-item>
        <el-menu-item index="5" @click="other">其他</el-menu-item>

      </el-menu>
    </el-row>

    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="12"><div class="grid-content bg-purple">
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
              <el-input v-model="teacherDetail.qualification" id="qualification"  placeholder="请输入内容"></el-input>
              </el-form-item>
            </td>
            <td width="100px"></td>
            <td style="padding-top: 2px">所学专业：</td>
            <td>
              <el-form-item prop="major">
              <el-input v-model="teacherDetail.major" id="major"  placeholder="请输入内容"></el-input>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td style="padding-top: 2px">学历获得院校或机构：</td>
            <td>
              <el-form-item prop="institutionWithQualification">
              <el-input v-model="teacherDetail.institutionWithQualification" id="institutionWithQualification"  placeholder="请输入内容"></el-input>
              </el-form-item>
            </td>
            <td></td>
            <td style="padding-top: 2px">毕业时间：</td><td>
            <div style="width: 200px">

              <el-form-item prop="graduatedDate">
              <el-date-picker
                style="width: 200px"
                v-model="teacherDetail.graduatedDate"
                id="graduatedDate"
                align="right"
                type="date"
                placeholder="选择日期"
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
              <el-input v-model="teacherDetail.degree" id="degree" placeholder="请输入内容"></el-input>
              </el-form-item>
            </td>
            <td></td>
            <td style="padding-top: 2px">专业技术职称：</td>
            <td>
              <el-form-item prop="title">
              <el-input v-model="teacherDetail.title" id="title" placeholder="请输入内容"></el-input>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td style="padding-top: 2px">学位获得院校或机构：</td>
            <td>
              <el-form-item prop="institutionWithDegree">
              <el-input v-model="teacherDetail.institutionWithDegree" id="institutionWithDegree" placeholder="请输入内容"></el-input>
              </el-form-item>
            </td>

            <td></td>
            <td style="padding-top: 2px">工作类型：</td><td><template>
            <el-form-item prop="workType" >
              <el-select v-model="teacherDetail.workType"  placeholder="请选择">
                <el-option
                  v-for="item in workType"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </template>
          </td>
          </tr>
        </table>
        </el-form>
      </div></el-col>

    </el-row>

    <el-row type="flex" class="row-bg" justify="end">


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
          <el-button @click="submitForm('teacherDetail')">提交</el-button>
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
  export default {
    data() {
      return {
        workType:[
          {
            value:'兼职',
            label:'兼职'
          },
          {
            value:'全职',
            label:'全职'
          },

        ],



        teacherDetail:{
          qualification: '',
          major: '',
          institutionWithQualification: '',
          graduatedDate: '',
          degree: '',
          title: '',
          institutionWithDegree: '',
          workType:'',
        },

        /*sessionKeys:[
          "qualification",
          "major",
          "institutionWithQualification",
          "graduatedDate",
          "degree",
          "title",
          "institutionWithDegree"
        ],*/


        teacherDetailRules:{
          workType:[
            {required: true, message: "请输入工作类型", trigger: "blur"},

          ],
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
      if(sessionStorage.getItem('teacherDetail'))
      this.teacherDetail=JSON.parse(sessionStorage.getItem('teacherDetail'))
    },
    mounted() {
      //const keys=Object.keys(this.teacherDetail);
      //for(let index=0; index < keys.length; index++){
      //  this.teacherDetail[keys[index]]=sessionStorage.getItem(keys[index]);
      //}
    },

    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      institution(){
        this.$router.push({path: "/teacher-register/register-institution"});
      },
      profile(){
        this.$router.push({path: "/teacher-register/register-profile"});
      },
      detail(){
        this.$router.push({path: "/teacher-register/register-detail"});
      },
      other(){
        this.$router.push({path: "/teacher-register/register-other"});
      },
      experience(){
        this.$router.push({path: "/teacher-register/register-experience"});
      },

      nextStep(){
        this.$router.push({path: "/teacher-register/register-experience"});
      },
      lastStep(){
        this.$router.push({path: "/teacher-register/register-institution"});
      },

      //saveForm(string1,string2){
        //console.log(string)
        //let sessionItem=document.getElementById(string);
        //console.log(this.teacherDetail.graduatedDate)
        //console.log(sessionItem);
       // sessionStorage.setItem(string1, string2);

      //},



      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {


            this.$confirm("是否确认提交信息？", '确认提交信息', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              dangerouslyUseHTMLString:true,
              type: 'warning'
            }).then(() => {
              this.$message({
                type: 'success',
                message: '提交成功!'
              });
              //存储到sessionStorage
              sessionStorage.setItem('teacherDetail',JSON.stringify(this.teacherDetail))
              //const keys=Object.keys(this.teacherDetail);
              //for(let index=0; index < keys.length; index++){
              //  sessionStorage.setItem(keys[index],this.teacherDetail[keys[index]]);
             // }

            }).catch(() => {
              this.$message({
                type: 'info',
                message: '取消提交'
              });
            });


          } else {
            console.log('error submit!!');
            //return callback(new Error('格式错误'));
            this.$message({
              type: 'error',
              message: '格式错误!'
            });
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
        this.$message({
          message:"重置成功",
          type:"success",
        });
        sessionStorage.removeItem('teacherDetail')
        //const keys=Object.keys(this.teacherDetail);
        //for(let index=0; index < keys.length; index++){
        //  sessionStorage.removeItem(keys[index]);
        //}
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
    background: #000000;
  }
  .bg-purple {
    background: #FFFFFF;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    text-align: center;
    color: #000000;
    padding-top: 10px;

  }
  .row-bg {
    padding: 10px 0;
    background-color: #FFFFFF;
  }

</style>

