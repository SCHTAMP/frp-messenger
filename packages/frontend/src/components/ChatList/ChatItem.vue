<template>
    <div
        :class="['p-[1rem] rounded-[1.5rem] not-selectable flex gap-[1rem] text-secondary-text group h-[75px] cursor-default', activeChat ? 'bg-cta-icon !text-white sm:bg-transparent' : 'hover:bg-secondary-light-text']">
        <Image :src="'https://placehold.co/600x400?text=Hello+World'" alt="avatar"
            class="w-[5.5rem] h-[5.5rem] rounded-full" />

        <div class="flex-grow overflow-hidden">
            <div
                :class="['flex justify-between text-primary-text font-medium', activeChat && '!text-white sm:!text-primary-text']">
                <span>{{ chatData.name || 'John Doe' }}</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import Image from '../globals/Image.vue';

const props = defineProps<{
    chatData: any
}>()

const activeChat = computed(() => props.chatData.id === 1)

</script>
