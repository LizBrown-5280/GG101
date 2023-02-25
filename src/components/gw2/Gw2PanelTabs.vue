<template>
  <div class="panelSelectors">
    <Gw2Tab
      v-for="tab in tabs"
      :key="tab"
      class="tab-item"
      :class="{ active: tab === Gw2Store.getActiveTab }"
      @click.stop="handleTabs(tab)"
    >
      {{ tab }}
    </Gw2Tab>
  </div>
</template>

<script setup>
import { useGW2Store } from '@/stores/GW2'
import Gw2Tab from './Gw2Tab.vue'
const Gw2Store = useGW2Store()
const tabs = Gw2Store.getPanelTabs
const handleTabs = (tab) => Gw2Store.storeActiveTab(tab)
</script>

<style scoped>
.panelSelectors {
  display: flex;
  justify-content: center;
  gap: 4px;
  margin: 30px 0;
  padding-left: 0;
  border-bottom: 2px solid var(--color-util-primary2);
}
</style>
