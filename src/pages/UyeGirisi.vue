<template>
  <q-page class="q-pa-lg">
    <div>
      <ThePage5 />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import ThePage5 from 'src/components/ThePage5.vue';

export default defineComponent({
  name: 'UyeGirisi',
  components: {
    ThePage5,
  },
  data() {
    return {
      components: ['ThePage5'],
    };
  },
});
</script>
