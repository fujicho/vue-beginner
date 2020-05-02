var getUsers = function(callback){
  setTimeout(function () {
    callback(null,[
      {
        id:1,
        name: 'Sohei Fujita',
      },
      {
        id:2,
        name: 'Hamada Takashi',
      }
    ])
  },1000)
}

var userData = [
  {
    id:1,
    name: 'Sohei Fujita',
    description: 'オペ室で働いている自称エンジニアです。'
  },
  {
    id:2,
    name: 'Hamada Takashi',
    description: 'おほほ'
  }
]

var getUser = function (userId, callback){
  setTimeout(function(){
    var filteredUsers = usersData.filter(function(user){
      return user.id === parseInt(userId, 10)
    })
    callback(null,filteredUsers && filteredUsers[0])
  },1000)
}

var UserDetail

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
        this.loading = false
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
        template: '<div>トップページです。</div>'
      }
    },
    {
      path: '/users',
      component: UserList
    },
    {
      path: '/users/:userID',
      component: UserDetail
    }
  ]
})

var app = new Vue({
  router: router
}).$mount('#app')