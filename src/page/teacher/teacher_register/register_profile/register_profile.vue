<template>
  <div>
    <el-row type="flex" class="row-bg" justify="center" >
      <el-col :span="22"><div class="grid-content bg-purple"><h2>培训机构线上管理平台</h2></div></el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="center" >
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
      <el-col :span="12"><div class="grid-content bg-purple">
        <el-form

                 :rules="teacherRules"
                 ref="teacher"
                 :model="teacher"
                 label-width="0">
        <table cellpadding="20" >
          <tr>
            <td style="padding-top: 2px">姓名：</td>
            <td >
              <el-form-item prop="name" >
            <el-input v-model="teacher.name"  placeholder="请输入内容"></el-input>
            </el-form-item>
            </td><td>
            <td width="100px">
            </td>
            <td style="padding-top: 2px">证件类型：</td><td><template>
            <el-form-item prop="certificateType" >
            <el-select v-model="teacher.certificateType"  placeholder="请选择">
              <el-option
                v-for="item in certificateType"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            </el-form-item>
          </template></td>
          </tr>
          <tr>
            <td style="padding-top: 2px">性别：</td>
            <td>
              <el-form-item prop="sex">
              <el-radio v-model="teacher.sex"  label="男">男</el-radio><el-radio v-model="teacher.sex"  label="女">女</el-radio>
              </el-form-item>
            </td>
            <td></td>
            <td >
            </td>
            <td style="padding-top: 2px">证件号码：</td>
            <td>
              <el-form-item prop="certificateNumber">
              <el-input v-model.number="teacher.certificateNumber" placeholder="请输入内容"></el-input>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td style="padding-top: 2px">手机号：</td>
            <td>
              <el-form-item prop="phoneNumber">
              <el-input v-model.number="teacher.phoneNumber" placeholder="请输入内容"></el-input>
              </el-form-item>
            </td>
            <td style="padding-top: 2px"><el-button >发送验证码</el-button></td>
            <td >
            </td>
            <td style="padding-top: 2px">出生日期：</td>
            <td>
            <div style="width: 200px">
              <el-form-item prop="birthDate">
              <el-date-picker style="width: 200px"
                              v-model="teacher.birthDate"
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
            <td style="padding-top: 2px">验证码：</td>
            <td>
              <el-form-item prop="phoneNumberCaptcha">
              <el-input v-model="teacher.phoneNumberCaptcha" placeholder="请输入内容"></el-input>
              </el-form-item>
            </td>
            <td></td>
            <td >
            </td>
            <td style="padding-top: 2px">国家地区:</td>
            <td>
              <template>
            <el-form-item prop="region">
            <el-select placeholder="请选择国家区号" :value="value" @input="change($event)" v-model="teacher.region">
              <el-option v-for="item in options" :key="item.value" :label="`${item.name}(${item.en})  +${item.tel}`" :value="item.tel">
              </el-option>
            </el-select>
            </el-form-item>
            </template>
          </td>


          </tr>
          <tr>
            <td style="padding-top: 2px">邮箱：</td>
            <td>
              <el-form-item prop="email">
              <el-input v-model="teacher.email" placeholder="请输入内容"></el-input>
              </el-form-item>
            </td>
            <td style="padding-top: 2px"><el-button>发送验证码</el-button></td>
            <td>
            </td>
            <td style="padding-top: 2px">籍贯：</td>
            <td>
              <el-form-item prop="nativePlace">
            <el-input v-model="teacher.nativePlace" placeholder="请输入内容"></el-input>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td style="padding-top: 2px">验证码：</td>
            <td>
              <el-form-item prop="emailCaptcha">
              <el-input v-model="teacher.emailCaptcha" placeholder="请输入内容"></el-input>
              </el-form-item>
            </td>
            <td></td>
            <td>
            </td>
            <td style="padding-top: 2px">政治面貌：</td>
            <td>
              <el-form-item prop="politicalStatus">
              <el-input v-model="teacher.politicalStatus" placeholder="请输入内容"></el-input>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
            </td>
            <td style="padding-top: 2px">居住地址：</td>
            <td>
              <el-form-item prop="address">
              <el-input v-model="teacher.address" placeholder="请输入内容"></el-input>
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
          <el-button :plain="true" @click="resetForm('teacher')">重置</el-button>
        </el-row>
      </el-col>

      <el-col :span="2" style="margin-top: 20px">
        <el-row>
          <el-button @click="nextStep">下一步</el-button>
        </el-row>
      </el-col>
      <el-col :span="2" style="margin-top: 20px">
        <el-row>
          <el-button @click="submitForm('teacher')">提交</el-button>
        </el-row>
       </el-col>

    </el-row>

  </div>
</template>

<script>
  import {getProfile} from '@/api/profile/profile'


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
          certificateType:[{
            value: '选项1',
            label: '身份证'
          },],
          teacher:{
            name: '',
            sex: '',
            phoneNumber: '',
            phoneNumberCaptcha: '',
            email: '',
            emailCaptcha: '',
            certificateType: '',
            certificateNumber: '',
            birthDate: '',
            region: '',
            nativePlace: '',
            politicalStatus: '',
            address: '',
          },
          teacherRules: {
            name: [
              {required: true, message: "请输入用户名", trigger: "blur"},
              { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
            ],
            sex: [
              {required: true, message: "请输入用户性别", trigger: "change"}
            ],
            phoneNumber: [
              {required: true, message: "请输入手机号码", trigger: "blur"},
             //{ min: 3, max: 5, message: '长度为11 个数字', trigger: 'blur' },
              //{ type: 'number', message: '手机号必须为数字值'}

            ],
            phoneNumberCaptcha: [
              {required: true, message: "请输入验证码", trigger: "blur"},
            ],
            email: [
              {required: true, message: "请输入邮箱号码", trigger: "blur"},
              { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
            ],
            emailCaptcha: [
              {required: true, message: "请输入验证码", trigger: "blur"},
            ],
            certificateType: [
              {required: true, message: "请输入证件类型", trigger: "change"},
            ],
            certificateNumber: [
              {required: true, message: "请输入证件号码", trigger: "blur"},
              //{ type: 'number', message: '证件号码必须为数字值'}
            ],
            birthDate: [
              {required: true, message: "请输入出生日期", trigger: "blur"},

            ],
            region: [
              {required: true, message: "请输入国家地区", trigger: "blur"},
            ],
            nativePlace: [
              {required: true, message: "请输入籍贯", trigger: "blur"},
            ],
            politicalStatus: [
              {required: true, message: "请输入政治面貌", trigger: "blur"},
            ],
            address: [
              {required: true, message: "请输入居住地址", trigger: "blur"},
            ],

          },






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
          test:'aa',
          value1: '',
          value2: '',
          options: [{
            'short': 'AD',
            'name': '安道尔共和国',
            'en': 'Andorra',
            'tel': '376'
          }, {
            'short': 'AE',
            'name': '阿拉伯联合酋长国',
            'en': 'UnitedArabEmirates',
            'tel': '971'
          }, {
            'short': 'AF',
            'name': '阿富汗',
            'en': 'Afghanistan',
            'tel': '93'
          }, {
            'short': 'AG',
            'name': '安提瓜和巴布达',
            'en': 'AntiguaandBarbuda',
            'tel': '1268'
          }, {
            'short': 'AI',
            'name': '安圭拉岛',
            'en': 'Anguilla',
            'tel': '1264'
          }, {
            'short': 'AL',
            'name': '阿尔巴尼亚',
            'en': 'Albania',
            'tel': '355'
          }, {
            'short': 'AM',
            'name': '亚美尼亚',
            'en': 'Armenia',
            'tel': '374'
          }, {
            'short': '',
            'name': '阿森松',
            'en': 'Ascension',
            'tel': '247'
          }, {
            'short': 'AO',
            'name': '安哥拉',
            'en': 'Angola',
            'tel': '244'
          }, {
            'short': 'AR',
            'name': '阿根廷',
            'en': 'Argentina',
            'tel': '54'
          }, {
            'short': 'AT',
            'name': '奥地利',
            'en': 'Austria',
            'tel': '43'
          }, {
            'short': 'AU',
            'name': '澳大利亚',
            'en': 'Australia',
            'tel': '61'
          }, {
            'short': 'AZ',
            'name': '阿塞拜疆',
            'en': 'Azerbaijan',
            'tel': '994'
          }, {
            'short': 'BB',
            'name': '巴巴多斯',
            'en': 'Barbados',
            'tel': '1246'
          }, {
            'short': 'BD',
            'name': '孟加拉国',
            'en': 'Bangladesh',
            'tel': '880'
          }, {
            'short': 'BE',
            'name': '比利时',
            'en': 'Belgium',
            'tel': '32'
          }, {
            'short': 'BF',
            'name': '布基纳法索',
            'en': 'Burkina-faso',
            'tel': '226'
          }, {
            'short': 'BG',
            'name': '保加利亚',
            'en': 'Bulgaria',
            'tel': '359'
          }, {
            'short': 'BH',
            'name': '巴林',
            'en': 'Bahrain',
            'tel': '973'
          }, {
            'short': 'BI',
            'name': '布隆迪',
            'en': 'Burundi',
            'tel': '257'
          }, {
            'short': 'BJ',
            'name': '贝宁',
            'en': 'Benin',
            'tel': '229'
          }, {
            'short': 'BL',
            'name': '巴勒斯坦',
            'en': 'Palestine',
            'tel': '970'
          }, {
            'short': 'BM',
            'name': '百慕大群岛',
            'en': 'BermudaIs.',
            'tel': '1441'
          }, {
            'short': 'BN',
            'name': '文莱',
            'en': 'Brunei',
            'tel': '673'
          }, {
            'short': 'BO',
            'name': '玻利维亚',
            'en': 'Bolivia',
            'tel': '591'
          }, {
            'short': 'BR',
            'name': '巴西',
            'en': 'Brazil',
            'tel': '55'
          }, {
            'short': 'BS',
            'name': '巴哈马',
            'en': 'Bahamas',
            'tel': '1242'
          }, {
            'short': 'BW',
            'name': '博茨瓦纳',
            'en': 'Botswana',
            'tel': '267'
          }, {
            'short': 'BY',
            'name': '白俄罗斯',
            'en': 'Belarus',
            'tel': '375'
          }, {
            'short': 'BZ',
            'name': '伯利兹',
            'en': 'Belize',
            'tel': '501'
          }, {
            'short': 'CA',
            'name': '加拿大',
            'en': 'Canada',
            'tel': '1'
          }, {
            'short': '',
            'name': '开曼群岛',
            'en': 'CaymanIs.',
            'tel': '1345'
          }, {
            'short': 'CF',
            'name': '中非共和国',
            'en': 'CentralAfricanRepublic',
            'tel': '236'
          }, {
            'short': 'CG',
            'name': '刚果',
            'en': 'Congo',
            'tel': '242'
          }, {
            'short': 'CH',
            'name': '瑞士',
            'en': 'Switzerland',
            'tel': '41'
          }, {
            'short': 'CK',
            'name': '库克群岛',
            'en': 'CookIs.',
            'tel': '682'
          }, {
            'short': 'CL',
            'name': '智利',
            'en': 'Chile',
            'tel': '56'
          }, {
            'short': 'CM',
            'name': '喀麦隆',
            'en': 'Cameroon',
            'tel': '237'
          }, {
            'short': 'CN',
            'name': '中国',
            'en': 'China',
            'tel': '86'
          }, {
            'short': 'CO',
            'name': '哥伦比亚',
            'en': 'Colombia',
            'tel': '57'
          }, {
            'short': 'CR',
            'name': '哥斯达黎加',
            'en': 'CostaRica',
            'tel': '506'
          }, {
            'short': 'CS',
            'name': '捷克',
            'en': 'Czech',
            'tel': '420'
          }, {
            'short': 'CU',
            'name': '古巴',
            'en': 'Cuba',
            'tel': '53'
          }, {
            'short': 'CY',
            'name': '塞浦路斯',
            'en': 'Cyprus',
            'tel': '357'
          }, {
            'short': 'CZ',
            'name': '捷克',
            'en': 'CzechRepublic',
            'tel': '420'
          }, {
            'short': 'DE',
            'name': '德国',
            'en': 'Germany',
            'tel': '49'
          }, {
            'short': 'DJ',
            'name': '吉布提',
            'en': 'Djibouti',
            'tel': '253'
          }, {
            'short': 'DK',
            'name': '丹麦',
            'en': 'Denmark',
            'tel': '45'
          }, {
            'short': 'DO',
            'name': '多米尼加共和国',
            'en': 'DominicaRep.',
            'tel': '1890'
          }, {
            'short': 'DZ',
            'name': '阿尔及利亚',
            'en': 'Algeria',
            'tel': '213'
          }, {
            'short': 'EC',
            'name': '厄瓜多尔',
            'en': 'Ecuador',
            'tel': '593'
          }, {
            'short': 'EE',
            'name': '爱沙尼亚',
            'en': 'Estonia',
            'tel': '372'
          }, {
            'short': 'EG',
            'name': '埃及',
            'en': 'Egypt',
            'tel': '20'
          }, {
            'short': 'ES',
            'name': '西班牙',
            'en': 'Spain',
            'tel': '34'
          }, {
            'short': 'ET',
            'name': '埃塞俄比亚',
            'en': 'Ethiopia',
            'tel': '251'
          }, {
            'short': 'FI',
            'name': '芬兰',
            'en': 'Finland',
            'tel': '358'
          }, {
            'short': 'FJ',
            'name': '斐济',
            'en': 'Fiji',
            'tel': '679'
          }, {
            'short': 'FR',
            'name': '法国',
            'en': 'France',
            'tel': '33'
          }, {
            'short': 'GA',
            'name': '加蓬',
            'en': 'Gabon',
            'tel': '241'
          }, {
            'short': 'GB',
            'name': '英国',
            'en': 'UnitedKiongdom',
            'tel': '44'
          }, {
            'short': 'GD',
            'name': '格林纳达',
            'en': 'Grenada',
            'tel': '1809'
          }, {
            'short': 'GE',
            'name': '格鲁吉亚',
            'en': 'Georgia',
            'tel': '995'
          }, {
            'short': 'GF',
            'name': '法属圭亚那',
            'en': 'FrenchGuiana',
            'tel': '594'
          }, {
            'short': 'GH',
            'name': '加纳',
            'en': 'Ghana',
            'tel': '233'
          }, {
            'short': 'GI',
            'name': '直布罗陀',
            'en': 'Gibraltar',
            'tel': '350'
          }, {
            'short': 'GM',
            'name': '冈比亚',
            'en': 'Gambia',
            'tel': '220'
          }, {
            'short': 'GN',
            'name': '几内亚',
            'en': 'Guinea',
            'tel': '224'
          }, {
            'short': 'GR',
            'name': '希腊',
            'en': 'Greece',
            'tel': '30'
          }, {
            'short': 'GT',
            'name': '危地马拉',
            'en': 'Guatemala',
            'tel': '502'
          }, {
            'short': 'GU',
            'name': '关岛',
            'en': 'Guam',
            'tel': '1671'
          }, {
            'short': 'GY',
            'name': '圭亚那',
            'en': 'Guyana',
            'tel': '592'
          }, {
            'short': 'HK',
            'name': '香港特别行政区',
            'en': 'Hongkong',
            'tel': '852'
          }, {
            'short': 'HN',
            'name': '洪都拉斯',
            'en': 'Honduras',
            'tel': '504'
          }, {
            'short': 'HT',
            'name': '海地',
            'en': 'Haiti',
            'tel': '509'
          }, {
            'short': 'HU',
            'name': '匈牙利',
            'en': 'Hungary',
            'tel': '36'
          }, {
            'short': 'ID',
            'name': '印度尼西亚',
            'en': 'Indonesia',
            'tel': '62'
          }, {
            'short': 'IE',
            'name': '爱尔兰',
            'en': 'Ireland',
            'tel': '353'
          }, {
            'short': 'IL',
            'name': '以色列',
            'en': 'Israel',
            'tel': '972'
          }, {
            'short': 'IN',
            'name': '印度',
            'en': 'India',
            'tel': '91'
          }, {
            'short': 'IQ',
            'name': '伊拉克',
            'en': 'Iraq',
            'tel': '964'
          }, {
            'short': 'IR',
            'name': '伊朗',
            'en': 'Iran',
            'tel': '98'
          }, {
            'short': 'IS',
            'name': '冰岛',
            'en': 'Iceland',
            'tel': '354'
          }, {
            'short': 'IT',
            'name': '意大利',
            'en': 'Italy',
            'tel': '39'
          }, {
            'short': '',
            'name': '科特迪瓦',
            'en': 'IvoryCoast',
            'tel': '225'
          }, {
            'short': 'JM',
            'name': '牙买加',
            'en': 'Jamaica',
            'tel': '1876'
          }, {
            'short': 'JO',
            'name': '约旦',
            'en': 'Jordan',
            'tel': '962'
          }, {
            'short': 'JP',
            'name': '日本',
            'en': 'Japan',
            'tel': '81'
          }, {
            'short': 'KE',
            'name': '肯尼亚',
            'en': 'Kenya',
            'tel': '254'
          }, {
            'short': 'KG',
            'name': '吉尔吉斯坦',
            'en': 'Kyrgyzstan',
            'tel': '331'
          }, {
            'short': 'KH',
            'name': '柬埔寨',
            'en': 'Kampuchea(Cambodia)',
            'tel': '855'
          }, {
            'short': 'KP',
            'name': '朝鲜',
            'en': 'NorthKorea',
            'tel': '850'
          }, {
            'short': 'KR',
            'name': '韩国',
            'en': 'Korea',
            'tel': '82'
          }, {
            'short': 'KT',
            'name': '科特迪瓦共和国',
            'en': 'RepublicofIvoryCoast',
            'tel': '225'
          }, {
            'short': 'KW',
            'name': '科威特',
            'en': 'Kuwait',
            'tel': '965'
          }, {
            'short': 'KZ',
            'name': '哈萨克斯坦',
            'en': 'Kazakstan',
            'tel': '327'
          }, {
            'short': 'LA',
            'name': '老挝',
            'en': 'Laos',
            'tel': '856'
          }, {
            'short': 'LB',
            'name': '黎巴嫩',
            'en': 'Lebanon',
            'tel': '961'
          }, {
            'short': 'LC',
            'name': '圣卢西亚',
            'en': 'St.Lucia',
            'tel': '1758'
          }, {
            'short': 'LI',
            'name': '列支敦士登',
            'en': 'Liechtenstein',
            'tel': '423'
          }, {
            'short': 'LK',
            'name': '斯里兰卡',
            'en': 'SriLanka',
            'tel': '94'
          }, {
            'short': 'LR',
            'name': '利比里亚',
            'en': 'Liberia',
            'tel': '231'
          }, {
            'short': 'LS',
            'name': '莱索托',
            'en': 'Lesotho',
            'tel': '266'
          }, {
            'short': 'LT',
            'name': '立陶宛',
            'en': 'Lithuania',
            'tel': '370'
          }, {
            'short': 'LU',
            'name': '卢森堡',
            'en': 'Luxembourg',
            'tel': '352'
          }, {
            'short': 'LV',
            'name': '拉脱维亚',
            'en': 'Latvia',
            'tel': '371'
          }, {
            'short': 'LY',
            'name': '利比亚',
            'en': 'Libya',
            'tel': '218'
          }, {
            'short': 'MA',
            'name': '摩洛哥',
            'en': 'Morocco',
            'tel': '212'
          }, {
            'short': 'MC',
            'name': '摩纳哥',
            'en': 'Monaco',
            'tel': '377'
          }, {
            'short': 'MD',
            'name': '摩尔多瓦',
            'en': 'Moldova,Republicof',
            'tel': '373'
          }, {
            'short': 'MG',
            'name': '马达加斯加',
            'en': 'Madagascar',
            'tel': '261'
          }, {
            'short': 'ML',
            'name': '马里',
            'en': 'Mali',
            'tel': '223'
          }, {
            'short': 'MM',
            'name': '缅甸',
            'en': 'Burma',
            'tel': '95'
          }, {
            'short': 'MN',
            'name': '蒙古',
            'en': 'Mongolia',
            'tel': '976'
          }, {
            'short': 'MO',
            'name': '澳门',
            'en': 'Macao',
            'tel': '853'
          }, {
            'short': 'MS',
            'name': '蒙特塞拉特岛',
            'en': 'MontserratIs',
            'tel': '1664'
          }, {
            'short': 'MT',
            'name': '马耳他',
            'en': 'Malta',
            'tel': '356'
          }, {
            'short': '',
            'name': '马里亚那群岛',
            'en': 'MarianaIs',
            'tel': '1670'
          }, {
            'short': '',
            'name': '马提尼克',
            'en': 'Martinique',
            'tel': '596'
          }, {
            'short': 'MU',
            'name': '毛里求斯',
            'en': 'Mauritius',
            'tel': '230'
          }, {
            'short': 'MV',
            'name': '马尔代夫',
            'en': 'Maldives',
            'tel': '960'
          }, {
            'short': 'MW',
            'name': '马拉维',
            'en': 'Malawi',
            'tel': '265'
          }, {
            'short': 'MX',
            'name': '墨西哥',
            'en': 'Mexico',
            'tel': '52'
          }, {
            'short': 'MY',
            'name': '马来西亚',
            'en': 'Malaysia',
            'tel': '60'
          }, {
            'short': 'MZ',
            'name': '莫桑比克',
            'en': 'Mozambique',
            'tel': '258'
          }, {
            'short': 'NA',
            'name': '纳米比亚',
            'en': 'Namibia',
            'tel': '264'
          }, {
            'short': 'NE',
            'name': '尼日尔',
            'en': 'Niger',
            'tel': '977'
          }, {
            'short': 'NG',
            'name': '尼日利亚',
            'en': 'Nigeria',
            'tel': '234'
          }, {
            'short': 'NI',
            'name': '尼加拉瓜',
            'en': 'Nicaragua',
            'tel': '505'
          }, {
            'short': 'NL',
            'name': '荷兰',
            'en': 'Netherlands',
            'tel': '31'
          }, {
            'short': 'NO',
            'name': '挪威',
            'en': 'Norway',
            'tel': '47'
          }, {
            'short': 'NP',
            'name': '尼泊尔',
            'en': 'Nepal',
            'tel': '977'
          }, {
            'short': '',
            'name': '荷属安的列斯',
            'en': 'NetheriandsAntilles',
            'tel': '599'
          }, {
            'short': 'NR',
            'name': '瑙鲁',
            'en': 'Nauru',
            'tel': '674'
          }, {
            'short': 'NZ',
            'name': '新西兰',
            'en': 'NewZealand',
            'tel': '64'
          }, {
            'short': 'OM',
            'name': '阿曼',
            'en': 'Oman',
            'tel': '968'
          }, {
            'short': 'PA',
            'name': '巴拿马',
            'en': 'Panama',
            'tel': '507'
          }, {
            'short': 'PE',
            'name': '秘鲁',
            'en': 'Peru',
            'tel': '51'
          }, {
            'short': 'PF',
            'name': '法属玻利尼西亚',
            'en': 'FrenchPolynesia',
            'tel': '689'
          }, {
            'short': 'PG',
            'name': '巴布亚新几内亚',
            'en': 'PapuaNewCuinea',
            'tel': '675'
          }, {
            'short': 'PH',
            'name': '菲律宾',
            'en': 'Philippines',
            'tel': '63'
          }, {
            'short': 'PK',
            'name': '巴基斯坦',
            'en': 'Pakistan',
            'tel': '92'
          }, {
            'short': 'PL',
            'name': '波兰',
            'en': 'Poland',
            'tel': '48'
          }, {
            'short': 'PR',
            'name': '波多黎各',
            'en': 'PuertoRico',
            'tel': '1787'
          }, {
            'short': 'PT',
            'name': '葡萄牙',
            'en': 'Portugal',
            'tel': '351'
          }, {
            'short': 'PY',
            'name': '巴拉圭',
            'en': 'Paraguay',
            'tel': '595'
          }, {
            'short': 'QA',
            'name': '卡塔尔',
            'en': 'Qatar',
            'tel': '974'
          }, {
            'short': '',
            'name': '留尼旺',
            'en': 'Reunion',
            'tel': '262'
          }, {
            'short': 'RO',
            'name': '罗马尼亚',
            'en': 'Romania',
            'tel': '40'
          }, {
            'short': 'RU',
            'name': '俄罗斯',
            'en': 'Russia',
            'tel': '7'
          }, {
            'short': 'SA',
            'name': '沙特阿拉伯',
            'en': 'SaudiArabia',
            'tel': '966'
          }, {
            'short': 'SB',
            'name': '所罗门群岛',
            'en': 'SolomonIs',
            'tel': '677'
          }, {
            'short': 'SC',
            'name': '塞舌尔',
            'en': 'Seychelles',
            'tel': '248'
          }, {
            'short': 'SD',
            'name': '苏丹',
            'en': 'Sudan',
            'tel': '249'
          }, {
            'short': 'SE',
            'name': '瑞典',
            'en': 'Sweden',
            'tel': '46'
          }, {
            'short': 'SG',
            'name': '新加坡',
            'en': 'Singapore',
            'tel': '65'
          }, {
            'short': 'SI',
            'name': '斯洛文尼亚',
            'en': 'Slovenia',
            'tel': '386'
          }, {
            'short': 'SK',
            'name': '斯洛伐克',
            'en': 'Slovakia',
            'tel': '421'
          }, {
            'short': 'SL',
            'name': '塞拉利昂',
            'en': 'SierraLeone',
            'tel': '232'
          }, {
            'short': 'SM',
            'name': '圣马力诺',
            'en': 'SanMarino',
            'tel': '378'
          }, {
            'short': '',
            'name': '东萨摩亚(美)',
            'en': 'SamoaEastern',
            'tel': '684'
          }, {
            'short': '',
            'name': '西萨摩亚',
            'en': 'SanMarino',
            'tel': '685'
          }, {
            'short': 'SN',
            'name': '塞内加尔',
            'en': 'Senegal',
            'tel': '221'
          }, {
            'short': 'SO',
            'name': '索马里',
            'en': 'Somali',
            'tel': '252'
          }, {
            'short': 'SR',
            'name': '苏里南',
            'en': 'Suriname',
            'tel': '597'
          }, {
            'short': 'ST',
            'name': '圣多美和普林西比',
            'en': 'SaoTomeandPrincipe',
            'tel': '239'
          }, {
            'short': 'SV',
            'name': '萨尔瓦多',
            'en': 'EISalvador',
            'tel': '503'
          }, {
            'short': 'SY',
            'name': '叙利亚',
            'en': 'Syria',
            'tel': '963'
          }, {
            'short': 'SZ',
            'name': '斯威士兰',
            'en': 'Swaziland',
            'tel': '268'
          }, {
            'short': 'TD',
            'name': '乍得',
            'en': 'Chad',
            'tel': '235'
          }, {
            'short': 'TG',
            'name': '多哥',
            'en': 'Togo',
            'tel': '228'
          }, {
            'short': 'TH',
            'name': '泰国',
            'en': 'Thailand',
            'tel': '66'
          }, {
            'short': 'TJ',
            'name': '塔吉克斯坦',
            'en': 'Tajikstan',
            'tel': '992'
          }, {
            'short': 'TM',
            'name': '土库曼斯坦',
            'en': 'Turkmenistan',
            'tel': '993'
          }, {
            'short': 'TN',
            'name': '突尼斯',
            'en': 'Tunisia',
            'tel': '216'
          }, {
            'short': 'TO',
            'name': '汤加',
            'en': 'Tonga',
            'tel': '676'
          }, {
            'short': 'TR',
            'name': '土耳其',
            'en': 'Turkey',
            'tel': '90'
          }, {
            'short': 'TT',
            'name': '特立尼达和多巴哥',
            'en': 'TrinidadandTobago',
            'tel': '1809'
          }, {
            'short': 'TW',
            'name': '台湾省',
            'en': 'Taiwan',
            'tel': '886'
          }, {
            'short': 'TZ',
            'name': '坦桑尼亚',
            'en': 'Tanzania',
            'tel': '255'
          }, {
            'short': 'UA',
            'name': '乌克兰',
            'en': 'Ukraine',
            'tel': '380'
          }, {
            'short': 'UG',
            'name': '乌干达',
            'en': 'Uganda',
            'tel': '256'
          }, {
            'short': 'US',
            'name': '美国',
            'en': 'UnitedStatesofAmerica',
            'tel': '1'
          }, {
            'short': 'UY',
            'name': '乌拉圭',
            'en': 'Uruguay',
            'tel': '598'
          }, {
            'short': 'UZ',
            'name': '乌兹别克斯坦',
            'en': 'Uzbekistan',
            'tel': '233'
          }, {
            'short': 'VC',
            'name': '圣文森特岛',
            'en': 'SaintVincent',
            'tel': '1784'
          }, {
            'short': 'VE',
            'name': '委内瑞拉',
            'en': 'Venezuela',
            'tel': '58'
          }, {
            'short': 'VN',
            'name': '越南',
            'en': 'Vietnam',
            'tel': '84'
          }, {
            'short': 'YE',
            'name': '也门',
            'en': 'Yemen',
            'tel': '967'
          }, {
            'short': 'YU',
            'name': '南斯拉夫',
            'en': 'Yugoslavia',
            'tel': '381'
          }, {
            'short': 'ZA',
            'name': '南非',
            'en': 'SouthAfrica',
            'tel': '27'
          }, {
            'short': 'ZM',
            'name': '赞比亚',
            'en': 'Zambia',
            'tel': '260'
          }, {
            'short': 'ZR',
            'name': '扎伊尔',
            'en': 'Zaire',
            'tel': '243'
          }, {
            'short': 'ZW',
            'name': '津巴布韦',
            'en': 'Zimbabwe',
            'tel': '263'
          }]
        };
      },

      created(){
        if(sessionStorage.getItem('profile')) {
          console.log(sessionStorage.getItem('profile'))
          this.teacher = JSON.parse(sessionStorage.getItem('profile'))
        }
        getProfile().then(res => {
          console.log(res)
          //console.log(this.$store.state)
        })

      },

      mounted() {

      //  const keys=Object.keys(this.teacher);
       // for(let index=0; index < keys.length; index++){
       //   this.teacher[keys[index]]=sessionStorage.getItem(keys[index]);
      //  }

      },




        methods:{
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
            this.$router.push({path: "/teacher-register/register-institution"});
          },


          //表单处理
          //saveForm(string1,string2){
            //console.log(string)
            //let sessionItem=document.getElementById(string);
            //console.log(this.teacherDetail.graduatedDate)
            //console.log(sessionItem);
           // sessionStorage.setItem(string1, string2);

         // },

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
                  sessionStorage.setItem('profile',JSON.stringify(this.teacher))
                  //const keys=Object.keys(this.teacher);
                  //for(let index=0; index < keys.length; index++){
                  //  sessionStorage.setItem(keys[index],this.teacher[keys[index]]);
                  //}
                  console.log(sessionStorage)
                }).catch(() => {
                  this.$message({
                    type: 'info',
                    message: '取消提交'
                  });
                });



                //console.log('error submit!!');
                //alert('submit!');
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
            sessionStorage.removeItem('profile')
            //const keys=Object.keys(this.teacher);
            //for(let index=0; index < keys.length; index++){
            //  sessionStorage.removeItem(keys[index]);
            //}
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
