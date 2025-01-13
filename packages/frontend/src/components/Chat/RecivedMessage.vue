<template>
    <div class="flex items-end max-w-[35rem] mr-[3rem]">
        <BaseMessage :message-data="message" :custom-class="'bg-primary rounded-bl-none flex-grow'"
            :message-received="true" />
    </div>
</template>

<script setup lang="ts">
import BaseMessage from '@/components/Chat/BaseMessage.vue';
defineProps<{ message: any }>()
</script>
