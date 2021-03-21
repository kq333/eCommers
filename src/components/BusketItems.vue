<template>
   <v-container>

 <v-card v-for="item in ShopingList" :key="item.id"   class="pa-6 my-7 " >
        <v-row    >
          <v-col cols='12' lg='2' md='2' sm='3'  >
                  <v-img
                  align="center"
                    class="mx-16"
                    height="100"
                    width="100"
                    :src="item.src">
                  </v-img>
                   </v-col>
                    <v-col  cols='12' lg='4' md='4' sm='3' align="center">
                         <v-card-title >{{item.name}}</v-card-title>
                    </v-col>
               <v-col cols='12' lg='2'  md='2' sm='2' align="center">
                      <v-card-title  >{{item.amount}} .szt</v-card-title>
                </v-col >
              <v-col align="center" cols='12' lg='2'  md='2' sm='2' >
                   <v-card-title>{{item.price}} PLN </v-card-title>
          </v-col>
          <v-col md='1' sm='1' align="center"  >
            <v-btn @click="remove(item.id)"  >Usuń</v-btn>
          </v-col>
        </v-row>
      </v-card>
</v-container>
</template>

<script>

export default {

    methods:{

            remove(id){

          this.$store.commit('remove', id)

            }
    },

    computed:{

        ShopingList(){

  return this.$store.state.ShopingList;


},
    }



}
</script>
