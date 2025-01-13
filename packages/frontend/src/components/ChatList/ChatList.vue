<template>
    <ChatListSkeleton v-if="loadingChatList === 'loading'" />
    <div v-else>
        <Header :custom-class="'flex px-[2rem] items-center gap-[1rem]'">
            <Menu />
            <SearchBar v-model:search-value="searchValue" :handle-search-value="handleSearchValue"
                :customClass="'flex-grow'" />
        </Header>
        <div class="basis-full p-[.5rem] overflow-y-scroll custom-scrollbar">
            <div v-for="(chat, index) in chatList">
                <ChatItem :chat-data="chat" :key="index" />
            </div>

            <div v-if="chatList.length === 0" class="flex flex-col py-[2rem] items-center uppercase">
                <button type="submit"
                    class="bg-cta-icon mt-[5rem] p-[1rem] rounded-xl uppercase text-white font-semibold opacity-80 flex items-center justify-center">
                    Start Chat Now
                </button>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
import ChatListSkeleton from './ChatListSkeleton.vue'
import Header from '../globals/Header.vue'
import Menu from '../ChatList/Menu.vue'
import SearchBar from '../ChatList/SearchBar.vue'
import useChatList from '@/composables/useChatList';
import ChatItem from '@/components/ChatList/ChatItem.vue';

const { chatList, handleSearchValue, searchValue, loadingChatList } = useChatList()

console.log(chatList)
</script>