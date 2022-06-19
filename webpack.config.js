const path = require('path');

module.exports = {
  output: {
    filename: 'Munir_Nuristani_Resume.pdf',
  },
  module: {
    rules: [{ test: /\.pdf$/, use: 'raw-loader' }],
  },
};