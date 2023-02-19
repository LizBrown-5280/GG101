<template>
  <div>
    <main>
      <div class="row">
        <h2>Hero </h2> (group name that showing like equipment)
      </div>

      <div class="row">
        <div class="column">
          <ul @click.stop="switchHeroPanels">
            <li>E</li>
            <li>B</li>
            <li>T</li>
            <li>SJ</li>
          </ul>
        </div>

        <!-- <Gw2Build v-show="showHeroPanel === 'B'" />
        <Gw2Story v-show="showHeroPanel === 'SJ'" />
        <Gw2Training v-show="showHeroPanel === 'T'" /> -->
        <Gw2Equipment v-show="showHeroPanel === 'E'" />
      
      </div>
    </main>
  </div>
</template>

<script setup>
import Gw2Equipment from './Gw2Equipment.vue'
import { ref } from 'vue'

const showHeroPanel = ref('E')

function switchHeroPanels(e) {
  console.log('e', e.target.innerText);
  showHeroPanel.value = e.target.innerText
}

</script>

<style scoped>
  .row {
    display: flex;
  }
  ul {
    margin: 10px;
  }
</style>