<template>
  <div class="equipment row column">
    <ul @click.stop="switchEquipmentPanels">
      <li>Dyes (AB)</li>
      <li>Mounts</li>
      <li>Finishers (AB)</li>
      <li>Mail Carriers (AB)</li>
    </ul>

    <div class="panel" v-for="(item, key) in equipmentData" :key="key" >
      <Gw2Display v-show="showEquipment === key" :equipment="item" />
    </div>


  </div>
</template>

<script setup>
  import { ref, reactive } from 'vue'
  import { prepareEndpointUrls } from '@/utils/utils.js'
  import { useAxiosGet } from '@/composables/useAxiosGet'
  import Gw2Display from './Gw2Display.vue';
  const showEquipment = ref('')
  const selectedEquipmentText = ref('')
  const equipmentData = reactive({ })

  function switchEquipmentPanels(e) {
    selectedEquipmentText.value = e.target.innerText.includes(' (AB)')
      ? e.target.innerText.slice(0, -5)
      : e.target.innerText    
    showEquipment.value = selectedEquipmentText.value.split(" ").join("").toLowerCase()
  }

  // During Create get all open API data for the given list of endpoints
  // const endpoints = ['colors', 'finishers', 'gliders', 'mailcarriers', 'minis', 'mount/skins', 'mounts/types', 'novelties', 'outfits']
  const endpoints = ['mailcarriers', 'finisher']
  const endpointUrls = prepareEndpointUrls(endpoints, true)

  // const endpoints2 = ['skins']
  // const endpointUrls2 = prepareEndpointUrls(endpoints2, false)

  Promise.all(endpointUrls.map(list => useAxiosGet(list.endpointUrl, list.storeAs))).then((result) => {
    for (let i = 0; i < result.length; i++) {
      const storeAs = result[i].storeAs.endpointGrp
      equipmentData[result[i].storeAs.endpointGrp] = {}

      // if (result[i].connectionSucceeded) equipmentData[storeAs].data = result[i].data
      if (result[i].connectionSucceeded) equipmentData[storeAs] = result[i]
      else equipmentData[storeAs].error = result[i].error
    }
    console.log('equipmentData', equipmentData);
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
