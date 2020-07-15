import Mock from 'mockjs'

function getAllComplaintList() {
    const json = { code: 200, success: true, msg: '投诉详情' };
    json.data = {
          complaintList: [
              {
                  complaintId: 1,
                  orgId: "0001",
                  complaintOrgName:"韦博开心豆",
                  complaintType:"违规办学",
                  content:"欺诈学费",
                  suggest:"进入调查",

              },
              {
                  complaintId: 2,
                  orgId: '0002',
                  complaintOrgName:'随便编的',
                  complaintType:"违规招生",
                  content:'无证经营',
                  suggest:'进入调查',
              },
              {
                  complaintId: 3,
                  orgId: "0003",
                  complaintOrgName:"随便编的",
                  complaintType:"其他",
                  content:"欺诈学费，无证经营",
                  suggest:"进入调查ing",

              },
              {
                  complaintId: 4,
                  orgId: '0004',
                  complaintOrgName:'你',
                  complaintType:"其他",
                  content:'欺诈学费，无证经营',
                  suggest:'进入调查ING',
              },
              {
                  complaintId: 1,
                  orgId: "0001",
                  complaintOrgName:"韦博开心豆",
                  complaintType:"违规办学",
                  content:"欺诈学费",
                  suggest:"进入调查",

              },
              {
                  complaintId: 2,
                  orgId: '0002',
                  complaintOrgName:'随便编的',
                  complaintType:"违规招生",
                  content:'无证经营',
                  suggest:'进入调查',
              },
              {
                  complaintId: 3,
                  orgId: "0003",
                  complaintOrgName:"随便编的",
                  complaintType:"其他",
                  content:"欺诈学费，无证经营",
                  suggest:"进入调查ing",

              },
              {
                  complaintId: 4,
                  orgId: '0004',
                  complaintOrgName:'你',
                  complaintType:"其他",
                  content:'欺诈学费，无证经营',
                  suggest:'进入调查ING',
              },
              {
                  complaintId: 1,
                  orgId: "0001",
                  complaintOrgName:"韦博开心豆",
                  complaintType:"违规办学",
                  content:"欺诈学费",
                  suggest:"进入调查",

              },
              {
                  complaintId: 2,
                  orgId: '0002',
                  complaintOrgName:'随便编的',
                  complaintType:"违规招生",
                  content:'无证经营',
                  suggest:'进入调查',
              },
              {
                  complaintId: 3,
                  orgId: "0003",
                  complaintOrgName:"随便编的",
                  complaintType:"其他",
                  content:"欺诈学费，无证经营",
                  suggest:"进入调查ing",

              },
              {
                  complaintId: 4,
                  orgId: '0004',
                  complaintOrgName:'你',
                  complaintType:"其他",
                  content:'欺诈学费，无证经营',
                  suggest:'进入调查ING',
              },
              {
                  complaintId: 1,
                  orgId: "0001",
                  complaintOrgName:"韦博开心豆",
                  complaintType:"违规办学",
                  content:"欺诈学费",
                  suggest:"进入调查",

              },
              {
                  complaintId: 2,
                  orgId: '0002',
                  complaintOrgName:'随便编的',
                  complaintType:"违规招生",
                  content:'无证经营',
                  suggest:'进入调查',
              },
              {
                  complaintId: 3,
                  orgId: "0003",
                  complaintOrgName:"随便编的",
                  complaintType:"其他",
                  content:"欺诈学费，无证经营",
                  suggest:"进入调查ing",

              },
              {
                  complaintId: 4,
                  orgId: '0004',
                  complaintOrgName:'你',
                  complaintType:"其他",
                  content:'欺诈学费，无证经营',
                  suggest:'进入调查ING',
              },
          ]
    };
    return json;
}

function getComplaintDetailById(form) {

    console.log("form");
    var complaintId = JSON.parse(form.body).complaintId;
    const json = { code: 200, success: true, msg: '机构详情' };
    json.data = {
       complaintList: [
           {
               complaintId: 1,
               orgId: "0001",
               complaintOrgName:"韦博开心豆",
               complaintType:"违规办学",
               content:"欺诈学费",
               contentDetail:"欺诈学费无证经营，一夜之间突然卷款跑人了 ",
               suggest:"进入调查",

           },
           {
               complaintId: 2,
               orgId: '0002',
               complaintOrgName:'随便编的',
               complaintType:"违规招生",
               content:'无证经营',
               contentDetail:"尊敬的教育部门领导，你们好！现我就淮安市思聪教育培训中心有限公司。思聪教育再收取清江浦区两家非法办学机构加盟费后，不顾政策法规和消防安全隐患。公然进行巨幅门头广告制作和非法招生。如清江浦区旺旺家园小区25号商铺二楼的思聪教育，针对消防肯定不合格问题（进出通道只有一个外挂楼梯），明知存在重大安全隐患，还是只顾收钱，对政策法规不管不问。恳请领导责成淮安市教育局和清江浦区教育局联合其他相关执法部门联合从严查处。根据2019年9月24日《省教育厅关于加强校外培训机构长效管理的意见》和淮安市市政府的《淮政办发（2019）22号》文件,进行查处。  ",
               suggest:'进入调查',
           },
           {
               complaintId: 3,
               orgId: "0003",
               complaintOrgName:"随便编的",
               complaintType:"其他",
               content:"欺诈学费，无证经营",
               contentDetail:"听说美乐树在苏州有几家校区，感觉应该不错，就带着孩子到他们永旺校区去咨询，结果咨询出了好多问题",
               suggest:"进入调查ing",
           },
           {
               complaintId: 4,
               orgId: '0004',
               complaintOrgName:'你',
               complaintType:"其他",
               content:'欺诈学费，无证经营',
               contentDetail:"laaaaaaaaaaaaaassssssssssssssssssssssssssss ",
               suggest:'进入调查ING',
           },
           ]
    };

    json.data.complaintList = json.data.complaintList.filter((item) => item.complaintId === complaintId);
    return json;
}

export default ({ mock }) => {
    if (!mock) return;
    Mock.mock(/\/api\/AllComplaintList/, 'get', getAllComplaintList);
    Mock.mock(/\/api\/getComplaintDetailById/, 'get', getComplaintDetailById);
    Mock.mock(/\/api\/queryComplaintList/, 'get', (queryComplaintList) => {


        console.log(complaintOrgName);

        const json = { code: 200, success: true, msg: '带参数查询投诉详情' };
        json.data = {
            complaintList: [
                {
                    complaintId: 1,
                    orgId: "0001",
                    complaintOrgName:"韦博开心豆",
                    complaintType:"违规办学",
                    content:"欺诈学费",
                    suggest:"进入调查",

                },
                {
                    complaintId: 2,
                    orgId: '0002',
                    complaintOrgName:'随便编的',
                    complaintType:"违规招生",
                    content:'无证经营',
                    suggest:'进入调查',
                },
                {
                    complaintId: 3,
                    orgId: "0003",
                    complaintOrgName:"随便编的",
                    complaintType:"其他",
                    content:"欺诈学费，无证经营",
                    suggest:"进入调查ing",

                },
                {
                    complaintId: 4,
                    orgId: '0004',
                    complaintOrgName:'你',
                    complaintType:"其他",
                    content:'欺诈学费，无证经营',
                    suggest:'进入调查ING',
                },
            ]

        };

        var complaintOrgName = JSON.parse(queryComplaintList.body).complaintOrgName;
        if(complaintOrgName){json.data.complaintList = json.data.complaintList.filter((item) => item.complaintOrgName === complaintOrgName);}
        var complaintType = JSON.parse(queryComplaintList.body).complaintType;
        if(complaintType){json.data.complaintList = json.data.complaintList.filter((item) => item.complaintType === complaintType);}


        console.log(json);
        return json;
    });
    //新增投诉
    Mock.mock(/\/api\/addComplaintList/, 'post', (addComplaintList) => {

        var complaintOrgName = JSON.parse(addComplaintList.body).complaintOrgName;
        console.log(complaintOrgName);

        const json = { code: 200, success: true, msg: '新增投诉' };
        json.data = {
            addComplaintList: [
                // {
                //     address:"",
                //     complaintType:"",
                //     complaintOrgName:"",
                //     complaintTitle:"",
                //     complaintContent:"",
                // },
            ]
        };
        json.data.addComplaintList.address = JSON.parse(addComplaintList.body).address;
        json.data.addComplaintList.complaintType = JSON.parse(addComplaintList.body).complaintType;
        json.data.addComplaintList.complaintOrgName = JSON.parse(addComplaintList.body).complaintOrgName;
        json.data.addComplaintList.complaintTitle = JSON.parse(addComplaintList.body).complaintTitle;
        json.data.addComplaintList.complaintContent = JSON.parse(addComplaintList.body).complaintContent;
        console.log(json);
        return json;
    });

}
