<template>
    <div class="self-end">
        <div class="flex items-end max-w-[35rem] ml-[3rem]">
            <BaseMessage :message-data="message" class="bg-message rounded-br-none flex-grow" />
            <!-- BubbleTail ??? https://github.com/AdekolaThanni/Telegram-Clone/blob/main/client/src/components/pages/Chat/SentMessage.jsx#L5 -->
        </div>
    </div>
</template>

<script setup lang="ts">
import BaseMessage from '@/components/Chat/BaseMessage.vue';
defineProps<{ message: any }>()

</script>
