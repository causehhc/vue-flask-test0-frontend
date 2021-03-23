import request from '@/utils/request'

export function getList(params) {
    return request({
        url: '/api/list/info',
        method: 'get',
        params
    })
}
