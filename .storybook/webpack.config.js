const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const path = require('path')

module.exports = async ({ config }) => {
  config.resolve.extensions.push('.ts', '.tsx', '.vue', '.css', '.scss', '.html')
  config.resolve.alias['~'] = path.resolve(__dirname, '../src')
  config.resolve.alias['assets'] = path.resolve(__dirname, '../src/assets')

  const cssRule = config.module.rules.filter(rule => {
    return String(rule.test) === '/\\.css$/'
  })

  cssRule.use = ['style-loader', 'css-loader']

  config.module.rules.push({
    test: /\.scss$/,
    use: [
      'vue-style-loader',
      {
        loader: 'css-loader',
        options: {
          sourceMap: true,
          importLoaders: 2
        }
      },
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: true,
          plugins: [
            require('autoprefixer')({ grid: true })
          ]
        }
      },
      {
        loader: 'sass-loader',
        options: {
          prependData: '@import "setting"; @import "mixin"; @import "normalize";',
          sassOptions: {
            includePaths: [path.resolve(__dirname, '../src/assets/scss/')]
          }
        }
      }
    ]
  })
  config.module.rules.push({
    enforce: 'pre',
    test: /\.(js|vue)$/,
    loader: 'eslint-loader',
    exclude: /(node_modules)|(stories)/
  })
  config.module.rules.push({
    test: /\.ts$/,
    loader: 'ts-loader',
    options: {
      appendTsSuffixTo: [/\.vue$/],
      transpileOnly: true
    }
  })
  config.module.rules.push({
    test: /\.ts(x)$/,
    loader: 'ts-loader'
  })
  config.module.rules.push({
    test: /\.vue$/,
    loader: 'storybook-addon-vue-info/loader',
    enforce: 'post'
  })
  config.module.rules.push({
    test: /\.svg$/,
    loader: 'svg-url-loader'
  })
  config.module.rules.push({
    test: /\.(orf|eot|ttf|woff|woff2)(\?.+)?$/,
    loader: 'file-loader'
  })
  config.module.rules.push({
    test: /\.(png|jpe?g|gif)$/,
    loader: 'url-loader',
    query: {
      limit: 1000,
      name: 'img/[name].[hash:7].[ext]'
    }
  })

  config.plugins.push(new ForkTsCheckerWebpackPlugin())

  return config
}
