<template>
  <div class="card" :class="item.id">
    <section v-if="item.id !== 1" class="imgNameQty">
      <img :src="item.icon" :title="item.name" />
      {{ item.name }}
    </section>

    <section v-if="item.name === 'Coin'" class="imgNameQty coin">
      {{ item.goldPart }}<img :src="item.goldIcon" title="Gold">
      {{ item.silverPart }}<img :src="item.silverIcon" title="Silver">
      {{ item.copperPart }}<img :src="item.copperIcon" title="Copper">
      <span class="name">{{ item.value }} {{ item.name }}</span>
    </section>

    <section class="description">
      {{ item.description }}
    </section>
  </div>
</template>

<script setup>
  const props = defineProps(['item'])
  const item = props.item
  const id = item.id
  console.log('item', item)
</script>

<style scoped>
  .card {
    z-index: 10;
    display: none;
    position: absolute;
    top: 30px;
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

  .coin img {
    display: inline-block;
  }
  
  .coin span {
    display: block;
  }
</style>
