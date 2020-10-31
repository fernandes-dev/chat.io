<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>Chat.io</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer width="75%" v-model="drawer" absolute temporary>
      <Profile :user="user" />
      <v-list nav>
        <v-list-item-group v-for="(item, i) in menu" :key="i" v-model="group">
          <v-list-item @click="item.click">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main class="overflow-y-hidden">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Profile from '@/components/user/Profile.vue';

export default Vue.extend({
  mounted() {
    this.getTheme();
  },
  name: 'App',
  components: {
    Profile,
  },
  data: () => ({
    drawer: false,
    group: null,
  }),
  methods: {
    getTheme() {
      const theme = localStorage.getItem('theme');
      if (theme === 'dark') this.$vuetify.theme.dark = true;
      else this.$vuetify.theme.dark = false;
    },
  },
  computed: {
    user() {
      const user = {
        avatar:
          'https://avatars2.githubusercontent.com/u/44908695?s=400&u=3f666fcae61f947164d7a6c051b21082451bcaaf&v=4',
        name: 'Eduardo Fernandes',
        phone: '+55(66) 9 9957-9223',
      };
      return user;
    },
    menu() {
      return [
        {
          title: 'Minha Conta',
          icon: 'mdi-account-outline',
          click: () => {
            console.log('minha conta');
          },
        },
        {
          title: 'Sair',
          icon: 'mdi-exit-to-app',
          click: () => {
            console.log('sair');
          },
        },
      ];
    },
    isDark() {
      return this.$store.state.isdark;
    },
  },
  watch: {
    isDark() {
      this.$vuetify.theme.dark = this.isDark;
      if (this.isDark) localStorage.setItem('theme', 'dark');
      else localStorage.setItem('theme', 'light');
    },
  },
});
</script>
