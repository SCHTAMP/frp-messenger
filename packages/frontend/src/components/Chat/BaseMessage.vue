<template>
    <div v-if="messageData.messageType === 'image'" class="w-[30rem] rounded-3xl overflow-hidden h-[34rem] relative">
        <Image :src="messageData.imgUrl" alt="" class="w-full h-full object-cover" />
        <MessageReadStatus :read-status="messageData.readStatus" :deliver-status="messageData.deliverStatus"
            :message-received="messageReceived" :time="messageData.time"
            :custom-class="'absolute bottom-[1rem] right-[1rem] bg-secondary-light-text rounded-full !text-white'" />
    </div>
    <div v-else :class="[customClass, 'p-[1.5rem] rounded-3xl sm:text-[1.4rem] overflow-hidden gap-[1rem] relative']">
        <div v-html="messageData.message" class="font-semibold max-w-[25rem] mr-[3.5rem] break-words"></div>
        <MessageReadStatus :read-status="messageData.readStatus" :deliver-status="messageData.deliverStatus"
            :message-received="messageReceived" :time="messageData.time"
            :class="['absolute right-[.8rem] bottom-[.5rem]', messageData.deliveredStatus && '!text-secondary']" />
    </div>
</template>

<script setup lang="ts">
import Image from '../globals/Image.vue';
import MessageReadStatus from '@/components/Chat/MessageReadStatus.vue';

defineProps<{ messageData: any, customClass?: any, messageReceived?: boolean }>()
</script>
