
/**
 * 获取图片 base64 编码
 *
 * @param {*} img
 * @param {*} callback
 */
export const getBase64 = (img, callback) => {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result))
  reader.readAsDataURL(img)
}
