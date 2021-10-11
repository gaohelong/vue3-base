/**
 * 获取本地存储
 */
export const getLocalStorage = (key) => {
  let val = window.localStorage.getItem(key)
  return val ? val : ''
}

/**
 * 保存本地存储
 */
export const setLocalStorage = (key, val) => {
  window.localStorage.setItem(key, val)
}

/**
 * 移除本地存储
 */
export const removeLocalStorage = (key) => {
  window.localStorage.removeItem(key)
}

/**
 * platform
 */
export const getPlatform = () => {
  return 'h5'
}