<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <button class="btn btn-primary" @click="selectedComponent='appMainQuote'">Quote</button>
        <button class="btn btn-primary" @click="selectedComponent='appMainUser'">User</button>
        <button class="btn btn-primary" @click="selectedComponent='appMainForm'">Form</button>
        <button class="btn btn-primary" @click="selectedComponent='appMainDirective'">Directive</button>
        <button class="btn btn-primary" @click="selectedComponent='appMainFilterMixin'">Filter & Mixin</button>
        <button class="btn btn-primary" @click="selectedComponent='appMainHttp'">Http</button>
        <hr>
        <keep-alive>
          <component :is="selectedComponent"></component>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
  import MainQuote from "./quote/MainQuote";
  import MainUser from "./user/MainUser";
  import MainForm from "./form/MainForm";
  import MainDirective from "./directive/MainDirective";
  import MainFilterMixin from "./filter/MainFilterMixin";
  import MainHttp from "./http/MainHttp";

  export default {
    data: function () {
      return{
        quoteTitle: 'The Quote',
        selectedComponent: 'app-main-quote'
      }
    },
    components:{
      appMainQuote: MainQuote,
      appMainUser: MainUser,
      appMainForm: MainForm,
      appMainDirective: MainDirective,
      appMainFilterMixin: MainFilterMixin,
      appMainHttp: MainHttp
    }
  }
</script>
