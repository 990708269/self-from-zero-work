// 存放 公共的key
// 1. 将 InjectionKey 定义的数据类型放到 keys/index.ts 下维护
// keys/index.ts
import {InjectionKey, Ref } from "vue"
// 限制了 provide 导出的数据必须是 ref 且 boolean 类型
export const showPopupKey: InjectionKey<Ref<boolean>> = Symbol()
// 限制了 provide 导出的数据必须是 string
export const titleKey: InjectionKey<string> = Symbol()


