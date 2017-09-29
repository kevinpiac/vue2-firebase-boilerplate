/**
 * ========================
 * Actions for locale module
 * ========================
 */

import i18n from '@/plugins/vue-i18n';
import * as types from './mutation-types';

export default {
  switch: ({ commit }, newLocale) => {
    i18n.locale = newLocale;
    commit(types.SWITCH, newLocale);
  },
};
