<script setup lang="ts">
import router from '@/router'
/**
 * goBack
 */
function goBack() {
  router.back()
}
</script>

<template>
  <div>
    <h1>Sorry! You can`t see it</h1>
    <h2 @click="goBack">Go Back</h2>
  </div>
</template>
