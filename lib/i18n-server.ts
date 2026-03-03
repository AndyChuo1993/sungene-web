import { cookies } from 'next/headers'
import { Lang } from './i18n'

export function getLang(): Lang {
  const v = cookies().get('lang')?.value
  return v === 'en' ? 'en' : 'zh-Hant'
}
