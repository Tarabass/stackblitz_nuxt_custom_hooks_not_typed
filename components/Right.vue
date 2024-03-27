<script setup lang="ts">
const emitter = useEmitter();
const messages = reactive<Array<number>>([]);

emitter.on('form:submit', () => {
  messages.push(messages.length);
});
</script>

<template>
  <div>
    <pre v-for="message in messages">
      {{ message }}
    </pre>
  </div>
</template>

<style scoped>
div {
  width: 40%;
  height: 50vh;
  float: right;
  overflow: auto;
  border: 1px solid grey;
}
</style>
