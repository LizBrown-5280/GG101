<template>
  <div class="card" :class="currency.id">
    <section v-if="currency.id !== 1" class="imgNameQty">
      <img :src="currency.icon" :title="currency.name" />
      <div>{{ currency.name }}</div>
      <div>{{ currency.amount }}</div>
    </section>

    <section v-if="currency.name === 'Coin'" class="imgNameQty coin">
      <div><img :src="currency.coins.goldIcon" title="Gold">{{ currency.coins.goldCoins }} <span>Gold</span></div>
      <div><img :src="currency.coins.silverIcon" title="Silver">{{ currency.coins.silverCoins }} <span>Silver</span></div>
      <div><img :src="currency.coins.copperIcon" title="Copper">{{ currency.coins.copperCoins }}<span>Copper</span></div>     
    </section>

    <section class="description">
      {{ currency.description }}
    </section>
  </div>
</template>

<script setup>
  const props = defineProps(['currency'])
  const currency = props.currency
  const id = currency.id
</script>

<style scoped>
  .card {
    z-index: 10;
    display: none;
    position: absolute;
    top: 40px;
    left: 0px;
    right: 0px;
    margin: 0 auto;
    width: 400px;
    padding: 20px;
    border: 10px solid var(--color-util-primary2);
    border-radius: 8px;
    background-color: var(--color-background-primary1);
    color: var(--color-text-primary2);
    text-align: center;
  }

  .imgNameQty {
    margin: 0 0 15px;
    color: var(--color-text-primary3);
    font-size: 1.6rem;
  }

  img {
    width: 80px;
    margin: 0 auto 5px;
  }

  .coin > div {
    display: inline-block;
  }

  .coin img,
  .coin span {
    display: block;
  }
</style>
