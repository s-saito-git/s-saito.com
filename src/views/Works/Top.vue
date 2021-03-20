<template>
  <v-ons-page>

    <div class="works">
      <h2>Works</h2>
      <ul>
        <!-- <li class="works__list" v-for="(work,index) in works" :key="index" @click="pushSuutaApp()">
          <img class="works__img" :src="work.img">
          <h3 class="works__product">
            {{ work.product }}
          </h3>
          <p>
            {{ work.description }}
          </p>
        </li> -->
        <li class="works__list" @click="pushSuutaApp()">
          <img class="works__img">
          <h3 class="works__product">
            プロダクト1
          </h3>
          <p>
            プロダクト1の説明
          </p>
        </li>
        <li class="works__list" @click="pushSuutaWeb()">
          <img class="works__img">
          <h3 class="works__product">
            プロダクト2
          </h3>
          <p>
            プロダクト2の説明
          </p>
        </li>
      </ul>
    </div>
  </v-ons-page>
</template>

<script>
import SuutaApp from "./SuutaApp";
import SuutaWeb from "./SuutaWeb.vue"

export default {
  // data: function() {
  //   return {
  //     works: [
  //       { 
  //         img: '/img/suuta_app.jpg',
  //         product: 'SUUTA App',
  //         description: 'CtoCレンタルプラットフォーム「SUUTA（スータ）」'
  //       },
  //       { 
  //         img: '/img/suuta_app.jpg',
  //         product: 'SUUTA App',
  //         description: 'CtoCレンタルプラットフォーム「SUUTA（スータ）」'
  //       },
  //       { 
  //         img: '/img/suuta_app.jpg',
  //         product: 'SUUTA App',
  //         description: 'CtoCレンタルプラットフォーム「SUUTA（スータ）」'
  //       },
  //       { 
  //         img: '/img/suuta_app.jpg',
  //         product: 'SUUTA App',
  //         description: 'CtoCレンタルプラットフォーム「SUUTA（スータ）」'
  //       },
  //     ]
  //   };
  // },
  methods: {
    pushSuutaApp() {
      this.$emit('push-page', SuutaApp);
    },
    pushSuutaWeb() {
      this.$emit('push-page', SuutaWeb);
    }
  }
}
</script>