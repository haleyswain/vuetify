<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card class="profile-projects__snake">
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">JBL Custom Speakers</h3>
            <div>Custom frontend for custom speakers!</div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="green" href="https://www.jbl.com/bluetooth-speakers/JBLFLIP5WHTAMCSTM.html?iscustomizable=true">Explore</v-btn>
        </v-card-actions>
        <img
          class="profile-projects__jbl-image"
          src="../assets/JBL.png"
          aspect-ratio="10"
        >
      </v-card>
      <v-card class="profile-projects__snake">
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Snake</h3>
            <div>Programming exercise recreating the classic arcade game</div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="green" href="https://github.com/haleyswain/snake">Explore</v-btn>
        </v-card-actions>
        <img
          class="profile-projects__snake-image"
          src="../assets/snake.png"
          aspect-ratio="5"
        >

      </v-card>

       <br>
      <v-card class="profile-projects__energytrust">
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Energy Trust of Oregon Forms</h3>
            <div>Redesign and maintain all ETO forms.</div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="green" href="https://forms.energytrust.org/esaverkits">Explore</v-btn>
        </v-card-actions>
        <img
          class="profile-projects__energytrust-image"
          src="../assets/energy-trust.png"
          aspect-ratio="0"
        >
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script></script>
<style lang="scss" scoped>
.profile-projects {
  &__snake {
    width: 500px;
    height: 300px;
    margin: 10%;

      &-image {
        width: 500px;
        height: 300px;
      }
    }
    &__energytrust {
      width: 500px;
      height: 400px;
      top: 100px;
      margin: 10%;
     &-image {
        width: 500px;
        height: 200px;
        padding: 5%;
      }
    }
    &__jbl {
      width: 500px;
      height: 400px;
      top: 100px;
      margin: 10%;
     &-image {
        width: 500px;
        height: 200px;
        padding-bottom: 9%;
      }
    }
  }

</style>
