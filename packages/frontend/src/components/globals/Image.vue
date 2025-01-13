<template>
    <img :class="[customClass, 'object-center object-cover']" :src="src" :alt="alt">
</template>

<script setup lang="ts">
defineProps<{ customClass?: string, alt?: string, src?: string }>()
</script>
