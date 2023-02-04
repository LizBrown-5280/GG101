<template>
  <div id="wallet">
    <h3>All Currencies...</h3>

    <div class="row" v-for="currency in currencies" :key="currency.id">
      <Gw2Card :item="currency" />

      <div class="amount">
        <div v-if="currency.id !== 1" class="amount">
          {{ currency.value }} <img :src="currency.icon" :title="currency.name" />
        </div>
        <div v-else class="amount">
          {{ goldPart }}<img :src="currencies[0].goldIcon" title="Gold">
          {{ silverPart }}<img :src="currencies[0].silverIcon"  title="Silver">
          {{ copperPart }}<img :src="currencies[0].copperIcon"  title="Copper">
        </div>
      </div>
 
      <div class="name">{{ currency.name }}</div>
    </div>
  </div>
</template>

<script setup>
  import Gw2Card from './Gw2Card.vue';
  import { ref, reactive } from 'vue';
  import { useAxiosGet } from '@/composables/useAxiosGet'
  const currencies = reactive([])
  const copperPart = ref(null)
  const silverPart = ref(null)
  const goldPart = ref(null)
  
  async function getCurrencies() {
    const endPointUrl = '/v2/currencies?ids=all'
    let payload = await useAxiosGet(endPointUrl)
    currencies.push(...payload.data)

    // add additional icons for Coin
    currencies[0].copperIcon = 'https://render.guildwars2.com/file/6CF8F96A3299CFC75D5CC90617C3C70331A1EF0E/156902.png'
    currencies[0].silverIcon = 'https://render.guildwars2.com/file/E5A2197D78ECE4AE0349C8B3710D033D22DB0DA6/156907.png'
    currencies[0].goldIcon = 'https://render.guildwars2.com/file/090A980A96D39FD36FBB004903644C6DBEFB1FFB/156904.png'
  }

  getCurrencies()
</script>

<style scoped>
#wallet {
  width: 600px;
  margin: 0 auto;
  padding-bottom: 120px;
}

.row {
  position: relative;
  margin: 0 0;
  padding: 3px 2px;
  display: block;
  cursor: pointer;
}

.row:hover .card {
  display: block;
}

.row:nth-child(odd) {
  background: rgba(255, 255, 255, .08);
}

.row .name {
  display: inline-block;
  width: 300px;
}

.row .description {
  display: none;
  position: absolute;
  top: 33px;
  left: 50px;
  width: 450px;
  background: rgba(52, 58, 64, .9);
  padding: 10px;
  border: 1px solid black;
  border-radius: 5px;
  z-index: 10;
  color: white; 
}

.row:hover > .description {
  display: block;
}

.row .amount {
  display: inline-block;
  width: 200px;
  text-align: right;
  float: right;
}

.row img {
  display: inline-block;
  width: 30px;
  padding-left: 10px;
}
</style>