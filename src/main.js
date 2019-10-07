import Vue from 'vue'
import App from "./App";
import VueResource from 'vue-resource';

export const eventBus = new Vue();

Vue.use(VueResource);

Vue.directive('highlight', {
  bind(el, binding, vnode){
    // el.style.backgroundColor = 'green';
    // el.style.backgroundColor = binding.value;
    var delay = 0;
    if(binding.modifiers['delayed']){
      delay = 3000;
    }
    setTimeout(() => {
      if (binding.arg == 'background') {
        el.style.backgroundColor = binding.value;
      } else {
        el.style.color = binding.value;
      }
    }, delay);
  }
});

Vue.filter('toLowercase', function (value) {
  return value.toLowerCase();
});

new Vue({
  el: '#app',
  render: h => h(App)
})
