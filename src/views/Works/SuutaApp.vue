<template>
	<v-ons-page>
		<v-ons-toolbar>
			<div class="left">
				<v-ons-back-button @click.prevent="back">Works</v-ons-back-button>
			</div>
			<div class="center">
				<slot>SUUTA App</slot>
			</div>
		</v-ons-toolbar>
		<div class="works-child">
			<div class="works-child__text-wrap">
				<h3 class="works-child__title">
					SUUTA App
				</h3>
				<p class="works-child__year">
					2021
				</p>
				<p>
					UIUX Design / HTML,CSS / Vue.js
				</p>
			</div>
			<div class="works-child__2column">
				<img class="works-child__2column-img" src="/img/works/suuta_app/suuta_app_01@2x.png">
				<img class="works-child__2column-img" src="/img/works/suuta_app/suuta_app_02@2x.png">
			</div>
			<div class="works-child__2column">
				<img class="works-child__2column-img" src="/img/works/suuta_app/suuta_app_03@2x.png">
				<img class="works-child__2column-img" src="/img/works/suuta_app/suuta_app_04@2x.png">
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