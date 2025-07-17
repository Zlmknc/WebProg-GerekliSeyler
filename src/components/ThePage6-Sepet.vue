<template>
  <q-toolbar-title>
    <q-btn
      flat
      dense
      round
      icon="shopping_cart"
      @click="toggleDrawer = !toggleDrawer"
    >
      <q-badge
        color="transparent"
        :style="{
          backgroundColor: 'white',
          color: 'white',
          fontSize: '13px',
        }"
      >
        ({{ cartItemCount }})
      </q-badge>
    </q-btn>
  </q-toolbar-title>

  <q-drawer v-model="toggleDrawer" show-if-above side="right" bordered>
    <q-scroll-area class="fit">
      <div class="q-pa-sm">
        <!-- Alışveriş sepeti boş olduğunda gösterilecek içerik -->
        <div class="text-center q-py-xl">
          <div class="text-h6 q-my-md">ALIŞVERİŞ SEPETİ</div>
          <div class="text-subtitle1 text-grey">Sepetiniz boş</div>
          <div>
            <q-icon name="shopping_cart" size="52px" color="grey" />
          </div>
          <q-btn color="yellow" label="ALIŞVERİŞE BAŞLA" class="q-mt-md" />
        </div>
      </div>
    </q-scroll-area>
  </q-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { QDrawer, QScrollArea, QIcon, QBtn } from 'quasar';

const toggleDrawer = ref(false); // Çekmece bileşeninin durumunu kontrol eder. Başlangıçta kapalıdır (false).
</script>
