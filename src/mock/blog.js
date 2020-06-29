import Mock from 'mockjs'

function getFakeList() {

    const json = {
        code: 200,
        success: true,
        msg: '操作成功'
    };

    const list = [];

    list.push({
        id: '1',
        title: '博客标题1',
        time: '2019.09.26',
        content: '博客内容1',
    }, {
        id: '2',
        title: '博客标题2',
        time: '2019.09.26',
        content: '博客内容2',
    });

    json.data = {
        total: 10,
        size: 10,
        current: 1,
        searchCount: true,
        pages: 1,
        records: list,
    };

    return json;
}

function getFakeDetail() {
    const json = {
        code: 200,
        success: true,
        msg: '操作成功'
    };

    json.data = {
        id: '1',
        title: '博客标题1',
        time: '2019.09.26',
        content: '博客内容1',
    };

    return json;
}

function fakeSuccess() {
    return {
        code: 200,
        success: true,
        msg: '操作成功'
    };
}
export default ({ mock }) => {
    if (!mock) return;
    Mock.mock(/\/api\/blade-desk\/blog\/list/, 'get', getFakeList);
    Mock.mock(/\/api\/blade-desk\/blog\/detail/, 'get', getFakeDetail);
    Mock.mock(/\/api\/blade-desk\/blog\/submit/, 'post', fakeSuccess);
    Mock.mock(/\/api\/blade-desk\/blog\/remove/, 'post', fakeSuccess);

}