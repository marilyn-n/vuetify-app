<template>
  <div id="app">
     <App-toolBar></App-toolBar>
         <router-view/>
     <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import AppToolBar from '@/components/AppToolBar';
import FooterComponent from '@/components/FooterComponent';

export default {
  components: {
    AppToolBar,
    FooterComponent,
  },
  data: () => ({
    name: 'App',
  }),
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
