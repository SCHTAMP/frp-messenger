<template>
    <IconWrapper :active="true" :clicked="() => { console.log('clicked') }">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 32 32">
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 8h24M4 16h24M4 24h24" className="" />
        </svg>
    </IconWrapper>
</template>

<script setup lang="ts">
import IconWrapper from '../globals/IconWrapper.vue'

</script>
