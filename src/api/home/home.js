import request from '@/router/axios';

//根据orgId得到机构详情
export const getOrgDetailById = (orgId) => {
    return request({
        url: '/api/orginfo/getOrgDetailById',
        method: 'get',
        params: {
            orgId,
        }
    })
}

//根据orgId得到机构详情
export const getAllOrgList = () => {
    return request({
        url: '/api/orginfo/getAllOrgList',
        method: 'get',
    })
}

//根据 筛选 得到机构列表
export const queryOrgList = (
    orgName,
    oftenAddress,
    trainType,
    trainSubject,
    trainForm) => {

    console.log(oftenAddress);


    return request({
        url: '/api/orginfo/queryOrgList',
        method: 'get',

        params: {
            orgName,
            oftenAddress,
            trainType,
            trainSubject,
            trainForm
        }
    })


}

//根据orgId  得到机构所属的所有教师列表
export const getTeachListById = (orgId) => {


    return request({
        url: '/api/teachinfo/getTeachListById',
        method: 'get',
        params: {
            orgId,

        }
    })
}

//根据orgId  得到机构所属的所有课程列表
export const getCourseListById = (orgId) => {



    return request({
        url: '/api/course/getCourseListById',
        method: 'get',
        params: {
            orgId,

        }
    })
}

//根据orgId  得到机构所属的所有班次列表
export const getClassCourseListById = (orgId) => {



    return request({
        url: '/api/course/getClassCourseListById',
        method: 'get',
        params: {
            orgId,

        }
    })
}

//根据 筛选 得到教师列表
export const queryTeachList = (
    // 筛选条件部分缺少资格种类
    orgId,
    teachName,
    sex,
    countryNature,
    workType,
    teachQualifClass,
    isTeachQualifCert,
    teachingSubject,
) => {

    return request({
        url: '/api/teachinfo/queryTeachList',

        method: 'get',
        params: {
            orgId,
            teachName,
            sex,
            countryNature,
            workType,
            teachQualifClass,
            isTeachQualifCert,
            teachingSubject,
        }
    })


}

//根据 筛选 得到课程列表
export const queryCourseList = (
    orgId,
    courseLevel,
    courseSubject,
    studentRank,
    studentGrade
) => {

    return request({
        url: '/api/course/queryCourseList',
        method: 'get',
        params: {
            orgId,
            courseLevel,
            courseSubject,
            studentRank,
            studentGrade
        }
    })


}

//根据 筛选 得到班次列表
export const queryClassCourseList = (
    orgId,
    courseSubject,
    studentGrade,
    CourseClassName,
    teachName,
    startDate,
    endDate
) => {

    return request({
        url: '/api/course/queryClassCourseList',
        method: 'get',
        params: {
            orgId,
            courseSubject,
            studentGrade,
            CourseClassName,
            teachName,
            startDate,
            endDate

        }
    })


}

//获取所有投诉列表-xxy
export const getAllComplaintList = () => {
    return request({
        url: '/api/AllComplaintList',
        method: 'get',
    })
}


//根据 筛选 得到投诉列表-xxy
export const queryComplaintList = (
    address,
    complaintOrgName,
) => {
    return request({
        url: '/api/queryComplaintList',
        method: 'get',
        data: {
            address,
            complaintOrgName,
        }
    },
        console.log(complaintOrgName))

}
//新增投诉列表-xxy
export const addComplaintList = (
    address,
    complaintOrgName,
    complaintTitle,
    complaintContent,
) => {
    return request({
        url: '/api/addComplaintList',
        method: 'post',
        data: {
            address,
            complaintOrgName,
            complaintTitle,
            complaintContent,
        }
    },
    )
}

//登录
export const login = (
    account,
    password,
    role,

) => {
    return request({
        url: '/api/jwt/signin',
        method: 'post',
        params: {
            account,
            password,
            role,
        }
    },
    )

}

//获取所有政策列表-xxy
export const getAllPolicyList = () => {
    return request({
        url: '/api/AllPolicyList',
        method: 'get',
    })
}

//根据policyID查询政策详情-xxy
export const getPolicyDetailById = (
      policyID,
       ) => {
         return request({
        url: '/api/getPolicyDetailById',
        method: 'get',
        data: {
            policyID
        }
    },
    console.log("HOME policyID:   "+policyID),
    )
}

//获取所有通知列表-xxy
export const getAllNoticeList = () => {
    return request({
        url: '/api/AllNoticeList',
        method: 'get',
    })
}

//根据noticeID查询通知详情-xxy
export const getNoticeDetailById = (
      noticeID,
       ) => {
         return request({
        url: '/api/getNoticeDetailById',
        method: 'get',
        data: {
            noticeID
        }
    },console.log("HOME noticeID:   "+noticeID),
    )

}

//根据complaintID查询投诉详情-xxy
export const getComplaintDetailById = (
      complaintId,
       ) => {
         return request({
        url: '/api/getComplaintDetailById',
        method: 'get',
        data: {
            complaintId
        }
    },console.log("HOME complaintId:   "+complaintId),
    )

}
