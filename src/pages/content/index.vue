<!-- <script setup lang="ts">

import { queryCollection } from '@nuxt/content/nitro';

const { data: home } = await useAsyncData(() => queryCollection('content').path('/').first())

useSeoMeta({
  title: home.value?.title,
  description: home.value?.description
})
</script>

<template>
  <ContentRenderer v-if="home" :value="home" />
  <div v-else>Home not found</div>
</template> -->
