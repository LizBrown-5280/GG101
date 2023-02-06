<template>
  <button :data-label="label" type="button">
    <span><slot /></span>
  </button>
</template>

<script setup>
const props = defineProps(['label'])
const label = props.label
</script>

<style scoped>
  button {
    position: relative;
    display: inline-block;
    margin: 0 3px;
    padding: var(--vertical-padding) var(--horizontal-padding);
    border: 2px solid var(--color-util-primary2);
    border-radius: 5px;
    background-color: var(--color-background-primary1);
    color: var(--color-text-primary3);
  }

  button.active, button:hover {
    border: 2px solid var(--color-util-primary3);
    background-color: var(--color-background-primary2);
    color: var(--color-text-primary1);
    font-weight: bold;
  }

  /* Part of what prevents button from shifting right on hover due to font-weight change */
  button::before {
    content: attr(data-label);
    font-weight: bold;
    visibility: hidden;
  }

  span {
    position: absolute;
    top: var(--vertical-padding);
    bottom: var(--vertical-padding);
    left: var(--horizontal-padding);
    right: var(--horizontal-padding);
  }
</style>