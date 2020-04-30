var MyButton = {
  data: function(){
    return{
      textLabel: 'child'
    }
  },
  template: `
  <button>
    <slot>OK</slot>
  </button>`
}

new Vue({
  el: '#app',
  data: function(){
    return {
      textLabel: 'parent'
    }
  },
  components: {
    MyButton: MyButton
  }
})

// var MyPage = {
//   template: `
//   <div>
//     <header>
//       <slot name="header"></slot>
//     </header>
//     <main>
//     <slot></slot>
//     </main>
//     <footer>
//       <slot name="footer"></slot>
//     </footer>
//   </div>
//   `
// }

// new Vue({
//   el: '#app',
//   components: {
//     MyPage: MyPage
//   }
// })

