module.exports = {
  // Tailwind Paths
  configJS: 'tailwind.config.js',
  sourceCSS: 'src/styles/tailwind.scss',
  outputCSS: 'src/styles/main.scss',
  // Sass
  sass: true,
  // PurgeCSS Settings
  purge: false,
  keyframes: false,
  fontFace: false,
  rejected: false,
  whitelist: [],
  whitelistPatterns: [],
  whitelistPatternsChildren: [],
  extensions: [
    '.ts',
    '.html',
    '.js'
  ],
  extractors: [],
  content: []
}
