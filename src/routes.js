import main_page from './components/main_page.vue';
import soundcloud from './components/soundcloud.vue';
import musixmatch from './components/musixmatch.vue';
import about from './components/about.vue';

export default [
    {path: '/soundcloud', component: soundcloud},
    {path: '/', component: main_page},
    {path: '/musixmatch', component: musixmatch},
    {path: '/about', component: about}
]
