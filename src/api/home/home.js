import request from '@/router/axios';

export const getOrgDetail = (orgId) => {

    console.log(orgId);

    return request({
        url: '/api/orgDetail',
        method: 'get',
        data: {
            orgId,

        }
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

export const getTeacherListByOrgId = (orgId) => {

    console.log(orgId);

    return request({
        url: '/api/teacherListByOrgId',
        method: 'get',
        data: {
            orgId,

        }
    })
}

export const getCourseListByOrgId = (orgId) => {

    console.log(orgId);

    return request({
        url: '/api/courseListByOrgId',
        method: 'get',
        data: {
            orgId,

        }
    })
}

export const getClassCourseListByOrgId = (orgId) => {

    console.log(orgId);

    return request({
        url: '/api/classCourseListByOrgId',
        method: 'get',
        data: {
            orgId,

        }
    })
}





