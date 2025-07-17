<template>
  <header>
    <TheToolbar1 />
    <TheToolbar3 />
  </header>
  <q-page>
    <ThePage4 />
  </q-page>
</template>

<script>
import ThePage4 from 'src/components/ThePage4.vue';
import TheToolbar1 from 'src/components/TheToolbar1.vue';
import TheToolbar3 from 'src/components/TheToolbar3.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { TheToolbar1, TheToolbar3, ThePage4 },

  data() {
    return {
      components: [TheToolbar1, TheToolbar3, ThePage4],
    };
  },
});
</script>
