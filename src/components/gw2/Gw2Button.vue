<template>
  <button>
    <slot />
  </button>
</template>

<style scoped>
  button {
    display: inline-block;
    margin: 0 3px;
    padding: 5px 10px;
    background-color: var(--color-background-primary1);
    border: 2px solid var(--color-util-primary2);
    border-radius: 5px;
  }

  button.active, button.on {
    background-color: var(--color-background-primary3)
  }
</style>