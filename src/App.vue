<template>
  <v-ons-tabbar id="main-content" @push-page="push($event)" @back-page="back()" position="auto" :visible="true" :tabs="tabs" :index.sync="tabIndex">
  </v-ons-tabbar>
</template>

<script>
import Home from './views/Home/Base'
import Works from './views/Works/Base'
import Other from './views/Other/Base'

export default {
  name: 'index',
  data() {
    return {
      tabIndex: 0,
      tabs: [
        {
        icon: 'fa-home',
        label: 'Home',
        page: Home,
        },
        {
        icon: 'fa-folder',
        label: 'Works',
        page: Works,
        },
        {
        icon: 'fa-ellipsis-h',
        label: 'Other',
        page: Other,
        }
      ]
    }
  },
  methods: {
	push(page) {
		this.$emit('push-page', page);
	},
  back() {
			this.$emit('back-page');
		},
  },
}
</script>