<template>
  <v-ons-page>
    <v-ons-navigator
			swipeable
			:page-stack="pageStack"
			:swipe-target-width="swipe_width"
			swipe-threshold="0.1"
			@push-page="push($event)"
			@back-page="back()"
		/>
  </v-ons-page>
</template>

<script>
import Top from './Top';

export default {
data() {
	return {
		swipe_width: null,
		pageStack: [Top],
		}
	},
	methods: {
		push(page) {
			this.pageStack.push(page)
		},
		back() {
			console.log('あいうえお');
			this.pageStack.splice(this.pageStack.length - 1, 1)
		}
	},
}
</script>