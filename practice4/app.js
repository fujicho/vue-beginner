var headerTemplate = `
  <div style="color: gray;">
    <slot name="header>※親から何も渡って来ない場合、この文が表示されます。</slot>
  </div>
`

Vue.component('page-header', {
  template: headerTemplate 
})

new Vue({
  el: "#fruits-list"
})