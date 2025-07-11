<template>
  <UCard class="m-auto max-w-[90rem]">
    <template #header>
      <Header />
    </template>
    <slot />
    <template #footer>
      <div class="flex w-full items-center justify-center">
        <p class="text-sm text-zinc-500 dark:text-zinc-400">
          &copy; {{ new Date().getFullYear() }} - Nuxt Starter
        </p>
      </div>
    </template>
  </UCard>
</template>
