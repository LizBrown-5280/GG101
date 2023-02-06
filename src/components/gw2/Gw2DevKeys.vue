<template>
  <div class="devKeys">
    <p>Api Key choices:</p>
    <input type="radio" id="all" :value="allKey" v-model="picked" @change="$emit('handleKeyChange', $event, true)" />
    <label for="all">All</label>
    <input type="radio" id="ai" :value="aiKey" v-model="picked" @change="$emit('handleKeyChange', $event, true)" />
    <label for="ai">AI</label>
    <input type="radio" id="aiuw" :value="aiuwKey" v-model="picked" @change="$emit('handleKeyChange', $event, true)" />
    <label for="aiuw">AIUW</label>
    <input type="radio" id="aw" :value="awKey" v-model="picked" @change="$emit('handleKeyChange', $event, true)" />
    <label for="aw">AW</label>
    <input type="radio" id="badKey" :value="badKey" v-model="picked" @change="$emit('handleKeyChange', $event, true)" />
    <label for="badKey">Bad Key</label>
    <input type="radio" id="clear" value="" v-model="picked" @change="$emit('handleKeyChange', $event, true)" />
    <label for="clear">Clear</label>
  </div>
</template>

<script setup>
/**
 * This component allows a dev to use pre-defined keys for fast dev use.
 * 
 * In the .env file you put your own ArenaNet GW2 keys naming them what you want and using them here.
 * I named mine using the first letter of each item allowed for the key.
 * exp. aiuw = Account, Inventory, Unlocks, Wallet
 * exp. VITE_AIUW_API_KEY: 0D555F30-296E-2242-B0ED-3E56FFDEA996F3C0FF7C-EE2A-4169-AE26-769880167424
 * 
 * Also needed by the parent component -  VITE_DEV_KEYS: true
 */
import { ref } from 'vue'
const allKey = import.meta.env.VITE_ALL_API_KEY
const aiKey = import.meta.env.VITE_AI_API_KEY
const aiuwKey = import.meta.env.VITE_AIUW_API_KEY
const awKey = import.meta.env.VITE_AW_API_KEY
const badKey = import.meta.env.VITE_BAD_API_KEY
const picked = ref('')
</script>

<style scoped>
.devKeys {
  display: flex;
  margin: 20px 0 -5px;
}

input {
  margin: 5px;
}

p, label {
  margin-right: 15px;
}
</style>