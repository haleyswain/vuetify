<template>
  <div class="profile-tech">
    <div class="profile-tech__icon">
      <img src="../assets/html5.png">
    </div>
    <div class="profile-tech__icon">
      <img src="../assets/css3_logo.png">
    </div>
    <div class="profile-tech__icon">
      <img src="../assets/javascript.png">
    </div>
    <div class="profile-tech__icon">
      <img src="../assets/angular.png">
    </div>
    <div class="profile-tech__icon">
      <img src="../assets/vue-logo.png">
    </div>
    <div class="profile-tech__icon">
      <img src="../assets/Ember_Logo.png">
    </div>
    <div class="profile-tech__icon">
      <img src="../assets/node_js.png">
    </div>
    <div class="profile-tech__icon">
      <img src="../assets/c#.png">
    </div>
    <div class="profile-tech__icon">
      <img src="../assets/net.jpeg">
    </div>
    <div class="profile-tech__icon">
      <img src="../assets/ruby-icon.png">
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
.profile {
  &-tech {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    &__icon {
      img {
        display: inline;
        width: 150px;
        height: 170px;
        margin: 3em;
      }
    }
  }
}
</style>
