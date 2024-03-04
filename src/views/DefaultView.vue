<script>
import DefaultHeader from '@/components/header/DefaultHeader.vue'

export default {
  name: 'DefaultView',
  components: {
    DefaultHeader
  }
}
</script>

<template>
  <default-header />
  <main class="mx-auto max-w-7xl p-2 text-gray-800 dark:text-gray-200 backdrop-blur-md rounded-md">
    <h1 class="text-2xl font-bold">F1Calendar</h1>
  </main>
</template>