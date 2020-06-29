import request from '@/router/axios';

export const getHome = () => {
    return request({
        url: '/api/home',
        method: 'get',
    })
}

export const getOrgList = () => {
    return request({
        url: '/api/OrgList',
        method: 'get',
    })
}

