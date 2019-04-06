<template>
  <section>
    <section class="images">
      <carousel :data="data"></carousel>
    </section>
    <section class="info">
      <h1 class="header_soundcloud">Soundcloud</h1>
      <img class="img_soundcloud" src = ".././assets/minimize_soundcloud.png"/>
      <p class="p_soundcloud">SoundCloud is an online audio distribution platform <br/> and music sharing website based in Berlin, Germany <br/>
          that enables its users to upload, promote, and share audio</p>
      <h1 class="header_musixmatch">Musixmatch</h1>
      <img class="img_musixmatch" src = ".././assets/minimize_musixmatch.jpg"/>
      <p class="p_musixmatch">Musixmatch is a platform for users to search and share lyrics. <br/>
          It is the largest platform of this kind in the world <br/> having 73 million users and 14 million lyrics</p>
    </section>
    <section class="description">
      <p class="p_description">SoundCloud is the world’s largest open audio platform,<br/>
         powered by a connected community of creators, listeners and curators on the pulse of what's new,<br/>
          now and next in culture. Founded in 2007, SoundCloud empowers the world’s<br/>
           audio creators with the best tools,services and resources to build and grow their careers.<br/>
            With over 190 million tracks from 20 million creators heard in 190 countries,<br/>
             what’s next in music is first on SoundCloud<br/><br/>

           Find new music to love. Follow creators on SoundCloud that you are interested<br/>
            in and watch your Stream grow with new audio everyday.<br/>
             Save your favorite tracks and playlists in your Likes and get surprised<br/>
              when our Related tracks recommendations help you discover even more</p>
      <img class="img_description" src=".././assets/picture.jpg"/>
    </section>
    <section class="github_news">
      <p>Do you want to see other project ? Press GitHub</p>
      <button><a href="https://github.com/nglshman">GitHub</a></button>
    </section>
    <section class="footer">
      <p>Design taken from the company
        <a href="http://www.codester.com/index.php?url=items/preview/8991/orphan-bootstrap-organisation-theme">Codester</a></p>
    </section>
  </section>
</template>

<script>
export default {

  data () {
    return {
      data: [
        '<img class = "image" src = "./src/assets/image.jpg" height = "768px" width = "1343px">',
        '<img class = "image" src = "./src/assets/soundcloud.png" height = "768px" width = "1343px">',
        '<img class = "image" src = "./src/assets/musixmatch.jpg" height = "768px" width = "1343px">',
      ],
    };
  },
};

</script>

<style scoped>
body {
  font-family: 'Muli', sans-serif;
}
.images {
  z-index: 1;
}
/* .image {
  height: 500px;
  width: 1300px;
} */
.info {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 80px auto 80px;
  grid-row-gap: 15px;
}
.header_soundcloud {
  justify-self: center;
  grid-column-start: 1;
  grid-row-start: 1;
}
.img_soundcloud {
  justify-self: center;
  grid-column-start: 1;
  grid-row-start: 2;
}
.p_soundcloud {
  justify-self: center;
  grid-column-start: 1;
  grid-row-start: 3;
  font-family: 'Muli', sans-serif;
  font-size: 18px;
}
.header_musixmatch {
  justify-self: center;
  grid-column-start: 2;
  grid-row-start: 1;
}
.img_musixmatch {
  justify-self: center;
  grid-column-start: 2;
  grid-row-start: 2;
}
.p_musixmatch {
  justify-self: center;
  grid-column-start: 2;
  grid-row-start: 3;
  font-family: 'Muli', sans-serif;
  font-size: 18px;
}
.info h1 {
  font-size: 30px;
}
.info img {
  height: 255px;
  width: 255px;
}
.description {
  display: grid;
  margin-top: 100px;
  grid-column: 40% 60%;
  padding: 30px 0;
  background-color: #efefef;
}
.p_description {
  grid-column-start: 1;
  align-self: center;
  border: 25px solid #da4402;
  font-family: 'Muli', sans-serif;
  font-size: 16px;
  background-color: #da4402;
  color: #fff;
}
.img_description {
  grid-column-start: 2;
  width: 700px;
  height: 350px;
  border: 10px solid #da4402;
  border-radius: 25px;
}
.github_news {
  display: grid;
  margin: 30px 0;
}
.github_news p {
  justify-self: center;
  font-family: 'Muli', sans-serif;
  font-size: 22px;
}
.github_news button {
  justify-self: center;
}
.footer{
  display: grid;
  background-color: #efefef;
}
.footer p {
  justify-self: center;
  font-family: 'Muli', sans-serif;
  font-size: 18px;
}
.footer p a {
  text-decoration: none;
  color: #000;
}
</style>
