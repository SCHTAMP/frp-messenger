<template>
    <div>
        <p
            class="mx-auto w-fit py-[.2rem] px-[1rem] bg-message-highlight rounded-full my-[.5rem] font-semibold text-white">
            {{ day }}
        </p>
        <div class="flex flex-col items-start gap-[.5rem]" v-for="message in messagesData">
            <RecivedMessage v-if="message.sender !== userId" :message="message" />
            <SentMessage v-else :message="message" />
        </div>
    </div>
</template>

<script setup lang="ts">
import RecivedMessage from '@/components/Chat/RecivedMessage.vue';
import SentMessage from '@/components/Chat/SentMessage.vue';
import { ref } from 'vue';

const props = defineProps<{ messagesData: any }>()

const userId = 1

const day = ref(new Date().toLocaleDateString("ru-RU", { day: "2-digit", month: "long" }))
</script>