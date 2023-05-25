const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    clean: true,
    
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    // compress: true,
    port: 9000,
    open: true,
    devMiddleware: {
      writeToDisk: true,
    }
  },

  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
            minimize: true,
            sources: true
        },
      },
      {

        test: /\.s[ac]ss|css$/i,
        use: [ 
            {
                loader: MiniCssExtractPlugin.loader,
                options: {
                esModule: false,
            }
          },
          "css-loader"

   ,"sass-loader"],

      },

    //   img
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator:{
            filename:"./images/[name][ext]",  
          }
      },
      // fonts
      {
        test: /\.(svg|eot|woff|woff2|ttf)$/i,
        type: 'asset/resource',
        generator: {
          filename: "./fonts/[name][ext]"
        }
      },

    ],
  },
  plugins: [
    
    new HtmlWebpackPlugin(
    {
        filename:"index.html",
        template:"./src/index.html"    
    }
  ),
  new HtmlWebpackPlugin(
    {
        filename:"projects.html",
        template:"./src/projects.html"    
    }
  ),
  new HtmlWebpackPlugin(
    {
        filename:"project-details.html",
        template:"./src/project-details.html"    
    }
  ),
  new HtmlWebpackPlugin(
    {
        filename:"blog.html",
        template:"./src/blog.html"    
    }
  ),
  new HtmlWebpackPlugin(
    {
        filename:"blog-detailes.html",
        template:"./src/blog-detailes.html"    
    }
  ),
  new HtmlWebpackPlugin(
    {
        filename:"blog-add.html",
        template:"./src/blog-add.html"    
    }
  ),
  new HtmlWebpackPlugin(
    {
        filename:"about.html",
        template:"./src/about.html"    
    }
  ),
  new HtmlWebpackPlugin(
    {
        filename:"contact.html",
        template:"./src/contact.html"    
    }
  ),

  new MiniCssExtractPlugin({
    filename:"css/style.css",
  }),
  new CssMinimizerPlugin(),
  new CleanWebpackPlugin(),
],
};
