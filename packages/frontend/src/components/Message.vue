<script setup lang="ts">
import type { Member } from '@/views/MessagesView.vue';
import { defineProps } from 'vue';

interface Props {
    member: Member;
    me: Member;
    data: string;
    id: string;
}

const props = defineProps<Props>();

const { username, color } = props.member.clientData;
const messageFromMe = props.member.id === props.me.id;
const className = messageFromMe
  ? "messagesMessage currentMember"
  : "messagesMessage";
</script>

<template>
  <li :key="id" :class="className">
    <span class="avatar" :style="{ backgroundColor: color }" />
    <div class="messageContent">
      <div class="username">{{ username }}</div>
      <div class="text">{{ data }}</div>
    </div>
  </li>
</template>