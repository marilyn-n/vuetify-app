<template>
<div class="app-home">
  <App-toolBar></App-toolBar>
   <div>
    <v-layout column class="main">
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-container fluid grid-list-md>
          <v-layout row wrap>
            <v-flex
              v-for="card in cards"
              v-bind="{ [`xs${card.flex}`]: true }"
              :key="card.title">
              <v-card>
                <v-card-media
                  :src="card.src"
                  height="200px">
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
    <FooterComponent></FooterComponent>
  </div>
</div>
</template>

<script>

import FooterComponent from './FooterComponent';
import AppToolBar from './AppToolBar';

export default {
  components: {
    AppToolBar,
    FooterComponent,
  },
  data: () => ({
    cards: [
      { title: 'Pre-fab homes', src: 'https://richmondbizsense.com/wp-content/uploads/2015/10/Parade-of-Homes-2.jpg', flex: 12 },
      { title: 'Favorite road trips', src: 'http://babiestravellite.com/wp-content/uploads/2015/08/summer-road-trip.jpg', flex: 6 },
      { title: 'Best airlines', src: 'https://skift.com/wp-content/uploads/2017/07/allegiant-airlines-.jpg', flex: 6 },
    ],
  }),
};
</script>

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
