<template>
  <!-- Tabbed navigation - some tabs are made available only if the API key provides authorization to that tab. -->
  <ul class="nav nav-tabs">
    <li v-for="(tab, key,) in tabs" class="nav-item" :key="key">
      <a class="nav-link" :href="'#' + key"
        :class="{ disabled: !tab.permission, active: key === 'account' && tab.permission }" data-toggle="tab">
        {{ key }}
      </a>
    </li>
  </ul>
</template>

<script setup>
import { useGW2Store } from '@/stores/GW2'
const GW2Store = useGW2Store()
const tabs = GW2Store.getTabNav

</script>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  list-style: none;
  margin: 30px 0;
}

.nav-tabs {
  border-bottom: 1px solid #ddd;
}

.nav-tabs .nav-item {
  margin-bottom: -1px;
}
.nav-link.active, a:focus-visible {
  color: var(--color-text-primary1);
  background-color:var(--color-util-primary3);
  border-color: var(--color-util-primary2 );
}

.nav-tabs .nav-link {
  display: block;
  padding: 0.5rem 1rem;
  border: 1px solid transparent;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}

.disabled {
  color: var(--color-text-primary2);
  background-color: transparent;
  border-color: transparent;
  cursor: context-menu;
}
</style>