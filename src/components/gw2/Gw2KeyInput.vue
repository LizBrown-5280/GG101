<template>
  <Gw2DevKeys v-if="useDevKeys" @handle-key-change="handleKeyChange"/>

  <div class="apiKeyInput"  >
    <label :class="{ inset: isLabelInset }" for="userApiKey">To see more, enter your ArenaNet GW2 API key here...</label>

    <input name="userApiKey" type="string" v-model.trim="userApiKey" @focus="isLabelInset = false"
      @blur="isLabelInset = userApiKey ? false : true" @change="handleKeyChange" />
    
    <span v-if="errorMsg" class="errorMsg">{{ errorMsg }}</span>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useGW2Store } from '@/stores/GW2'
import Gw2DevKeys from './Gw2DevKeys.vue'
const useDevKeys = import.meta.env.VITE_DEV_KEYS
const GW2Store = useGW2Store()
const userApiKey = ref('')
const errorMsg = GW2Store.getKeyErrorMgs
const updateKey = GW2Store.updateUserApiKey
const isLabelInset = ref(true)

function handleKeyChange(e, updateUserApiKey) {
  // only updating userApiKey if value is coming from child component, otherise v-modal is used as normal here
  if(updateUserApiKey) userApiKey.value = e.target.value
  updateKey(userApiKey.value)
  isLabelInset.value = false
}

</script>

<style scoped>
.apiKeyInput {
  position: relative;
  height: 70px;
  margin: 10px 0;
  padding-top: 20px;
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
  border-radius: 6px;
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