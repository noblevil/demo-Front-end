import Mock from 'mockjs'

function getOrgList() {
    const json = { code: 200, success: true, msg: '机构详情' };
    json.data = {
        orgList: [
            {
                address: "北京市市辖区东城区",
                orgName: "广州大学1",
                unifiedCode: "11111",
                number: "11111",
                department: "11111",
                listType: 0,
                trainLevel: 0,
                trainSubject: 0,
                trainForm: 0,


            },
            {
                address: "北京市市辖区东城区",
                orgName: "广州大学2",
                unifiedCode: "11111",
                number: "11111",
                department: "11111",
                listType: 0,
                trainLevel: 0,
                trainSubject: 0,
                trainForm: 0,

            },
            {
                address: "北京市市辖区东城区",
                orgName: "广州大学3",
                unifiedCode: "11111",
                number: "11111",
                department: "11111",
                listType: 0,
                trainLevel: 0,
                trainSubject: 0,
                trainForm: 0,


            },
            {
                address: "北京市市辖区东城区",
                orgName: "广州大学4",
                unifiedCode: "11111",
                number: "11111",
                department: "11111",
                listType: 0,
                trainLevel: 0,
                trainSubject: 0,
                trainForm: 0,


            },
            {
                address: "北京市市辖区东城区",
                orgName: "广州大学5",
                unifiedCode: "11111",
                number: "11111",
                department: "11111",
                listType: 0,
                trainLevel: 0,
                trainSubject: 0,
                trainForm: 0,


            },
            {
                address: "北京市市辖区东城区",
                orgName: "广州大学6",
                unifiedCode: "11111",
                number: "11111",
                department: "11111",
                listType: 0,
                trainLevel: 0,
                trainSubject: 0,
                trainForm: 0,


            },
            {
                address: "北京市市辖区东城区",
                orgName: "广州大学7",
                unifiedCode: "11111",
                number: "11111",
                department: "11111",
                listType: 0,
                trainLevel: 0,
                trainSubject: 0,
                trainForm: 0,


            },
            {
                address: "北京市市辖区东城区",
                orgName: "广州大学8",
                unifiedCode: "11111",
                number: "11111",
                department: "11111",
                listType: 0,
                trainLevel: 1,
                trainSubject: 1,
                trainForm: 1


            },
            {
                address: "北京市市辖区东城区",
                orgName: "广州大学9",
                unifiedCode: "11111",
                number: "11111",
                department: "11111",
                listType: 0,
                trainLevel: 0,
                trainSubject: 0,
                trainForm: 0,


            },
            {
                address: "北京市市辖区东城区",
                orgName: "广州大学10",
                unifiedCode: "11111",
                number: "11111",
                department: "11111",
                listType: 0,
                trainLevel: 0,
                trainSubject: 0,
                trainForm: 1,


            },
            {
                address: "北京市市辖区东城区",
                orgName: "广州大学",
                unifiedCode: "11111",
                number: "11111",
                department: "11111",
                listType: 0,
                trainLevel: 1,
                trainSubject: 0,
                trainForm: 0,


            },
            {
                address: "北京市市辖区东城区",
                orgName: "广州大学",
                unifiedCode: "11111",
                number: "11111",
                department: "11111",
                listType: 0,
                trainLevel: 0,
                trainSubject: 0,
                trainForm: 0,

            },
            {
                address: "北京市市辖区东城区",
                orgName: "广州大学",
                unifiedCode: "11111",
                number: "11111",
                department: "11111",
                listType: 0,
                trainLevel: 0,
                trainSubject: 0,
                trainForm: 0,


            },
            {
                address: "北京市市辖区东城区",
                orgName: "广州大学",
                unifiedCode: "11111",
                number: "11111",
                department: "11111",
                listType: 2,
                trainLevel: 0,
                trainSubject: 0,
                trainForm: 0,


            },
            {
                address: "北京市市辖区东城区",
                orgName: "广州大学",
                unifiedCode: "11111",
                number: "11111",
                department: "11111",
                listType: 2,
                trainLevel: 0,
                trainSubject: 0,
                trainForm: 0,


            },
            {
                address: "北京市市辖区东城区",
                orgName: "广州大学",
                unifiedCode: "11111",
                number: "11111",
                department: "11111",
                listType: 0,
                trainLevel: 0,
                trainSubject: 0,
                trainForm: 0,


            },



        ]

    };
    return json;
}

export default ({ mock }) => {
    if (!mock) return;
    Mock.mock(/\/api\/OrgList/, 'get', getOrgList);
}
