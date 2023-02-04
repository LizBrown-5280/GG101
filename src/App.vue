<template>
  <main>
    <AccountStats></AccountStats>
  </main>

  <footer>
    <p>&copy; 2018 TranquilityCea LLC</p>
    <p>All relevant trademarks and media are the property of and subject to copyright laws of their respective owners.</p>
  </footer>
</template>

<script setup>
import AccountStats from '../views/AccountStats.vue';
</script>

<style scoped>
main {
  width: 100%;
  height: 100vh;
}

footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}

@media (min-width: 1024px) {

}
</style>
