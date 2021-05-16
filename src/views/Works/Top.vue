<template>
  <v-ons-page>
    <div class="works">
      <h2>Works</h2>
      <ul>
        <li class="works__list" @click="pushSuutaApp()">
          <img class="works__img" src="@/assets/img/works/suuta_app@2x.png">
          <h3 class="works__product">
            SUUTA App
          </h3>
          <p>
            CtoCレンタルプラットフォーム「SUUTA（スータ）」
          </p>
        </li>
        <li class="works__list" @click="pushSuutaWeb()">
          <img class="works__img" src="@/assets/img/works/suuta_business@2x.png">
          <h3 class="works__product">
            SUUTA Business
          </h3>
          <p>
            CtoCレンタルプラットフォーム「SUUTA（スータ）」のPC版
          </p>
        </li>
        <li class="works__list" @click="pushSuutaLp()">
          <img class="works__img" src="@/assets/img/works/suuta_lp@2x.png">
          <h3 class="works__product">
            SUUTA LP
          </h3>
          <p>
            CtoCレンタルプラットフォーム「SUUTA（スータ）」のLP
          </p>
        </li>
        <li class="works__list" @click="pushSuutaLife()">
          <img class="works__img" src="@/assets/img/works/suuta_life@2x.png">
          <h3 class="works__product">
            SUUTA LIFE
          </h3>
          <p>
            CtoCレンタルプラットフォーム「SUUTA（スータ）」のメディアサイト
          </p>
        </li>
      </ul>
    </div>
  </v-ons-page>
</template>

<script>
import SuutaApp from "./SuutaApp";
import SuutaWeb from "./SuutaWeb.vue"
import SuutaLp from "./SuutaLp.vue"
import SuutaLife from "./SuutaLife.vue"

export default {
  methods: {
    pushSuutaApp() {
      this.$emit('push-page', SuutaApp);
    },
    pushSuutaWeb() {
      this.$emit('push-page', SuutaWeb);
    },
    pushSuutaLp() {
      this.$emit('push-page', SuutaLp);
    },
    pushSuutaLife() {
      this.$emit('push-page', SuutaLife);
    }
  }
}
</script>