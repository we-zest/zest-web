export const mask = (str) => {
  if (!str) {
    return str
  }

  return str.substr(0, parseInt((str.split('').length / 2) - 2)) + '******' + str.substr(parseInt(str.split('').length / 2 + 4), str.split('').length)
}

export const maskName = (str) => {
  if (!str) {
    return str
  }

  return new Array(str.length).join('*') + str.substr(-1)
}
