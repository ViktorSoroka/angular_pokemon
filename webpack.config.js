const HtmlWebpackPlugin         = require('html-webpack-plugin');
const { BaseHrefWebpackPlugin } = require('base-href-webpack-plugin');
const MiniCssExtractPlugin      = require('mini-css-extract-plugin');
const path                      = require('path');

const srcPath    = path.join(__dirname, 'app');
const nodeEnv    = process.env.NODE_ENV;
const production = nodeEnv && nodeEnv.indexOf('production') > -1;

const devTools = !production;

const distPath     = 'dist';
const fontsPath    = '/fonts/';
const imagesPath   = '/images/';
const baseProdPath = '/angular_pokemon/';

const commons = require(`${srcPath}/vendors`);

const webpackConfig = module.exports = {
  mode: production ? 'production' : 'development',
  entry  : {
    module: path.join(srcPath, 'app.module.js'),
    commons
  },
  resolve: {
    alias     : {
      components: path.resolve(__dirname, './app/components/'),
      styles    : path.resolve(__dirname, './app/components/styles/')
    },
    extensions: ['*', '.js'],
    modules: [
      path.resolve(__dirname, 'app'),
      'node_modules',
    ],
  },
  output : {
    path      : path.join(__dirname, distPath),
    filename  : '[name].js',
    publicPath: production ? baseProdPath : ''
  },
  module : {
    rules: [
      {
        test   : /^((?!\.min).)*\.js$/,
        exclude: /node_modules/,
        use    : [
          'babel-loader',
          'auto-ngtemplate-loader'
        ]
      },
      {
        test  : /\.css$/,
        use   : [
          {
            loader: devTools ? 'style-loader' : MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              modules: false
            }
          },
        ],
      },
      {
        test  : /\.less$/,
        use   : [
          {
            loader: devTools ? 'style-loader' : MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              modules: false
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: devTools ? [] : [
                require('autoprefixer')({}),
                require('cssnano')({ preset: 'default' })
              ],
              minimize: devTools
            }
          },
          {
            loader: 'less-loader',
            options: {
              paths: [path.resolve(__dirname, "node_modules")]
            }
          }
        ],
      },
      {
        test   : /^((?!tpl).)*\.html$/,
        use    : ['html-loader']
      },
      { // templates through template cache
        test  : /\.tpl\.html$/,
        use   : [
          `ngtemplate-loader?relativeTo=${(path.resolve(__dirname, 'app'))}/`,
          'html-loader'
        ]
      },
      {
        test  : /\.woff(\?.*)?$/,
        use   : [`url-loader?prefix=fonts/&name=${fontsPath}[name].[ext]&limit=10000&mimetype=application/font-woff`]
      },
      {
        test  : /\.woff2(\?.*)?$/,
        use: [`url-loader?prefix=fonts/&name=${fontsPath}[name].[ext]&limit=10000&mimetype=application/font-woff2`]
      },
      {
        test  : /\.ttf(\?.*)?$/,
        use: [`url-loader?prefix=fonts/&name=${fontsPath}[name].[ext]&limit=10000&mimetype=application/octet-stream`]
      },
      {
        test  : /\.eot(\?.*)?$/,
        use   : [`file-loader?prefix=fonts/&name=${fontsPath}[name].[ext]`]
      },
      {
        test  : /\.svg(\?.*)?$/,
        use   : [`url-loader?&name=${imagesPath}[name].[ext]&limit=10000&mimetype=image/svg+xml`]
      },
      {
        test  : /\.(png|jpg)$/,
        use   : [`url-loader?&name=${imagesPath}[name].[ext]&limit=10000`]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject  : true,
      hash    : true,
      template: 'app/index.html'
    }),
    new BaseHrefWebpackPlugin({ baseHref: production ? baseProdPath : '/' }),
    new MiniCssExtractPlugin()
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'vendors',
          chunks: 'all',
          test: /[\\/]node_modules[\\/]/,
        },
      }
    }
  }
};

if (devTools) {
  // Add debug tools
  Object.assign(webpackConfig, {
    devtool  : 'source-map',
    devServer: {
      contentBase       : `./${distPath}`,
      historyApiFallback: true,
      port              : 9000
    }
  });
}
