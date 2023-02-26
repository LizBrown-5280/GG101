<template>
  <div class="panelSelectors">
    <Gw2Button
      v-for="tab in tabs"
      :key="tab"
      class="tab"
      :class="{ active: tab === Gw2Store.getActiveTab }"
      @click.stop="handleTabs(tab)"
    >
      {{ tab }}
    </Gw2Button>
  </div>
</template>

<script setup>
  import { useGW2Store } from '@/stores/gw2/store'
  import Gw2Button from '@/components/gw2/utilsComponents/Gw2Button.vue'
  const Gw2Store = useGW2Store()
  const tabs = Gw2Store.getPanelTabs
  const handleTabs = (tab) => Gw2Store.storeActiveTab(tab)
</script>

<style scoped>
  .panelSelectors {
    display: flex;
    justify-content: center;
    align-items: end;
    gap: 4px;
    margin: 30px 0;
    padding-left: 0;
    border-bottom: 2px solid var(--color-util-primary2);
  }
</style>
