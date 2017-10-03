<template lang="html">
  <el-menu
    theme="dark"
    class="main-menu"
    mode="horizontal">
    <el-row type="flex" justify="space-between">
      <el-col :span="12">
        <el-menu-item
          v-if="!isAuthenticated"
          v-for="page in unauthenticated.pages"
          :key="page.key"
          :index="page.index"
          @click="goToRouteName(page.routeName)">
          {{ $t(page.locale) }}
        </el-menu-item>

        <el-menu-item index="switch">
          <locale-switch></locale-switch>
        </el-menu-item>
      </el-col>
      <el-col :xs="{span: 14 }" :span="7" v-if="isAuthenticated">
        <el-menu-item index="profileDropdown">
          <el-dropdown trigger="click" @command="goToRouteName">
            <span style="color: white;">
              {{ $t('dropdown', { name: currentUserDisplayName }) }}<i class="el-icon-caret-bottom el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item
                v-for="(page, index) in authenticated.dropdown.pages"
                :command="page.routeName"
                :divided="index === authenticated.dropdown.pages.length - 1">
                {{ $t(page.locale) }}
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-menu-item>
      </el-col>
    </el-row>
  </el-menu>
</template>

<script>
/**
 * =============
 * Nav Menu
 * =============
 *
 * Sample navigation with element-ui component.
 */
import LocaleSwitch from '@/components/LocaleSwitch/Index';
import StoreGetters from '@/mixins/Store/getters';
/**
 * import component specific locale
 */
import Locale from './locale';

export default {
  /**
   * Set component specific locale
   */
  i18n: {
    messages: Locale,
  },

  /**
   * Store getters allows to map all store's getters
   */
  mixins: [StoreGetters],

  /**
   * LocaleSwitch is an example dropdown allowing to change language
   */
  components: { LocaleSwitch },

  data() {
    return {
      authenticated: {
        dropdown: {
          pages: [
            { key: 'profile', index: 'profile', routeName: 'Profile', locale: 'pages.profile' },
            { key: 'logout', index: 'logout', routeName: 'Logout', locale: 'pages.logout' },
          ],
        },
      },
      unauthenticated: {
        pages: [
          { key: 'login', index: 'login', routeName: 'Login', locale: 'pages.login' },
          { key: 'register', index: 'register', routeName: 'Register', locale: 'pages.register' },
        ],
      },
    };
  },
  methods: {
    goToRouteName(name) {
      this.$router.push({ name });
    },
  },
};
</script>

<style lang="stylus">
@import '../../assets/stylus/main';

.main-menu {
  background: $light
}
.main-menu {
  border-radius: 0!important;
}
</style>
