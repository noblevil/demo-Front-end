<template>
  <el-container>
    <el-header style="text-align: center;font-size: x-large;">区块链智能教育平台</el-header>
    <el-divider content-position="right"></el-divider>
    <el-container :style="height">
      <el-main>
        <div>
          <el-steps :active="stepActive" finish-status="success" simple style="margin-top: 20px;line-height:80px">
            <el-step title="培训机构类型"></el-step>
            <el-step title="账号信息"></el-step>
            <el-step title="企业信息"></el-step>
            <el-step title="法人代表信息"></el-step>
            <!-- <el-step title="联系人信息" ></el-step> -->
          </el-steps>
        </div>

        <div v-if="stepActive === 1">
          <div class="register-wrap" style="margin:100px 100px 0px 100px">
            <el-radio v-model="org.orgInfo.orgType" label="1">企业法人</el-radio>
            <el-radio v-model="org.orgInfo.orgType" label="2">社会团体</el-radio>
            <el-radio v-model="org.orgInfo.orgType" label="3">事业法人</el-radio>
          </div>
        </div>
        <div v-else-if="stepActive === 2">
          <div class="register-wrap">
            <el-row type="flex" justify="center">
              <el-form ref="loginForm" :model="user" status-icon label-width="80px">
                <el-form-item prop="accountPhone" label="账户名">
                  <el-input v-model="org.orgAccountInfo.orgAccount" placeholder="请输入账户名"></el-input>
                </el-form-item>
                <el-form-item prop="accountPhone" label="手机号码">
                  <el-input v-model="org.orgAccountInfo.orgPhone" placeholder="请输入手机号码"></el-input>
                </el-form-item>
                <el-form-item prop="accountPhone" label="邮箱">
                  <el-input v-model="org.orgAccountInfo.orgEmail" placeholder="请输入邮箱"></el-input>
                </el-form-item>
                <el-form-item prop="password" label="密码">
                  <el-input v-model="org.orgAccountInfo.passwd" show-password placeholder="请输入密码"></el-input>
                </el-form-item>
                <el-form-item prop="repassword" label="确认密码">
                  <el-input v-model="org.orgAccountInfo.repasswd" show-password placeholder="请再次输入密码"></el-input>
                </el-form-item>
              </el-form>
            </el-row>
          </div>
        </div>

        <div v-else-if="stepActive === 3">
          <div class="register-wrap">
            <el-form class="company" ref="loginForm" :model="user" status-icon>
              <el-row type="flex" justify="center">
                <el-form-item label="企业名" label-width="130px">
                  <el-input v-model="org.orgInfo.orgName" placeholder="请输入企业名称"></el-input>
                </el-form-item>
                <el-form-item label="常用联系人1" label-width="140px">
                  <el-input v-model="org.orgInfo.linkmanOne" placeholder="姓名"></el-input>
                </el-form-item>
              </el-row>
              <el-row type="flex" justify="center">
                <el-form-item label="企业简称" label-width="130px">
                  <el-input v-model="org.orgInfo.orgSimplyName" placeholder="企业简称"></el-input>
                </el-form-item>
                <el-form-item label="常用联系人1-手机" label-width="140px">
                  <el-input v-model="org.orgInfo.linkmanOnePhone" placeholder="手机号码"></el-input>
                </el-form-item>
              </el-row>
              <el-row type="flex" justify="center">
                <el-form-item label="企业注册地址" label-width="130px">
                  <el-input v-model="org.orgInfo.registerAddress" placeholder="请输入企业注册地址"></el-input>
                </el-form-item>
                <el-form-item label="常用联系人2" label-width="140px">
                  <el-input v-model="org.orgInfo.linkmanTwo" placeholder="姓名"></el-input>
                </el-form-item>
              </el-row>
              <el-row type="flex" justify="center">
                <el-form-item label="企业常用地址" label-width="130px">
                  <el-input v-model="org.orgInfo.oftenAddress" placeholder="请输入企业常用地址"></el-input>
                </el-form-item>
                <el-form-item label="常用联系人2-手机" label-width="140px">
                  <el-input v-model="org.orgInfo.linkmanTwoPhone" placeholder="请输入手机号码"></el-input>
                </el-form-item>
              </el-row>
              <el-row type="flex" justify="center">
                <el-form-item label="培训形式" label-width="130px">
                  <el-input v-model="org.orgInfo.trainForm" placeholder="请输入..."></el-input>
                </el-form-item>
                <el-form-item label="培训类别" label-width="140px">
                  <el-select v-model="org.orgInfo.trainType" placeholder="请选择" style="width:194px">
                    <el-option label="中小学学科类" value="中小学学科类"></el-option>
                    <el-option label="艺术类" value="艺术类"></el-option>
                    <el-option label="体育类" value="体育类"></el-option>
                    <el-option label="科技类" value="科技类"></el-option>
                    <el-option label="语言能力类" value="语言能力类"></el-option>
                    <el-option label="研学类" value="研学类"></el-option>
                    <el-option label="职业技能类" value="职业技能类"></el-option>
                    <el-option label="托幼类" value="托幼类"></el-option>
                    <el-option label="晚托班" value="晚托班"></el-option>
                  </el-select>
                </el-form-item>
              </el-row>
              <el-row type="flex" justify="center">
                <el-form-item label="招生对象" label-width="130px">
                  <el-input v-model="org.orgInfo.enrollObject" placeholder="请输入..."></el-input>
                </el-form-item>
                <el-form-item label="招生范围" label-width="140px">
                  <el-input v-model="org.orgInfo.enrollRegion" placeholder="请输入..."></el-input>
                </el-form-item>
              </el-row>
              <el-row type="flex" justify="center">
                <el-form-item label="培训内容" label-width="130px">
                  <el-input v-model="org.orgInfo.trainContent" placeholder="请输入..."></el-input>
                </el-form-item>
                <el-form-item label="资质类别" label-width="140px">
                  <el-select v-model="org.orgInfo.qualificationCategory" placeholder="请选择" style="width:194px">
                    <el-option label="有办学许可证" value="有办学许可证"></el-option>
                    <el-option label="无办学许可证，有营业执照" value="无办学许可证，有营业执照"></el-option>
                    <el-option label="无办学许可证，无营业执照" value="无办学许可证，无营业执照"></el-option>
                  </el-select>
                </el-form-item>
              </el-row>
              <el-row type="flex" justify="center">
                <el-form-item label="是否有境外投资" label-width="130px">
                  <el-select v-model="org.orgInfo.isInvestAbroad" placeholder="活动区域" style="width:194px">
                    <el-option label="是" value="是"></el-option>
                    <el-option label="否" value="否"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="统一社会信用代码" label-width="140px">
                  <el-input v-model="org.orgInfo.unifiedCode" placeholder="请输入..."></el-input>
                </el-form-item>
              </el-row>
            </el-form>
          </div>
        </div>
        <div v-else>
          <div class="register-wrap">
            <el-form
              class="company"
              ref="loginForm"
              :model="legalRepresentative"
              status-icon
              label-width="155px"
            >
              <el-row type="flex" justify="center">
                <el-form-item label="法人代表">
                  <el-input v-model="org.orgQualifInfo.legalRepresentName" placeholder="姓名"></el-input>
                </el-form-item>
              </el-row>

              <el-row type="flex" justify="center">
                <el-form-item label="联系方式">
                  <el-input v-model="org.orgQualifInfo.legalRepresentPhone" placeholder="手机号码"></el-input>
                </el-form-item>
              </el-row>

              <el-row type="flex" justify="center">
                <el-form-item label="ICP备案号">
                  <el-input v-model="org.orgQualifInfo.icpRecordNum" placeholder="ICP备案号"></el-input>
                </el-form-item>
              </el-row>

              <el-row type="flex" justify="center">
                <el-form-item label="电信业务营业许可证">
                  <el-input
                    v-model="org.orgQualifInfo.telecommunicationBusinessLicense"
                    placeholder="电信业务营业许可证"
                  ></el-input>
                </el-form-item>
              </el-row>

              <el-row type="flex" justify="center">
                <el-form-item label="网络安全等级备案证明" label-width="155px">
                  <el-input v-model="org.orgQualifInfo.networkSecLevRec" placeholder="网络安全等级备案证明"></el-input>
                </el-form-item>
              </el-row>

              <el-row type="flex" justify="center">
                <el-form-item label="证件类型">
                  <el-radio v-model="org.orgQualifInfo.idType" label="1">中国居民身份证</el-radio>
                  <el-radio v-model="org.orgQualifInfo.idType" label="2">港澳居民来往内地通行证</el-radio>
                  <el-radio v-model="org.orgQualifInfo.idType" label="3">台湾居民来往大陆通行证</el-radio>
                  <el-radio v-model="org.orgQualifInfo.idType" label="4">护照</el-radio>
                  <el-radio v-model="org.orgQualifInfo.idType" label="5">外国人永居留身份证</el-radio>
                  <el-radio v-model="org.orgQualifInfo.idType" label="6">港澳台居住证</el-radio>
                </el-form-item>
              </el-row>

              <el-row type="flex" justify="center">
                <el-form-item label="证件号码">
                  <el-input v-model="org.orgQualifInfo.idNum" placeholder="证件号"></el-input>
                </el-form-item>
              </el-row>

              <el-row type="flex" justify="center">
                <el-form-item label="证件照(正面/反面)">
                  <el-upload
                    action="#"
                    :limit="2"
                    ref="orgUpload"
                    :multiple="true"
                    :auto-upload="false"
                    :file-list="fileList"
                    list-type="picture-card"
                  >
                    <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                    <div slot="tip" class="el-upload__tip">上传图片大小不超过500kb</div>
                  </el-upload>
                </el-form-item>
              </el-row>
            </el-form>
          </div>
        </div>

        <div>
          <el-button v-if="stepActive == 1" @click="toLogin" type="primary" round>返 回</el-button>
          <el-button v-if="stepActive > 1" @click="back" type="success" round>上一步</el-button>
          <el-button v-if="stepActive < 4" @click="toAccountRegister" type="success" round>下一步</el-button>
          <el-button v-if="stepActive == 4" @click="submitRegister" type="primary" round>完 成</el-button>
        </div>
      </el-main>
    </el-container>
    <el-footer>版权所有 &copy; xxxxxxxx &nbsp;&nbsp; 24小时客户服务热线：400-8879-597</el-footer>
  </el-container>
</template>

<script>
  import {inserOrhInfo} from "../../api/org/org";
export default {
  name: "register",
  data() {
    return {
      height: {
        height: window.innerHeight - 136 + "px"
      },
      dialogImageUrl: "",
      dialogVisible: false,
      radio: "1",
      stepActive: 1,
      org:{
        orgInfo: {
          orgName: "",
          orgType: "",
          orgSimplyName: "",
          orgPhone:"",
          registerAddress: "",
          oftenAddress: "",
          isInvestAbroad: "",
          unifiedCode: "",
          linkmanOne: "",
          linkmanOnePhone: "",
          linkmanTwo: "",
          linkmanTwoPhone: "",
          trainType: "",
          trainContent: "",
          trainForm:"",
          enrollObject: "",
          enrollRegion: "",
          businessLicense:"有",
          qualificationCategory: "",
        },
        orgAccountInfo: {
          orgAccount: "",
          orgPhone: "",
          orgEmail: "",
          passwd: "",
          repasswd: ""
        },
        orgQualifInfo: {
          legalRepresentName: "",
          legalRepresentPhone: "",
          idType: "",
          idNum: "",
          icpRecordNum: "",
          telecommunicationBusinessLicense: "",
          networkSecLevRec: ""
        }
      },


    };
  },
  methods: {
    submitRegister(){
      console.log(JSON.stringify(this.org));
      inserOrhInfo(JSON.stringify(this.org)).then(res=>{
        this.$message({
          type:'success',
          message:'注册成功'
        })
        this.$router.push({
          path: "/userlogin"
        });
      })
    },

    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    back() {
      if (this.stepActive) {
        this.stepActive--;
      }
    },
    toAccountRegister() {
      this.stepActive++;
      if (this.stepActive == 4) {
        console.log(this.orgInfo);
      }
      // this.$router.push({
      //   path: "registerAccount",
      //   meta: {
      //     keepAlive: true // 需要被缓存
      //   }
      // });
    },
    toLogin() {
      const imageArray = this.$refs.orgUpload.uploadFiles;
      this.orgInfo.idCardFront = imageArray[0].raw;
      this.orgInfo.idCardReverse = imageArray[1].raw;
      // const fd = new FormData();

      // fd.append('avatar', ;
      // fd.append('avatar', );

      //   console.log("2333334"+imageArray[1].raw);

      //   console.log("23333"+imageArray[0].raw)

      this.$router.push({
        path: "login"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/org.scss";
</style>
