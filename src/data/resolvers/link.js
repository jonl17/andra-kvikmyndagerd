const { defaultFrontpageTag } = require('../../../prismic-config')

const linkResolver = doc => {
  const isFrontpage = doc.tags && doc.tags.indexOf(defaultFrontpageTag) !== -1

  if (isFrontpage) {
    return '/'
  } else return `/${doc.uid}`
}

module.exports = linkResolver
