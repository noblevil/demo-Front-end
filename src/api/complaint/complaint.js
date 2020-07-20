import request from '@/router/axios';

//【获取所有投诉信息，返回机构ID、投诉机构名、投诉标题和投诉ID】
export const getAllComplaintList = () => {
    return request({
        url: '/api/complaint/getComplaintList',
        method: 'get',
    })
}

//【新增投诉信息，将投诉机构所在区域、投诉机构名称、投诉标题、投诉内容加入数据库，投诉ID自增】
export const addComplaintList = (
    //address,             //投诉机构所在区域
    orgName,               //投诉机构Id
    //complaintOrgName,      //投诉机构名称
    title,       //投诉标题
    content,   //投诉内容
    suggest,
) => {
    return request({
        url: '/api/complaint/addComplaint',
        method: 'post',
        data: {
            orgName,
            title,
            content,
            suggest,
        }
    },
    )
}

//【根据机构名查询投诉信息，返回投诉机构ID、投诉机构名、投诉标题和投诉ID】
export const queryComplaintList = (
    //address,
    orgName,
) => {
    return request({
        url: '/api/complaint/getOrgComplaintTitleList',
        method: 'get',
        params: {
            //address,
            orgName,
        }
    }
    )
}

//【根据投诉ID查看详情，返回投诉机构名、投诉标题、投诉内容和改进建议】
export const getComplaintDetailById = (
      complaintId,
       ) => {
         return request({
        url: '/api/complaint/getComplaintDetailById',
        method: 'get',
        params: {
            complaintId
        }
    }
    )
}
