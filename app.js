var items = [
  { 
    name:'鉛筆',
    price: 300,
    quantity: 0,
    text: 'ドラクエのバトルえんびつ(キャップは付属していません。)'
  },
  {
    name:'ノート',
    price: 400,
    quantity: 0,
    text: '方眼罫になっていてグラフが描きやすい！'
  },
  {
    name:'消しゴム',
    price: 500,
    quantity: 0,
    text: '野菜の形をしていてとても消しにくい'
  }
]

var vm = new Vue({
  el: '#app',
  data: {
    items: items,
    detail: '※商品名をクリックするとここに詳細が表示されます'
  },
  filters: {
    numberWithDelimiter: function(value){
  if (!value) {
    return '0'
  }
  return value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')
  }
  },
  methods: {
    doBuy: function(){
      alert(this.totalPriceWithTax + '円のお買い上げ！')
      this.items.forEach(function (item){
        item.quantity = 0
      })
    },
    showDetail: function(text){
      this.detail = text
    }
  },
  computed:{
    totalPrice: function(){
      return this.items.reduce(function(sum,item){
      	return sum + (item.price * item.quantity)
      },0)
    },
    totalPriceWithTax: function(){
    return Math.floor(this.totalPrice * 1.10)
    },
    canBuy: function(){
      return this.totalPrice >= 1000
    },
    errorMessageStyle: function(){
    return {
      border: this.canBuy ? '' : '1px solid red',
      color: this.canBuy ? '' : 'red'
    }
    },
  }
})
window.vm = vm