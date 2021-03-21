import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default  new Vuex.Store({

  state: {

    Images:[
      {id:1, name:'Segafredo Expresso Cafe 1kg', src: require('../assets/img/one.jpg'), price: 45, plot:'Segafredo Espresso Casa jest wyważoną kawową mieszanką najdoskonalszych ziaren gatunku Arabika oraz Robusta.' },
      {id:2,name:'Dellmayr Expresso Cafe 1kg', src: require('../assets/img/d1.jpg'), price: 35, plot:'Dallmayr Crema stworzona jest z pieczołowicie i starannie dobranej mieszanki najszlachetniejszych  ziaren Arabica.'},
      {id:3,name:'Dellmayr Expresso Cafe 1kg', src: require('../assets/img/d2.jpg'), price: 32,  plot:'Dallmayr Crema stworzona jest z pieczołowicie i starannie dobranej mieszanki najszlachetniejszych  ziaren Arabica.'},
      {id:4,name:'Lavazza L`Expresso Cafe 1kg', src: require('../assets/img/l3.jpg'), price: 55, plot:'Lavazza Crema e Aroma to tradycyjna włoska mieszanka, doskonale znana smakoszom kawy z całego świata. ' },
      {id:5,name:'Lavazza Crema 1kg', src: require('../assets/img/l4.jpg'), price: 55, plot:'Lavazza Crema e Aroma to tradycyjna włoska mieszanka, doskonale znana smakoszom kawy z całego świata. '},
      {id:6,name:'Illy Etiopia Cafe 1kg', src: require('../assets/img/l5.jpg'), price: 51, plot:'Illy Etiopia Cafe to tradycyjna włoska mieszanka, doskonale znana smakoszom kawy z całego świata. ' },
      {id:7,name:'Lavazza Rosa Cafe 1kg', src: require('../assets/img/l6.jpg'), price: 49, plot:'Lavazza Crema e Aroma to tradycyjna włoska mieszanka, doskonale znana smakoszom kawy z całego świata. ' },
      {id:8,name:'Lavazza Creme  1kg', src: require('../assets/img/l7.jpg'), price: 30, plot:'Lavazza Creme Gusto Cafe to tradycyjna włoska mieszanka, doskonale znana smakoszom kawy z całego świata. '},
      {id:9,name:'Inka  Cafe   1kg', src: require('../assets/img/m1.jpg'), price: 55, plot:'Inka  Cafe to tradycyjna włoska mieszanka, doskonale znana smakoszom kawy z całego świata. ' },
      {id:10,name:'MK Cafe Crema 1kg', src: require('../assets/img/m2.jpg'), price: 48, plot:'MK Cafe  Fresh to tradycyjna włoska mieszanka, doskonale znana smakoszom kawy z całego świata.' },
      {id:11,name:'Tupinamba  Black 1kg', src: require('../assets/img/m3.jpg'), price: 43, plot:'Tupinamba  Black to tradycyjna włoska mieszanka, doskonale znana smakoszom kawy z całego świata.' },
      {id:12,name:'Woseba  Cafe Brasil   1kg', src: require('../assets/img/w1.jpg'), price: 35, plot:'Woseba  Cafe Brasil  to tradycyjna włoska mieszanka, doskonale znana smakoszom kawy z całego świata.' },
      {id:13,name:'Woseba Mocca Fix 1kg', src: require('../assets/img/w2.jpg'), price: 47, plot:'Woseba  Mocca Fix Gold to tradycyjna włoska mieszanka, doskonale znana smakoszom kawy z całego świata.' },
      {id:14,name:'Tchibo Crema   1kg', src: require('../assets/img/t1.jpg'), price: 49, plot:'Tchibo Barista Caffe Crema jest wyjątkową kompozycją kawową przygotowaną na bazie najlepszej jakości ziaren gatunku Arabica.' },
      {id:15,name:'Kimbo   Expresso   1kg', src: require('../assets/img/m4.jpg'), price: 32, plot:'Kompozycja Kimbo Extra Cream składa się zarówno ze starannie wyselekcjonowanych,   ziaren gatunku Arabika.' },
      {id:16,name:'Segafredo Expresso 1kg', src: require('../assets/img/one.jpg'), price: 45 , plot:'Segafredo Espresso Casa jest wyważoną kawową mieszanką najdoskonalszych ziaren gatunku Arabika oraz Robusta.' },

  ],

  Radios:[

    { id: 1, name:'Kurier GLS - Przedpłata', price: 13.90},
    { id: 2, name:'Kurier GLS - Pobranie ', price: 19.90 },
    { id: 3, name:'Paczkomat inPost ', price: 11.90},
    { id: 4, name:'Odbiór w punkcie  ', price: 9.90},
    ],

    ShopingList:[],
    TotalPrices:[],
    TotaleAmount:[],

  },

  getters:{


},

  mutations: {

      add(state, TotalPrice){

        const find = state.ShopingList.find(itemInArray=>TotalPrice.id === itemInArray.id );

       if(find){

       const index = state.ShopingList.findIndex(itemInArray=>TotalPrice.id === itemInArray.id );

        state.ShopingList.splice(index, 1)
        state.ShopingList.push(TotalPrice)

        }
        else{
        state.ShopingList.push(TotalPrice)
        }

      const itemsnumber = state.ShopingList.map(item=>item.amount)

      const TotalItemsIbBusket = itemsnumber.reduce((a,b)=>{
        return (a +  b)
      })

      const totalPrice = state.ShopingList.map(item=>item.price)


      const TotalItemPrice = totalPrice.reduce((a,b)=>{
        return(a+b)
      })

      state.TotalPrices.pop()
      state.TotalPrices.push(TotalItemPrice)

      state.TotaleAmount.pop()
      state.TotaleAmount.push(TotalItemsIbBusket)

      if (! state.ShopingList?.length) {

        state.ShopingList.pop()

    }

    },

    remove(state, id){

      const deleteItem = state.ShopingList.findIndex(elem => elem.id  == id)
      state.ShopingList.splice(deleteItem, 1)

      const mapAmount = state.ShopingList.map(item=>item.amount)
      const mapTotalPrice = state.ShopingList.map(item=>item.price)

        const reduce = mapAmount.reduce((a,b)=>a+b, 0)
        const reduce2 = mapTotalPrice.reduce((a,b)=>a+b, 0)

        state.TotaleAmount.pop()
        state.TotaleAmount.push(reduce)

        state.TotalPrices.pop()
        state.TotalPrices.push(reduce2)

      },

  },
  actions: {

  },
  modules: {
  },

})
