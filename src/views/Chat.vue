<template>
  <v-row class="overflow-y-hidden">
    <v-col class="py-0 ma-0" cols="12">
      <v-card tile height="75vh" class="overflow-y-auto">
        <div>Olá</div>
      </v-card>
    </v-col>
    <v-bottom-navigation absolute color="primary" horizontal>
      <v-text-field
        v-model="message"
        append-outer-icon="mdi-send"
        outlined
        hide-details
        clear-icon="mdi-close"
        clearable
        label="Mensagem"
        @click:append-outer="sendMessage"
        @click:clear="clearMessage"
      ></v-text-field>
    </v-bottom-navigation>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data: () => ({
    password: 'Password',
    message: 'Hey!',
  }),

  methods: {
    sendMessage() {
      this.clearMessage();
    },
    clearMessage() {
      this.message = '';
    },
  },
});
</script>

<style></style>
