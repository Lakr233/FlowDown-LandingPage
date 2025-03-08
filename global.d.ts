import type en from './src/i18n/en-US.json'

type Messages = typeof en

declare global {
  // Use type safe message keys with `next-intl`
  interface IntlMessages extends Messages {}
}

declare global {
  interface Window {
    environment: {
      isIOS: boolean
      isMacOS: boolean
    }
  }
}
