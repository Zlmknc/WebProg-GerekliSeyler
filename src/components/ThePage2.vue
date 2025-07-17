<template>
  <div class="sayfa1 bg-black">
    <div class="q-pa-md bg-white" style="max-width: 1570px; margin-top: 500px">
      <div class="title text-white" style="height: 200px">
        BU ÜRÜNLERE BAKMADAN GİTMEYİN !!!
      </div>

      <q-carousel
        animated
        v-model="slide"
        infinite
        :autoplay="autoplay"
        transition-prev="slide-right"
        transition-next="slide-left"
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = true"
        class="carousel-bg"
        height="270px"
        ref="carousel"
        align="left"
      >
        <q-carousel-slide
          v-for="(item, index) in items"
          :key="index"
          :name="index"
          class="flex"
        >
          <div class="image-container">
            <router-link width="200px" :name="index" :to="item.review">
              <img class="q-mt-md" height="230px" :src="item.image" />
            </router-link>
          </div>
          <div style="margin-left: 140px">
            <router-link class="text-container" :name="index" :to="item.review">
              <div class="yayinevi q-pt-md">{{ item.yayinevi }}</div>
              <div class="description q-mb-md">{{ item.description }}</div>
            </router-link>
            <q-btn class="review" row flat label="incele" :to="item.review" />
          </div>
        </q-carousel-slide>

        <template v-slot:control>
          <q-carousel-control
            position="top-right"
            :offset="[18, 40]"
            class="q-gutter-xs"
          >
            <q-btn
              flat
              round
              text-color="white"
              icon="chevron_left"
              @click="$refs.carousel.previous()"
            />

            <q-btn
              flat
              round
              text-color="white"
              icon="chevron_right"
              @click="$refs.carousel.next()"
            />
          </q-carousel-control>
        </template>
      </q-carousel>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'UrinInceleSlider',
  setup() {
    const slide = ref<number>(1);
    const autoplay = ref<boolean>(true);
    const items = ref<
      Array<{
        image: string;
        yayinevi: string;
        description: string;
        review: string;
      }>
    >([
      {
        image:
          'https://ideacdn.net/shop/cd/03/myassets/products/429/01-hero-57336_min.jpg?revision=1700566928',
        yayinevi: 'Diamond Select',
        description: 'Avatar the Last Airbender - Gallery Aang 27.94 cm',
        review: '/urunSayfası',
      },
      {
        image:
          'https://ideacdn.net/shop/cd/03/myassets/products/041/pokemon-tcg-pikachu-v-showcase-1648178665-6fb50168-600x600_min.jpg?revision=1697143329',
        yayinevi: 'Pokemon Company',
        description: 'Pokemon Pikachu V Showcse',
        review: '/urunSayfası',
      },
      {
        image:
          'https://ideacdn.net/shop/cd/03/myassets/products/973/10791_min.jpg?revision=1697143329',
        yayinevi: 'Banpresto',
        description: 'RE: ZERO - SPM FIGURE - REM WEDDING Ver.',
        review: '/urunSayfası',
      },
      {
        image:
          'https://ideacdn.net/shop/cd/03/myassets/products/987/13413-that-time-i-got-reincarnated-as-a-slime-otherworlder-plus-rimuru-tempest-figure-special-color-ver_min.jpg?revision=1697143329',
        yayinevi: 'Banpresto',
        description:
          'THAT TIME I GOT REINCARNATED AS A SLIME ‐OTHERWORLDER PLUS‐ RIMURU-TEMPEST FIGURE SPECIAL COLOR VER.',
        review: '/urunSayfası',
      },
      {
        image:
          'https://ideacdn.net/shop/cd/03/myassets/products/134/3191n2azbel-ac_min.jpg?revision=1697143329',
        yayinevi: 'Banpresto',
        description: 'Banpresto - Figurine Tokyo Revengers - Keisuke Baji',
        review: '/urunSayfası',
      },
    ]);

    return {
      slide,
      autoplay,
      items,
    };
  },
});
</script>

<style scoped>
.flex {
  display: flex;
  align-items: center;
}
.sayfa1 {
  text-align: -webkit-center;
  display: block;
}

.title {
  position: absolute;
  height: 20px;
  font-size: 30px;
  z-index: 1;
  margin-left: 17em;
  top: 3.7em;
  margin-top: 94%;
}

.image-container {
  display: flex;
  margin-left: 125px;
  width: 230px;
}

.text-container {
  color: white;
  text-decoration: none;
}
.yayinevi {
  font-size: 18px;
  font-weight: bold;
  margin-top: 25px;
}
.description {
  font-size: 20px;
  width: 650px;
}
.review {
  color: rgb(255, 54, 54);
  width: 140px;
  box-shadow: none;
  background: url(https://ideacdn.net/shop/cd/03/themes/selftpl_5f290a69cb6bd/assets/images/featured-btn-bg.svg?revision=1658931379)
    no-repeat;
}
.carousel-bg {
  background: url('https://ideacdn.net/shop/cd/03/themes/selftpl_5f290a69cb6bd/assets/images/featured-products-bg.svg?revision=1658931379')
      no-repeat,
    rgb(255, 32, 69);
  background-size: cover;
  background-attachment: fixed;
}
</style>
