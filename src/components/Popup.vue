<template>
  <v-row >
    <v-btn
      class="white--text"
      color="brown lighten-2"
      @click="overlay = !overlay"
    >
      Kup
    </v-btn>

    <v-overlay
      :z-index="zIndex"
      :value="overlay"
      :opacity="opacity"
      :absolute="absolute"
    >
<v-spacer></v-spacer>
    <v-btn
        right
        plain
        large
        class="white--text "
        color="white"
        @click="overlay = false"
      >
        X
      </v-btn>


   <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
          sm='1'
        >
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="Imię"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
          sm='1'
        >
          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            :counter="10"
            label="Nazwisko"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
          sm='1'
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>
        <v-spacer></v-spacer>
        <v-col>
          <v-btn right
            @click="overlay = false"

          >Zaloguj się</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>

    </v-overlay>
  </v-row>
</template>

<script>
  export default {
    data: () => ({
      overlay: false,
      zIndex: 0,
      opacity: 5,

    }),


    computed:{

    }
  }
</script>