<template>
  <div class="sayfa bg-black">
    <div
      class="bg-white q-ma-md justify-center"
      style="max-width: 1260px; margin-top: 400px"
    >
      <div class="row q-col-gutter-md" style="margin-left: 27%">
        <div class="row col-12">
          <q-checkbox
            class="checkbox no-shadow"
            checked-icon="square"
            v-model="right"
            color="pink"
            label="Stoktakiler"
          />
          <div class="text-pink text-bold q-mt-md col-7 text-right">
            Toplam {{ products.length }} Ürün
          </div>

          <div class="q-mx-md col-3">
            <q-select
              v-model="model"
              :options="options"
              color="white"
              background-color="pink"
              style="border: 1px solid black"
            />
          </div>
        </div>

        <q-card
          v-for="(product, index) in products"
          :key="index"
          class="my-card col-3"
        >
          <q-card-section>
            <div class="card-image">
              <q-img :src="product.imgLink" class="img q-mr-md"></q-img>
            </div>

            <div class="product-yayinevi q-mt-md">{{ product.yayinevi }}</div>
            <div class="product-name">{{ product.name }}</div>

            <div class="price text-bold q-mt-md">{{ product.price }}</div>
          </q-card-section>

          <q-card-actions class="row q-col-gutter-md" align="center">
            <q-btn
              class="Sepet col-8"
              flat
              label="Sepete Ekle"
              @click="SepeteEkle(product)"
            />
          </q-card-actions>
        </q-card>
      </div>
      <div class="bg" style="height: 388px" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDUfS_Ibm942vBNJ82AXJAGCmSEcD-YEDo',
  authDomain: 'web2final-6c78b.firebaseapp.com',
  projectId: 'web2final-6c78b',
  storageBucket: 'web2final-6c78b.appspot.com',
  messagingSenderId: '407093912037',
  appId: '1:407093912037:web:d73d5ddcbc76c5401f4f0c',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

interface Product {
  imgLink: string;
  yayinevi: string;
  name: string;
  price: string;
}

export default defineComponent({
  name: 'CizgiRomanUrunleri',
  setup() {
    const model = ref<string>('Önerilen sıralama');
    const options = ref<string[]>([
      'Önerilen sıralama',
      'En düşük fiyat',
      'Çok değerlendirilenler',
      'Yüksek puanlar',
      'İndirim oranı',
      'Yeni eklenenler',
    ]);

    const products = ref([
      {
        imgLink:
          'https://ideacdn.net/shop/cd/03/myassets/products/592/tex-zagor-bandera-previews_min.jpeg?revision=1697143329',
        yayinevi: 'Epicenter Comics',
        name: 'Tex & Zagor: Bandera',
        price: '600,00 TL',
      },
      {
        imgLink:
          'https://ideacdn.net/shop/cd/03/myassets/products/303/915qy3ogr8l_min.jpg?revision=1697143329',
        yayinevi: 'Tex & Zagor: Bandera',
        name: 'Streets Of Paris, Streets Of Murder: The Complete Noir',
        price: '900,00 TL',
      },
      {
        imgLink:
          'https://ideacdn.net/shop/cd/03/myassets/products/203/9781419731501_min.jpg?revision=1697143329',
        yayinevi: 'Abrams',
        name: 'DUNE: The Graphic Novel, Book 1: Dune',
        price: '750,00 TL',
      },
      {
        imgLink:
          'https://ideacdn.net/shop/cd/03/myassets/products/618/244981-9786254497247_min.jpg?revision=1697143329',
        yayinevi: 'Alfa Yayınları',
        name: 'Tenten - 8 Kitap Takım (Ciltli - Kutulu)',
        price: '2.800,00 TL',
      },
      {
        imgLink:
          'https://ideacdn.net/shop/cd/03/myassets/products/535/sirca-kosk-kapak-sablon2_min.jpg?revision=1697143329',
        yayinevi: 'Tex & Zagor: Bandera',
        name: 'Sırça Köşk',
        price: '100,00 TL',
      },
      {
        imgLink:
          'https://ideacdn.net/shop/cd/03/myassets/products/140/a15i37vcjcl_min.jpg?revision=1697143329',
        yayinevi: 'Dc Comics',
        name: 'Before Watchmen: Nite Owl/Dr. Manhattan',
        price: '750,00 TL',
      },
      {
        imgLink:
          'https://ideacdn.net/shop/cd/03/myassets/products/508/918fjswqhcl_min.jpg?revision=1697143329',
        yayinevi: 'Scholastic - Graphix',
        name: 'Amulet #1-8 Box Set',
        price: '3.120,00 TL',
      },
      {
        imgLink:
          'https://ideacdn.net/shop/cd/03/myassets/products/584/71pftq6ofdl_min.jpg?revision=1701271943',
        yayinevi: 'Dc Comics',
        name: 'Batman Mad Love And Other Stories TP',
        price: '570,00 TL',
      },
      {
        imgLink:
          'https://ideacdn.net/shop/cd/03/myassets/products/592/tex-zagor-bandera-previews_min.jpeg?revision=1697143329',
        yayinevi: 'Epicenter Comics',
        name: 'Tex & Zagor: Bandera',
        price: '600,00 TL',
      },
      {
        imgLink:
          'https://ideacdn.net/shop/cd/03/myassets/products/303/915qy3ogr8l_min.jpg?revision=1697143329',
        yayinevi: 'Tex & Zagor: Bandera',
        name: 'Streets Of Paris, Streets Of Murder: The Complete Noir',
        price: '900,00 TL',
      },
      {
        imgLink:
          'https://ideacdn.net/shop/cd/03/myassets/products/203/9781419731501_min.jpg?revision=1697143329',
        yayinevi: 'Abrams',
        name: 'DUNE: The Graphic Novel, Book 1: Dune',
        price: '750,00 TL',
      },
      {
        imgLink:
          'https://ideacdn.net/shop/cd/03/myassets/products/618/244981-9786254497247_min.jpg?revision=1697143329',
        yayinevi: 'Alfa Yayınları',
        name: 'Tenten - 8 Kitap Takım (Ciltli - Kutulu)',
        price: '2.800,00 TL',
      },
      {
        imgLink:
          'https://ideacdn.net/shop/cd/03/myassets/products/535/sirca-kosk-kapak-sablon2_min.jpg?revision=1697143329',
        yayinevi: 'Tex & Zagor: Bandera',
        name: 'Sırça Köşk',
        price: '100,00 TL',
      },
      {
        imgLink:
          'https://ideacdn.net/shop/cd/03/myassets/products/140/a15i37vcjcl_min.jpg?revision=1697143329',
        yayinevi: 'Dc Comics',
        name: 'Before Watchmen: Nite Owl/Dr. Manhattan',
        price: '750,00 TL',
      },
      {
        imgLink:
          'https://ideacdn.net/shop/cd/03/myassets/products/508/918fjswqhcl_min.jpg?revision=1697143329',
        yayinevi: 'Scholastic - Graphix',
        name: 'Amulet #1-8 Box Set',
        price: '3.120,00 TL',
      },
      {
        imgLink:
          'https://ideacdn.net/shop/cd/03/myassets/products/584/71pftq6ofdl_min.jpg?revision=1701271943',
        yayinevi: 'Dc Comics',
        name: 'Batman Mad Love And Other Stories TP',
        price: '570,00 TL',
      },
    ]);

    return {
      products,
      right: ref(false),
      model,
      options,
    };
  },

  methods: {
    async SepeteEkle(product: Product) {
      try {
        await setDoc(doc(db, 'sepet', new Date().toISOString()), {
          imgLink: product.imgLink,
          yayinevi: product.yayinevi,
          name: product.name,
          price: product.price,
          createdAt: new Date(),
        });
      } catch (error) {
        console.error(error);
      }
    },
  },
});
</script>

<style scoped>
.sayfa {
  text-align: -webkit-center;
  display: block;
}

.my-card {
  max-width: 210px;
  margin: auto;
  box-shadow: none;
  text-align: center;
  font-size: 12px;
}

.card-image {
  max-width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
}

.img {
  max-width: 100%;
}
.product-yayinevi,
.product-name {
  height: 40px;
  overflow: hidden;
}
.price {
  font-size: 16px;
}
.bg {
  background: url(//ideacdn.net/shop/cd/03/themes/selftpl_5f290a69cb6bd/assets/images/footer-bg.svg?revision=1658931379)
    no-repeat center;
  background-size: 100%;
}
.Sepet {
  background: url(https://ideacdn.net/shop/cd/03/themes/selftpl_5f290a69cb6bd/assets/images/showcase-cart-bg.svg?revision=1658931379)
    no-repeat center;
  background-size: 100%;
  font-size: 12px;
  text-transform: capitalize;
}
.Sepet:hover {
  color: rgb(185, 24, 24);
  background: url(https://ideacdn.net/shop/cd/03/themes/selftpl_5f290a69cb6bd/assets/images/showcase-cart-bg-active.svg?revision=1658931379)
    no-repeat center;
  background-size: 100%;
}
</style>
