import Mock from 'mockjs'

function getAllComplaintList() {
    const json = { code: 200, success: true, msg: '投诉详情' };
    json.data = {
          complaintList: [{
          complaintId: 1,
          orgId: "7886",
          complaintOrgName:"韦博开心豆",
          content:"欺诈学费，无证经营",
          suggest:"进入调查",
        }, {
          complaintId: 2,
          orgId: "1234",
          complaintOrgName:"随便编的",
          content:"欺诈学费",
          suggest:"进入调查ING",
        },
        {
          complaintId: 3,
          orgId: "44444",
          complaintOrgName:"猜猜看",
          content:"教学质量差",
          suggest:"换老师",
        }],
    };
    return json;
}

// function queryOrgList() { //queryForm

//     // console.log(queryForm.trainForm);


// }

export default ({ mock }) => {
    if (!mock) return;
    Mock.mock(/\/api\/AllComplaintList/, 'get', getAllComplaintList);
    Mock.mock(/\/api\/queryComplaintList/, 'get', (queryComplaintList) => {

        var complaintOrgName = JSON.parse(queryComplaintList.body).complaintOrgName;
        console.log(complaintOrgName);

        const json = { code: 200, success: true, msg: '带参数查询机构详情' };
        json.data = {
            complaintList: [
                {
                    complaintId: 1,
                    orgId: "7886",
                    complaintOrgName:"韦博开心豆",
                    content:"欺诈学费，无证经营",
                    suggest:"进入调查",

                },
                {
                    complaintId: 2,
                    orgId: '1234',
                    complaintOrgName:'随便编的',
                    content:'欺诈学费，无证经营',
                    suggest:'进入调查',
                },
            ]

        };

        json.data.complaintList = json.data.complaintList.filter((item) => item.complaintOrgName === complaintOrgName);
        console.log(json);
        return json;
    });

}
