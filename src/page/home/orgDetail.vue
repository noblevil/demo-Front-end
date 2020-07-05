 <template>
  <div class="homeBox">
    <el-container style="height:100%;" direction="vertical">
      <el-header style="height:170px">
        <div>
          <my-header></my-header>
        </div>
      </el-header>
      <el-main>
        <div>
          <div>
            <el-row type="flex" class="row-bg" justify="center">
              <el-col :span="10">
                <table cellpadding="10px" border="1" style="background-color:#e5e9f2">
                  <tr v-for="(value,name,index) in institution" :key="index">
                    <td width="400px" v-if="index%2==0 && index > 0">{{labels[name]}}</td>
                    <td width="600px" v-if="index%2==0 && index > 0">{{value}}</td>
                  </tr>
                </table>
              </el-col>
              <el-col :span="10">
                <table cellpadding="10px" border="1" style="background-color:#e5e9f2">
                  <tr v-for="(value,name,index) in institution" :key="index">
                    <td v-if="index%2==1" width="400px">{{labels[name]}}</td>
                    <td v-if="index%2==1" width="600px">{{value}}</td>
                  </tr>
                </table>
              </el-col>
            </el-row>
          </div>
          <div>
            <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
              <el-tab-pane label="机构位置" name="first" style="heigh:500px">
                <div>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </div>

                <!-- 高德地图 -->
                <div class="container1">
                  <el-amap
                    class="amap-box"
                    :amap-manager="amapManager"
                    :vid="'amap-vue'"
                    :zoom="zoom"
                    :plugin="plugin"
                    :center="center"
                    :events="events"
                  >
                    <el-amap-marker
                      v-for="(marker, index) in markers"
                      :position="marker"
                      :key="index"
                      :content="marker.content"
                    ></el-amap-marker>
                  </el-amap>
                </div>
              </el-tab-pane>
              <el-tab-pane label="教师介绍" name="second">
                <el-form ref="form" :model="queryTeacherForm" label-width="80px">
                  <el-row type="flex" justify="center">
                    <el-form-item label="教师姓名">
                      <el-input v-model="queryTeacherForm.teachName" style="width:200px"></el-input>
                    </el-form-item>

                    <el-form-item label="性别">
                      <el-select
                        v-model="queryTeacherForm.sex"
                        clearable
                        placeholder="请选择"
                        style="width:200px"
                      >
                        <el-option
                          v-for="(item, index) in sexOptions"
                          :key="index"
                          :value="index"
                          :label="item"
                        ></el-option>
                      </el-select>
                    </el-form-item>

                    <el-form-item label="国籍性质">
                      <!-- <select-country v-model="queryTeacherForm.country"></select-country> -->
                      <el-select
                        v-model="queryTeacherForm.countryNature"
                        clearable
                        placeholder="请选择"
                        style="width:200px"
                      >
                        <el-option
                          v-for="(item, index) in countryNatureOptions"
                          :key="index"
                          :value="index"
                          :label="item"
                        ></el-option>
                      </el-select>
                    </el-form-item>

                    <el-form-item label="工作类型">
                      <el-select
                        v-model="queryTeacherForm.workType"
                        clearable
                        placeholder="请选择"
                        style="width:200px"
                      >
                        <el-option
                          v-for="(item, index) in workTypeOptions"
                          :key="index"
                          :value="index"
                          :label="item"
                        ></el-option>
                      </el-select>
                    </el-form-item>
                  </el-row>

                  <el-row type="flex" justify="center">
                    <el-form-item label="任教资格分类">
                      <el-select
                        v-model="queryTeacherForm.teachQualifClass"
                        clearable
                        placeholder="请选择"
                        style="width:200px"
                      >
                        <el-option
                          v-for="(item, index) in teachQualifClassOptions"
                          :key="index"
                          :value="index"
                          :label="item"
                        ></el-option>
                      </el-select>
                    </el-form-item>
                    <!-- 这里需要再考虑 888888888888888 -->
                    <el-form-item label="资格种类">
                      <el-select
                        v-model="queryTeacherForm.qualifClass"
                        clearable
                        placeholder="请选择"
                        style="width:200px"
                      >
                        <el-option
                          v-for="(item, index) in qualifClassOptions"
                          :key="index"
                          :value="index"
                          :label="item"
                        ></el-option>
                      </el-select>
                    </el-form-item>

                    <el-form-item label="任教学科">
                      <el-input v-model="queryTeacherForm.teachingSubject" style="width:200px"></el-input>
                    </el-form-item>

                    <el-form-item>
                      <el-button type="primary" @click="queryTeachers">查询</el-button>
                      <el-button type="info">重置</el-button>
                    </el-form-item>
                  </el-row>
                </el-form>

                <el-table :data="teachers" stripe style="width: 100%">
                  <el-table-column prop="teachName" label="教师姓名" width="180"></el-table-column>
                  <el-table-column prop="countryNature" label="国籍性质" width="180"></el-table-column>
                  <el-table-column prop="nationality" label="国籍" width="180"></el-table-column>
                  <el-table-column
                    prop="sex"
                    label="性别"
                    :filters="[{ text: '男', value: '男' }, { text: '女', value: '女' }, { text: '未知', value: '未知' }]"
                    :filter-method="filterSex"
                  ></el-table-column>

                  <el-table-column prop="teachingSubject" label="任课学科"></el-table-column>
                  <el-table-column prop="workType" label="工作类型"></el-table-column>
                  <el-table-column prop="isTeachQualifCert" label="是否有教师资格证"></el-table-column>
                  <el-table-column prop="teachQualifClass" label="任教资格分类"></el-table-column>
                  <el-table-column prop="politicalStatus" label="政治面貌"></el-table-column>
                  <el-table-column prop="highestEducation" label="最高学历"></el-table-column>
                  <el-table-column prop="educationalInstitution" label="毕业院校"></el-table-column>
                </el-table>
              </el-tab-pane>

              <el-tab-pane label="课程介绍" name="third">
                <el-form ref="form" :model="queryTeacherForm" label-width="80px">
                  <el-row type="flex" justify="center">
                    <el-form-item label="级别">
                      <el-select v-model="queryCourseForm.courseLevel" clearable placeholder="请选择">
                        <el-option
                          v-for="(item, index) in coursegradeOptions"
                          :key="index"
                          :value="index"
                          :label="item"
                        ></el-option>
                      </el-select>
                    </el-form-item>

                    <el-form-item label="招生对象学段">
                      <el-select v-model="queryTeacherForm.studentRank" clearable placeholder="请选择">
                        <el-option
                          v-for="(item, index) in studentRankOptions"
                          :key="index"
                          :value="index"
                          :label="item"
                        ></el-option>
                      </el-select>
                    </el-form-item>
                  </el-row>

                  <el-row type="flex" justify="center">
                    <el-form-item label="学科">
                      <el-select
                        v-model="queryTeacherForm.courseSubject"
                        clearable
                        placeholder="请选择"
                      >
                        <el-option
                          v-for="item in trainSubjectOptions"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        ></el-option>
                      </el-select>
                    </el-form-item>

                    <el-form-item label="招生对象年级">
                      <el-select
                        v-model="queryTeacherForm.studentGrade"
                        clearable
                        placeholder="请选择"
                      >
                        <el-option
                          v-for="(item, index) in studentGradeOptions"
                          :key="index"
                          :value="index"
                          :label="item"
                        ></el-option>
                      </el-select>
                    </el-form-item>
                  </el-row>

                  <el-row type="flex" justify="center">
                    <el-form-item>
                      <el-button type="primary" @click="queryCourses">查询</el-button>
                      <el-button type="info">重置</el-button>
                    </el-form-item>
                  </el-row>
                </el-form>

                <el-table :data="courses" stripe style="width: 100%">
                  <el-table-column prop="courseLevel" label="级别" width="180"></el-table-column>
                  <el-table-column prop="courseSubject" label="学科" width="180"></el-table-column>
                  <el-table-column prop="studentGrade" label="对象年级" width="180"></el-table-column>
                  <el-table-column prop="courseName" label="课程名称" width="180"></el-table-column>
                  <el-table-column prop="textbook" label="教材"></el-table-column>
                  <el-table-column prop="publishingCompany" label="出版社"></el-table-column>
                  <el-table-column prop="isbnCode" label="发行号ISBN"></el-table-column>
                </el-table>
              </el-tab-pane>

              <el-tab-pane label="班次介绍" name="fourth">
                <el-form ref="form" :model="queryClassForm" label-width="80px">
                  <el-row type="flex" justify="center">
                    <el-form-item label="年级">
                      <el-select v-model="queryClassForm.studentGrade" clearable placeholder="请选择">
                        <el-option
                          v-for="(item, index) in studentGradeOptions"
                          :key="index"
                          :value="index"
                          :label="item"
                        ></el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item label="班级名称">
                      <el-input v-model="queryClassForm.courseClassName"></el-input>
                    </el-form-item>
                  </el-row>

                  <el-row type="flex" justify="center">
                    <el-form-item label="学科">
                      <el-select v-model="queryClassForm.courseSubject" clearable placeholder="请选择">
                        <el-option
                          v-for="item in trainSubjectOptions"
                          :key="item.value"
                          :value="item.value"
                          :label="item.label"
                        ></el-option>
                      </el-select>
                    </el-form-item>

                    <el-form-item label="授课教师">
                      <el-input v-model="queryClassForm.teachName"></el-input>
                    </el-form-item>
                  </el-row>

                  <el-row type="flex" justify="center">
                    <el-form-item label="课程起止日期">
                      <el-date-picker
                        v-model="queryClassForm.startDate"
                        type="date"
                        placeholder="开始日期"
                        :picker-options="pickerOptions0"
                      ></el-date-picker>
                      <el-date-picker
                        v-model="queryClassForm.endDate"
                        type="date"
                        placeholder="结束日期"
                        :picker-options="pickerOptions1"
                      ></el-date-picker>
                    </el-form-item>
                  </el-row>

                  <el-row type="flex" justify="center">
                    <el-form-item>
                      <el-button type="primary" @click="queryClassCourses">查询</el-button>
                      <el-button type="info">重置</el-button>
                    </el-form-item>
                  </el-row>
                </el-form>

                <el-table :data="classCourses" stripe style="width: 100%">
                  <el-table-column prop="courseClassId" label="年级" width="180"></el-table-column>
                  <el-table-column prop="courseSubject" label="学科" width="180"></el-table-column>
                  <el-table-column prop="courseClassName" label="班级名称" width="180"></el-table-column>
                  <el-table-column prop="enrollNum" label="计划招生人数"></el-table-column>
                  <el-table-column prop="teachName" label="授课教师" width="180"></el-table-column>
                  <el-table-column prop="teachingTime" label="课程上课日期"></el-table-column>
                  <el-table-column prop="startDate" label="课程开始日期" width="180"></el-table-column>
                  <el-table-column prop="endDate" label="课程结束日期" width="180"></el-table-column>
                </el-table>
              </el-tab-pane>
            </el-tabs>
          </div>
        </div>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
//自定义组件
import myHeader from "@/components/home/my-header";
import selectCountry from "@/components/demo/select-country";

import {
  getOrgDetailById,
  getTeachListById,
  getCourseListById,
  getClassCourseListById
} from "@/api/home/home";
import {
  queryTeachList,
  queryCourseList,
  queryClassCourseList
} from "@/api/home/home";

import { AMapManager, lazyAMapApiLoaderInstance } from "vue-amap";
let amapManager = new AMapManager();

export default {
  components: {
    selectCountry,
    myHeader
  },

  data() {
    let self = this;
    return {
      institutionName: "",
      // 高德地图
      address: null,
      amapManager,
      markers: [],
      center: [121.329402, 31.228667],
      zoom: 13,
      lng: 0,
      lat: 0,
      loaded: false,

      plugin: [
        {
          // 定位
          pName: "Geolocation",
          events: {
            init(o) {
              // o是高德地图定位插件实例
              o.getCurrentPosition((status, result) => {
                if (result && result.position) {
                  // 设置经度
                  self.lng = result.position.lng;
                  // 设置维度
                  self.lat = result.position.lat;
                  // 设置坐标
                  self.center = [self.lng, self.lat];

                  self.markers.push([self.lng, self.lat]);

                  // 地址转经纬度
                  var geocoder = new AMap.Geocoder({
                    radius: 1000,
                    extensions: "all"
                  });
                  geocoder.getAddress([self.lng, self.lat], function(
                    status,
                    result1
                  ) {
                    geocoder.getLocation(
                      "广东省广州市番禺区小谷围街道青蓝街28号创智大厦",
                      function(status, result2) {
                        var lnglat = [
                          result2.geocodes[0].location.lng,
                          result2.geocodes[0].location.lat
                        ];
                        self.markers.push(lnglat);
                      }
                    );
                  });
                  self.loaded = true;
                  // 页面渲染好后
                  self.$nextTick();
                }
              });
            }
          }
        }
      ],

      institution: {
        orgType: "",
        orgName: "",
        orgSimplyName: "",
        establishedDate: "",
        orgPhone: "",
        registerAddress: "",
        oftenAddress: "",
        isInvestAbroad: "",
        schoolLicence: "",
        schoolLicenceDepartment: "",
        unifiedCode: "",
        trainType: "",
        trainContent: "",
        trainForm: "",
        enrollObject: "",
        enrollRegion: "",
        listType: "",
        linkmanOne: "",
        linkmanOnePhone: "",
        linkmanTwo: "",
        linkmanTwoPhone: "",
        businessLicense: "",
        relatedCertificates: "",
        qualificationCategory: "",
        nameOfRepresentative: ""
      },

      labels: {
        // orgType: "机构类型",
        orgName: "机构名称",
        orgSimplyName: "机构简称",
        establishedDate: "设立时间",
        orgPhone: "机构电话",
        orgType: "机构类型",
        registerAddress: "注册地址",
        oftenAddress: "实际经营地址",
        isInvestAbroad: "是否有境外投资",
        schoolLicence: "办学许可证",
        schoolLicenceDepartment: "发证机关",
        unifiedCode: "统一社会信用代码",
        trainType: "培训类别",
        trainContent: "培训内容",
        trainForm: "培训形式",
        enrollObject: "招生对象",
        enrollRegion: "招生范围",
        listType: "黑/白/灰名单",
        linkmanOne: "常用联系人1",
        linkmanOnePhone: "常用联系人1手机号",
        linkmanTwo: "常用联系人2",
        linkmanTwoPhone: "常用联系人2手机号",
        businessLicense: "企业营业执照",
        relatedCertificates: "相关证书",
        qualificationCategory: "资质类别",
        nameOfRepresentative: "法定代表姓名"
      },

      countryNatureOptions: [
        {
          value: "中国",
          label: "中国"
        },
        {
          value: "港澳台",
          label: "港澳台"
        },
        {
          value: "外国",
          label: "外国"
        }
      ],
      sexOptions: [
        {
          value: "男",
          label: "男"
        },
        {
          value: "女",
          label: "女"
        },
        {
          value: "未知",
          label: "未知"
        }
      ],

      workTypeOptions: [
        {
          value: "全职",
          label: "全职"
        },
        {
          value: "兼职",
          label: "兼职"
        }
      ],

      teachQualifClassOptions: [
        {
          value: "教师资格证",
          label: "教师资格证"
        },
        {
          value: "外专证",
          label: "外专证"
        },
        {
          value: "无",
          label: "无"
        }
      ],
      qualifClassOptions: [
        {
          value: "小学教师资格",
          label: "小学教师资格"
        },
        {
          value: "初级中学教师资格",
          label: "初级中学教师资格"
        },
        {
          value: "高级中学教师资格",
          label: "高级中学教师资格"
        },
        {
          value: "高等学校教师资格",
          label: "高等学校教师资格"
        },
        {
          value: "其他",
          label: "其他"
        }
      ],

      coursegradeOptions: [
        {
          value: "初级",
          label: "初级"
        },
        {
          value: "中级",
          label: "中级"
        },
        {
          value: "高级",
          label: "高级"
        }
      ],

      trainSubjectOptions: [
        {
          value: "语文",
          label: "语文"
        },
        {
          value: "数学",
          label: "数学"
        },
        {
          value: "英语",
          label: "英语"
        },
        {
          value: "物理",
          label: "物理"
        },
        {
          value: "化学",
          label: "化学"
        },
        {
          value: "生物",
          label: "生物"
        },
        {
          value: "历史",
          label: "历史"
        },
        {
          value: "地理",
          label: "地理"
        },

        {
          value: "政治",
          label: "政治"
        }
      ],
      studentRankOptions: [
        {
          value: "小学",
          label: "小学"
        },
        {
          value: "初中",
          label: "初中"
        },
        {
          value: "高中",
          label: "高中"
        },
        {
          value: "中高职学生",
          label: "中高职学生"
        },
        {
          value: "大学生",
          label: "大学生"
        }
      ],
      studentGradeOptions: [
        {
          value: "一年级",
          label: "一年级"
        },
        {
          value: "二年级",
          label: "二年级"
        },
        {
          value: "三年级",
          label: "三年级"
        },
        {
          value: "四年级",
          label: "四年级"
        },
        {
          value: "五年级",
          label: "五年级"
        },
        { value: "六年级", label: "六年级" },
        {
          value: "七年级",
          label: "七年级"
        },
        {
          value: "八年级",
          label: "八年级"
        },
        {
          value: "高一",
          label: "高一"
        },

        {
          value: "高二",
          label: "高二"
        },

        {
          value: "高三",
          label: "高三"
        }
      ],

      //教师查询表单
      queryTeacherForm: {
        teachName: "",
        sex: "",
        countryNature: "",
        workType: "",
        teachQualifClass: "",
        teachingSubject: "",
        highestEducation: "",
        nationality: ""
      },
      //课程查询表单
      queryCourseForm: {
        courseLevel: "",
        trainSubject: "",
        studentRank: "",
        studentGrade: ""
      },
      //班次查询表单
      queryClassForm: {
        courseSubject: "",
        studentGrade: "",
        CourseClassName: "",
        teachName: "",
        startDate: "",
        endDate: ""
      },

      activeName: "first",

      //教师列表
      teachers: [],

      //课程列表
      courses: [],

      //班次列表
      classCourses: [],

      //机构的ID
      orgId: ""
    };
  },
  created() {
    //得到传来的参数 orgId
    this.orgId = this.$route.params.orgId;

    console.log("第一个函数前");

    getOrgDetailById(this.orgId).then(res => {
      // this.institutionName = res.data.data.institutionName;
      console.log(res);

      this.institution = res.data.data;
      // console.log("ddddddd"+res.data.data.institution);
    });

    console.log("第一个函数后");

    //得到教师的列表
    getTeachListById(this.orgId).then(res => {
      this.teachers = res.data.data;
    });

    //得到课程的列表
    getCourseListById(this.orgId).then(res => {
      this.courses = res.data.data;
    });
    //得到班次的列表
    getClassCourseListById(this.orgId).then(res => {
      this.classCourses = res.data.data;
    });
  },

  methods: {
    filterSex(value, row) {
      return row.sex === value;
    },
    queryTeachers() {
      queryTeachList(
        this.orgId,
        this.queryTeacherForm.teachName,
        this.queryTeacherForm.sex,
        this.queryTeacherForm.countryNature,
        this.queryTeacherForm.workType,
        this.queryTeacherForm.teachQualifClass,
        this.queryTeacherForm.qualifClass,
        this.queryTeacherForm.teachingSubject
      ).then(res => {
        this.teachers = res.data.data;
      });
    },
    queryCourses() {
      queryCourseList(
        this.orgId,
        this.queryCourseForm.courseLevel,
        this.queryCourseForm.trainSubject,
        this.queryCourseForm.studentRank,
        this.queryCourseForm.studentGrade
      ).then(res => {
        this.courses = res.data.data;
      });
    },
    queryClassCourses() {
      queryCourseList(
        this.orgId,
        this.queryClassForm.courseSubject,
        this.queryClassForm.studentGrade,
        this.queryClassForm.courseClassName,
        this.queryClassForm.teachName,
        this.queryClassForm.startDate,
        this.queryClassForm.endDate
      ).then(res => {
        this.classCourses = res.data.data;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/testHome.scss";

.container1 {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  border: 1px solid #999;
}

.el-row {
  margin-bottom: 20px;
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
  /* background-color: #20222a; */
}
</style>
