<template>
  <div id="wallet">
    <Gw2Transition name="slidedown-fade">
      <Gw2Restricted v-if="permissionRestricted" type="Wallet" class="content" />
    </Gw2Transition>

    <section class="gems mb-2.5">
      <Gw2Button @click="showGems = !showGems"  class="w-full h-auto" :class="{active: showGems}">
        Gems used in Black Lions Trading Post <span v-show="gems[0]?.name">(1)</span>
      </Gw2Button>

      <Gw2Transition name="slidedown-fade">
        <div v-show="showGems" class="content">
        <div class="row">
          <Gw2Card v-if="gems[0]?.id" :currency="gems[0]" />

          <div class="amount">
            {{ gems[0]?.amount }} <img :src="gems[0]?.icon" :title="gems[0]?.name" />
          </div>
        
          <div class="name">{{ gems[0]?.name }}<span v-show="gems[0]?.name">s</span></div>
        </div>
        </div>
      </Gw2Transition>
    </section>

    <section class="currencies mb-2.5">
      <Gw2Button @click="showCurrency = !showCurrency" class="w-full h-auto" :class="{active: showCurrency}">
        Currencies used in the game ({{ numOwned }}{{ currencies.length }})
      </Gw2Button>

      <Gw2Transition name="slidedown-fade">
        <div v-show="showCurrency" class="content">
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
      </Gw2Transition>
    </section>

  </div>
</template>

<script setup>
  import Gw2Card from './Gw2Card.vue'
  import Gw2Button from '../Gw2Button.vue'
  import Gw2Restricted from './Gw2Restricted.vue'
  import Gw2Transition from '../Gw2Transition.vue'
  import { ref, reactive, onMounted, watch } from 'vue'
  import { storeToRefs } from 'pinia'
  import { useGW2Store } from '@/stores/GW2'
  import { useWalletStore } from '@/stores/useWalletStore'

  const Gw2Store = useGW2Store()
  const store = useWalletStore()
  const currencies = reactive([])
  const gems = reactive([])
  const { getApiKey } = storeToRefs(Gw2Store)
  const permissionRestricted = ref(false)
  const numOwned = ref(null)
  const showGems = ref(true)
  const showCurrency = ref(true)

  onMounted(async () => {
    if (store.getCurrencies.length === 0) {
      await store.callApiOpenData()
      getCurrencies()
    } else getCurrencies()
  })

  function getCurrencies() {
    currencies.push(...store.getCurrencies)
    gems.push(...currencies.splice(0, 1))
  }

  watch(getApiKey, (newApiKey) => {
    if (newApiKey) getAcctData(newApiKey)
    else {
      store.clearCurrenciesAmounts()
      numOwned.value = null
    }
  })


async function getAcctData(key) {
    permissionRestricted.value = false

    // For Demo Data use only
    if (key.includes('DEMO-KEY')) {
      store.setupDemo()
      numOwned.value = store.getDemoLen
      return
    }

    await store.callApiAcctData(key)
    numOwned.value = store.getAcctLen
    permissionRestricted.value = numOwned.value ? false : true
  }
</script>

<style scoped>
  #wallet {
    margin: 0 auto;
    width: 600px;
  }

  #wallet > div {
    margin-bottom: 40px;
  }
  
  .restricted {
    color: var(--color-text-primary3)
  }

  .content {
    height: 100%;
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