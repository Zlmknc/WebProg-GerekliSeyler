<template>
  <div class="sticky">
    <q-toolbar class="row flex-center">
      <q-btn-toggle
        class="row cursor-pointer non-selectable text-white spaced-labels"
        style="width: 1560"
        v-model="model"
        toggle-color="#231f20"
        :options="[
          {
            label: 'ÇİZGİ ROMAN',
            value: 'one',
            slot: 'one',
            style: 'margin-right: 30px; margin-left: 30px;',
          },
          {
            label: 'MANGA',
            value: 'two',
            slot: 'two',
            style: 'margin-right: 30px; margin-left: 30px;',
          },
          {
            label: 'AKSESUAR',
            value: 'three',
            slot: 'three',
            style: 'margin-right: 30px; margin-left: 30px;',
          },
          {
            label: 'KART OYUNLARI',
            value: 'four',
            slot: 'four',
            style: 'margin-right: 30px; margin-left: 30px;',
          },
          {
            label: 'DEFTER',
            value: 'five',
            slot: 'five',
            style: 'margin-right: 30px; margin-left: 30px;',
          },
          {
            label: 'POSTER-TAKVİM',
            value: 'six',
            slot: 'six',
            style: 'margin-right: 30px; margin-left: 30px;',
          },
          {
            label: 'ART-DRAWING BOOKS',
            value: 'seven',
            slot: 'seven',
            style: 'margin-right: 30px; margin-left: 30px;',
          },
        ]"
      >
        <template v-slot:one>
          <q-tooltip>
            <q-toolbar>ÇİZGİ ROMAN-TÜRKÇE</q-toolbar>
            <q-toolbar>ÇİZGİ ROMAN-İNGİLİZCE</q-toolbar>
          </q-tooltip>
        </template>

        <template v-slot:two>
          <q-tooltip>
            <q-toolbar>Türkçe</q-toolbar>
            <q-toolbar>İngilizce</q-toolbar>
            <q-toolbar>Art-Çizim Kitapları</q-toolbar>
          </q-tooltip>
        </template>

        <template v-slot:three>
          <q-tooltip>
            <q-toolbar>Anahtarlık</q-toolbar>
            <q-toolbar>Bardak</q-toolbar>
            <q-toolbar>..</q-toolbar>
          </q-tooltip>
        </template>
      </q-btn-toggle>
    </q-toolbar>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const model = ref<string>('three');
</script>

<style>
div.sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  background-color: #231f20;
  width: 100%;
}
.q-btn-toggle {
  display: flex;
  flex-direction: row;
}
.q-btn-toggle .q-btn:hover {
  color: yellow !important;
  background-color: #090909 !important;
}

.q-tooltip {
  border: 1px solid white; /* Kutunun kenarlığı beyaz olacak */
}
</style>
