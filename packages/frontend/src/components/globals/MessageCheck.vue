<template>
    <span>
        <svg v-if="deliveredStatus" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
            preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32" className="w-[1.6rem] h-[1.6rem]">
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="m4 17l5 5l12-12m-5 10l2 2l12-12"
                :class="[computedClassName, readStatus && '!stroke-avatar-check-read']" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24" className="w-[1.4rem] h-[1.4rem]">
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="m4 12l6 6L20 6" :class="[computedClassName]" />
        </svg>
    </span>
</template>

<script setup lang="ts">
import { computed } from 'vue';


const props = defineProps<{
    readStatus?: boolean
    deliveredStatus?: boolean
    customClass?: any
}>()
const computedClassName = computed(() => `!fill-transparent !stroke-avatar-check ${props.customClass}`)
</script>
