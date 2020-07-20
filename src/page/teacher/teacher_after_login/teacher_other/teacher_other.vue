<template>
  <div>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="22"><div class="grid-content bg-purple"><h2>培训机构线上管理平台</h2></div></el-col>
      <el-col :span="2">
        <table   cellpadding="2px">
          <tr>
            <td rowspan="2">{{teachForm.teachInfo.teachName}}老师</td>
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
        default-active="5"
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
      <el-col :span="14"><div class="grid-content bg-purple" >
          <el-form
          :rules="teachFormRules"
          ref="teachForm"
          :model="teachForm"
          id="teachForm"
        >
        <table cellpadding="10px" >
          <tr>
            <td style="padding-top: 2px">教师资格证：</td>
            <td>
              <el-form-item prop="teachInfo.isTeachQualifCert">
              <el-radio v-model="teachForm.teachInfo.isTeachQualifCert" label="是">是</el-radio>
              <el-radio v-model="teachForm.teachInfo.isTeachQualifCert" label="否">否</el-radio>
              </el-form-item>
            </td>
            <td width="100px">
            </td>
            <td style="padding-top: 2px">账户名：</td>
            <td>
              <el-form-item prop="teachAccount.teachAccount">
              <el-input v-model="teachForm.teachAccount.teachAccount" placeholder="请输入教师账户名" :disabled="true"></el-input>
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
                    <el-form-item prop="teachInfo.certificateNum">
                    <el-input v-model="teachForm.teachInfo.certificateNum" placeholder="请输入教师资格证号码" style="width: 300px"></el-input>
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
              <el-form-item prop="teachAccount.passwd">
              <el-input placeholder="请输入密码" v-model="teachForm.teachAccount.passwd" show-password></el-input>
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
              <el-input placeholder="请再次输入密码" v-model="teachForm.confirmPassword" show-password></el-input>
              </el-form-item>
            </td>
          </tr>
          <tr></tr>
          <!--<tr>
            <td style="padding-top: 2px">是否在职：</td>
            <td>
              <el-form-item prop="incumbency">
              <el-radio v-model="other.incumbency" label="是">是</el-radio>
              <el-radio v-model="other.incumbency" label="否">否</el-radio>
              </el-form-item>
            </td>
            <td></td>

           
          </tr>-->
        </table>
        </el-form>





        <!--<table cellpadding="10px" >
          <tr>
            <td>教师资格证：</td><td><el-radio v-model="radio" label="1">有</el-radio>
            <el-radio v-model="radio" label="2">无</el-radio></td>
          </tr>
          <tr>
            <td></td>
            <td>
              <div style="border: #e5e9f2 1px solid;width: 400px;height: 210px">
                <table cellpadding="10px" style="line-height: 40px;text-align: center;width: 350px;margin-left: 25px">
                  <tr>教师资格证号码：</tr>
                  <tr><el-input v-model="input" placeholder="请输入内容" style="width: 300px"></el-input></tr>
                  <tr>
                    <el-upload
                      :before-upload="beforeUpload"
                      :on-progress="onProgress"
                      :on-success="onSuccess"
                      :on-error="onError"
                      class="upload-demo"
                      action="//"
                      :on-preview="handlePreview"
                      :on-remove="handleRemove"
                      :before-remove="beforeRemove"
                      multiple
                      :limit="1"
                      :on-exceed="handleExceed"
                      :file-list="fileList">
                      <el-button size="small" type="primary" style="width: 300px" :icon="uploadIcon">{{uploadText}}</el-button>
                      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                  </tr>
                </table>
              </div>
            </td>
          </tr>
          <tr>
            <td>是否在职：</td><td><el-radio v-model="radio" label="1">是</el-radio>
            <el-radio v-model="radio" label="2">否</el-radio></td>
          </tr>
        </table>-->


      </div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple">
        <div style="margin-top: 60px">
          其他专业证书：
        <el-upload
          action="#"
          list-type="picture-card"
          :auto-upload="false">
          <i slot="default" class="el-icon-plus"></i>
          <div slot="file" slot-scope="{file}">
            <img
              class="el-upload-list__item-thumbnail"
              :src="file.url" alt=""
            >
            <span class="el-upload-list__item-actions">
        <span
          class="el-upload-list__item-preview"
          @click="handlePictureCardPreview(file)"
        >
          <i class="el-icon-zoom-in"></i>
        </span>
        <span
          v-if="!disabled"
          class="el-upload-list__item-delete"
          @click="handleDownload(file)"
        >
          <i class="el-icon-download"></i>
        </span>
        <span
          v-if="!disabled"
          class="el-upload-list__item-delete"
          @click="handleRemove2(file)"
        >
          <i class="el-icon-delete"></i>
        </span>
      </span>
          </div>
        </el-upload>
        </div>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
      </div></el-col>
    </el-row>

    <el-row type="flex" class="row-bg" justify="end">
      <el-col :span="2" style="margin-top: 20px">
        <el-row>
          <el-button type="info">下一步</el-button>
        </el-row>
      </el-col>
      <el-col :span="2" style="margin-top: 20px">
        <el-row>
          <el-button type="primary"  @click="submitForm('teachForm')">提交</el-button>
        </el-row>
      </el-col>
      <el-col :span="2" style="margin-top: 20px">
        <el-row>
          <el-button type="info">返回</el-button>
        </el-row>
      </el-col>
    </el-row>


  </div>
</template>

<script>

import {getProfile} from "@/api/teacher/teacher_after_login/teacher_after_login";
import {changeTeachByTeachId} from "@/api/teacher/teacher_after_login/teacher_after_login";

  export default {
    data() {
      let validatePass = (rule, value, callback) => {
        if (value === '') {
           callback(new Error('请输入密码'));
        } else {
          if (this.teachForm.teachAccount.passwd !== '') {
            //this.$refs.other.validateField('userPassword');
          }
          callback();
        }
      };
      let validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.teachForm.teachAccount.passwd) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };



      return {
        teachForm:{
            teachAccount:{},
            teachInfo:{},
            confirmPassword:'',
          },
         


        //teachAccount:{},
        //teachInfo:{},

        teachFormRules:{
          'teachInfo.isTeachQualifCert':[
            { required: true, message: '请选择是否有教师资格证', trigger: 'change' },
          ],
          
          'teachInfo.certificateNum':[
            { required: true, message: '请输入教师资格证号码', trigger: 'blur' },
          ],
          'teachAccount.passwd':[
            {validator: validatePass, trigger: "blur"},

          ],
          confirmPassword:[
            {validator: validatePass2, trigger: "blur"},

          ]


        },




        activeName: 'second',
        radio1:'',
        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
        uploadIcon:'el-icon-upload2',
        uploadText:'教师资格证（上传附件）',


        dialogImageUrl: '',
        dialogVisible: false,
        disabled: false

      }


    },


    created(){
        getProfile('110').then(res => {
          console.log(res)
          //this.teachAccount=res.data.data.teachAccount
          //this.teachInfo=res.data.data.teachInfo  
          //////////
          this.teachForm.teachAccount=res.data.data.teachAccount
          this.teachForm.teachInfo=res.data.data.teachInfo  
          console.log(this.teachForm) 
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





      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },


      ////文件上传
      beforeUpload(){
        this.uploadText='教师资格证（正在上传）';
        this.uploadIcon='el-icon-loading';
      },
      onProgress(){
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



      ////上传缩略图
      handleRemove2(file) {
        console.log(file);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      handleDownload(file) {
        console.log(file);
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
                  changeTeachByTeachId(this.teachForm.teachInfo.teachId,this.teachForm.teachAccount,this.teachForm.teachInfo).then(res =>{
                    if(res){
                        this.$router.push({path: "/teacher-after-login/empty",query:{name:'other'}});
                    }
                  })
                  this.$message({
                    type: 'success',
                    message: '提交成功!'
                  });
                }).catch(() => {
                  this.$message({
                    type: 'info',
                    message: '取消提交'
                  });
                });
              } else {
                console.log('error submit!!');
                this.$message({
                  type: 'error',
                  message: '格式错误!'
                });
                return false;
              }
            });
          },



    }
  };
</script>

<style scoped>
  .el-row {
    margin-bottom: 20px;
  
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
