<template>
  <v-ons-page>
    <div class="other">
      <h2>Other</h2>
    </div>

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
      <v-ons-list-item tappable onClick="window.open('http://google.jp/')">
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
  </v-ons-page>
</template>