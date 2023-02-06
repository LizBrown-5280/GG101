<template>
  <div>
    <!-- <div class="sm:hidden"> -->
      <!-- <label for="tabs" class="sr-only">Select a tab</label> -->
      <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
      <!-- <select id="tabs" name="tabs" -->
        <!-- class="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"> -->
        <!-- <option v-for="tab in tabs" :key="tab.name" :selected="tab.current">{{ tab.name }}</option> -->
      <!-- </select> -->
    <!-- </div> -->

    <div class="nav">
      <button
        v-for="(tab, key,) in tabs" 
        class="nav-item" :key="key"
        :class="{ active: key === 'account' && tab.permission }"
        data-toggle="tab"
        @click="selectPanel"
      >
        <span>{{ key }}</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { useGW2Store } from '@/stores/GW2'
const GW2Store = useGW2Store()
const tabs = GW2Store.getTabNav

</script>

<style scoped>
.nav {
  display: flex;
  justify-content: space-around;
  padding-left: 0;
  border-bottom: 1px solid var(--color-util-primary2);
  margin: 30px 0;
}

button {
  display: block;
  margin-bottom: -1px;
  padding: 0.5rem 1rem;
  border: 1px solid transparent;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  color: var(--color-util-primary2)
}

button.active,
button:focus-visible {
  color: var(--color-text-primary1);
  background-color: var(--color-util-primary3);
  border-color: var(--color-util-primary2);
}

button.disabled span {
  opacity: 0.5;
}
</style>