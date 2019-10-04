<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <app-user></app-user>
      </div>
    </div>
  </div>
</template>

<script>
  import User from './User';

  export default {
    components: {
      appUser: User
    }
  }
</script>

<style>

</style>
