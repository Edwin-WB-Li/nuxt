<template>
	<header>
		<SignedOut>
			<SignInButton class="cursor-pointer" />
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
