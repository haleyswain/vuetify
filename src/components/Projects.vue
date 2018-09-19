<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card class="profile-projects__snake">
        <img
          class="profile-projects__snake-image"
          src="../assets/snake.png"
          aspect-ratio="2.75"
        ></img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Snake</h3>
            <div>Programming exercise recreating the classic arcade game</div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="green" href="https://github.com/haleyswain/snake">Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script></script>
<style lang="scss" scoped>
.profile-projects__snake {
  width: 500px;
  height: 300px;
  margin: 10%;

  &-image {
    width: 500px;
    height: 300px;
  }
}

</style>
