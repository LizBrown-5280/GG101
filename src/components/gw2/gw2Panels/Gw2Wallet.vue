<template>
  <div id="wallet">
    <div v-if="permissionsRestricted" class="permissionsRestricted">
      Permissions were not granted to access your Wallet with the key provided.
      <br />
      To see more, use a Permissions Key that includes access to your Wallet.
    </div>

    <div class="gems">
      <button>Gems used in Black Lions Trading Post (1)</button>
      <div class="row">
        <Gw2Card v-if="gems[0]?.id" :currency="gems[0]" />

        <div class="amount">
          {{ gems[0]?.amount }} <img :src="gems[0]?.icon" :title="gems[0]?.name" />
        </div>
      
        <div class="name">{{ gems[0]?.name }}s</div>
      </div>
    </div>

    <div class="currencies">
      <button>Currencies used in the game ({{ numOwned }}{{ currencies.length }}):</button>
      <div class="row" v-for="currency in currencies" :key="currency.id">
        <Gw2Card :currency="currency" />

        <div class="amount">
          <div v-if="currency.id !== 1" class="amount">
            {{ currency.amount }} <img :src="currency.icon" :title="currency.name" />
          </div>
          <div v-else class="amount">
            {{ currency.coins.goldCoins }}<img :src="currency.coins.goldIcon" title="Gold">
            {{ currency.coins.silverCoins }}<img :src="currency.coins.silverIcon"  title="Silver">
            {{ currency.coins.copperCoins }}<img :src="currency.coins.copperIcon"  title="Copper">
          </div>
        </div>
  
        <div class="name">{{ currency.name }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import Gw2Card from './Gw2Card.vue'
  import { ref, reactive, onMounted, watch } from 'vue'
  import { storeToRefs } from 'pinia'
  import { useGW2Store } from '@/stores/GW2'
  import { useWalletStore } from '@/stores/useWalletStore'

  const Gw2Store = useGW2Store()
  const currencies = reactive([])
  const gems = reactive([])
  const { getApiKey } = storeToRefs(Gw2Store)
  const permissionsRestricted = ref(false)
  const store = useWalletStore()
  const numOwned = ref(null)

  onMounted(async () => {
    if (store.getCurrencies.length === 0) await store.callApiOpenData('currencies')
    // ! test for return payload.error here
    currencies.push(...store.getCurrencies)
    gems.push(...currencies.splice(0, 1))
  })

  watch(getApiKey, (newApiKey) => {
    if (newApiKey) getAcctData(newApiKey)
    else {
      store.clearCurrenciesAmounts()
      numOwned.value = null
    }
  })

  async function getAcctData(key) {
    permissionsRestricted.value = false

    // For Demo Data use only
    if (key.includes('DEMO-KEY')) {
      store.setupDemo()
      numOwned.value = store.getDemoLen
      return
    }

    await store.callApiAcctData(key)
    numOwned.value = store.getAcctLen
  }
</script>

<style scoped>
#wallet {
    width: 600px;
    margin: 0 auto;
  }

  #wallet > div {
    margin-bottom: 40px;
  }
  
  .permissionsRestricted {
    color: var(--color-text-primary3)
  }
  .row {
    position: relative;
    display: block;
    margin: 0 0;
    padding: 8px 2px;
    cursor: pointer;
  }

  .row:nth-child(even) {
    background: rgba(255, 255, 255, .08);
  }

  .row:hover .card {
    display: block;
  }

  .row:nth-child(n+55) .card {
    top: auto;
    bottom: 30px;
  }

  .row .name {
    display: inline-block;
    width: 300px;
  }

  .row:hover .name, .row:hover .amount {
    color: var(--color-text-primary3);
    font-weight: bold;
  }

  .row .amount {
    float: right;
    width: 200px;
    text-align: right;
  }

  .row img {
    display: inline-block;
    width: 35px;
    padding-left: 10px;
  }
</style>