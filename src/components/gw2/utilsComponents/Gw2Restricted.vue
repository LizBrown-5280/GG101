<template>
  <div class="restricted">
    Permissions were not granted to access your {{ type }} with the key provided.
    <br />
    To see more, use a Permissions Key that includes access to your{{ type }}.
  </div>
</template>

<script setup>
  const props = defineProps(['type'])
</script>