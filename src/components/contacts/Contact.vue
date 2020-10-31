<template>
  <v-card @click="goChat" outlined tile class="pa-3">
    <v-row>
      <v-col class="py-0" cols="auto">
        <v-avatar size="60">
          <v-img :src="contact.avatar"></v-img>
        </v-avatar>
      </v-col>
      <v-col class="py-0">
        <v-row no-gutters>
          <v-col cols="12">
            <div>
              <h3>{{ contact.name }}</h3>
            </div>
          </v-col>
          <v-col cols="10">
            <div class="grey--text">
              {{ contact.lastMessage }}
            </div>
          </v-col>
          <v-col cols="2">
            <v-icon color="primary" v-if="contact.lastView === true">mdi-check-all</v-icon>
            <v-icon v-else>mdi-check</v-icon>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    contact: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    goChat() {
      this.$router.push(`chat/${this.contact.id}`);
    },
  },
});
</script>

<style></style>
