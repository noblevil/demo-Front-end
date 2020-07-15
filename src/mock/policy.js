import Mock from 'mockjs'

function getAllPolicyList() {
    const json = { code: 200, success: true, msg: '机构详情' };
    json.data = {
        policyList: [
            {
                policyID: 0,
                policyTitle: "政策一",
                policyContent: "这里是政策一的内容正文",
            },
            {
                policyID: 1,
                policyTitle: "政策二",
                policyContent: "这里是政策二的内容正文",

            },
            {
                policyID: 2,
                policyTitle: "政策三",
                policyContent: "这里是政策三的内容正文",
            }
            
        ]
    };
    return json;
}

function getPolicyDetailById(form) {

    console.log("form");
    //console.log(form);
    var policyID = JSON.parse(form.body).policyID;
    console.log("POLICY.JS--policyID"+policyID);
    const json = { code: 200, success: true, msg: '机构详情' };
    json.data = {
        policyList: [
            {
                policyID: 0,
                policyTitle: "政策一",
                policyContent: "这里是政策一的内容正文",
            },
            {
                policyID: 1,
                policyTitle: "政策二",
                policyContent: "这里是政策二的内容正文",

            },
            {
                policyID: 2,
                policyTitle: "政策三",
                policyContent: "这里是政策三的内容正文",
            }
        ]
    };

    json.data.policyList = json.data.policyList.filter((item) => item.policyID === policyID);
    console.log("json");
    console.log(json);
    return json;
}

export default ({ mock }) => {
    if (!mock) return;
    Mock.mock(/\/api\/AllPolicyList/, 'get', getAllPolicyList);
    Mock.mock(/\/api\/getPolicyDetailById/, 'get', getPolicyDetailById);
}
