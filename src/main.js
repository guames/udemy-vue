import Vue from 'vue'

var data = { status: 'Critical'};

Vue.component('my-cmp',{
  data: function () {
    return data;
  },
  template: '<p>Server Status: {{ status }} </p>'
});

new Vue({
  el: '#app'
})
