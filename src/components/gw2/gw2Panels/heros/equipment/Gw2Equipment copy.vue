<template>
  <div class="equipment row column">
    <ul @click.stop="switchUnlocks">
      <li>Dyes (AB)</li>
      <li>Mounts</li>
      <li>Finishers (AB)</li>
      <li>Mail Carriers (AB)</li>
    </ul>

    <!-- <Gw2Dyes v-show="showUnlock === 'Dyes'" />
    <Gw2Mounts v-show="showUnlock ==='Mounts'" />
    <Gw2Finishers v-show="showUnlock === 'Finishers'" />
    <Gw2MailCarriers v-show="showUnlock === 'Mail Carriers'" /> -->
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Gw2Dyes from './Gw2Dyes.vue';  
import Gw2MailCarriers from './Gw2MailCarriers.vue';
import Gw2Finishers from './Gw2Finishers.vue';
import Gw2Mounts from './Gw2Mounts.vue';

  const showUnlock = ref('Dyes')

  function switchUnlocks(e) {
    showUnlock.value = e.target.innerText.includes(' (AB)') ? e.target.innerText.slice(0, -5) : e.target.innerText
  }

</script>
