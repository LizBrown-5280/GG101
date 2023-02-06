<template>
  <div id="wallet">
    <div class="gems">
      <button>Gems used in Black Lions Trading Post</button>
      <div class="row">
        <Gw2Card v-if="gems[0]?.id" :currency="gems[0]" />

        <div class="amount">
          {{ gems[0]?.amount }} <img :src="gems[0]?.icon" :title="gems[0]?.name" />
        </div>
      
        <div class="name">{{ gems[0]?.name }}s</div>
      </div>
    </div>

    <div class="currencies">
      <button>Currencies used in the game ({{ currencyCount}} / {{ currencies.length }}):</button>
      <div class="row" v-for="currency in currenciesByOrder" :key="currency.id">
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
  import { ref, reactive, onMounted, watch } from 'vue'
  import { storeToRefs } from 'pinia'
  import { useGW2Store } from '../../../stores/GW2'
  import { useAxiosGet } from '@/composables/useAxiosGet'
  import { coinsExch } from '@/utils/utils.js'
  import Gw2Card from './Gw2Card.vue'

  const Gw2Store = useGW2Store()
  const { getApiKey } = storeToRefs(Gw2Store)
  const currencies = reactive([])
  const currenciesByOrder = reactive([])
  const gems = reactive([])
  const currencyCount = ref(0)
  

  onMounted (async () => {
    let payload = await useAxiosGet('/v2/currencies?ids=all')
    currencies.push(...payload.data)

    currencies[0].coins = {
      copperIcon: 'https://render.guildwars2.com/file/6CF8F96A3299CFC75D5CC90617C3C70331A1EF0E/156902.png',
      silverIcon: 'https://render.guildwars2.com/file/E5A2197D78ECE4AE0349C8B3710D033D22DB0DA6/156907.png',
      goldIcon: 'https://render.guildwars2.com/file/090A980A96D39FD36FBB004903644C6DBEFB1FFB/156904.png',
    }

    currenciesByOrder.push(...sortCurrenciesByOrder())
    if (currenciesByOrder[0].name === 'Gem') {
      gems.push(...currenciesByOrder.splice(0, 1))
    }
  })

  watch(getApiKey, (newApiKey) => newApiKey && getAcctCurrencies(newApiKey) || clearAmounts())

  async function getAcctCurrencies(key) {
    let payload = await useAxiosGet('/v2/account/wallet?access_token=' + key)
    console.log('key', key)
    console.log('payload', payload)

    if (payload.connectionSucceeded) matchAccountValues(payload)
    else clearAmounts()



    // console.log('key', key)

    // let payload

    // if (key === 'Some User API Key :)') {
    //   console.log('payload will equal demo data')
    // } else {
    //   await useAxiosGet('/v2/account/wallet?access_token=' + key)
    //   if (payload?.connectionSucceeded) matchAccountValues(payload)
    //   else clearAmounts()

    //   console.log(payload)
    // }
  }

  function matchAccountValues(payload) {
    currencyCount.value = payload.data.length

    currencies.forEach(currency => { 
      if (currency.id === payload.data[0]?.id) {
        currency.amount = payload.data[0].value.toLocaleString()
        payload.data.shift()
      }
      else currency.amount = '0'
    })

    currencies[0].coins = coinsExch(currencies[0].amount)
    currencyCount.value --
  }

  function clearAmounts() { 
    currencies.forEach(currancy => currancy.amount = null)
    currencies[0].coins.copperCoins = null
    currencies[0].coins.silverCoins = null
    currencies[0].coins.goldCoins = null
  }

function sortCurrenciesByOrder() {
  return [...currencies].sort((a, b) => a.order - b.order)
}

</script>

<style scoped>
#wallet {
    width: 600px;
    margin: 0 auto;
    padding-bottom: 50px;
  }

  #wallet > div {
    margin-bottom: 40px;
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