<template>
  <router-view />
</template>

<script>
export default {
  name: "App"
}
</script>

<style>
:root{
	--custom-primary-color: #002200;
	--custom-secondary-color: #b99e00;
	--custom-gradient: linear-gradient(to right, var(--custom-green), var(--custom-gold) 80%) !important;
}
</style>