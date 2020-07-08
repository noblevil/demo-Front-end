<template>
  <div>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="22"><div class="grid-content bg-purple"><h2>培训机构线上管理平台</h2></div></el-col>
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
      <el-col :span="26"><div class="grid-content bg-purple" >
        <el-form
          :rules="otherRules"
          ref="other"
          :model="other"
          id="other"
        >
        <table cellpadding="10px" >
          <tr>
            <td style="padding-top: 2px">教师资格证：</td>
            <td>
              <el-form-item prop="teacherCertification">
              <el-radio v-model="other.teacherCertification" label="有">有</el-radio>
              <el-radio v-model="other.teacherCertification" label="无">无</el-radio>
              </el-form-item>
            </td>
            <td width="100px">
            </td>
            <td style="padding-top: 2px">账户名：</td>
            <td>
              <el-form-item prop="userName">
              <el-input v-model="other.userName" placeholder="请输入账户名"></el-input>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td></td>
            <td rowspan="3">
              <div style="border: #e5e9f2 1px solid;width: 400px;height: 210px">
                <table cellpadding="10px" style="line-height: 40px;text-align: center;width: 350px;margin-left: 25px">
                  <tr>教师资格证号码：</tr>
                  <tr>
                    <el-form-item prop="certificateNumber">
                    <el-input v-model="other.certificateNumber" placeholder="请输入内容" style="width: 300px"></el-input>
                    </el-form-item>
                  </tr>
                  <tr>
                    <el-upload
                      :before-upload="beforeUpload"
                      :on-progress="onProgress"
                      :on-success="onSuccess"
                      :on-error="onError"
                      class="upload-demo"
                      ref="upload"
                      action="string"
                      name="文件"
                      :http-request="UploadImage"
                      :on-preview="handlePreview"
                      :on-remove="handleRemove"
                      :before-remove="beforeRemove"
                      :limit="1"
                      :on-exceed="handleExceed"
                      :file-list="fileList">
                      <el-button size="small" type="primary" style="width: 300px" :icon="uploadIcon">{{uploadText}}</el-button>
                      <!--<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
                    </el-upload>
                  </tr>
                </table>
              </div>
            </td>
            <td>
            </td>
            <td style="padding-top: 2px">用户密码：</td>
            <td>
              <el-form-item prop="userPassword">
              <el-input placeholder="请输入密码" v-model="other.userPassword" show-password></el-input>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
            </td>
            <td style="padding-top: 2px">确认密码:</td>
            <td>
              <el-form-item prop="confirmPassword">
              <el-input placeholder="请输入密码" v-model="other.confirmPassword" show-password></el-input>
              </el-form-item>
            </td>
          </tr>
          <tr></tr>
          <tr>
            <td style="padding-top: 2px">是否在职：</td>
            <td>
              <el-form-item prop="incumbency">
              <el-radio v-model="other.incumbency" label="是">是</el-radio>
              <el-radio v-model="other.incumbency" label="否">否</el-radio>
              </el-form-item>
            </td>
            <td></td>

            <td style="padding-top: 2px">工作类型：</td><td><template>
            <el-form-item prop="teachQualifClass" >
              <el-select v-model="other.teachQualifClass"  placeholder="请选择">
                <el-option
                  v-for="item in teachQualifClass"
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
      <!--<el-col :span="8"><div class="grid-content bg-purple">
        <table cellpadding="20">
          <tr>
            <td>账户名：</td><td><el-input v-model="input" placeholder="请输入内容"></el-input></td>
          </tr>
          <tr>
            <td>用户密码：</td><td><el-input placeholder="请输入密码" v-model="input" show-password></el-input></td>
          </tr>
          <tr>
            <td>确认密码:</td><td><el-input placeholder="请输入密码" v-model="input" show-password></el-input></td>
          </tr>
        </table>
      </div></el-col>-->
    </el-row>

    <el-row type="flex" class="row-bg" justify="end">


      <el-col :span="2" style="margin-top: 20px">
        <el-row>
          <el-button @click="resetForm('other')">重置</el-button>
        </el-row>
      </el-col>

      <el-col :span="2" style="margin-top: 20px">
        <el-row>
          <el-button @click="submitForm('other')" >提交</el-button>
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


  import {UploadFiles} from '@/api/teacher/teacher_register/teacher_register'
  import {teacherRegister} from '@/api/teacher/teacher_register/teacher_register'

  export default {
    data() {
      let validatePass = (rule, value, callback) => {
        if (value === '') {
           callback(new Error('请输入密码'));
        } else {
          if (this.other.userPassword !== '') {
            //this.$refs.other.validateField('userPassword');
          }
          callback();
        }
      };
      let validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.other.userPassword) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };

      return {
        activeName: 'second',
        radio1:'',
        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
        uploadIcon:'el-icon-upload2',
        uploadText:'教师资格证（上传附件）',

        teachQualifClass:[
          {
            value:'教师资格证',
            label:'教师资格证',
          },
          {
            value:'外专证',
            label:'外专证',
          },
          {
            value:'无',
            label:'无',
          }
        ],


        other:{
          teacherCertification: '',
          incumbency: '',
          userName:'',
          userPassword:'',
          confirmPassword:'',
          certificateNumber:'',
          teachQualifClass: '',

        },
        otherRules: {
          teachQualifClass:[
            {required: true, message: "请输入任教资格分类", trigger: "blur"},
          ],
          certificateNumber:[
            {required: true, message: "请输入教师资格证号码", trigger: "blur"},
          ],
          teacherCertification: [
            {required: true, message: "请输入用户性别", trigger: "change"}
          ],
          incumbency:[
            {required: true, message: "请选择是否在职", trigger: "change"}
          ],
          userName:[
            {required: true, message: "请输入用户名", trigger: "blur"},
          ],
          userPassword:[
            {validator: validatePass, trigger: "blur"},

          ],
          confirmPassword:[
            {validator: validatePass2, trigger: "blur"},

          ]

        },

      }


    },
    created() {
      if(sessionStorage.getItem('other'))
        this.other=JSON.parse(sessionStorage.getItem('other'))




    },

    mounted() {
      //const keys=Object.keys(this.other);
      //for(let index=0; index < keys.length; index++){
      //  this.other[keys[index]]=sessionStorage.getItem(keys[index]);
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

      lastStep(){
        this.$router.push({path: "/teacher-register/register-experience"});
      },

     //文件上传
      UploadImage (param) {
        let fd = new FormData()
        console.log('param.file',param.file)
        fd.append('file', param.file) // 要提交给后台的文件
        UploadFiles(fd).then(response => {  // UploadFiles 是封装的接口

        })
      },










      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 1个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },


      ////文件上传状态
      beforeUpload(){
        this.uploadText='教师资格证（正在上传）';
        this.uploadIcon='el-icon-loading';
      },

      onSuccess(){
        this.uploadText='教师资格证（上传成功）';
        this.uploadIcon='el-icon-position';
      },
      onError(){
        this.uploadText='教师资格证（上传失败）';
        this.uploadIcon='el-icon-warning-outline';
      },


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
              sessionStorage.setItem('other',JSON.stringify(this.other))

              let profile=JSON.parse(sessionStorage.getItem('profile'))
              let myInstitution=JSON.parse(sessionStorage.getItem('myInstitution'))
              let teacherDetail=JSON.parse(sessionStorage.getItem('teacherDetail'))
              let experiences=JSON.parse(sessionStorage.getItem('experiences'))
              let other=JSON.parse(sessionStorage.getItem('other'))





              teacherRegister(profile,myInstitution,teacherDetail,experiences,other).then(res => {
                console.log(res)
                console.log(1)
              })
            })
             // .catch(() => {
            //  this.$message({
            //    type: 'info',
            //    message: '取消提交'
            //  });
           // });


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
        sessionStorage.removeItem('other')
        //const keys=Object.keys(this.other);
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
