import Mock from 'mockjs'

function getFakeDetail() {
    const json = {
        code: 200,
        success: true,
        msg: '操作成功'
    }

    json.data = '测试Mock返回';

    return json;

}

function getFakeTestDetail() {
    const json = {
        code: 200,
        success: true,
        msg: '操作成功'
    }

    json.data = '测试Mock test返回';

    return json;

}

export default ({ mock }) => {
    if (!mock) return;

    Mock.mock(/\/api\/demo\/detail/, 'get', getFakeDetail);
    Mock.mock(/\/api\/demo\/test-detail/, 'get', getFakeTestDetail);
}