// 本地缓存
export function getItem(key) {
  return localStorage.getItem(key)
}

export function setItem(key, value) {
  return localStorage.setItem(key, value)
}

export function removeItem(key) {
  return localStorage.removeItem(key)
}

export function removeAll() {
  return localStorage.clear()
}
