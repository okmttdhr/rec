const withPWA = require('next-pwa');

require('dotenv').config()

module.exports = withPWA({
  pwa: {
    dest: 'public',
  },
  env: {
    GOOGLE_CUSTOM_SEARCH_KEY: process.env.GOOGLE_CUSTOM_SEARCH_KEY,
    GOOGLE_CUSTOM_SEARCH_CX: process.env.GOOGLE_CUSTOM_SEARCH_CX,
  }
});
