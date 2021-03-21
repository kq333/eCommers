<template>
<v-container>
  <v-footer
    class="brown darken-1 white--text text-center"
    dark
    padless
    id="footer"

  >
    <v-card

     cols='12'
      flat
      tile
      class="brown darken-1 white--text text-center"

    >

        <v-row   class="my-3">
          <v-col cols='12' lg='4' md='3' sm='3' >
              <ul class="groupe1">
                        <li>Moje konto</li>
                        <li>Twoje zamówienia</li>
                        <li>Ustawienia konta</li>
                        <li>Program lojalnościowy</li>
                        <li>Procedura wymiany punktów</li>
                    </ul>
          </v-col>

          <v-col cols='12' lg='4'  md='3' sm='3'>

             <ul class="groupe2">
                        <li>Dostawa</li>
                        <li>Płatności</li>
                        <li>czas i koszty dostawy</li>
                        <li>Faktury i paragony</li>
                        <li>odbiór osobisty</li>
                    </ul>
          </v-col>
          <v-col cols='12' lg='4'  md='3' sm='3'>
              <ul class="groupe3">
                        <li>Kontakt</li>
                        <li>Poniedziałek - Piątek</li>
                        <li>8:00 - 18.30</li>
                        <li>sklep@sklep.pl</li>
                        <li>tel: +48 125 457 120</li>
                        <li>Wrocław, ul. Ćwiartki 3/4</li>
                    </ul>
          </v-col>




        </v-row>



      <v-divider></v-divider>

      <v-card-text class="white--text">
       <strong>KQ333 - 2021</strong>
      </v-card-text>
    </v-card>
  </v-footer>
  </v-container>
</template>

<style scoped>

#footer{
  margin-top:-22px;
  height: auto;
  display:flex;
  text-align: center;
  justify-content: center;
  border-radius: 3px;

}

.groupe1, .groupe2, .groupe3{
 list-style-type: none;



}

 li:hover{
 cursor: pointer;
 color:cornsilk;



}








</style>