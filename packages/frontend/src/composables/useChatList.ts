import { ref, watch } from "vue"

const useChatList = () => {
    const chatList = ref<any>([{ name: "Heelo 1", id: 1 }, { name: "Hello 2", id: 2 }])
    const searchValue = ref<string>('')
    const searchedChatList = ref([])
    const loadingChatList = ref('loading')


    setTimeout(() => loadingChatList.value = 'loaded', 1000)

    const handleSearchValue = (event: any) => {
        searchValue.value = event.target.value;
      };


    watch([searchValue, chatList], ([newSearchValue, newChatList]) => {
        if (newSearchValue) { // TODO: CHANGE chat.name to other
            searchedChatList.value = newChatList.filter((chat: any) => chat.name.toLowerCase().includes(newSearchValue.toLowerCase()));
        } else {
            searchedChatList.value = chatList.value
        }
    })

    return {
        chatList: searchedChatList,
        searchValue,
        handleSearchValue,
        loadingChatList
    }
}

export default useChatList