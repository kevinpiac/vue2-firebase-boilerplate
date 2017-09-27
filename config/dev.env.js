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

  /**
   * Sample firebase config
   */
  API_KEY: '"AIzaSyAgG2SoAmnTzdg3Jgz77Xc9C4NutUqPuFU"',
  AUTH_DOMAIN: '"sample-firebase-app-d87f0.firebaseapp.com"',
  DATABASE_URL: '"https://sample-firebase-app-d87f0.firebaseio.com"',
  PROJECT_ID: '"sample-firebase-app-d87f0"',
  STORAGE_BUCKET: '""',
  MESSAGING_SENDER_ID: '"748690741616"',
})
