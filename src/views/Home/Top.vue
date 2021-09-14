<template>
  <v-ons-page>
    <div class="mv">
      <img class="mv__img" src="@/assets/img/home/mv.jpg">
      <div class="mv__profile">
        <div class="mv__profile-wrap">
          <div class="mv__profile-inner">
            <h1 class="mv__profile-title">
              Shinsuke Saito
            </h1>
            <p>
              <b>Age28 / Tokyo</b>
            </p><br>
            <p>
              初めまして、フロントエンドエンジニアの齋藤です。<br><br>
              現在は自社サービスの開発に携わっております。こちらはテストのためのテキスト<br><br>
              こちらのポートフォリオはVue.js / Onsen UIで作成されており、<br>
              PCではiPadサイズ表示、SPではiPhoneサイズ表示され、BEMを用いたレスポンシブサイトとなっております。
            </p>
            <p>テスト追加しますします一行</p>
            <p>テスト01ブランチで追加した一行</p>
          </div>
        </div>
      </div>
    </div>
    <div class="career">
      <div class="career__wrap">
        <div class="career__inner">
          <h3 class="career__title">Career</h3>
          <ul>
            <li class="career__list" v-for="career in careers" :key="career.message">
              <img class="career__img" :src="career.img">
              <div>
                <p class="career__term">
                  {{ career.term }}
                </p>
                <p>
                  <b>{{ career.company }}</b>
                  <span class="career__position">{{ career.position }}</span>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </v-ons-page>
</template>

<script>
export default {
  data: function() {
    return {
      careers: [
        { 
          img: require('@/assets/img/home/ico_company.svg'),
          term: '2019 -',
          company: '株式会社あまたす',
          position: 'UI/UXデザイナー / コーダー'
        },
        { 
          img: require('@/assets/img/home/ico_company.svg'),
          term: '2018 - 2019',
          company: '株式会社エイムプレイス',
          position: 'Webデザイナー / コーダー'
        },
        { 
          img: require('@/assets/img/home/ico_company.svg'),
          term: '2016 - 2018',
          company: '株式会社GypsophilA',
          position: 'Webデザイナー / コーダー'
        },
        { 
          img: require('@/assets/img/home/ico_company.svg'),
          term: '2013 - 2016',
          company: '株式会社エストール',
          position: 'グラフィックデザイナー'
        },
        { 
          img: require('@/assets/img/home/ico_school.svg'),
          term: '2011 - 2013',
          company: '東京ビジュアルアーツ',
          position: 'マスコミ編集学科'
        }
      ]
    };
  }
}
</script>