class MinCache {
  // 将数据存储在本地缓存中指定的 name 中 
  set (name, data) {
    try {	 
      uni.setStorageSync(name, data)
    } catch (e) {
      console.log(e)
    }
  }
  // 从本地缓存中获取指定 name 对应的内容
  get (name) {
    let data
    try {
      data = uni.getStorageSync(name)
    } catch (e) {
      console.log(e)
    }
    return data
  }
  // 从本地缓存中移除指定 key
  delete (name) {
    try {
      uni.removeStorageSync(name)
    } catch (e) {
      console.log(e)
    }
  }
  // 返回一个布尔值，表示 name 是否在本地缓存之中
  has (name) {
    let value
    try {
      let res = uni.getStorageInfoSync()
      value = res.keys.includes(name)
    } catch (e) {
      console.log(e)
    }
    return value
  }
  // 清理本地数据缓存
  clear () {
	
    try {
      uni.clearStorageSync()
    } catch (e) {
      console.log(e)
    }
  }
}
 
export default MinCache
