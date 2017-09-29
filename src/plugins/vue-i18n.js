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
 * Import every module related locale and bootstrap the plugin
 */
import loginPage from '@/pages/Login/locale';
import registerPage from '@/pages/Register/locale';

Vue.use(VueI18n);

/**
 * Gather all sentences
 */
const messages = {
  en: {
    message: {
      login: 'Sign in',
      register: 'Sign up',
      logout: 'Logout',
    },
    loginPage: loginPage.en,
    registerPage: registerPage.en,
  },
  fr: {
    message: {
      login: 'Connexion',
      register: 'Créer un compte',
      logout: 'Déconnexion',
    },
    loginPage: loginPage.fr,
    registerPage: registerPage.fr,
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
