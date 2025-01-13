<template>
    <header :class="['h-[5.6rem]', customClass]">
        <slot></slot>
    </header>
</template>

<script setup lang="ts">

defineProps < { customClass?: string } > ()
</script>
