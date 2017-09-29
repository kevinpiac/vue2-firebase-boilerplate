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

Vue.use(VueI18n);

const messages = {
  en: {
    message: {
      login: 'Sign in',
      register: 'Sign up',
      logout: 'Logout',
    },
  },
  fr: {
    message: {
      login: 'Connexion',
      register: 'Créer un compte',
      logout: 'Déconnexion',
    },
  },
};

const i18n = new VueI18n({
  locale: 'en',
  messages,
});

export default i18n;
