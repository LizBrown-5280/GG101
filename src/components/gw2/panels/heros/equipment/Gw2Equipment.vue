<template>
  <div id="equipment" class="equipment row column">
    <section v-for="(equiment, key) in equipmentData" :key="key" class="">
      <Gw2Button>
        {{ key }}
      </Gw2Button>

      <Gw2Transition name="slidedown-fade">
        <div v-show="true" class="content">
          <!--  <div class="row" v-for="currency in currencies" :key="currency.id">
            <Gw2Card :currency="currency" />

            <div class="amount">
              <div v-if="currency.id !== 1" class="amount">
                {{ currency.amount }} <img :src="currency.icon" :title="currency.name" />
              </div>
              <div v-else class="amount">
                {{ currency.coins.goldCoins }}<img :src="currency.coins.goldIcon" title="Gold" />
                {{ currency.coins.silverCoins }}<img :src="currency.coins.silverIcon" title="Silver" />
                {{ currency.coins.copperCoins }}<img :src="currency.coins.copperIcon" title="Copper" />
              </div>
            </div>

            <div class="name">{{ currency.name }}</div>
          </div>-->
        </div>
      </Gw2Transition>
    </section>
  </div>
</template>

<script setup>
  import { ref, reactive } from 'vue'
  import { prepareEndpointUrls } from '@/utils/gw2/utils.js'
  import { useAxiosGet } from '@/composables/gw2/useAxiosGet'
  import Gw2Button from '@/components/gw2/utilsComponents/Gw2Button.vue'
  import Gw2Restricted from '@/components/gw2/utilsComponents/Gw2Restricted.vue'

  const showEquipment = ref('')
  const selectedEquipmentText = ref('')
  // const equipment = ['Color', 'Finisher', 'Glider', 'Mail Carriers', 'Minis', 'Mounts', 'Novelties']
  const equipmentData = reactive({
    Color: {},
    Mounts: {},
    Minis: {},
    Gliders: {},
    'Mail Carriers': {},
    Novelties: {},
    Finishers: {
      id: '123',
    },
  })

  function switchEquipmentPanels(e) {
    selectedEquipmentText.value = e.target.innerText.includes(' (AB)')
      ? e.target.innerText.slice(0, -5)
      : e.target.innerText
    showEquipment.value = selectedEquipmentText.value.split(' ').join('').toLowerCase()
  }

  // During Create get all Open API data for the given list of endpoints
  // let endpoints = [
  //   { url: 'colors', name: 'Color' },
  //   { url: 'finisher', name: 'Finishers' },
  //   { url: 'gliders', name: 'Gliders' },
  //   { url: 'mailcarriers', name: 'Mail Carriers' },
  //   { url: 'minis', name: 'Minis' },
  //   { url: 'mounts/types', name: 'Mounts' },
  //   { url: 'mounts/skins', name: 'Mounts' },
  //   { url: 'novelties', name: 'Novelties' },
  //   { url: 'skins', name: 'Skins', param: '' },
  // ]

  let endpoints = [
    { url: 'finisher', name: 'Finishers' },
    { url: 'mailcarriers', name: 'Mail Carriers' },
  ]

  const endpointUrls = prepareEndpointUrls(endpoints)

  Promise.all(endpointUrls.map((list) => useAxiosGet(list.endpointUrl, list.storeAs))).then((result) => {
    console.log('result', result)

    for (let i = 0; i < result.length; i++) {
      Object.assign(equipmentData[result[i].storeAs.name], result[i])
    }
    console.log('equipmentData', equipmentData)
  })

  // const payload = await useAxiosGet(this.equipmentData.endpointUrl)
  // if (payload.connectionSucceeded) {
  //   this.equipmentData.data.push(...payload.data)
  //   this.equipmentData.data[0].coins = {
  //     copperIcon: 'https://render.guildwars2.com/file/6CF8F96A3299CFC75D5CC90617C3C70331A1EF0E/156902.png',
  //     silverIcon: 'https://render.guildwars2.com/file/E5A2197D78ECE4AE0349C8B3710D033D22DB0DA6/156907.png',
  //     goldIcon: 'https://render.guildwars2.com/file/090A980A96D39FD36FBB004903644C6DBEFB1FFB/156904.png',
  //   }
  // } else {
  //   this.equipmentData.error = { ...payload.error }
  // }

  // call axios with endpoints and store data.
</script>
