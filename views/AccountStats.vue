<template>
  <Gw2Header/>
  <Gw2Hero />

  <main class="gw2">
    <Gw2Key />
    <Gw2NavTabs />
    <section>
      <Gw2Wallet />
    </section>
  </main>

  

</template>

<script setup>
import Gw2Header from '@/components/gw2/Gw2Header.vue';
import Gw2Hero from '@/components/gw2/Gw2Hero.vue'
import Gw2Key from '@/components/gw2/Gw2Key.vue'
import Gw2NavTabs from '@/components/gw2/Gw2TabNav.vue'
import Gw2Wallet from '@/components/gw2/gw2Tabs/Gw2Wallet.vue';



</script>

<style scoped>
.gw2 {
  z-index: 10;
  position: relative;
  margin: 0 auto;
  width: 1020px;
  padding: 15px;
  background: var(--color-background-primary-opacity9);
  border-radius: 10px;
  color: var(--color-text-white);
}
</style>
