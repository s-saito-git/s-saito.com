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
					SUUTA LP
				</h3>
				<p class="works-child__year">
					2020
				</p>
				<p>
					UI Design / HTML5 / CSS3 / jQuery
				</p>
				<p>
					<a href="https://about.suuta.com/am_lp_01/" target="blank">
						https://about.suuta.com/am_lp_01/
					</a>
				</p>
			</div>
			<div class="works-child__1column">
				<img class="works-child__1column-img" src="@/assets/img/works/suuta_lp/suuta_lp_01@2x.jpg">
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