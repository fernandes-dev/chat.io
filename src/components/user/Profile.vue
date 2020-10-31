<template>
  <v-card height="150px" flat tile class="pa-3">
    <v-row no-gutters>
      <v-col cols="12">
        <v-avatar size="70">
          <v-img :src="user.avatar"></v-img>
        </v-avatar>
        <v-btn
          @click="toggleTheme(false)"
          small
          depressed
          fab
          v-if="$store.state.isdark"
          absolute
          right
        >
          <v-icon>mdi-weather-sunny-alert</v-icon>
        </v-btn>
        <v-btn @click="toggleTheme(true)" small depressed fab v-else absolute right>
          <v-icon>mdi-weather-night</v-icon>
        </v-btn>
      </v-col>
      <v-col>
        <div class="mt-3">
          <h4>{{ user.name }}</h4>
        </div>
        <div class="grey--text">
          <h5>{{ user.phone }}</h5>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    user: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    toggleTheme(isdark: boolean) {
      this.$store.commit('toggleTheme', isdark);
    },
  },
});
</script>

<style></style>
