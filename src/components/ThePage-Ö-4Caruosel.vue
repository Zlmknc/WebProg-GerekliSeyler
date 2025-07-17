<template>
  <div class="caruosel justify-center bg-black">
    <q-carousel
      animated
      v-model="slide"
      navigation
      infinite
      :autoplay="autoplay"
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
      style="height: 480px"
    >
      <q-carousel-slide
        :name="1"
        img-src="https://ideacdn.net/shop/cd/03/myassets/slider_pictures/pictures_7_9.jpg?revision=1705757492"
      />
      <q-carousel-slide
        :name="2"
        img-src="https:////ideacdn.net/shop/cd/03/myassets/slider_pictures/pictures_7_8.jpg?revision=1705757492"
      />
      <q-carousel-slide
        :name="3"
        img-src="https://ideacdn.net/shop/cd/03/myassets/slider_pictures/pictures_7_2.jpg?revision=1701778574"
      />
      <q-carousel-slide
        :name="4"
        img-src="https:////ideacdn.net/shop/cd/03/myassets/slider_pictures/pictures_7_6.jpg?revision=1705757492"
      />
    </q-carousel>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    return {
      slide: ref(1),
      autoplay: ref(true),
    };
  },
};
</script>
<!--
1.dosya eksiklerini tamamla
2.vscode yarn -yarn quasar dev.
3.pages içindeki thepage2 i components içine sürükle
4.components içinde .vıe uzantılı page oluştur 5 adet olacak şekilde
5.oluşturulan pagelere the page2 yi kopyala
6.router içindeki router.ts ye gir
7.yol olarak diğer page leri oluştur oage->component olacak şekilde düzelt
8.layout 1.mainlayout içindekileri düzenle

linklere basıldığında pagler değişmeli.
her şeyi save all la
-->
<style scoped>
.caruosel {
  text-align: -webkit-center;
  display: block;
  margin-right: 80px;
  margin-left: 80px;
  height: 480px;
}
</style>
