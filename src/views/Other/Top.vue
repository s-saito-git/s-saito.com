<template>
  <v-ons-page>
    <!-- <div class="other">
      <h2>Other</h2>
    </div> -->
    
    <v-ons-list>
      <v-ons-list-item>
        <div class="left">
          <img class="list-item__thumbnail" src="http://placekitten.com/g/40/40">
        </div>
        <div class="center">
          <span class="list-item__title">Cutest kitty</span><span class="list-item__subtitle">On the Internet</span>
        </div>
      </v-ons-list-item>
      <v-ons-list-item tappable>
        <div class="left">
          <v-ons-icon icon="md-face" class="list-item__icon"></v-ons-icon>
        </div>
        <div class="center">
          Icon
        </div>
      </v-ons-list-item>
      <v-ons-list-item tappable>
        <div class="left">
          <v-ons-icon icon="md-face" class="list-item__icon"></v-ons-icon>
        </div>
        <div class="center">
          Icon
        </div>
      </v-ons-list-item>
      <a href="#">
        <v-ons-list-item tappable>
          <div class="left">
            <v-ons-icon icon="md-face" class="list-item__icon"></v-ons-icon>
          </div>
          <div class="center">
            Icon
          </div>
          <div class="right">
            <v-ons-icon icon="md-face" class="list-item__icon"></v-ons-icon>
          </div>
        </v-ons-list-item>
      </a>
      <v-ons-list>
        <v-ons-list-header>Default</v-ons-list-header>
        <v-ons-list-item>Item A</v-ons-list-item>
        <v-ons-list-item>Item B</v-ons-list-item>
      </v-ons-list>
    </v-ons-list>
  </v-ons-page>
</template>