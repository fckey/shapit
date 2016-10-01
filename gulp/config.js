var dest = './build';
var src = './src';

module.exports = {
  dest: dest,

  js: {
    src: src + '/**',
    dest: dest + '/',
    uglify: false
  },

  webpack: {
    entry: src + '/js/app.js',
    output: {
      filename: 'bundle.js'
    },
    resolve: {
      extensions: ['', '.js']
    }
  }
}
