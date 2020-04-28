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
    detail: '※商品名をクリックするとここに詳細が表示されます',
    balance: 10000
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
    showDetail: function(text){
      this.detail = text
    },
    doBuy: function(){
      this.showBuying()
      this.totalBalance()
      this.undo()
    },
    totalBalance: function(){
      if (this.balance >= this.totalPriceWithTax){
        this.balance = this.balance - this.totalPriceWithTax
      }
    },
    showBuying: function(){
      if (this.balance >= this.totalPriceWithTax){
        alert(this.totalPriceWithTax + '円のお買い上げ！')
      } else {
        alert(this.totalPriceWithTax - this.balance + '円不足しています！！')
      }
    },
    undo: function(){
      this.items.forEach(function (item){
        item.quantity = 0
      })
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
      return this.totalPrice >= 1000　&& this.balance >= this.totalPriceWithTax
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