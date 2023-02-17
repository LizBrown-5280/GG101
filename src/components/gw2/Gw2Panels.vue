<template>
   <Transition name="fade2">
    <component :is='showPanel' class="panel" />
  </Transition>
</template>

<script setup>
import { shallowRef, watch } from 'vue'
import { useGW2Store } from '@/stores/GW2'
import { storeToRefs } from 'pinia'
import Gw2Account from '@/components/gw2/gw2Panels/Gw2Account.vue'
import Gw2Characters from '@/components/gw2/gw2Panels/Gw2Characters.vue';
import Gw2Inventories from '@/components/gw2/gw2Panels/Gw2Inventories.vue';
import Gw2Progressions from '@/components/gw2/gw2Panels/Gw2Progressions.vue';
import Gw2Unlocks from '@/components/gw2/gw2Panels/Gw2Unlocks.vue';
import Gw2Wallet from '@/components/gw2/gw2Panels/Gw2Wallet.vue';

const Gw2Store = useGW2Store()
const { getActiveTab } = storeToRefs(Gw2Store)
const props = defineProps(['isPanel'])
const showPanel = shallowRef(null)

watch(getActiveTab, (newPanel) => {;
  switchPanel(newPanel)
}, { immediate: true})

function switchPanel(panel) {
  console.log('panel', panel)
  switch (panel) { 
    case 'account': showPanel.value = Gw2Account
      break
    case 'characters': showPanel.value = Gw2Characters
      break
    case 'inventories': showPanel.value = Gw2Inventories
      break
    case 'progressions': showPanel.value = Gw2Progressions
      break
    case 'unlocks': showPanel.value = Gw2Unlocks
    break
    case 'wallet': showPanel.value = Gw2Wallet
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