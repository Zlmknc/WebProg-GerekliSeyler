<template>
  <div class="sayfa bg-black">
    <div class="row bg-white justify-center" style="max-width: 1260px">
      <div class="line col-4"></div>
      <div class="bg-white col-3 q-px-md justify-center">
        <div class="title q-ma-md text-white text-center">
          Sizin için Seçtiklerimiz
        </div>
      </div>
      <div class="line col-4"></div>

      <q-card v-for="(item, index) in items" :key="index" class="my-card">
        <q-card-section class="row q-mx-md">
          <router-link :name="index" :to="item.review">
            <q-img :src="item.imgLink" class="card-image q-mr-md"></q-img>
          </router-link>
          <router-link
            class="text-container text-left"
            :name="index"
            :to="item.review"
          >
            <div class="yayinevi text-bold">{{ item.yayinevi }}</div>
            <div class="name">{{ item.name }}</div>
          </router-link>
        </q-card-section>
      </q-card>
      <div class="bg" style="height: 388px" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { QCard, QImg, QCardSection } from 'quasar';

export default defineComponent({
  name: 'SizinİcinSectiklerimiz',
  components: {
    QCard,
    QImg,
    QCardSection,
  },
  setup() {
    const items = ref([
      {
        imgLink:
          'https://ideacdn.net/shop/cd/03/myassets/products/464/4580416944182-bb60036a201a706fe7badfdfa5b0b289-63999_min.jpg?revision=1700579559',
        yayinevi: 'Good Smile Company ',
        name: 'POP UP PARADE Satoru Gojo PVC Figure',
        review: '',
      },

      {
        imgLink:
          'https://ideacdn.net/shop/cd/03/myassets/products/179/bungou-stray-dogs-3-kapak_min.jpg?revision=1697143329',
        yayinevi: 'Gerekli Şeyler',
        name: 'Bungou Stray Dogs 3. Cilt',
        review: '',
      },

      {
        imgLink:
          'https://ideacdn.net/shop/cd/03/myassets/products/295/7edba8-4da94bccf3a446fc83cfabd252213378-mv2_min.jpg?revision=1697143329',
        yayinevi: 'Flaneur',
        name: 'Stories (Standart Edisyon)',
        review: '',
      },

      {
        imgLink:
          'https://ideacdn.net/shop/cd/03/myassets/products/767/1_min.jpg?revision=1697143329',
        yayinevi: 'Faber & Faber',
        name: 'The Melancholy Death of Oyster Boy',
        review: '',
      },

      {
        imgLink:
          'https://ideacdn.net/shop/cd/03/myassets/products/429/1_min.jpg?revision=1697143329',
        yayinevi: 'Oni Press',
        name: 'Scott Pilgrim Color Collection Box Set',
        review: '',
      },

      {
        imgLink:
          'https://ideacdn.net/shop/cd/03/myassets/products/491/81arisu-u6l-sl1500_min.jpg?revision=1697143329',
        yayinevi: 'Viz Media',
        name: 'Bakuman Complete Box Set: Volumes 1-20',
        review: '',
      },

      {
        imgLink:
          'https://ideacdn.net/shop/cd/03/myassets/products/464/4580416944182-bb60036a201a706fe7badfdfa5b0b289-63999_min.jpg?revision=1700579559',
        yayinevi: 'Good Smile Company ',
        name: 'POP UP PARADE Satoru Gojo PVC Figure',
        review: '',
      },

      {
        imgLink:
          'https://ideacdn.net/shop/cd/03/myassets/products/179/bungou-stray-dogs-3-kapak_min.jpg?revision=1697143329',
        yayinevi: 'Gerekli Şeyler',
        name: 'Bungou Stray Dogs 3. Cilt',
        review: '',
      },

      {
        imgLink:
          'https://ideacdn.net/shop/cd/03/myassets/products/295/7edba8-4da94bccf3a446fc83cfabd252213378-mv2_min.jpg?revision=1697143329',
        yayinevi: 'Flaneur',
        name: 'Stories (Standart Edisyon)',
        review: '',
      },

      {
        imgLink:
          'https://ideacdn.net/shop/cd/03/myassets/products/767/1_min.jpg?revision=1697143329',
        yayinevi: 'Faber & Faber',
        name: 'The Melancholy Death of Oyster Boy',
        review: '',
      },

      {
        imgLink:
          'https://ideacdn.net/shop/cd/03/myassets/products/429/1_min.jpg?revision=1697143329',
        yayinevi: 'Oni Press',
        name: 'Scott Pilgrim Color Collection Box Set',
        review: '',
      },

      {
        imgLink:
          'https://ideacdn.net/shop/cd/03/myassets/products/491/81arisu-u6l-sl1500_min.jpg?revision=1697143329',
        yayinevi: 'Viz Media',
        name: 'Bakuman Complete Box Set: Volumes 1-20',
        review: '',
      },

      {
        imgLink:
          'https://ideacdn.net/shop/cd/03/myassets/products/464/4580416944182-bb60036a201a706fe7badfdfa5b0b289-63999_min.jpg?revision=1700579559',
        yayinevi: 'Good Smile Company ',
        name: 'POP UP PARADE Satoru Gojo PVC Figure',
        review: '',
      },

      {
        imgLink:
          'https://ideacdn.net/shop/cd/03/myassets/products/179/bungou-stray-dogs-3-kapak_min.jpg?revision=1697143329',
        yayinevi: 'Gerekli Şeyler',
        name: 'Bungou Stray Dogs 3. Cilt',
        review: '',
      },

      {
        imgLink:
          'https://ideacdn.net/shop/cd/03/myassets/products/295/7edba8-4da94bccf3a446fc83cfabd252213378-mv2_min.jpg?revision=1697143329',
        yayinevi: 'Flaneur',
        name: 'Stories (Standart Edisyon)',
        review: '',
      },

      {
        imgLink:
          'https://ideacdn.net/shop/cd/03/myassets/products/767/1_min.jpg?revision=1697143329',
        yayinevi: 'Faber & Faber',
        name: 'The Melancholy Death of Oyster Boy',
        review: '',
      },

      {
        imgLink:
          'https://ideacdn.net/shop/cd/03/myassets/products/429/1_min.jpg?revision=1697143329',
        yayinevi: 'Oni Press',
        name: 'Scott Pilgrim Color Collection Box Set',
        review: '',
      },

      {
        imgLink:
          'https://ideacdn.net/shop/cd/03/myassets/products/491/81arisu-u6l-sl1500_min.jpg?revision=1697143329',
        yayinevi: 'Viz Media',
        name: 'Bakuman Complete Box Set: Volumes 1-20',
        review: '',
      },

      {
        imgLink:
          'https://ideacdn.net/shop/cd/03/myassets/products/464/4580416944182-bb60036a201a706fe7badfdfa5b0b289-63999_min.jpg?revision=1700579559',
        yayinevi: 'Good Smile Company ',
        name: 'POP UP PARADE Satoru Gojo PVC Figure',
        review: '',
      },

      {
        imgLink:
          'https://ideacdn.net/shop/cd/03/myassets/products/179/bungou-stray-dogs-3-kapak_min.jpg?revision=1697143329',
        yayinevi: 'Gerekli Şeyler',
        name: 'Bungou Stray Dogs 3. Cilt',
        review: '',
      },
    ]);

    return {
      items,
    };
  },
});
</script>

<style scoped>
.title {
  background: url(https://ideacdn.net/shop/cd/03/themes/selftpl_5f290a69cb6bd/assets/images/products-header-bg.svg?revision=1658931379)
    no-repeat center;
  background-size: cover;
  font-size: 18px;
  height: 2.1em;
}
.sayfa {
  text-align: -webkit-center;
  display: block;
}
.my-card {
  display: flex;
  overflow: hidden;
  box-shadow: none;
  width: 300px;
  height: 92px;
}
.bg {
  background: url(//ideacdn.net/shop/cd/03/themes/selftpl_5f290a69cb6bd/assets/images/footer-bg.svg?revision=1658931379)
    no-repeat center;
  background-size: 100%;
}
.text-container {
  color: rgb(0, 0, 0);
  margin-left: 20px;
  font-size: 12px;
  width: 160px;
  text-decoration: none;
}

.card-image {
  width: 40px;
  object-fit: cover;
}
.line {
  flex-grow: 1;
  height: 1px;
  margin-top: 30px;
  background: rgb(39, 39, 39);
}
</style>
