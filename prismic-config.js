const { GATSBY_PRISMIC_REPOSITORY_NAME, GATSBY_PRISMIC_ACCESS_TOKEN } =
  process.env

const schemas = {
  page: require('./src/data/schemas/page.json'),
  seo: require('./src/data/schemas/seo.json'),
  menu: require('./src/data/schemas/menu.json'),
}

module.exports = {
  repositoryName: GATSBY_PRISMIC_REPOSITORY_NAME,
  accessToken: GATSBY_PRISMIC_ACCESS_TOKEN,
  defaultLanguage: 'en-us',
  langs: ['en-us'],
  defaultFrontpageTag: 'FRONTPAGE',
  schemas,
}
