<template>
  <div class="bg-black">
    <div>
      <q-header class="row bg-yellow text-black">
        <q-toolbar
          class="row text-left bg-yellow text-black"
          style="padding: 0.5px; margin-left: 80px; margin-right: 80px"
        >
          <q-toolbar-title class="text-left text-bold" style="font-size: 12px"
            >Bizi Takip Edin
            <q-icon class="bi bi-facebook" style="margin: 12px" size="12px" />
            <q-icon name="fa twitter" style="margin: 8px" size="12px" />
            <q-icon name="fa youtube" style="margin: 8px" size="12px" />
            <q-icon name="fa instagram" style="margin: 8px" size="12px" />
          </q-toolbar-title>

          <q-toolbar-title
            class="row justify-end text-bold cursor-pointer"
            style="font-size: 11px; margin-right: 0px"
          >
            <div style="margin: 10px">GEREKLİ ŞEYLER B2B (BAYİLİK)</div>
            <div style="margin: 10px">HAFTANIN ÜRÜNÜ</div>
            <div style="margin: 10px">GEREKLİ ŞEYLER</div>
            <div style="margin: 10px">MARKALARIMIZ</div>
            <div style="margin: 10px">BİZ KİMİZ</div>
          </q-toolbar-title>
        </q-toolbar>

        <div
          class="row"
          style="
            background-color: #1c1c1c;
            background-image: url(//ideacdn.net/shop/cd/03/themes/selftpl_5f290a69cb6bd/assets/images/header-bg.svg?revision=1658931379);
            background-repeat: no-repeat;
            background-size: cover;
            width: 1570px;
            align-items: center;
          "
        >
          <q-toolbar-title style="flex: 1">
            <q-input
              v-model="searchInput"
              class="bg-white text-black"
              borderless
              style="border: 3px solid yellow; height: 40px; margin-left: 80px"
              label="Aradığınız ürünü yazınız..."
              label-color="black"
            >
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </q-toolbar-title>

          <q-toolbar-title
            class="cursor-pointer q-mr-md"
            style="flex: 2; margin: 2%"
          >
            <a href="/" aria-label="Logo">
              <img
                src="//ideacdn.net/shop/cd/03/themes/selftpl_5f290a69cb6bd/assets/uploads/logo.png?revision=1658931379"
                style="width: 45%; margin-left: 35%"
              />
            </a>
          </q-toolbar-title>

          <q-toolbar-title
            class="row text-white cursor-pointer"
            style="flex: 1; margin-right: 50px; align-items: center"
          >
            <q-toolbar-title style="font-size: 12.5px; overflow: visible"
              >SİPARİŞ TAKİBİ</q-toolbar-title
            >
            <q-separator />

            <q-toolbar-title>
              <q-btn
                to="/girişyap"
                class="no-hover-effect"
                style="
                  text-decoration: none;
                  box-shadow: none;
                  flex: 1;
                  color: white;
                  background: none;
                  background-color: #231f20;
                  font-size: 12.5px;
                "
                hover-bg="transparent"
                focus-bg="transparent"
              >
                ÜYE GİRİŞİ
              </q-btn>
            </q-toolbar-title>

            <q-separator />

            <q-toolbar-title class="q-mr-md" style="margin-right;: 80px">
              <q-btn
                to="/sepet"
                @click="toggleDrawer"
                flat
                dense
                round
                icon="shopping_cart"
                clickable
              >
                <q-badge
                  color="transparent"
                  :style="{
                    backgroundColor: 'black',
                    color: 'white',
                    fontSize: '13px',
                  }"
                >
                  ({{ cartItemCount }})
                </q-badge>
              </q-btn>
            </q-toolbar-title>
          </q-toolbar-title>
        </div>
      </q-header>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'TheToolbar1',
  setup() {
    const toggleDrawer = ref(false);
    const searchInput = ref('');
    const cartItemCount = ref(0);

    return { toggleDrawer, cartItemCount };
  },
};
</script>

<style>
.no-hover-effect:hover,
.no-hover-effect:focus {
  background-color: #1c1c1c !important;
}
</style>
