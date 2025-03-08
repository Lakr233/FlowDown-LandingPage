export const isMacOS = () => {
  if (typeof window === 'undefined') return false
  return (
    window.navigator.userAgent.includes('Mac') &&
    !window.navigator.userAgent.includes('iPhone') &&
    window.navigator.maxTouchPoints === 0
  )
}

export const isIOS = () => {
  if (typeof window === 'undefined') return false
  return (
    window.navigator.userAgent.includes('Safari') &&
    !window.navigator.userAgent.includes('Chrome') &&
    window.navigator.maxTouchPoints > 0
  )
}
