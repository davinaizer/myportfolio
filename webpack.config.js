switch (process.env.NODE_ENV) {
  case 'prod':
  case 'production':
    module.exports = require('./webpack.config.prod.js');
    break;

  case 'dev':
  case 'development':
  default:
    module.exports = require('./webpack.config.dev.js');
}
