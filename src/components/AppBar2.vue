<template>
  <v-container>
  <v-card id="card" height=" 940px" flat class="overflow-hidden">
    <v-app-bar cols='12' lg='3' xs='12' md='4' sm='6'
     dense
      absolute
      color="brown darken-1"
      dark
      shrink-on-scroll
      prominent
      scroll-target="#scrolling-techniques"
    >
      <v-app-bar-title width="640px">CoffieShop</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon class=" my-1">
        <v-icon>mdi-login</v-icon>
      </v-btn>

       <v-btn icon class="mx-6 my-1">
        <v-icon>mdi-account</v-icon>
      </v-btn>
</v-app-bar>
    <v-sheet
      id="scrolling-techniques"
      class="overflow-y-auto"
      max-height="950"
    >
     <crude></crude>
     <bottombar></bottombar>

    </v-sheet>
  </v-card>
</v-container>
</template>

<script>

import Crude from '../components/Crude.vue';
import Bottombar from '../components/Bottombar';

export default {

    components:{
        'crude': Crude,
        'bottombar': Bottombar,


    }

}
</script>


<style scoped>



</style>