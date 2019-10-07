<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
          <p>{{ text | toUppercase }}</p>
          <p>{{ text | toLowercase }}</p>
          <hr>
          <button @click="countries.push('aaaaa')">Add new item</button>
          <input v-model="filterText">
          <ul>
            <li v-for="country in filteredCountries">{{ country }}</li>
          </ul>

      </div>
    </div>
  </div>
</template>

<script>
  import { countriesMixin } from './filterMixin';

  export default {
    data(){
      return {
        text: 'Hello there!'
      }
    },
    mixins: [ countriesMixin ],
    filters: {
      toUppercase(value){
        return value.toUpperCase();
      }
    }
  }
</script>

<style>

</style>
