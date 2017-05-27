module.exports = {
  'extends': 'airbnb',
  'parser': 'babel-eslint',
  'plugins': ['react'],
  'rules': {
    'react/jsx-filename-extension': ['error',
      { 'extensions': ['.js', '.jsx'] },
    ],
  },
  'globals': {
    'document': true,
    'window': true,
  },
};