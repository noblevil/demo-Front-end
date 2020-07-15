<template>
  <div>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="22"><div class="grid-content bg-purple"><h2>培训机构线上管理平台</h2></div></el-col>
      <el-col :span="2">
        <table   cellpadding="2px">
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
      <el-col :span="8"><div class="grid-content bg-purple" >
        <table cellpadding="10px" >
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
        </table>


      </div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">
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
          <el-button type="primary">提交</el-button>
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
  export default {
    data() {
      return {
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
      }

    }
  };
</script>

<style lang="less" scoped>
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
