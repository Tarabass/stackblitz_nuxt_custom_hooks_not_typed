<script setup lang="ts">
const nuxtApp = useNuxtApp();

nuxtApp.hooks.callHook('form123:submit');
nuxtApp.hooks.callHook('form:submit');
nuxtApp.hooks.callHook('page:finish');
</script>

<template>
  <div>
    <Left />
    <Right />
  </div>
</template>
