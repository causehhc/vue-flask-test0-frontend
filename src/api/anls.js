import request from '@/utils/request'

export function getList(data) {
    return request({
        url: '/api/list/anls',
        method: 'post',
        data
    })
}
