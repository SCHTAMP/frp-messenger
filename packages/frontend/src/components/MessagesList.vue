<template>
  <ul class="messagesList">
    <Message v-for="message in messages" :key="message.id" :member="message.member" :data="message.data" :id="message.id"
      :me="me" />
    <div ref="bottomRef"></div>
  </ul>
</template>

<script setup lang="ts">
import { onUpdated, ref } from 'vue';
import Message from '@/components/Message.vue';
import type { Message as IMessage } from '@/views/MessagesView.vue';

const props = defineProps<{
  messages: IMessage[],
  me: any,
}>();

const bottomRef = ref<Element>();


onUpdated(() => {
  bottomRef.value?.scrollIntoView({ behavior: 'smooth' });
});
</script>