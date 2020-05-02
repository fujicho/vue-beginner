var getUsers = function(callback){
  setTimeout(function () {
    callback(null,[
      {
        id:1,
        name: 'Sohei Fujita'
      },
      {
        id:2,
        name: 'Hamada Takashi'
      }
    ])
  },1000)
}

var UserList = {
  template: '#user-list',
  data: function(){
    return {
      loading: false,
      users: function(){ return[] },
      error: null
    }
  },

  created: function(){
    this.fetchData()
  },

  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData: function(){
      this.loading = true
      getUsers((function (err, users){
        this.loading = falase
        if(err){
          this.error = err.toString()
        } else{
          this.users = users
        }
      }).bind(this))
    }
  }
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