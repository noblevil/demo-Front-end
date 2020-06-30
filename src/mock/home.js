import Mock from 'mockjs'

function getFakeHome() {

}

export default ({ mock }) => {
    if (!mock) return;
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
