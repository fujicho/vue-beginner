Vue.component('fruits-list-title',{
  template: '<h1>フルーツ一覧</h1>'
})

Vue.component('fruits-list',{
  template: '<div><fruits-list-title></fruits-list-title></div>'
})
　
var FruitsListTitle = Vue.extend({
  template: '<h1>フルーツ一覧</h1>'
})

new FruitsListTitle().$mount('#fruits-list')

var vm = new Vue({
  el: '#main',
})