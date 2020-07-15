import Mock from 'mockjs'

function getTeacherListByOrgId() {
    const json = { code: 200, success: true, msg: '机构详情' };
    json.data = {
        teachers: [

            {
                teachName: "刘晓洋",
                countryNature: "中国大陆",
                nationality: "中国",
                highestEducation: "博士",
                isTeachQualifCert: "是",
                workType: "全职",
                teachQualifClass: "工程",
                teachingSubject: "飞行技巧",
                politicalStatus: "中共党员",
                educationalInstitution: "CMU",
                sex: "男"
            },
            {
                teachName: "刘晓阳",
                countryNature: "中国大陆",
                nationality: "中国",
                highestEducation: "博士",
                isTeachQualifCert: "是",
                workType: "兼职",
                teachQualifClass: "工程",
                politicalStatus: "中共党员",
                teachingSubject: "航天飞机构造",
                educationalInstitution: "UCB",
                sex: "女"
            },

            {
                teachName: "刘晓扬",
                countryNature: "中国大陆",
                nationality: "中国",
                highestEducation: "博士",
                isTeachQualifCert: "是",
                workType: "全职",
                teachQualifClass: "工程",
                politicalStatus: "中共党员",
                teachingSubject: "飞行原理",
                educationalInstitution: "MIT",
                sex: "男"
            }



        ]

    };
    return json;
}

function getCourseListByOrgId() {
    const json = { code: 200, success: true, msg: '机构详情' };
    json.data = {
        courses: [

            {
                courseLevel: "高级",
                courseSubject: "语文",
                studentGrade: "一年级",
                courseName: "写作",
                textbook: "《写作教程》",
                publishingCompany: "人民大学出版社",
                isbnCode: "SDSADAWDAS",
            }


        ]

    };
    return json;
}

function getClassCourseListByOrgId() {
    const json = { code: 200, success: true, msg: '机构详情' };
    json.data = {
        classCourses: [
            {
                courseClassId: "高2020",
                courseClassName: "飞行(2)班",
                enrollNum: "30人",
                teachId:"xxx",
                courseSubject: "航天飞机构造",
                teachName:"刘晓阳",
                teachingTime: "周三上午",
                startDate: "2020.7.7",
                endDate: "2021.7.7",
            }
        ]
    };
    return json;
}

export default ({ mock }) => {
    if (!mock) return;
    Mock.mock(/\/api\/classCourseListByOrgId/, 'get', getClassCourseListByOrgId);
    Mock.mock(/\/api\/courseListByOrgId/, 'get', getCourseListByOrgId);
    Mock.mock(/\/api\/teacherListByOrgId/, 'get', getTeacherListByOrgId);
    Mock.mock(/\/api\/orgDetail/, 'get', (getOrgDetail) => {

        var orgId = JSON.parse(getOrgDetail.body).orgId;

        console.log(getOrgDetail.body);


        const json = { code: 200, success: true, msg: '机构详情' };
        json.data = {
            // institutionName: "XXX培训机构",
            institution: {
                orgId: 0,
                orgName: "番禺航天培训班",
                orgSimpleName: "番禺航培",
                establishedDate: "2020",
                orgPhone: "188193523836",
                registeredAddress: "番禺区",
                oftenAddress: "小谷围",
                isInversyAbroad: "否",
                schoolLicense: "航天培训许可证",
                schoolLicenseDepartment: "工信部",
                unifiedCode: "XXXXXXXXX",
                trainType: "中学学科类",
                trainContent: "航天飞机驾驶",
                trainForm: "面授",
                enrollObject: "高中",
                enrollRegion: "广州市",
                listType: "白名单",
                linkmanOne: "常X1",
                linkmanOnePhone: "155XXXX7777",
                linkmanTwo: "常X2",
                linkmanTwoPhone: "155XXXX8888",
                bussinesLicense: "企业营业执照XXXXX",
                relatedCertificates: "J-20",
                qualificationCategory: "有办学资格证",
                nameOfRepresentative: "嘉德罗斯",
            },
        };
        return json;
    });

    //模拟 筛选 机构的教师 课程 班次
    Mock.mock(/\/api\/queryTeacherList/, 'get', (queryTeacherList) => {
        // var orgId = JSON.parse(getOrgDetail.body).orgId;

        console.log(queryTeacherList.body);

    });
}
