<template>
  <Gw2Header/>
  <Gw2Hero />

  <main class="gw2">
    <Gw2Key />
    <Gw2NavTabs />
    <section>
      <Gw2Account class="panel" />
      <Gw2Characters class="panel" />
      <Gw2Inventories class="panel" />
      <Gw2Progressions class="panel" />
      <Gw2Unlocks class="panel" />
      <Gw2Wallet class="panel" />
    </section>
  </main>
  <Gw2Attributes />
</template>

<script setup>
import Gw2Header from '@/components/gw2/Gw2Header.vue';
import Gw2Hero from '@/components/gw2/Gw2Hero.vue'
import Gw2Key from '@/components/gw2/Gw2Key.vue'
import Gw2NavTabs from '@/components/gw2/Gw2TabNav.vue'
import Gw2Account from '@/components/gw2/gw2Tabs/Gw2Account.vue'
import Gw2Characters from '@/components/gw2/gw2Tabs/Gw2Characters.vue';
import Gw2Inventories from '@/components/gw2/gw2Tabs/Gw2Inventories.vue';
import Gw2Progressions from '@/components/gw2/gw2Tabs/Gw2Progressions.vue';
import Gw2Unlocks from '@/components/gw2/gw2Tabs/Gw2Unlocks.vue';
import Gw2Wallet from '@/components/gw2/gw2Tabs/Gw2Wallet.vue';
import Gw2Attributes from '../src/components/Gw2Attributes.vue';
</script>

<style scoped>
.gw2 {
  z-index: 10;
  position: relative;
  margin: 0 auto 50px;
  width: 1020px;
  padding: 30px;
  background: var(--color-background-primary-opacity9);
  border-radius: 10px;
  color: var(--color-text-white);
}

.panel {
  display: none;;
}
</style>
