<template>
    <div
        :class="['chat-bg flex-grow h-full relative flex flex-col overflow-hidden shrink-0 sm:absolute sm:top-0 sm:left-0 sm:w-full duration-200', chatActive ? 'lg:basis-full sm:translate-x-0' : 'lg:basis-[100rem] sm:translate-x-[55rem]']">
        <ChatHeader />
        <div :class="['flex-grow px-[1rem] sm:px-[.5rem] overflow-hidden']">
            <div class="max-w-[75rem] h-full mx-auto flex flex-col justify-end pb-[2rem] relative overflow-hidden">
                <MessageList :messageHistory="messageHistory" />
                <!-- <NewMessage mode={mode} currentChatRoom={currentChatRoom} /> -->
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import ChatHeader from '@/components/Chat/ChatHeader.vue';
import MessageList from '@/components/Chat/MessageList.vue';
import { ref } from 'vue';

const chatActive = ref(true)

const messageHistory = ref([
    {
        day: new Date().getMilliseconds(), messages: [{
            sender: 1,
            message: 'Привет<br>Привет',
            time: new Date(),
            readStatus: true,
            deliverStatus: true,
            deliveredStatus: true
        }, {
            sender: 2,
            message: 'Привет',
            time: new Date("2025-01-12T12:00:00"),
            readStatus: true,
            deliverStatus: true,
            deliveredStatus: true
        }]
    },

])

</script>
