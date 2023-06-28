<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
    <!-- PWA component -->
    <VitePwaManifest />
  </div>
</template>
<script>
import { VitePwaManifest } from '@vite-pwa/nuxt'

export default {
  components: {
    VitePwaManifest
  }
}
</script>