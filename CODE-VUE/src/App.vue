<template>
  <router-view />
</template>

<script setup>
import { onMounted } from 'vue'
import { useSetting } from './store/pinia'

const store = useSetting()

onMounted(() => {
  store.setSetting()
})
</script>
