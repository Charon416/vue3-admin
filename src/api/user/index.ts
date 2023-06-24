import request from '@/utils/request'
import type { ILoginObj } from './type'

enum API {
  LOGIN_URL = '/user/login',
  USERINFO_URL = '/user/info'
}
/**
 * @description 登录
 * @returns
 */
export const reqLogin = (data: ILoginObj) => {
  return request.post(API.LOGIN_URL, data)
}
// 获取用户信息
export const reqUserInfo = () => {
  return request.get(API.USERINFO_URL)
}
