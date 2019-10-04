<template>
  <div class="container">
    <div class="component">
      <h1>The User Component</h1>
      <p>I'm an awesome User!</p>
      <p>User Name: {{ name }}</p>
      <p>User Age: {{ age }}</p>
      <button
        @click="changeName">Change Name</button>
      <hr>
      <div class="row">
        <div class="col-xs-12 col-sm-6">
          <app-user-details
            :name="name"
            :user-age="age"
            @nameWasReset="name = $event"
            :resetFn="resetName"></app-user-details>
        </div>
        <div class="col-xs-12 col-sm-6">
          <app-user-edit
            :user-age="age"></app-user-edit>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import UserDetails from './UserDetails.vue';
  import UserEdit from './UserEdit.vue';

  export default {
    data: function() {
      return{
        name : 'Gustavo',
        age: 32
      };
    },
    methods: {
      changeName() {
        this.name = 'Pedro'
      },
      resetName() {
        this.name = 'Gustavo';
      }
    },
    components: {
      appUserDetails: UserDetails,
      appUserEdit: UserEdit
    }
  }
</script>

<style scoped>
  div {
    background-color: lightblue;
  }
</style>
