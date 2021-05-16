<template>
	<v-ons-page>
		<v-ons-toolbar>
			<div class="left">
				<v-ons-back-button @click.prevent="back">Works</v-ons-back-button>
			</div>
			<div class="center">
				<slot></slot>
			</div>
		</v-ons-toolbar>
		<div class="works-child">
			<div class="works-child__text-wrap">
				<h3 class="works-child__title">
					SUUTA LIFE
				</h3>
				<p class="works-child__year">
					2020
				</p>
				<p>
					WordPress / UI Design / HTML5 / CSS3 / Sass / jQuery / php
				</p>
				<p>
					<a href="https://suuta-life.com/" target="blank">
						https://suuta-life.com/
					</a>
				</p>
			</div>
			<div class="works-child__1column">
				<img class="works-child__1column-img" src="@/assets/img/works/suuta_life/suuta-life@2x.jpg">
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