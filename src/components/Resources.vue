<template>
  <div class="profile-resources">
    <v-sheet class="profile-resources__sheet" color="orange lighten-2">
      <h1 class="profile-resources__sheet-header">HackerRank Challenges</h1>
      <h3 class="profile-resources__sheet-header">In an effort to better understand my own reasoning for the solutions I come
        up with for HackerRank challenges, I'll be documenting my solutions here!
      </h3>
    </v-sheet>
    <v-sheet class="profile-resources__sheet" color="teal lighten-2">
      <h2 class="profile-resources__sheet-header">Sock Merchant</h2>
      <p class="profile-resources__sheet-difficulty">Difficulty: Easy</p>
      <p class="profile-resources__sheet-description">
        John works at a clothing store. He has a large pile of socks that he must pair by color for sale. Given an array of integers representing the color of each sock,
        determine how many pairs of socks with matching colors there are.
        <br>
        <br>
        For example, there are N = 7 socks with colors ar = [1,2,1,2,1,3,2]. There is one pair of color 1 and one of color 2. There are three odd socks left, one of each color. The number of pairs is 2.
      </p>
    </v-sheet>
  </div>
</template>


<script></script>

<style lang="scss" scoped>
.profile-resources {
  padding: 20px;
  &__sheet {
    margin-top: 20px;
    padding: 20px;
    color: white;
    &-header {
      text-align: center;
    }
    &-difficulty {
      text-align: left;
      font-size: 18px;
    }
    &-description {
      text-align: center;
    }
  }
}
</style>