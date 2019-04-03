<template>
  <div>
    <header>
      <a class="main_page" href="index.html">
        <img class="logo" src="http://www.abbiadigital.com/brainsystems/orphan/assets/images/logo_white.png" />
        <h3>Orphan</h3>
      </a>

      <ul class="first">
        <li>Home</li>
        <li>Who we are</li>
        <li>Our mission</li>
      </ul>
      <ul class="second">
        <li>Page</li>
        <li>Single post</li>
        <li>Contact</li>
      </ul>
      <button><i class="far fa-heart"></i> Join us!</button>

    </header>
</div>
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
body {
  display: grid;
  font-family: 'Roboto', sans-serif;
  margin: 0;
  margin-left: 50px;
  padding: 0;
  border: 0;
}
header {
  display: flex;
  justify-content: space-around;
  width: 95%;
  height: 75px;
  background-color: #da4402;
  border-radius: 50px;
}
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
.first, .second {
  display: flex;
}
.first li, .second li {
  list-style: none;
  color: #fff;
  padding-left: 10px;
  margin-top: 10px;
}
button {
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  background-color: #eadd0a;
  border: none;
  margin-top: 12px;
  width: 150px;
  height: 50px;
  border-radius: 50px;
}



</style>
