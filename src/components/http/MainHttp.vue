<template>
  <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>File a Complaint</h1>
          <hr>
          <div class="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              id="name"
              class="form-control"
              v-model="userData.name">
          </div>
          <div class="form-group">
            <label for="email">Mail</label>
            <input
              type="text"
              id="email"
              class="form-control"
              v-model="userData.mail">
          </div>
        </div>
      </div>
      <button class="btn btn-primary" @click="submit">Submit</button>
      <hr>
    <button class="btn btn-primary" @click="fetchData">Search</button>
    <ul class="list-group">
        <li class="list-group-item" v-for="u in users">{{ u.name }} - {{ u.mail }}</li>
      </ul>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        userData:{
          name: '',
          mail:''
        },
        users: []
      }
    },
    methods:{
      submit(){
        this.$http.post('https://vue-udemy-f1ac3.firebaseio.com/users.json', this.userData)
          .then(response => {
            console.log(response);
            this.userData.name ='';
            this.userData.mail = '';
          }, error => {
            console.log(error);
          });
      },
      fetchData(){
        this.$http.get('https://vue-udemy-f1ac3.firebaseio.com/users.json')
          .then(response => {
            return response.json();
          }).then(data => {
            const resultArray = [];
            for(let key in data){
              resultArray.push(data[key]);
            }
            this.users = resultArray;
        })
      }
    }
  }
</script>

<style>

</style>
