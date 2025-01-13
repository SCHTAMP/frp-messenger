<template>
    <Header :class="['flex items-center px-[2rem] bg-primary border-x border-border shrink-0 z-10', customClass]">
        <div class="flex items-center flex-grow">
            <IconWrapper id="chatActiveToggler" :custom-class="'chatArrow lg:flex mr-[2rem] hidden'">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24" :class="[!chatActive && 'rotate-180']">
                    <path fill="currentColor"
                        d="M19 11H7.14l3.63-4.36a1 1 0 1 0-1.54-1.28l-5 6a1.19 1.19 0 0 0-.09.15c0 .05 0 .08-.07.13A1 1 0 0 0 4 12a1 1 0 0 0 .07.36c0 .05 0 .08.07.13a1.19 1.19 0 0 0 .09.15l5 6A1 1 0 0 0 10 19a1 1 0 0 0 .64-.23a1 1 0 0 0 .13-1.41L7.14 13H19a1 1 0 0 0 0-2Z"
                        className="stroke-transparent" />
                </svg>
            </IconWrapper>
            <div class="flex-grow flex items-center gap-[1.5rem] cursor-pointer">
                <Image :src="'https://placehold.co/600x400?text=Hello+World'" alt="avatar"
                    class="w-[4.2rem] h-[4.2rem] rounded-full" />
                <div class="flex flex-col">
                    <h2 class="font-semibold"> {{ chatProfile.name || chatProfile.username }}</h2>
                    <span v-if="chatProfile.mode"
                        class="text-cta-icon italic text-[1.4rem] font-normal -translate-y-[.4rem]">
                        {{ chatProfile.mode }} {{ chatProfile.mode === "recording" && "audio" }}
                        ...
                    </span>
                    <span v-else class="text-secondary text-[1.4rem] font-normal -translate-y-[.4rem]">
                        {{ chatProfile.status?.online
                            ? "online"
                            : `last seen at ${lastSeenTime}` }}
                    </span>
                </div>
            </div>
        </div>
        <IconWrapper>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24" className="shrink-0">
                <path fill="currentColor"
                    d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0zm0-6a2 2 0 1 0 4 0a2 2 0 0 0-4 0zm0 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0z"
                    className="!stroke-transparent" />
            </svg>
        </IconWrapper>
    </Header>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import Header from '../globals/Header.vue';
import IconWrapper from '../globals/IconWrapper.vue';
import Image from '../globals/Image.vue';

defineProps<{ customClass?: string }>()
const chatActive = ref(true)
const chatProfile = ref({
    name: 'John Doe',
    username: 'johndoe',
    mode: 'recording',
    status: {
        online: true,
        lastSeen: new Date()
    }
})

const lastSeenTime = computed(() => {
    return new Date(chatProfile.value.status.lastSeen).toLocaleTimeString()
})

</script>
