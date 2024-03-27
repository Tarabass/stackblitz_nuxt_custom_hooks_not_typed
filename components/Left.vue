<script setup lang="ts">
const emitter = useEmitter();

const onClick = () => {
  emitter.emit('form:submit');
};
</script>

<template>
  <div>
    <button type="button" @click="onClick">Fire hook</button>
  </div>
</template>

<style scoped>
div {
  width: 40%;
  float: left;
}
</style>
