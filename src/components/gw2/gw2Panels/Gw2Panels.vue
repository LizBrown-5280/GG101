<template>
  <!-- <Transition> -->
    <Gw2Account v-show="showComponent === 'account'" class="panel" />
    <Gw2Characters v-show="showComponent === 'characters'" class="panel" />
    <Gw2Inventories v-show="showComponent === 'inventories'" class="panel" />
    <Gw2Progressions v-show="showComponent === 'progressions'" class="panel" />
    <Gw2Unlocks v-show="showComponent === 'unlocks'" class="panel" />
    <Gw2Wallet v-show="showComponent === 'wallet'" class="panel" />
  <!-- </Transition> -->
</template>

<script setup>
import { ref } from 'vue'
import Gw2Account from '@/components/gw2/gw2Panels/Gw2Account.vue'
import Gw2Characters from '@/components/gw2/gw2Panels/Gw2Characters.vue';
import Gw2Inventories from '@/components/gw2/gw2Panels/Gw2Inventories.vue';
import Gw2Progressions from '@/components/gw2/gw2Panels/Gw2Progressions.vue';
import Gw2Unlocks from '@/components/gw2/gw2Panels/Gw2Unlocks.vue';
import Gw2Wallet from '@/components/gw2/gw2Panels/Gw2Wallet.vue';

const showComponent = ref('wallet')


</script>

<style scoped>
section {
  position: relative;
}
.panel {


}
</style>