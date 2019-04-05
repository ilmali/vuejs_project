<template>
  <div>
    <navigation></navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import navigation from './components/navigation.vue';
import main_page from './components/main_page.vue';
import soundcloud from './components/soundcloud.vue';
import musixmatch from './components/musixmatch.vue';
import about from './components/about.vue';

export default {
  components: {
    'navigation': navigation,
    'app-main': main_page,
    'soundcloud': soundcloud,
    'musixmatch': musixmatch,
    'about': about
  },

  data () {
    return {

    }
  }
}
</script>

<style>
body {
  display: grid;
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
  border: 0;
}
</style>
