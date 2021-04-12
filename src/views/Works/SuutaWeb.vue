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
    <div class="works-child">
			<div class="works-child__text-wrap">
				<h3 class="works-child__title">
					SUUTA BUSINESS
				</h3>
				<p class="works-child__year">
					2021
				</p>
				<p>
					UIUX Design / HTML,CSS / Vue.js 
				</p>
				<p>
					<a href="#" target="blank">
						https://###
					</a>
				</p>
			</div>
			<div class="works-child__1column">
				<img class="works-child__1column-img" src="@/assets/img/works/suuta_web/suuta_web_01@2x.jpg">
			</div>
      <div class="works-child__1column">
				<img class="works-child__1column-img" src="@/assets/img/works/suuta_web/suuta_web_02@2x.jpg">
			</div>
		</div>
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