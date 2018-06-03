<template>
  <div class="hello">
    <v-toolbar color="grey darken-4" dark="">
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title class="white--text">Vuetify</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>About</v-btn>
      <v-btn flat>Contact</v-btn>
      <v-btn flat>Login</v-btn>
    </v-toolbar-items>
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
