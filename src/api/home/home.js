import request from '@/router/axios';

export const getHome = () => {
    return request({
        url: '/api/home',
        method: 'get',
    })
}

export const getAllOrgList = () => {
    return request({
        url: '/api/AllOrgList',
        method: 'get',
    })
}

export const queryOrgList = (
    orgName,
    address,
    trainType,
    trainSubject,
    trainForm) => {

    return request({
        url: '/api/queryOrgList',
        method: 'get',
        data: {
            orgName,
            address,
            trainType,
            trainSubject,
            trainForm
        }
    })


}

