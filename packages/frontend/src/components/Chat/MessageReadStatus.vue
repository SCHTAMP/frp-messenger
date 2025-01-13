<template>
    <div :class="['flex items-center py-[.2rem] text-[1.1rem] text-message-status', customClass]">
        <span class="shrink-0">
            {{ new Date(time).toLocaleString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
            }) }}
        </span>
        <MessageCheck v-if="!messageReceived" :readStatus="readStatus" :deliveredStatus="deliverStatus" />
    </div>
</template>

<script setup lang="ts">
import MessageCheck from '../globals/MessageCheck.vue';

defineProps<{
    messageReceived?: boolean
    deliverStatus: boolean
    time: Date
    customClass?: any
    readStatus: boolean
}>()
</script>
