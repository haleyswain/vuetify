<template>
  <v-layout>
    <v-flex class="profile-projects">
       <v-card
        class="mx-auto profile-projects__card"
        width="400"
      >
        <img
          src="https://www.jbl.com/on/demandware.static/-/Sites-JB-US-Library/default/dw6659dbc4/glp/personalize/images/hero.jpg"
        >
        <v-card-title>JBL Custom Speakers</v-card-title>

        <v-card-text class="text--primary">
          <div>Custom frontend for custom speakers!</div>
        </v-card-text>

        <v-card-actions>
          <v-btn flat color="green" href="https://www.jbl.com/bluetooth-speakers/JBLFLIP5WHTAMCSTM.html?iscustomizable=true">Explore</v-btn>
        </v-card-actions>
      </v-card>
      <v-card
        class="mx-auto profile-projects__card"
        width="400"
      >
        <img
          src="../assets/snake.png"
        >
        <v-card-title>Snake</v-card-title>

        <v-card-text class="text--primary">
          <div>Programming exercise recreating the classic arcade game</div>
        </v-card-text>

        <v-card-actions>
          <v-btn flat color="green" href="https://github.com/haleyswain/snake">Explore</v-btn>
        </v-card-actions>
      </v-card>

      <v-card
        class="mx-auto profile-projects__card"
        width="400"
      >
        <img
          class="white--text align-end profile-projects__energytrust"
          src="../assets/energy-trust.png"
        >
        <v-card-title>Energy Trust of Oregon Forms</v-card-title>

        <v-card-text class="text--primary">
          <div>Redesign and maintain all ETO forms.</div>
        </v-card-text>

        <v-card-actions>
          <v-btn flat color="green" href="https://forms.energytrust.org/esaverkits">Explore</v-btn>
        </v-card-actions>
      </v-card>

      <v-card
        class="mx-auto profile-projects__card"
        width="400"
      >
        <img
          height="200px"
          src="../assets/UAlogo.png"
        >
        <v-card-title>Under Armour Team Uniform Configurator</v-card-title>

        <v-card-text class="text--primary">
          <div>Maintenance and new feature builds for Under Armour's internal 3D uniform configurator</div>
        </v-card-text>
      </v-card>

      <v-card
        class="mx-auto profile-projects__card"
        width="400"
      >
        <img
          class="project-image"
          height="200px"
          src="../../static/img/cash-coins-money.jpg"
        >
        <v-card-title>Pledge Project</v-card-title>

        <v-card-text class="text--primary">
          <div>Created Using Vue CLI, Firebase, and Vuetify. Hosted on Netlify.</div>
        </v-card-text>

        <v-card-actions>
          <v-btn flat color="green" href="https://pledge-project.netlify.app/">Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>

</script>
<style lang="scss" scoped>
.profile-projects {
  -ms-flex-positive: 0;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  flex-wrap: wrap;

  &__card {
    margin-top: 20px;
    margin-bottom: 20px;
  }
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

     &-image {
        width: 100%;
        bottom: 0px;
        position: relative;
      }
    }
    &__jbl {
      width: 500px;
      height: 50%;
     &-image {
        width: 100%;
        bottom: 0px;
        position: relative;
      }
    }
  }
  img {
    width: 100%;
    height: 200px;
  }

</style>
