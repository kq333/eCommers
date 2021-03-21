<template>
  <v-container >
  <v-card id="card" flat  height=" 930px" class="overflow-hidden">
    <v-app-bar cols='12' lg='3' xs='12' md='4' sm='6'
     dense
      absolute
      color="brown darken-1"
      dark
      shrink-on-scroll
      prominent
      scroll-target="#scrolling-techniques"
    >
      <v-app-bar-title width="440px">CoffieShop</v-app-bar-title>

      <v-spacer></v-spacer>
           <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon
          dark
          v-bind="attrs"
          v-on="on"
          >
        <v-icon>mdi-login</v-icon>
      </v-btn>
      </template>
      <span >Logowanie</span>
    </v-tooltip>

       <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          icon class="mx-6"
          dark
          v-bind="attrs"
          v-on="on"
          >
        <v-icon>mdi-account</v-icon>
      </v-btn>
      </template>
      <span>Konto</span>
    </v-tooltip>

<router-link  to="/secondpage">

      <v-btn icon   >
        <span id="demo" v-for="item in TotaleAmount" :key="item.id">{{item}}</span>
        <v-icon  style="font-size:40px">mdi-cart </v-icon>

      </v-btn>
</router-link>
         </v-app-bar>
    <v-sheet
      id="scrolling-techniques"
      class="overflow-y-auto"
      max-height="960"
    >
     <firstpage></firstpage>
      <bottombar></bottombar>
      <v-container style="height: auto"></v-container>
    </v-sheet>
  </v-card>
  </v-container>
</template>


<script>

import FirstPage from '../components/FirstPage.vue'
import Bottombar from '../components/Bottombar';



export default {

  components:{

'firstpage': FirstPage,
'bottombar': Bottombar,

  },

  methods:{

  },

  computed:{

    TotaleAmount(){

           return this.$store.state.TotaleAmount;

    }
  }

}
</script>

<style scoped>

#demo{
  color:red;
  margin-left:2px;
  position:absolute;
  z-index: 5;
  font-weight: bold;
  background-color: black;
  width:50%;
  height:0;
  text-align:center;
  line-height:0;
  padding:25% 0;
  border-radius:50%;

}

</style>