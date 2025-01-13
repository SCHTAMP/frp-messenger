<script setup lang="ts">
import { ref } from 'vue'
const items = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
</script>

<template>
    <div class="basis-full p-[1rem] overflow-hidden">
        <div v-for="(item, index) in items" class="relative flex items-center gap-[2rem] p-[1rem] fallback-anim"
            key="index">
            <div class="w-[5.5rem] h-[5.5rem] rounded-full bg-secondary-light-text"></div>

            <div className="">
                <div className="w-[8rem] h-[1rem] rounded-full bg-secondary-light-text"></div>
                <div className="w-[20rem] h-[1rem] rounded-full bg-secondary-light-text mt-[1rem]"></div>
            </div>
        </div>
    </div>
</template>
