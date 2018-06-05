<template>
  <div class="hello">
    <v-toolbar color="grey darken-4" dark="">
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <router-link to="/">
        <v-toolbar-title class="white--text">Vuetify</v-toolbar-title>
    </router-link>
    <v-spacer></v-spacer>
    <div class="hidden-sm-and-down">
      <router-link to="/login">
          <v-btn flat>Login</v-btn>
      </router-link>
      <router-link to="/about-us">
         <v-btn flat>About Us</v-btn>
       </router-link>
    </div>
  </v-toolbar>
  </div>
</template>

<script>
export default {
  data: () => ({
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
