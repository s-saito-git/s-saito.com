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
					UIUX Design / HTML5 / CSS3 / Sass / Vue.js / Nuxt.js
				</p>
				<p>
					<a href="https://suuta.com/signin" target="blank">
						https://suuta.com/signin
					</a>
				</p>
			</div>
			<div class="works-child__1column">
				<img class="works-child__1column-img" src="@/assets/img/works/suuta_web/suuta_web_01.jpg">
			</div>
      <div class="works-child__1column">
				<img class="works-child__1column-img" src="@/assets/img/works/suuta_web/suuta_web_02.jpg">
			</div>
			<div class="works-child__1column">
				<img class="works-child__1column-img" src="@/assets/img/works/suuta_web/suuta_web_03.jpg">
			</div>
			<div class="works-child__1column">
				<img class="works-child__1column-img" src="@/assets/img/works/suuta_web/suuta_web_04.jpg">
			</div>
			<div class="works-child__1column">
				<img class="works-child__1column-img" src="@/assets/img/works/suuta_web/suuta_web_05.jpg">
			</div>
			<div class="works-child__1column">
				<img class="works-child__1column-img" src="@/assets/img/works/suuta_web/suuta_web_06.jpg">
			</div>
			<div class="works-child__1column">
				<img class="works-child__1column-img" src="@/assets/img/works/suuta_web/suuta_web_07.jpg">
			</div>
			<div class="works-child__1column">
				<img class="works-child__1column-img" src="@/assets/img/works/suuta_web/suuta_web_08.jpg">
			</div>
			<div class="works-child__1column">
				<img class="works-child__1column-img" src="@/assets/img/works/suuta_web/suuta_web_09.jpg">
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