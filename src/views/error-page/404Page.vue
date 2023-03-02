<script setup lang="ts">
import router from '@/router'

/**
 * goHome
 */
function goHome() {
  router.push('/')
}
</script>

<template>
  <div>
    <h1>We lost something...</h1>
    <h2 @click="goHome">Go Home</h2>
  </div>
</template>
