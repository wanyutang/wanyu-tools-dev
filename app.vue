<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>
<script>
import { VitePwaManifest } from '@vite-pwa/nuxt/dist/components'

export default {
  components: {
    VitePwaManifest
  }
}
</script>