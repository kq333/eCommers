<template>
  <div class="FirstPage" >
    <v-container>
  <v-row  class="my-10">
  <v-col cols='12' lg='3' xs='12' md='4' sm='6' v-for="image in Images" :key="image.id"

  >
 <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="350"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>
    <v-img
      class="mx-16"
      height="210"
      :src="image.src"
    ></v-img>
    <v-card-title>{{image.name}}</v-card-title>
    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>
        <div class="grey--text ml-4">
          4.5 (413)
        </div>
      </v-row>
      <div class="my-4 subtitle-1">
        $ • Italian, Cafe
      </div>
      <div>{{image.plot}}</div>
    </v-card-text>
    <v-divider class="mx-4"></v-divider>
    <v-card-title>Cena Produktu:  {{image.price}} PLN</v-card-title>
    <v-card
    flat
    color="transparent"
  >
    <v-subheader></v-subheader>
    <v-card-text>
      <v-row>
        <v-col class="pr-4">
          <v-slider
            v-model="slider"
            class="align-center"
            :max="max"
            :min="0"
            hide-details

          >
            <template v-slot:append>
              <v-text-field  @click="add(image.id)" ref="sliderPrice"
                v-model="slider"
                class="mt-0 pt-0"
                hide-details
                single-line
                type="number"
                 :min="0"
                style="width: 60px"
              >
              </v-text-field>
            </template>
          </v-slider>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
                <v-divider class="mx-4"></v-divider>
            <v-col>
  <v-card-actions>
      <v-btn  @click="add(image.id)"
       color="brown lighten-1"
        >
          Dodaj do  kosza
      </v-btn>
    </v-card-actions>
            </v-col>
          </v-card>
        </v-col>
    </v-row>
    </v-container>

  </div>
</template>


<script>



export default {



    data(){

        return{

      //  slider:'',
        prices:'',
        min: 0,
        max:30,                                                                 loading: false,
        selection: 1,





    }
    },

   methods: {

        add(id){

          const findIndex = this.$store.state.Images.findIndex(elem=>elem.id==id);
          const prices = this.$refs.sliderPrice[findIndex].value;

            if(prices>0){

              const index =  this.$store.state.Images.map((images)=>{

                  return {

                      id: findIndex,
                      price:images.price *prices,
                      name:  images.name,
                      amount:prices,
                      src: images.src

                    }
            });

            const TotalPrice = index[findIndex];
            this.$store.commit('add', TotalPrice)

        }},
      },

  computed:{

    ShopingList(){

           return this.$store.state.ShopingList
    },

  Images(){

       return this.$store.state.Images;

  },

  TotaleAmount(){

         return this.$store.state.TotaleAmount

  }
    },
}


</script>


<style  scoped>






</style>