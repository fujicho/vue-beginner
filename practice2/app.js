// input type=date のvalueに今日の日付を付与する例
// Vue.component('input-date-with-today',{
//   render: function (createElement){
//     return createElement(
//       'input',
//       {
//         attrs: {
//           type: 'date',
//           value: new Date().toISOString().substring(0,10)
//         }
//       }
//     )
//   }
// })

// new Vue({el: '#app'})

// Vue.component('fruits-list-title',{
//   template: '#fruits-list-title'
// })
// new Vue({
//   el: "#fruits-list",
//   components: {
//     'fruits-list-title': {
//       template: '<h1>フルーツ一覧</h1>'
//     }
//   }
// })

// Vue.component('fruits-list-title',{
//   template: '<h1>フルーツ一覧</h1>'
// })

// Vue.component('fruits-list',{
//   template: '<div><fruits-list-title></fruits-list-title></div>'
// })
// 　
// var FruitsListTitle = Vue.extend({
//   template: '<h1>フルーツ一覧</h1>'
// })

// new FruitsListTitle().$mount('#fruits-list')

// var vm = new Vue({
//   el: '#main',
// })