<script>
const user = {}
</script>

<template>
    <div v-if="user">
        <ChatSettings />
        <router-view></router-view>
    </div>
</template>