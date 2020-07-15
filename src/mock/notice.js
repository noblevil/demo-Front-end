import Mock from 'mockjs'

function getAllNoticeList() {
    const json = { code: 200, success: true, msg: '通知详情' };
    json.data = {
        noticeList: [
            {
                noticeID: 0,
                noticeTitle: "通知一",
                noticeContent: "这里是通知一的内容正文",
            },
            {
                noticeID: 1,
                noticeTitle: "通知二",
                noticeContent: "这里是通知二的内容正文",

            },
            {
                noticeID: 2,
                noticeTitle: "通知三",
                noticeContent: "这里是通知三的内容正文",
            }
        ]
    };
    return json;
}

function getNoticeDetailById(form) {

    console.log("form");
    //console.log(form);
    var noticeID = JSON.parse(form.body).noticeID;

    const json = { code: 200, success: true, msg: '通知详情' };
    json.data = {
        noticeList: [
            {
                noticeID: 0,
                noticeTitle: "通知一",
                noticeContent: "这里是通知一的内容正文",
            },
            {
                noticeID: 1,
                noticeTitle: "通知二",
                noticeContent: "这里是通知二的内容正文",

            },
            {
                noticeID: 2,
                noticeTitle: "通知三",
                noticeContent: "这里是通知三的内容正文",
            }
        ]
    };

    json.data.noticeList = json.data.noticeList.filter((item) => item.noticeID === noticeID);
    return json;
}

export default ({ mock }) => {
    if (!mock) return;
    Mock.mock(/\/api\/AllNoticeList/, 'get', getAllNoticeList);
    Mock.mock(/\/api\/getNoticeDetailById/, 'get', getNoticeDetailById);
}
