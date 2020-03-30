/**
 * 手机号验证
 * @param {*} str
 */
export function validMobile (str) {
  return /^1[3456789]\d{9}$/.test(str)
}

/**
 *
 * 手机 validate
 *
 * @param {*} rule
 * @param {*} value
 * @param {*} callback
 */
export const validateMobile = (rule, value, callback) => {
  if (!validMobile(value)) {
    return callback(new Error('手机号有误'))
  }

  callback()
}

/**
 * 账号验证
 *
 * @param {*} rule
 * @param {*} value
 * @param {*} callback
 */
export const validateAccount = (rule, value, callback) => {
  if (!/^[a-zA-z]\w{6,15}$/.test(value)) {
    return callback(new Error('字母开头，包含字母、数字、下划线长度为 6-16 位'))
  }

  callback()
}

/**
 * 验证身份证号码
 *
 * @param {*} rule
 * @param {*} value
 * @param {*} callback
 */
export const validateIdCard = (rule, value, callback) => {
  if (!/(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$)/.test(value)) {
    return callback(new Error('请填写正确的身份证号码'))
  }

  callback()
}

/**
 *
 * 密码 validate
 *
 * @param {*} rule
 * @param {*} value
 * @param {*} callback
 */
export const validatePassword = (rule, value, callback) => {
  if (!value || value.length < 6) {
    callback(new Error('密码最少 6 位数'))
  } else {
    callback()
  }
}

/**
 *
 * 确认密码 validate
 *
 * @param {*} rule
 * @param {*} value
 * @param {*} callback
 */
export const validateConfirmPassword = (rule, value, callback) => {
  const form = this.form
  if (value && value !== form.getFieldValue('password')) {
    callback(new Error('两次密码不一致'))
  } else {
    callback()
  }
}
