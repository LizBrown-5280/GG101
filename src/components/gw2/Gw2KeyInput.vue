<template>
  <Gw2DevKeys v-if="useDevKeys" @handle-key-change="handleKeyChange"/>

  <div class="apiKeyInput"  >
    <label :class="{ inset: isLabelInset }" for="userApiKey">To see more, enter your ArenaNet GW2 API key here...</label>

    <input name="userApiKey" type="string" v-model.trim="userApiKey" @focus="isLabelInset = false"
      @blur="isLabelInset = userApiKey ? false : true" @change="handleKeyChange" />
    
    <span v-if="errorMsg" class="errorMsg">{{ errorMsg }}</span>
  </div>
  <Gw2Button class="clearKey" @click="handleKeyChange" value="clearKey">Clear Key</Gw2Button>
  <Gw2Button class="demo" @click="handleKeyChange" value="demoKey" 
    title="Due to security concerns, the demo version does not make real API calls, it only uses stored data.">
    Use Demo Key
  </Gw2Button>
</template>

<script setup>
import { ref } from 'vue'
import { useGW2Store } from '@/stores/GW2'
import Gw2Button from './Gw2Button.vue'
import Gw2DevKeys from './Gw2DevKeys.vue'
const useDevKeys = import.meta.env.VITE_DEV_KEYS
const GW2Store = useGW2Store()
const userApiKey = ref('')
const errorMsg = GW2Store.getKeyErrorMgs
const useUpdateStoreApiKey = GW2Store.updateUserApiKey
const isLabelInset = ref(true)

/**
 * This manually sets the 'userApiKey' value if a button like 'Clear Key', 'Demo Key', or a Dev Key is used.
 * It also uses an action to update the store with the new value.
 * And adjustes the input label as needed.
 * @param { event } e - event
 * @param { string } updateUserApiKey - if supplied, tells to update the 'userApiKey' value manually from Gw2DevKeys,
 *                                       otherwise the key is supplied via the input.
 */
function handleKeyChange(e, updateUserApiKey) {
  if (updateUserApiKey) userApiKey.value = e.target.value
  else if (e.target.value === 'clearKey') userApiKey.value = ''
  else if (e.target.value === 'demoKey') userApiKey.value = 'Some User API Key :)'

  isLabelInset.value = userApiKey.value ? false : true
  useUpdateStoreApiKey(userApiKey.value)
}

</script>

<style scoped>
.apiKeyInput {
  position: relative;
  display: inline-block;
  height: 70px;
  margin: 10px 0;
  padding: 20px 10px 0 0;
}


label {
  z-index: 1;
  position: absolute;
  top: 9px;
  margin-left: 8px;
  padding: 0 4px;
  background: var(--color-background-primary1);
  color: var(--color-text-primary2);
  font-size: .7rem;
  transition: top 0.3s, font-size 0.3s, z-index 0.1s;
}

label.inset {
  z-index: -1;
  top: 26px;
  font-size: .9rem;
  transition: top 0.3s, font-size 0.3s, z-index 0.1s;
}

input {
  width: 600px;
  height: 34px;
  margin: 0;
  padding: 3px 10px;
  background: transparent;
  border: 1px solid var(--color-util-primary2);
  border-radius: 5px;
  color: var(--color-text-primary3);
  font-size: 0.8rem;
}

input:focus-visible {
  outline-color: var(--color-util-primary2);
  outline-width: 0px;
}

.errorMsg {
  font-size: 12px;
  color: red
}
</style>