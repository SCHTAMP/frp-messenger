<template>
    <div
        :class="['flex items-center gap-[.5rem] group border border-2 bg-search border-search-border rounded-full pl-[1rem] focus-within:border-cta-icon focus-within:border-2', customClass]">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 32 32" className="w-[2rem] h-[2rem]">
            <path fill="currentColor"
                d="m29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29ZM4 13a9 9 0 1 1 9 9a9.01 9.01 0 0 1-9-9Z"
                strokeWidth={1}
                className="group-focus-within:fill-cta-icon group-focus-within:stroke-cta-icon stroke-transparent" />
        </svg>
        <input type="text" name="search" className="flex-grow focus-within:outline-none bg-transparent"
            placeholder="Search" :value=searchValue v-on:input="handleSearchValue" />
        <IconWrapper :custom-class="customSearchClass">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 32 32">
                <path fill="currentColor"
                    d="M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"
                    strokeWidth={1}
                    className="group-focus-within:fill-cta-icon group-focus-within:stroke-cta-icon stroke-transparent" />
            </svg>
        </IconWrapper>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import IconWrapper from '../globals/IconWrapper.vue';

defineProps<{ customClass?: string, handleSearchValue: (payload: Event) => void }>()
const searchValue = defineModel('searchValue', { type: String, required: true })
const customSearchClass = computed(() => ({ 'opacity-0': !searchValue.value }))

</script>
