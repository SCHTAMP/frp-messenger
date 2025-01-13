<template>
    <div ref="messagesRef" class="w-full overflow-y-scroll no-scrollbar py-[1rem]"
        v-for="messageData in messageHistory">
        <Messages :key="messageData.day" :messages-data="messageData.messages" />
    </div>
</template>

<script setup lang="ts">
import Messages from '@/components/Chat/Messages.vue';
import { ref, useTemplateRef } from 'vue';

const messageListRef = useTemplateRef("messagesRef")

const props = defineProps<{ messageHistory: any }>()
</script>
