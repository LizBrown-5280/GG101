<template>
  <Transition :name="name">
    <slot></slot>
  </Transition>
</template>

<script setup>
  const props = defineProps(['name'])
</script>

<style>
  .slidedown-fade-enter-active {
    transition: all 0.5s ease-out;
  }

  .slidedown-fade-leave-active {
    transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
  }

  .slidedown-fade-enter-from,
  .slidedown-fade-leave-to {
    opacity: 0;
    height: 0;
  }

  .fade-enter-active {
    transition: all 0.7s ease-out;
  }

  .fade-leave-active {
    transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>