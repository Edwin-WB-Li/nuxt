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

<script>
export default {
  name: "SignInPage",
};
</script>
