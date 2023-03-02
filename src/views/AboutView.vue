<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-button>TEST</el-button>
    <el-input v-model="input" placeholder="Please input" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { login } from '@/api'
const input = ref('')
login({ userName: '', password: '' })
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
