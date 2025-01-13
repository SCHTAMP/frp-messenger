<template>
    <div :class="['flex items-center justify-center w-[4rem] h-[4rem] rounded-full cursor-pointer hover:bg-secondary-light-text', active && 'bg-secondary-light-text', customClass]"
        @click="clicked">
        <slot></slot>
    </div>
</template>


<script setup lang="ts">
defineProps<{
    active?: boolean
    customClass?: any
    clicked?: () => void
}>()
</script>