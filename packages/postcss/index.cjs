/** @type {import('postcss').Processor} */
// @ts-check

module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: [
        'Chrome > 31',
        'ff > 31',
        'ie >= 8',
        'Safari > 6',
        'last 2 versions',
        'Android 4.1'
      ],
      grid: true
    }
  }
}
