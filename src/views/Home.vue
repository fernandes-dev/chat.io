<template>
  <v-row no-gutters>
    <v-col cols="12" v-for="(contact, c) in contacts" :key="c">
      <Contact :contact="contact" />
    </v-col>
  </v-row>
</template>

<script>
import Vue from 'vue';
import Contact from '@/components/contacts/Contact.vue';

export default Vue.extend({
  components: {
    Contact,
  },
  computed: {
    contacts() {
      return [
        {
          id: 1,
          name: 'Letícia',
          avatar: 'https://i.pinimg.com/280x280_RS/78/77/9d/78779d095c3bf7c309f66115494c176c.jpg',
          lastMessage: 'kkkkkkk vai ter que pagar',
          lastView: true,
        },
        {
          id: 2,
          name: 'Letícia',
          avatar: 'https://i.pinimg.com/280x280_RS/78/77/9d/78779d095c3bf7c309f66115494c176c.jpg',
          lastMessage: 'kkkkkkk vai ter que pagar',
        },
        {
          id: 3,
          name: 'Letícia',
          avatar: 'https://i.pinimg.com/280x280_RS/78/77/9d/78779d095c3bf7c309f66115494c176c.jpg',
          lastMessage: 'kkkkkkk vai ter que pagar',
        },
        {
          id: 4,
          name: 'Letícia',
          avatar: 'https://i.pinimg.com/280x280_RS/78/77/9d/78779d095c3bf7c309f66115494c176c.jpg',
          lastMessage: 'kkkkkkk vai ter que pagar',
          lastView: true,
        },
        {
          id: 5,
          name: 'Letícia',
          avatar: 'https://i.pinimg.com/280x280_RS/78/77/9d/78779d095c3bf7c309f66115494c176c.jpg',
          lastMessage: 'kkkkkkk vai ter que pagar',
        },
      ];
    },
  },
});
</script>

<style></style>
