<template>
  <div class="hello">
    <v-toolbar color="grey darken-4" dark="">
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title class="white--text">Vuetify</v-toolbar-title>
    <v-spacer></v-spacer>
    <div class="hidden-sm-and-down">
      <router-link to="/login">
          <v-btn flat>Login</v-btn>
      </router-link>
      <v-btn flat>Contact</v-btn>
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
