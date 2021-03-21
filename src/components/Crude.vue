<template>
    <div id='crude'>
 <h1 class="pa-6 my-7">Zawartość Twojego Koszyka</h1>
      <v-container>
          <v-card class="pa-6 my-7 hidden-sm-and-down"  flat >
            <v-row  >
              <v-col align="center" cols='12' lg='6' md='4' sm='3' >
                <div>PRODUKT</div>
              </v-col>
                    <v-col  cols='12' lg='2'  md='2' sm='1'>
                      <div>ILOŚĆ</div>
                    </v-col>
                <v-col  cols='12' lg='2'  md='2' sm='1' >
                <div>WARTOŚĆ</div>
              </v-col>
                <v-col  cols='12' lg='2'  md='2' sm='1'>
                <div>AKCJE</div>
              </v-col>
            </v-row>
          </v-card>
      </v-container>
<busketitems></busketitems>
<v-container>
        <v-card class="pa-6 my-7" flat>
          <v-row>
            <v-col cols='4' lg='4' >
              <div class="my-6">DOSTAWA</div>
                  <div id="delivery" v-for="image in Radios" :key="image.id">
                        <input type="radio" v-model="checked"    :value="image.price"> {{image.name}}  - {{image.price}}0 PLN
                  </div>
            </v-col>
               <v-col cols='4' lg='4' >
                  <div  class="my-6">PŁATNOŚĆ</div>
                    <span >
                      <input type="radio" name='one'>
                      <span class="mx-2" >Przelew przedpłąta na konto bankowe</span>
                    </span>
                  <div></div>
                     <span >
                      <input  id="delivery" type="radio" name='one'>
                      <span class="mx-2" >DotPay Karty płatnocze / szybkie transfery / przelew online / Blik/ PayPal</span>
                    </span>
              </v-col>
                   <v-col  cols='4' lg='4' >
                      <div  class="my-6">RAZEM:</div>
                      <div  class="my-6">Koszty dostawy: <span class="bold"> {{checked}}0 PLN </span> </div>
                      <div  class="my-6" v-for="item in TotalPrices" :key="item.id">Do zapłaty: <span class="bold"> {{item}} PLN </span></div>
                      <div>
                        <popup></popup>
                      </div>
                    </v-col>
          </v-row>
        </v-card>
</v-container>
    </div>
</template>

<script>

import BusketItems from '../components/BusketItems'
import Popup from '../components/Popup'


export default {

  components:{

    'busketitems': BusketItems,
    'popup':Popup

  },

  data(){

    return{
            radioGroup: "",
            checked:'',
            ultimatePrice:'',
            btn_checked:'',
    }
  },
  methods: {


    removeItem(id){

            this.$store.commit('removeItem', id)
    }
  },



  computed:{


ShopingList(){

  return this.$store.state.ShopingList;

},

TotaleAmount(){

  return this.$store.state.TotaleAmount;
},

Radios(){

    return this.$store.state.Radios;
},

TotalPrices(){

    return this.$store.state.TotalPrices;

}


}}
</script>

<style scoped>

#crude{
  height: auto;
  margin-top:77px;

}


#demo{
  margin:auto;
  display:flex;
  text-align: center;
  justify-content: center;
}

#prod{
  margin-left:40px;
  padding:40px;


}

#delivery{
  margin-top:25px;
}

.bold{
  font-weight: bold;

}


</style>