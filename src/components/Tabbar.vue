<template>
  <v-ons-page>
    <v-ons-tabbar position="auto" :visible="true" :tabs="tabs" :index.sync="tabIndex">
    </v-ons-tabbar>
  </v-ons-page>
</template>

<script>
import Home from '../views/Home'
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
        icon: 'fa-user',
        label: 'Youtube',
        page: Youtube,
        },
        {
        icon: 'fa-cog',
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
