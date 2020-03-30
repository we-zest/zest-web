import cookieparser from 'cookieparser'

/**
 * Get cookie from request.
 *
 * @param  {Object} req
 * @param  {String} key
 * @return {String|undefined}
 */
export function cookieFromRequest (req, key) {
  if (!req.headers.cookie) {
    return
  }

  const cookies = cookieparser.parse(req.headers.cookie)

  if (Object.prototype.hasOwnProperty.call(cookies, key)) {
    return cookies[key]
  }

  return null
}
