<template>
  <v-ons-page>
    <div class="works">
      <h2>Works</h2>
      <ul>
        <li class="works__list" v-for="work in works" :key="work">
          <img class="works__img" :src="work.img">
          <h3 class="works__product">
            {{ work.product }}
          </h3>
          <p>
            {{ work.description }}
          </p>
        </li>
      </ul>
    </div>
  </v-ons-page>
</template>

<script>
export default {
  data: function() {
    return {
      works: [
        { 
          img: '/img/suuta_app.jpg',
          product: 'SUUTA App',
          description: 'CtoCレンタルプラットフォーム「SUUTA（スータ）」'
        },
        { 
          img: '/img/suuta_app.jpg',
          product: 'SUUTA App',
          description: 'CtoCレンタルプラットフォーム「SUUTA（スータ）」'
        },
        { 
          img: '/img/suuta_app.jpg',
          product: 'SUUTA App',
          description: 'CtoCレンタルプラットフォーム「SUUTA（スータ）」'
        },
        { 
          img: '/img/suuta_app.jpg',
          product: 'SUUTA App',
          description: 'CtoCレンタルプラットフォーム「SUUTA（スータ）」'
        },
      ]
    };
  }
}
</script>