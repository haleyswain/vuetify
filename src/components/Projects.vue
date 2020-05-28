<template>
  <v-layout>
    <v-flex class="profile-projects">
      <v-card class="profile-projects__jbl">
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
          src="https://www.jbl.com/on/demandware.static/-/Sites-JB-US-Library/default/dw6659dbc4/glp/personalize/images/hero.jpg"
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
        >

      </v-card>

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
        >
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script></script>
<style lang="scss" scoped>
.profile-projects {
  -ms-flex-positive: 0;
  display: flex;
  flex-direction: row;
  &__snake {
    width: 500px;
    height: 50%;
      &-image {
        width: 100%;
        bottom: 0px;
        position: relative;
      }
    }
    &__energytrust {
      width: 500px;
      height: 50%;

     &-image {
        width: 100%;
        bottom: 0px;
        position: relative;
      }
    }
    &__jbl {
      width: 500px;
      height: 80%;
     &-image {
        width: 100%;
        bottom: 0px;
        position: relative;
      }
    }
  }

</style>
