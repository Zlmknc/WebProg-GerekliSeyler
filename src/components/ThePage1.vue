<template>
  <div class="sayfa bg-black">
    <div
      class="q-ma-md justify-center bg-white"
      style="max-width: 1580px; margin-top: 30px"
    >
      <div class="q-gutter-md row justify-center">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="image-container"
        >
          <router-link :to="item.link">
            <q-img
              :src="item.image"
              :alt="'Image ' + (index + 1)"
              class="my-image"
            />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DörtKatagori',
  setup() {
    const items = [
      {
        image:
          'https://ideacdn.net/shop/cd/03/myassets/banner_pictures/banner_1.jpg?revision=1603794530',
        link: ':catchAll(.*)*',
      },
      {
        image:
          'https://ideacdn.net/shop/cd/03/myassets/banner_pictures/banner_2.jpg?revision=1604060600',
        link: '/ÇRÜ',
      },
      {
        image:
          'https://ideacdn.net/shop/cd/03/myassets/banner_pictures/banner_3.jpg?revision=1603794478',
        link: ':catchAll(.*)*',
      },
      {
        image:
          'https://ideacdn.net/shop/cd/03/myassets/banner_pictures/banner_4.jpg?revision=1603794457',
        link: ':catchAll(.*)*',
      },
    ];

    return {
      items,
    };
  },
});
</script>

<style scoped>
.sayfa {
  text-align: -webkit-center;
  display: block;
}
.image-container {
  position: relative;
  width: 22%;
  overflow: hidden;
}

.my-image {
  width: 100%;
  transition: all 0.3s ease-in-out;
}

.my-image:hover {
  transform: scale(1.05);
  position: relative;
  z-index: 1;
}
</style>
