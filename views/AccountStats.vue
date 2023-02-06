<template>
  <Gw2Header/>
  <Gw2Hero />

  <main class="gw2">
    <Gw2Key />
    <Gw2NavTabs />
    <Gw2Panels />
  </main>
  <Gw2Attributes />
</template>

<script setup>
import Gw2Header from '@/components/gw2/Gw2Header.vue';
import Gw2Hero from '@/components/gw2/Gw2Hero.vue'
import Gw2Key from '@/components/gw2/Gw2Key.vue'
import Gw2NavTabs from '@/components/gw2/gw2Panels/Gw2TabNav.vue'
import Gw2Panels from '../src/components/gw2/gw2Panels/Gw2Panels.vue';
import Gw2Attributes from '../src/components/Gw2Attributes.vue';

function selectPanel(e) {
  console.log('haha')
  console.log('e', e.target)
}
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
</style>
