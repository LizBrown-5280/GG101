<template>
  <component :is="showPanel" class="panel" />
</template>

<script setup>
  import { shallowRef, watch } from 'vue'
  import { useGW2Store } from '@/stores/gw2/store'
  import { storeToRefs } from 'pinia'
  import Gw2Account from '@/components/gw2/panels/account/Gw2Account.vue'
  import Gw2Heros from '@/components/gw2/panels/heros/Gw2Heros.vue'
  import Gw2Inventories from '@/components/gw2/panels/inventories/Gw2Inventories.vue'
  import Gw2Progressions from '@/components/gw2/panels/progressions/Gw2Progressions.vue'
  import Gw2Wallet from '@/components/gw2/panels/wallet/Gw2Wallet.vue'

  const Gw2Store = useGW2Store()
  const { getActiveTab } = storeToRefs(Gw2Store)
  const props = defineProps(['isPanel'])
  const showPanel = shallowRef(null)

  watch(
    getActiveTab,
    (newPanel) => {
      switchPanel(newPanel)
    },
    { immediate: true }
  )

  function switchPanel(panel) {
    switch (panel) {
      case 'account':
        showPanel.value = Gw2Account
        break
      case 'heros':
        showPanel.value = Gw2Heros
        break
      case 'inventories':
        showPanel.value = Gw2Inventories
        break
      case 'progressions':
        showPanel.value = Gw2Progressions
        break
      case 'wallet':
        showPanel.value = Gw2Wallet
        break
    }
  }
</script>

<style scoped>
  .fade2-enter-active,
  .fade2-leave-active {
    transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
  }

  .fade2-enter-from,
  .fade2-leave-to {
    opacity: 0;
    scale: 0;
  }
</style>
