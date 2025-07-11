<template>
  <nav
    class="min-w-75 h-10 leading-10 rounded-3xl border border-black border-solid flex justify-center gap-6 font-medium text-zinc-500 dark:text-zinc-400"
  >
    <NuxtLink
      v-for="item in nav"
      :key="item.path"
      :to="item.path"
      :class="
        cn('transition px-0.5 hover:text-lime-500 dark:hover:text-lime-400', {
          'text-lime-500 dark:text-lime-400 font-bold':
            currentPath === item.path,
        })
      "
    >
      {{ item.name }}
    </NuxtLink>
  </nav>
</template>
<script setup lang="ts">
import { nav } from "@/config";
import { cn } from "@/utils";
const route = useRoute();
const currentPath = computed(() => route.path);
defineOptions({
  name: "AppNav",
});
</script>
