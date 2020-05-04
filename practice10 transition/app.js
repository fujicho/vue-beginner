new Vue({
  el: '#app',
  data: function() {
    return {
      animationClass: 'bounce',
      isShown: false,
    };
  },
  computed: {
    activeClass: function() {
      return this.animationClass + ' animated';
    },
  },
});