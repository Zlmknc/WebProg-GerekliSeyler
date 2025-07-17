<template class="q-mr-md">
  <div v-if="items.length > 0">
    <div class="giris">
      <div class="q-py-xl">
        <q-layout
          view="hHh lpR fFf"
          style="width: 1370px; height: 100% bottom: 0;"
        >
          <q-page-container style="background-color: rgba(0, 0, 0, 0.5)">
            <q-scroll-area
              style="height: 100vh"
              class="bg-grey-3 round-borders shadow-2"
            >
              <q-page>
                <div class="sayfa">
                  <div
                    class="text-left"
                    style="
                      font-size: 1.3rem;
                      font-weight: 700;
                      margin-left: 2px;
                      margin-top: 1rem;
                      margin-bottom: 1rem;
                      margin-left: 6%;
                    "
                  >
                    ALIŞVERİŞ SEPETİ
                  </div>
                  <div
                    style="
                      font-size: 1.2rem;
                      margin-bottom: 2rem;
                      margin-left: 6%;
                    "
                    class="text-subtitle1 text-black text-left"
                  >
                    Sepetinizde {{ items.length }} ürün var.
                  </div>
                  <hr
                    class="line"
                    style="border-top: 1px solid #d3d3d3; width: 85%"
                  />
                  <div
                    v-for="item in items"
                    :key="item.imgLink"
                    class="product-card"
                  >
                    <img :src="item.imgLink" class="product-image" />
                    <div class="product-details">
                      <div class="product-name">{{ item.name }}</div>
                      <div class="product-yayinevi">{{ item.yayinevi }}</div>
                      <div class="product-price">{{ item.price }}</div>
                    </div>

                    <button
                      @click="removeFromCart(item)"
                      style="border: none; background-color: white"
                      class="bq-white"
                    >
                      <q-icon name="delete" size="xs" color="grey" />
                    </button>
                  </div>

                  <hr
                    class="line"
                    style="border-top: 1px solid #d3d3d3; width: 85%"
                  />
                  <q-btn
                    color="yellow"
                    class="q-mt-md"
                    style="width: 85%"
                    label="SATIN AL"
                  />

                  <q-btn
                    class="q-mt-md"
                    style="width: 85%"
                    label="ALIŞVERİŞE DEVAM ET"
                  />
                </div>
              </q-page>
            </q-scroll-area>
          </q-page-container>
        </q-layout>
      </div>
    </div>
  </div>
  <!-- Alışveriş sepeti boş ise -->
  <div v-else>
    <div class="giris">
      <div class="q-py-xl">
        <q-layout
          view="hHh lpR fFf"
          style="width: 1370px; height: 100% bottom: 0;"
        >
          <q-page-container style="background-color: rgba(0, 0, 0, 0.5)">
            <q-scroll-area
              style="height: 100vh"
              class="bg-grey-3 round-borders shadow-2"
            >
              <q-page class="q-pa-sm">
                <!-- Alışveriş sepeti boş olduğunda gösterilecek içerik -->
                <div class="sayfa q-py-xl">
                  <div
                    class="text-left"
                    style="
                      font-size: 1.3rem;
                      font-weight: 700;
                      margin-left: 2px;
                      margin-top: 1rem;
                      margin-bottom: 1rem;
                      margin-left: 7%;
                    "
                  >
                    ALIŞVERİŞ SEPETİ
                  </div>

                  <div
                    style="
                      font-size: 1.2rem;
                      margin-bottom: 2rem;
                      margin-right: 55%;
                    "
                    class="text-subtitle1 text-black"
                  >
                    Sepetiniz boş
                  </div>
                  <hr
                    class="line"
                    style="border-top: 1px solid #d3d3d3; width: 85%"
                  />
                  <div>
                    <q-icon
                      name="shopping_cart"
                      size="190px"
                      style="color: #d3d3d3"
                    />
                  </div>
                  <hr
                    class="line"
                    style="border-top: 1px solid #d3d3d3; width: 85%"
                  />
                  <q-btn
                    color="yellow"
                    label="ALIŞVERİŞE BAŞLA"
                    class="q-mt-md"
                    style="width: 85%"
                  />
                </div>
              </q-page>
            </q-scroll-area>
          </q-page-container>
        </q-layout>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted } from 'vue';
import { useCartStore } from 'src/stores/StoreForPinia';
import { initializeApp } from 'firebase/app';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

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

export default {
  name: 'SepetSayfasi',
  setup() {
    const store = useCartStore();

    onMounted(async () => {
      const q = collection(db, 'sepet');
      const querySnapshot = await getDocs(q);
      store.items = querySnapshot.docs.map((doc) => doc.data() as Product);
    });

    const checkout = () => {
      // Burada ödeme işlemlerini gerçekleştirebilirsiniz.
    };

    return { items: store.items, checkout };
  },
};
</script>

<style scoped>
.giris {
  top: 0;
  text-align: -webkit-center;
  display: block;
  position: fixed;
}
.sayfa {
  width: 31%;
  background-color: white;
  padding-top: 50px;
  padding-right: 30px;
  padding-left: 30px;
  margin-left: auto;
  padding-bottom: 9%;
  height: 100vh;
}

.product-card {
  display: flex;
  margin-bottom: 10px;
  margin-left: 6%;
  border: none;
}

.product-image {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}

.product-details {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 6%;
}

.product-name {
  font-weight: bold;
}

.product-yayinevi {
  color: #999;
  font-size: 0.8em;
}

.product-price {
  color: #f60;
}
</style>
