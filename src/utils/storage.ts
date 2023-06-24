export const createStorage = () => {
  /**
   * 本地缓存类
   * @class Storage
   */
  const Storage = class {
    /**
     * @description 设置缓存
     * @param {string} key 缓存键
     * @param {*} value 缓存值
     * @param expire
     */
    set(key: any, value: any) {
      window.localStorage.setItem(key, JSON.stringify(value))
    }
    /**
     * 读取缓存
     * @param {string} key 缓存键
     * @param {*=} def 默认值
     */
    get(key: string) {
      const value = window.localStorage.getItem(key)
      if (value) {
        return value
      } else {
        this.remove(key)
        return null
      }
    }
    /**
     * 从缓存删除某项
     * @param {string} key
     */
    remove(key: string) {
      window.localStorage.removeItem(key)
    }
    /**
     * 清空所有缓存
     * @memberOf Cache
     */
    clear() {
      window.localStorage.clear()
    }
  }
  return new Storage()
}
export const Storage = createStorage()
export default Storage
