/**
 * ===================
 * PRODUCTION CONFIG
 * ===================
 *
 * Store sensitive production vars in env.
 */
module.exports = {
  NODE_ENV: '"production"',
  API_KEY: '"<YOUR_API_KEY>"',
  AUTH_DOMAIN: '"<PROJECT_ID>.firebaseapp.com"',
  DATABASE_URL: '"https://<DATABASE_NAME>.firebaseio.com"',
  STORAGE_BUCKET: '"<BUCKET>.appspot.com"',
  MESSAGING_SENDER_ID: '"<SENDER_ID>"',
}
