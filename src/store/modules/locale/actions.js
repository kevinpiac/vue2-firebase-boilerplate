/**
 * ========================
 * Actions for locale module
 * ========================
 */

import i18n from '@/plugins/vue-i18n';
import * as types from './mutation-types';

/**
 * Commit a switch type mutation with the new locale.
 * Allows to set globally a new locale.
 */
export default {
  switch: ({ commit }, newLocale) => {
    i18n.locale = newLocale;
    commit(types.SWITCH, newLocale);
  },
};
