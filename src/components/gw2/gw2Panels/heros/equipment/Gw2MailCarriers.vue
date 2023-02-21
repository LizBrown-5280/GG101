<template>
 <div><h2>Mail Carriers</h2></div>
 <Gw2Display>
 
 </Gw2Display>
</template>

<script setup>
import { reactive, watch } from 'vue'
import { useAxiosGet } from '@/composables/useAxiosGet'
import Gw2Display from './Gw2Display.vue';

const openDataEPUrl = '/v2/mailcarriers?ids=all'
const acctDataEPUrl = '/v2/account/wallet?access_token='
const permissionsRestricted =  false

const store = reactive({
  openData: {
    error: {},
    data: []
  },
  acct: {
    key: '',
    error: {},
    data: []
  },
  acctDemo: {
    data: [
    ],
  },
})

watch(getApiKey, (newApiKey) => {
//   if (newApiKey) retrieveAcctData(newApiKey)
//   else {
//     //clear all acct related ui items
//   }
// })


async function callApiOpenData() {
  const payload = await useAxiosGet(openDataEPUrl)
  if (payload.connectionSucceeded) {
    store.openData.data.push(...payload.data)
  } else {
    store.openData.error = { ...payload.error }
  }
  console.log('store open data', store.openData)
}

callApiOpenData()

async function retrieveAcctData(key) {
  // if (key === this.acct.key) return

  // this.acct.key = key
  // this.clearCurrenciesAmounts()
  // this.clearAcctData()
  // const payload = await useAxiosGet(this.acct.endpointUrl + key)
  // this.acct.error = { ...payload.error }

  // if (payload.connectionSucceeded) {
  //   this.acct.data.push(...payload.data)
  //   this.openData.data = matchAcctAmts(this.openData.data, this.acct.data)
  // }
}
</script>

<style scoped>

</style>