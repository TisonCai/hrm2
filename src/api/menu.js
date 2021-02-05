import request from '@/utils/request'

// 获取路由
export const getRouters = (data) => {
  return request({
    url: '/SysFrame/GetUserMenuTreeJson',
    method: 'post',
    data
  })
}
