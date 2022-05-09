/**
 * 错误提示
 * @param name 函数名
 * @param msg 错误信息
 */
export const onError = (name: string, msg: string): never => {
  throw new Error(`TsMango.${name}: ${msg}`)
}
