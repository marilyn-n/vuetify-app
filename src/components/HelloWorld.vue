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
  <div>
    <v-layout column class="main">
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-container fluid grid-list-md>
          <v-layout row wrap>
            <v-flex
              v-for="card in cards"
              v-bind="{ [`xs${card.flex}`]: true }"
              :key="card.title"
            >
              <v-card>
                <v-card-media
                  :src="card.src"
                  height="200px"
                >
                  <v-container fill-height fluid>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="headline white--text" v-text="card.title"></span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-media>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn icon>
                    <v-icon>favorite</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>bookmark</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>share</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
  </div>
  <v-footer height="auto" class="grey darken-3">
    <v-layout row wrap justify-center>
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        flat
      >
        {{ link }}
      </v-btn>
      <v-flex xs12 py-3 text-xs-center white--text>
        &copy;2018 — <strong>Vuetify</strong>
      </v-flex>
    </v-layout>
  </v-footer>
  </div>
</template>

<script>
export default {
  data: () => ({
    name: 'HelloWorld',
    cards: [
      { title: 'Pre-fab homes', src: 'https://richmondbizsense.com/wp-content/uploads/2015/10/Parade-of-Homes-2.jpg', flex: 12 },
      { title: 'Favorite road trips', src: 'http://babiestravellite.com/wp-content/uploads/2015/08/summer-road-trip.jpg', flex: 6 },
      { title: 'Best airlines', src: 'https://skift.com/wp-content/uploads/2017/07/allegiant-airlines-.jpg', flex: 6 },
    ],
    links: ['Home', 'About Us', 'Team', 'Services', 'Blog', 'Contact Us'],
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.main{
  margin-right: 250px;
  margin-top: 50px;
}
</style>
