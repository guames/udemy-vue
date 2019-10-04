<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <button @click="selectedComponent='appMainQuote'">Quote</button>
        <button @click="selectedComponent='appMainUser'">User</button>
        <hr>
        <component :is="selectedComponent"></component>
      </div>
    </div>
  </div>
</template>

<script>
  import MainQuote from "./components/quote/MainQuote";
  import MainUser from "./components/user/MainUser";

  export default {
    data: function () {
      return{
        quoteTitle: 'The Quote',
        selectedComponent: 'app-main-quote'
      }
    },
    components:{
      appMainQuote: MainQuote,
      appMainUser: MainUser
    }
  }
</script>
