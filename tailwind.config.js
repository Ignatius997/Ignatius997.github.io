module.exports = {
    content: [
      './_site/**/*.html',
      './_includes/**/*.html',
      './_layouts/**/*.html',
      './_posts/**/*.html',
      './*.html'
    ],
    theme: {
      extend: {},
    },
    plugins: [],
    mode: 'jit',
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader',
          ],
        },
      ],
    },
  }