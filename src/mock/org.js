import Mock from 'mockjs'

function getOrgList() {
    const json = { code: 200, success: true, msg: '机构详情' };
    json.data = {
        orgList: [
            {
                address: "北京市市辖区东城区",
                orgName: "广州大学",
                unifiedCode: "11111",
                number: "11111",
                department: "11111",
                listType: 0,


            },
            {
                address: "北京市市辖区东城区",
                orgName: "广州大学",
                unifiedCode: "11111",
                number: "11111",
                department: "11111",
                listType: 0,


            },
            {
                address: "北京市市辖区东城区",
                orgName: "广州大学",
                unifiedCode: "11111",
                number: "11111",
                department: "11111",
                listType: 0,


            },
            {
                address: "北京市市辖区东城区",
                orgName: "广州大学",
                unifiedCode: "11111",
                number: "11111",
                department: "11111",
                listType: 0,


            },
            {
                address: "北京市市辖区东城区",
                orgName: "广州大学",
                unifiedCode: "11111",
                number: "11111",
                department: "11111",
                listType: 0,


            },
            {
                address: "北京市市辖区东城区",
                orgName: "广州大学",
                unifiedCode: "11111",
                number: "11111",
                department: "11111",
                listType: 0,


            },
            {
                address: "北京市市辖区东城区",
                orgName: "广州大学",
                unifiedCode: "11111",
                number: "11111",
                department: "11111",
                listType: 0,


            },
            {
                address: "北京市市辖区东城区",
                orgName: "广州大学",
                unifiedCode: "11111",
                number: "11111",
                department: "11111",
                listType: 0,


            },
            {
                address: "北京市市辖区东城区",
                orgName: "广州大学",
                unifiedCode: "11111",
                number: "11111",
                department: "11111",
                listType: 0,


            },
            {
                address: "北京市市辖区东城区",
                orgName: "广州大学",
                unifiedCode: "11111",
                number: "11111",
                department: "11111",
                listType: 0,


            },
            {
                address: "北京市市辖区东城区",
                orgName: "广州大学",
                unifiedCode: "11111",
                number: "11111",
                department: "11111",
                listType: 0,


            },
            {
                address: "北京市市辖区东城区",
                orgName: "广州大学",
                unifiedCode: "11111",
                number: "11111",
                department: "11111",
                listType: 0,


            },
            {
                address: "北京市市辖区东城区",
                orgName: "广州大学",
                unifiedCode: "11111",
                number: "11111",
                department: "11111",
                listType: 0,


            },
            {
                address: "北京市市辖区东城区",
                orgName: "广州大学",
                unifiedCode: "11111",
                number: "11111",
                department: "11111",
                listType: 2,


            },
            {
                address: "北京市市辖区东城区",
                orgName: "广州大学",
                unifiedCode: "11111",
                number: "11111",
                department: "11111",
                listType: 2,


            },
            {
                address: "北京市市辖区东城区",
                orgName: "广州大学",
                unifiedCode: "11111",
                number: "11111",
                department: "11111",
                listType: 0,


            },



        ]

    };
    return json;
}

export default ({ mock }) => {
    if (!mock) return;
    Mock.mock(/\/api\/OrgList/, 'get', getOrgList);
}
