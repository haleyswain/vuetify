<template>
  <div class="profile-articles">
    <div class="profile-articles__image">
      <div class="profile-articles__image-layer"></div>
    </div>
    <div class="profile-articles__body">
      <h3>Some Text</h3>
      <p>Lorem ipsum dolor amet waistcoat stumptown ugh cold-pressed etsy chillwave. Etsy succulents prism jianbing affogato distillery listicle offal master cleanse vape fanny pack freegan truffaut. +1 ethical synth, bitters you probably haven't heard of them lyft retro viral meggings venmo pinterest try-hard. Butcher distillery meh photo booth, prism gluten-free meggings franzen pok pok drinking vinegar vice banjo umami chartreuse. Waistcoat mixtape brunch, next level helvetica post-ironic twee polaroid man braid tbh disrupt cornhole ugh hell of bitters. Shoreditch fashion axe post-ironic migas distillery palo santo fixie.</p>
      <a href="http://google.com">Click on this link</a>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
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

.profile-articles {
  &__image {
    background-image: url('https://images.pexels.com/photos/5834/nature-grass-leaf-green.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
    height: 550px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    margin-bottom: 50px;
    &-layer {
      background-color: rgba(248, 247, 216, 0.1);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
  &__body {
    margin: 5em;
  }
}
</style>
