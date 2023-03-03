<template>
  <button :data-label="label" type="button">
    <slot />
    <span v-if="label">
      <slot name="label" />
    </span>
  </button>
</template>

<script setup>
  const props = defineProps(['label', 'isShowing', 'textSize'])
  const label = props.label
</script>

<style scoped>
  button {
    position: relative;
    display: inline-block;
    border: 2px solid var(--color-util-primary2);
    border-radius: 4px;
    padding: 0.375rem 0.625rem;
    background-color: var(--color-background-primary1);
    color: var(--color-text-primary3);
  }

  button.active,
  button:hover {
    border: 2px solid var(--color-util-primary3);
    background-color: var(--color-background-primary2);
    color: var(--color-text-primary1);
  }

  /* Prevents button text from shifting right on hover due to non-fixed width & font-weight change */
  button.label.active span,
  button.label:hover span {
    font-weight: bold;
  }

  .label::before {
    content: attr(data-label);
    font-weight: bold;
    visibility: hidden;
  }

  .label span {
    position: absolute;
    top: var(--vertical-padding);
    bottom: var(--vertical-padding);
    left: var(--horizontal-padding);
    right: var(--horizontal-padding);
  }

  /* Tabs */
  .tab {
    width: 90px;
    height: 42px;
    border-bottom: 0px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    font-size: 0.8rem;
    text-transform: capitalize;
  }

  /* clickables */
  .clickables {
    width: 120px;
    height: 40px;
    border: 0 solid transparent;
  }
  /* Dropdown Bar (for panels) */
  .dropdownBar {
    width: 100%;
    height: auto;
    font-size: 18px;
  }
</style>
