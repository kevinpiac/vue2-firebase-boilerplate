/**
 * ============
 * VueI18n
 * ============
 *
 * Uses VueI18n to add multi-lang feature
 *
 * http://kazupon.github.io/vue-i18n/en/pluralization.html
 */

import Vue from 'vue';
import VueI18n from 'vue-i18n';

/**
 * ===========
 * IMPORTANT:
 * ===========
 *
 * We use a component self contained locale arch.
 * It means that each component is responsible of defining and importing its own
 * locale files.
 *
 * This file is only import OR containing global translations messages.
 * I encourage you to use very few global translations. Use them only when it
 * gives a very important improvement.
 *
 */

Vue.use(VueI18n);

/**
 * Gather global sentences
 */
const messages = {
  en: {
    global: {
      // this object will contain global messages
    },
  },
  fr: {
    // this object will contain global messages
  },
};


/**
 * Init i18n
 */
const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages,
});

export default i18n;
