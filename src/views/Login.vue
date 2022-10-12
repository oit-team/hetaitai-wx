<script>
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({
    message: 'login!',
  }),
})
</script>

<template>
  <div class="text-xl">
    {{ message }}
  </div>
</template>
