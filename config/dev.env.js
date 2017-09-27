var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

/**
 * ===================
 * DEVELOPMENT CONFIG
 * ===================
 *
 * Store sensitive development vars in env.
 */

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_KEY: '"<YOUR_API_KEY>"',
  AUTH_DOMAIN: '"<PROJECT_ID>.firebaseapp.com"',
  DATABASE_URL: '"https://<DATABASE_NAME>.firebaseio.com"',
  STORAGE_BUCKET: '"<BUCKET>.appspot.com"',
  MESSAGING_SENDER_ID: '"<SENDER_ID>"',
})
