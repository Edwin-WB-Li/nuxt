<template>
  <header>
    <SignedOut>
      <SignInButton />
    </SignedOut>
    <SignedIn>
      <UserButton />
    </SignedIn>
  </header>
</template>
<script setup lang="ts">
defineOptions({
  name: 'UserSignin',
})
</script>
