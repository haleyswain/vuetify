<template>
  <div class="profile-home">
    <div class="profile-home__image">
      <div class="profile-home__image-layer"></div>
      <section class="profile-home__rw-wrapper">
        <h2 class="profile-home__rw-sentence">
          <div class="profile-home__rw-words profile-home__rw-words-2">
            <span>Hello</span>
            <span>Hej</span>
            <span>Ciao</span>
          </div>
        </h2>
      </section>
    </div>
    <div class="profile-home__circular-image">
    </div>
    <div class="profile-home__about">
      <p>I'm a front-end engineer currently residing in the Portland, Oregon. My roots come from the plains of Montana, where I grew up with a love and passion for everything outdoors. I am currently fully engaged at <a href="http://pollinate.com/#!/">Pollinate</a>, but always love meeting new people. Don't hesitate to reach out!</p>
    </div>
    <div class="profile-home__icons">
      <span class="profile-home__icons-linkedIn">
        <a href="https://www.linkedin.com/in/haleyswain/"><img src="../assets/linkedin-icon.png">
        </a>
      </span>
      <span class="profile-home__icons-twitter">
        <a href="https://twitter.com/hswain13"><img src="../assets/Twitter_Logo_WhiteOnImage.png">
        </a>
      </span>
      <span class="profile-home__icons-github">
        <a href="https://github.com/haleyswain"><img src="../assets/GitHub-Mark-64px.png">
        </a>
      </span>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h1, h2 {
  font-weight: normal;
  color: white;
  padding: 20%;
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
.profile-home{
  &__image {
    background-image: url('https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
    height: 75%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    margin-bottom: 50px;
    &-layer {
      background-color: rgba(248, 247, 216, 0.2);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
  &__circular-image {
    width: 400px;
    height: 400px;
    background-image: url('../assets/murphy.jpg');
    background-size: cover;
    display: block;
    margin: auto;
    border-radius: 50%;
  }
  &__about {
    display: flex;
    justify-content: center;
    margin: 3em;
    p {
      width: 70%;
      font-family: 'Open Sans', sans-serif;
      font-size: 18px;
    }
  }
  &__icons {
    display: flex;
    justify-content: center;
    &-linkedIn {
      a {
        img {
          width: 55px;
          height: 50px;
          margin: 1em;
        }
      }
    }
    &-twitter {
      a {
        img {
          width: 50px;
          height: 50px;
          margin: 1em;
        }
      }
    }
    &-github {
      a {
        img {
          width: 60px;
          height: 50px;
          margin: 1em;
        }
      }
    }
  }
  // style the main wrapper and center it on the page
  &__rw-wrapper {
  	width: 100%;
  	position: relative;
  	font-family: 'Bree Serif';
  	padding: 10px;
    &-layer {
      background-color: rgba(248, 247, 216, 0.2);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
  // add text shadow to header elements
  &__rw-sentence{
  	margin: 0;
  	text-align: left;
  	text-shadow: 1px 1px 1px rgba(255,255,255,0.8);
  }
  // add specific text styling to the spans
  &__rw-sentence span{
  	color: #FFFF;
  	white-space: nowrap;
  	font-size: 200%;
  	font-weight: normal;
  }
  // divisions will be displayed as inline elements
  &__rw-words{
  	display: inline;
    font-family: 'Open Sans', sans-serif;
    font-size: 40px;
    padding-bottom: 50px;
  }
  // Each span inside of a rw-words div will be positioned absolutely and hide any overflow
  &__rw-words span{
  	position: absolute;
  	opacity: 0;
  	overflow: hidden;
  	width: 100%;
  	color: #FFFF;
    margin-left: 40%;
    bottom: 50%;
  }
  // run animation
  &__rw-words-2 span {
  	animation: rotateWordsSecond 30s linear infinite 0s;
  }
  &__rw-words span:nth-child(2) {
  	animation-delay: 5s;
  	color: #FFFF;
  }
  &__rw-words span:nth-child(3) {
  	animation-delay: 10s;
  	color: #FFFF;
  }
  &__rw-words span:nth-child(4) {
  	animation-delay: 15s;
  	color: #FFFF;
  }
  &__rw-words span:nth-child(5) {
  	animation-delay: 20s;
  	color: #FFFF;
  }
  &__rw-words span:nth-child(6) {
  	animation-delay: 25s;
  	color: #FFFF;
  }
}
// create an animation and each span will run it, just with different delays.
@keyframes rotateWordsSecond {
    0% { opacity: 1; animation-timing-function: ease-in; width: 0px; }
    10% { opacity: 0.3; width: 0px; }
	  20% { opacity: 1; width: 100%; }
    27% { opacity: 0; width: 100%; }
    100% { opacity: 0; }
  }
</style>
