<template>
  <header>
    <TheToolbar1 />
    <TheToolbar3 />
  </header>
  <q-page>
    <ThePage5öYÜ />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import ThePage5öYÜ from 'src/components/ThePage5öYÜ.vue';
import TheToolbar1 from 'src/components/TheToolbar1.vue';
import TheToolbar3 from 'src/components/TheToolbar3.vue';

export default defineComponent({
  name: 'HemenUyeOl',
  components: {
    TheToolbar1,
    TheToolbar3,
    ThePage5öYÜ,
  },
  data() {
    return {
      components: ['ThePage1Ö', 'ThePage2Ö', 'ThePage5öYÜ'],
    };
  },
});
</script>
