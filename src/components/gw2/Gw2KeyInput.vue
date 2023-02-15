<template>
  <Gw2DevKeys v-if="useDevKeys" @handle-key-change="handleDevKeys" />

  <div class="key">
    <div class="apiKeyInput">
      <label :class="{ inset: isLabelInset }" for="userApiKey">To see more, enter your ArenaNet GW2 API key here...</label>

      <input name="userApiKey" type="string" v-model.trim="userApiKey" @focus="isLabelInset = false"
        @blur="isLabelInset = userApiKey ? false : true" @change="handleInputKeyChange" />
      
      <div class="messages">
        <div v-if="store.getKeyErrorCode" class="errorMsg">Error: Please recheck the Permissions Key you provided.</div>
        <div v-if="permissions.length" class="permissions">
          <p>Key provides permission(s) to:</p>
          <ul>
            <li v-for="permission in permissions" :key="permission">{{ permission }}</li>
          </ul>
          
        </div>
      </div>
    </div>

    <div class="buttons">
      <Gw2Button 
        class="clearKey label"  label="Clear key"
        v-slot:label
        value="clearKey" ref="clrBtn"
        @click="handleClearBtn"
      >
        Clear key
      </Gw2Button>

      <Gw2Button 
        class="demoKey label" :class="{ active: isDemoBtnActive}" label="Use Demo Key"
        v-slot:label
        title="Due to security concerns, the demo version does not make real API calls, it only uses stored data."
        @click="toggleDemo"
      >
        Use Demo Key
      </Gw2Button>
    </div>
  </div>
</template>

<script setup>
  import { ref, reactive } from 'vue'
  import { useGW2Store } from '@/stores/GW2'
  import Gw2Button from './Gw2Button.vue'
  import Gw2DevKeys from './Gw2DevKeys.vue'
  const useDevKeys = import.meta.env.VITE_DEV_KEYS
  const store = useGW2Store()
  const userApiKey = ref('')
  const isLabelInset = ref(true)
  const isDemoBtnActive = ref(false)
  const clrBtn = ref(null)
  const permissions = reactive([])

  /**
  * Note: 'Use Demo Key' does not use this func, hence the setting its active value to false
  */
  function handleInputKeyChange() {
    handleClearingData()
    requestPermissions()
  }

  async function requestPermissions() { 
    await store.requestPermissionsList()
    permissions.push(...store.getAcctPermissions)
  }

  function handleDevKeys(e) { 
    userApiKey.value = e.target.value
    updateLabel()
    handleInputKeyChange()
  }

  function toggleDemo() {
    isDemoBtnActive.value = !isDemoBtnActive.value

    if (isDemoBtnActive.value) {
      store.clearAcctData()
      userApiKey.value = store.getDemoKey
      permissions.length = 0
      permissions.push(...store.getDemoPermissions)
    } else {
      userApiKey.value = ''
      handleClearingData()
    }

    updateLabel()
    useStoreApiKey()
  }

  function handleClearBtn() { 
    userApiKey.value = ''
    handleClearingData()
  }

  function handleClearingData() {
    permissions.length = 0
    udpateDemoBtnActive(false) 
    updateLabel()
    useStoreApiKey()
    store.clearAcctData()
  }

  function udpateDemoBtnActive(value) {
    isDemoBtnActive.value = value
  }

  function updateLabel() {
    isLabelInset.value = userApiKey.value ? false : true
  }

  function useStoreApiKey() {
    store.storeApiKey(userApiKey.value)
  }
</script>

<style scoped>
  .key {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .apiKeyInput {
    position: relative;
    height: 70px;
    margin: 10px 0;
    padding: 20px 10px 0 0;
  }

  .buttons {
    margin-top: 2px;
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

  .messages {
    height: 22px;
    padding: 3px 10px;
  }

  .permissions {
    display: flex;
    font-size: 0.70rem;
    color: var(--color-text-primary2)
  }

  ul {
    display: flex;
    margin-left: 10px;
  }

  li {
    margin-right: 5px;
    text-transform: capitalize;
  }

  li:not(:last-child)::after {
    content: ' - '
  }

  .errorMsg {
    font-size: 0.8rem;
    color: var(--color-text-error2);
  }
</style>