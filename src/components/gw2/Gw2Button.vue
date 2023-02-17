<template>
  <button :data-label="label" type="button" 
    class="inline-block relative rounded px-2.5 py-1.5">
    <slot />
    <span v-if="label">
      <slot name="label" />
    </span>
  </button>
</template>

<script setup>
const props = defineProps(['label', 'isShowing', 'w-full', 'h-1'])
const label = props.label
</script>

<style scoped>
  button {
    border: 2px solid var(--color-util-primary2);
    background-color: var(--color-background-primary1);
    color: var(--color-text-primary3);
    text-align: left;
  }

  .button.label {
    text-align: center;
  }

  button.active, button:hover {
    border: 2px solid var(--color-util-primary3);
    background-color: var(--color-background-primary2);
    color: var(--color-text-primary1);
    font-weight: bold;
  }

  /* Next two are part of what prevents button from shifting right on hover due to font-weight change */
  button.label::before {
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