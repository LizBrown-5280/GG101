<template>
  <header>
    <h1>
      TC's Gamer Guides 101
    </h1>
  </header>

  <main>
  
  </main>

  <footer>
    <p>&copy; 2018 TranquilityCea LLC</p>
    <p>All relevant trademarks and media are the property of and subject to copyright laws of their respective owners.</p>
  </footer>
</template>

<script setup>
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
