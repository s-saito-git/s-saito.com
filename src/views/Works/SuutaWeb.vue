<template>
  <v-ons-page>
    <v-ons-toolbar>
      <div class="left">
        <v-ons-back-button @click.prevent="back">Page 1</v-ons-back-button>
      </div>
      <div class="center">
        <slot></slot>
      </div>
    </v-ons-toolbar>
    <p>
      suutawebの詳細
    </p>
  </v-ons-page>
</template>

<script>
export default {
  methods: {
    back() {
      this.$emit('back-page');	
    }
  }
}
</script>