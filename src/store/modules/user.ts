import { defineStore } from 'pinia'
import { reqLogin } from '@/api/user'
import type { ILoginObj } from '@/api/user/type.ts'
import Storage from '@/utils/storage'
// 定义类型
interface IUserState {
  token: string | null
}
const useUserStore = defineStore('User', {
  state: (): IUserState => ({
    token: Storage.get('token')
  }),
  getters: {},
  actions: {
    async userLogin(data: ILoginObj) {
      const res: any = await reqLogin(data)
      if (res.code === 200) {
        this.token = res.data.token
        Storage.set('token', res.data.token)
        return 'ok'
      } else {
        return Promise.reject(new Error(res.data.message))
      }
    }
  }
})
export default useUserStore
