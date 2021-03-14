<template>
  <v-ons-tabbar position="auto" :visible="true" :tabs="tabs" :index.sync="tabIndex">
  </v-ons-tabbar>
</template>

<script>
import Home from '../views/Home'
import Works from '../views/Works'
import Youtube from '../views/Youtube'
import Other from '../views/Other'

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
        icon: 'fa-youtube',
        label: 'Youtube',
        page: Youtube,
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
  },
}
</script>
