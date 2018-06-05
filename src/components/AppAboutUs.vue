<template>
  <v-jumbotron color="grey lighten-2" class="body">
    <v-container fill-height>
      <v-layout align-center>
        <v-flex>
          <h3 class="display-3">Welcome to the site</h3>
          <span class="subheading">Lorem ipsum dolor sit amet, pri veniam forensibus id.
            Vis maluisset
            molestiae id, ad semper lobortis cum. At impetus detraxit incorrupte usu,
            repudiare assuev
            erit ex eum, ne nam essent vocent admodum.</span>
          <v-divider class="my-3"></v-divider>
          <div class="title mb-3">Check out our newest features!</div>
            <router-link to="/login">
             <v-btn color="info">Login</v-btn>
            </router-link>
        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>
</template>

<script>
export default {
};
</script>


<style scoped>

.body{
  padding: 3em;
  margin-bottom: 150px;
}


</style>
