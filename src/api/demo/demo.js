import request from '@/router/axios';

export const getDetail = () => {
    return request({
        url: '/api/demo/detail',
        method: 'get'
    })
}

export const getTestDetail = () => {
    return request({
        url: '/api/demo/test-detail',
        method: 'get'
    })
}