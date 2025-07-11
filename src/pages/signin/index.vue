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
// import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nuxt";
export default {
  name: "SignInPage",
  // components: {
  //   SignedIn,
  //   SignedOut,
  //   SignInButton,
  //   UserButton,
  // },
};
</script>
