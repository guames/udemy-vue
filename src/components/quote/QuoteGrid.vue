<template>
  <div class="row">
    <app-quote
      v-for="(quote, index) in quotes"
      @click.native="deleteQuote(index)"
      v-bind:key="quote+index">{{ quote }}</app-quote>
  </div>

</template>

<script>
  import Quote from "./Quote";

  export default {
      props: ['quotes'],
      components: {
        appQuote: Quote
      },
    methods: {
        deleteQuote(index){
          this.$emit('quoteDeleted', index);
        }
    }
  }
</script>

<style scoped>

</style>
