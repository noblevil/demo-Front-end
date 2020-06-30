import Mock from 'mockjs'

function getTeacherListByOrgId() {
    const json = { code: 200, success: true, msg: '机构详情' };
    json.data = {
        teachers: [

            {
                teachName: "刘晓洋",
                countryNature: "大陆",
                nationality: "中国",
                highestEducation: "博士",
                course: "管理学",
                workType: "兼职",
                teachQualifClass: "sdaw",
                department: "wdw",
                subject: "dwadw",
                number: "sdw",
                sex: "男"
            },
            {
                teachName: "刘晓洋",
                countryNature: "大陆",
                nationality: "中国",
                highestEducation: "博士",
                course: "管理学",
                workType: "兼职",
                teachQualifClass: "sdaw",
                department: "wdw",
                subject: "dwadw",
                number: "sdw",
                sex: "女"
            },

            {
                teachName: "刘晓洋",
                countryNature: "大陆",
                nationality: "中国",
                highestEducation: "博士",
                course: "管理学",
                workType: "兼职",
                teachQualifClass: "sdaw",
                department: "wdw",
                subject: "dwadw",
                number: "sdw",
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
                level: "高级",
                subject: "语文",
                objGrade: "一年级",
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
                level: "高级",
                subject: "语文",
                objGrade: "一年级",
                courseName: "写作",
                textbook: "《写作教程》",
                publishingCompany: "人民大学出版社",
                isbnCode: "SDSADAWDAS",
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
            institutionName: "XXX培训机构",
            institution: {
                orgId: 0,
                establishedTime: "2020",
                creditCode: "3453",
                registeredAddress: "address",
                qualificationCategory: "A",
                businessAddress: "广东",
                NameOfRepresentative: "hu",
                creditDepartment: "广东省教育厅",
                license: "办证许可证",
                registrationDepartment: "登记部门",
                legalEntityRegistrationUnit: "法人登记单位",
                trainType: "培训类别",
                institutionPhone: "188193523836",
                trainContent: "语文",
                trainObject: "中小学生",
                enrollmentScope: "小学五年级",
                trainForm: "在线"
            },
        };
        return json;
    });
}
