<template>
  <div class="keyWrap">
    <p>To see your account stats matched up to enter in your ArenaNet GW2 API key in the input field below. It can be
      retreived from here:
      <a href="https://account.arena.net/applications" target="_blank">https://account.arena.net/applications</a>.
    </p>
    <Gw2KeyInput />
  </div>
</template>

<script setup>
import Gw2KeyInput from './Gw2KeyInput.vue'
</script>

<style scoped>
p {
  color: var(--color-text-primary4);
  font-size: 1.4rem;
  text-align: center;
}
  a {
    color: var(--color-text-primary3)
  }

  a:hover {
    border-bottom: 1px solid var(--color-util-primary3);
  }
</style>