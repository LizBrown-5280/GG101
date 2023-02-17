<template>
  <button type="button">
    <slot></slot>
  </button>
</template>

<style scoped>
  button {
    width: 90px;
    height: 42px;
    border: 2px solid var(--color-util-primary2);
    background-color: var(--color-background-primary1);
    border-bottom: 0px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    color: var(--color-text-primary3);
    font-size: 0.8rem;
    text-align: center;
    text-transform: capitalize;
  }

  button.active, button:hover {
    z-index: 10;
    border: 3px solid var(--color-util-primary3);
    border-bottom: 0px;
    background-color: var(--color-background-primary2);
    color: var(--color-text-primary1);
    font-weight: bold;
    scale: 1.15;
    transform: translateY(-2px);
  }

  button:hover {
    z-index: 11;
  } 
</style>
