<template>
  <nav>
    <router-link to="/" class="main_page">
      <img class="logo" src="http://www.abbiadigital.com/brainsystems/orphan/assets/images/logo_white.png" /> <h3>Harmonize</h3>
    </router-link>
    <ul class="list">
      <li><router-link to="/soundcloud">SoundCloud</router-link></li>
      <li><router-link to="/musixmatch">MusiXmatch</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      </ul>
      <button><a href="https://github.com/nglshman"><i class="far fa-heart"></i> GitHub</a></button>
  </nav>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {

    }
  }
}
</script>

<style>
.main_page {
  display: flex;
  text-decoration: none;
}
.logo {
  margin-top: 5px;
  height: 65px;
  width: 70px;
}
h3 {
  color: #fff;
  margin-top: 25px;
  margin-left: 10px;
}
nav {
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  margin-left: 30px;
  width: 95%;
  height: 75px;
  background-color: #da4402;
  border-radius: 50px;
}
.list {
  display: flex;
  list-style: none;
}

.list li {
  list-style: none;
  padding-left: 25px;
  margin-top: 10px;
}
.list li a{
  color: #fff;
  text-decoration: none;
}
button {
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  list-style: none;
  margin-top: 12px;
  background-color: #eadd0a;
  border: none;
  width: 150px;
  height: 50px;
  border-radius: 50px;
}
button a {
  color: #000;
  text-decoration: none;
}
</style>
