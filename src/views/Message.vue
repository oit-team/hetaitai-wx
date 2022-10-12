<script>
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({
    message: 'message!',
  }),
})
</script>

<template>
  <div>{{ message }}</div>
</template>
