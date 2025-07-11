<template>
  <UCard>
    <template #header>
      <Header />
    </template>
    <slot />
    <template #footer>
      <div class="w-full flex justify-center items-center">
        <p class="text-sm text-zinc-500 dark:text-zinc-400">
          &copy; {{ new Date().getFullYear() }} - Nuxt Starter
        </p>
      </div>
    </template>
  </UCard>
</template>
