import Mock from 'mockjs'

function getAllOrgList() {
    const json = { code: 200, success: true, msg: '机构详情' };
    json.data = {
        orgList: [
            {
                orgId: 0,
                orgName: "广州大学",
                address: "北京市市辖区东城区",
                unifiedCode: "11111",
                listType: 1,
                trainType: "其他类",
                trainSubject: "语文",
                trainForm: "面授",

            },
            {
                orgId: 1,
                orgName: "广东工业大学",
                address: "北京市市辖区东城区",
                unifiedCode: "11111",
                listType: 1,
                trainType: "其他类",
                trainSubject: "语文",
                trainForm: "面授",

            },
            {
                orgId: 2,
                orgName: "广东工业大学",
                address: "北京市市辖区东城区",
                unifiedCode: "11111",
                listType: 1,
                trainType: "其他类",
                trainSubject: "语文",
                trainForm: "在线培训",

            }

        ]

    };


    return json;
}


// function queryOrgList() { //queryForm

//     // console.log(queryForm.trainForm);


// }

export default ({ mock }) => {
    if (!mock) return;
    Mock.mock(/\/api\/AllOrgList/, 'get', getAllOrgList);
    Mock.mock(/\/api\/queryOrgList/, 'get', (queryOrgList) => {

        var trainForm = JSON.parse(queryOrgList.body).trainForm;


        const json = { code: 200, success: true, msg: '带参数查询机构详情' };
        json.data = {
            orgList: [
                {
                    orgId: 0,
                    orgName: "广州大学",
                    address: "北京市市辖区东城区",
                    unifiedCode: "11111",
                    listType: 1,
                    trainType: "其他类",
                    trainSubject: "语文",
                    trainForm: "面授",

                },
                {
                    orgId: 1,
                    orgName: "广东工业大学",
                    address: "北京市市辖区东城区",
                    unifiedCode: "11111",
                    listType: 1,
                    trainType: "其他类",
                    trainSubject: "语文",
                    trainForm: "面授",

                },
                {
                    orgId: 3,
                    orgName: "广东工业大学",
                    address: "北京市市辖区东城区",
                    unifiedCode: "11111",
                    listType: 1,
                    trainType: "其他类",
                    trainSubject: "语文",
                    trainForm: "在线培训",

                }

            ]

        };





        json.data.orgList = json.data.orgList.filter((item) => item.trainForm === trainForm);

        console.log(json.data);


        return json;
    });
    Mock.mock(/\/api\/demo\/detail/, 'get', getFakeDetail => {

        // console.log(typeof(getFakeDetail.body));
        // console.log(getFakeDetail);
        var cityName = "";
        for (var i = 9; i < getFakeDetail.body.length; i++) {
            if (getFakeDetail.body[i] == '"')
                break;
            cityName += getFakeDetail.body[i]
        }
        console.log("行政区为：" + cityName);
        const json = { code: 200, success: true, msg: '操作成功' };


        json.data = [
            { "orgName": "广州市番禺区佳成教育培训中心", "orgAddress": "广州市番禺区小谷围街穗石村双桂街自编8号商业综合楼205-209" },
            { "orgName": "广州市番禺区云艺教育培训中心", "orgAddress": "广州市番禺区东环街东艺路14号招商金山谷四期会所2楼" },
            { "orgName": "广州市越秀区加拿达少儿英文培训中心", "orgAddress": "广州市越秀区庙前直街10号、10号之一第二层" },
            { "orgName": "广州市越秀区好老师教育培训中心", "orgAddress": "广州市越秀区寺右二马路23、25号三层自编323、323A、325、32" },
        ];

        var org = [];
        // console.log(json.data);
        // console.log(json.data.length);

        for (var i = 0; i < json.data.length; i++) {
            var flag = (json.data[i]["orgAddress"]).indexOf(cityName);
            // console.log(flag);
            if (flag != -1) {
                org.push(json.data[i]);
            }
        }
        // console.log("ddddd"+org);

        return org;

    });

    Mock.mock(/\/api\/demo\/detail/, 'get', getFakeDetail => {

        // console.log(typeof(getFakeDetail.body));
        // console.log(getFakeDetail);
        var cityName = "";
        for (var i = 9; i < getFakeDetail.body.length; i++) {
            if (getFakeDetail.body[i] == '"')
                break;
            cityName += getFakeDetail.body[i]
        }
        console.log("行政区为：" + cityName);
        const json = { code: 200, success: true, msg: '操作成功' };


        json.data = [
            { "orgName": "广州市番禺区佳成教育培训中心", "orgAddress": "广州市番禺区小谷围街穗石村双桂街自编8号商业综合楼205-209" },
            { "orgName": "广州市番禺区云艺教育培训中心", "orgAddress": "广州市番禺区东环街东艺路14号招商金山谷四期会所2楼" },
            { "orgName": "广州市越秀区加拿达少儿英文培训中心", "orgAddress": "广州市越秀区庙前直街10号、10号之一第二层" },
            { "orgName": "广州市越秀区好老师教育培训中心", "orgAddress": "广州市越秀区寺右二马路23、25号三层自编323、323A、325、32" },
        ];

        var org = [];
        // console.log(json.data);
        // console.log(json.data.length);

        for (var i = 0; i < json.data.length; i++) {
            var flag = (json.data[i]["orgAddress"]).indexOf(cityName);
            // console.log(flag);
            if (flag != -1) {
                org.push(json.data[i]);
            }
        }
        // console.log("ddddd"+org);

        return org;

    });

}
