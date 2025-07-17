<template>
  <TheToolbar1 />
  <hr
    class="line"
    style="border-top: 0.001rem solid rgb(35, 34, 34); margin: 0"
  />
  <TheToolbar3 />
  <q-page class="bg-black">
    <ThePage6Caruosel />
    <ThePage1 />

    <q-page-container style="height: 20px">
      <p>Lorem ipsum</p>
    </q-page-container>
    <ThePage2 />
    <ThePage3 />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheToolbar1 from 'src/components/TheToolbar1.vue';
import TheToolbar3 from 'src/components/TheToolbar3.vue';
import ThePage6Caruosel from 'src/components/ThePage6-Caruosel.vue';
import ThePage1 from 'src/components/ThePage1.vue';
import ThePage2 from 'src/components/ThePage2.vue';
import ThePage3 from 'src/components/ThePage3.vue';

export default defineComponent({
  name: 'AnaSayfa',

  components: {
    TheToolbar1,
    TheToolbar3,
    ThePage6Caruosel,
    ThePage1,
    ThePage2,
    ThePage3,
  },
  data() {
    return {
      components: [
        'TheToolbar1',
        'TheToolbar3',
        'ThePage6Caruosel',
        'ThePage1',
        'ThePage2',
        'ThePage3',
      ],
    };
  },
});
</script>
