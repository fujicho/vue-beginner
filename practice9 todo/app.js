var UserList = {
  template: '#user-list',
}

var router = new VueRouter({
  routes: [
    {
      path: '/top',
      component: {
        template: '<div></div>'
      }
    },
    {
      path: '/users',
      component: UserList
    }
  ]
})

var app = new Vue({
  router: router
}).$mount('#app')