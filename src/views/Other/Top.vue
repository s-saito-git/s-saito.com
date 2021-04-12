<template>
  <v-ons-page>
    <div class="bg-gray">
      <div class="title-wrap">
        <h2>Other</h2>
      </div>
      <v-ons-list class="mb32">
        <v-ons-list-item>
          <div class="left">
            <img class="list-item__thumbnail" src="@/assets/img/other/profile.jpg">
          </div>
          <div class="center">
            <span class="list-item__title">Shinsuke Saito</span>
            <span class="list-item__subtitle">Age28 / Tokyo</span>
          </div>
        </v-ons-list-item>
      </v-ons-list>
      <v-ons-list>
        <v-ons-list-item tappable onClick="window.open('https://github.com/s-saito-git')">
          <div class="left">
            <v-ons-icon icon="fa-github" class="list-item__icon"></v-ons-icon>
          </div>
          <div class="center">
            GitHub
          </div>
          <div class="right">
            <v-ons-icon icon="fa-external-link-alt" class="list-item__icon"></v-ons-icon>
          </div>
        </v-ons-list-item>
        <v-ons-list-item tappable onClick="window.open('https://twitter.com/s_s_saito')">
          <div class="left">
            <v-ons-icon icon="fa-twitter" class="list-item__icon"></v-ons-icon>
          </div>
          <div class="center">
            Twitter
          </div>
          <div class="right">
            <v-ons-icon icon="fa-external-link-alt" class="list-item__icon"></v-ons-icon>
          </div>
        </v-ons-list-item>
        <v-ons-list-item tappable onClick="window.open('mailto:s.s.saito108@gmail.com')">
          <div class="left">
            <v-ons-icon icon="fa-envelope" class="list-item__icon"></v-ons-icon>
          </div>
          <div class="center">
            Contact
          </div>
          <div class="right">
            <v-ons-icon icon="fa-external-link-alt" class="list-item__icon"></v-ons-icon>
          </div>
        </v-ons-list-item>
      </v-ons-list>
    </div>
  </v-ons-page>
</template>