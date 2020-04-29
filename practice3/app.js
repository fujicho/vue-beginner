// Vue.component('fruits-item-name', {
//   props: {
//     fruitsItem: {
//       type: Object,
//       required: true
//     }
//   },
//   template: '<li>{{ fruitsItem.name }}</li>'
// })

// new Vue({
//   el: '#fruits-component',
//   data:{
//     fruitsItems: [
//       {name: '梨'},
//       {name: 'イチゴ'}
//     ]
//   }
// })

var counterButton = Vue.extend({
  template: '<span>{{ counter }}個<button v-on:click="addToCart">追加</button></span>',
  data: function () {
    return {
      counter: 0
    }
  },
  methods: {
    addToCart: function(){
      this.counter += 1
      this.$emit('increment')
    }
  },
})

new Vue({
  el: '#fruits-counter',
  components: {
    'counterbutton': counterButton
  },
  data: {
    total: 0,
    fruits: [
      {name: '梨'},
      {name: 'イチゴ'}
    ]
  },
  methods: {
    incrementCartStatus: function () {
      this.total += 1
    }
  }
})