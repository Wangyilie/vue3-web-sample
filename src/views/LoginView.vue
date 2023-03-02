<script lang="ts" setup>
import { reactive, ref } from 'vue'
import router from '@/router'

const labelPosition = ref('top')

const formLabelAlign = reactive({
  name: '',
  password: ''
})

function signIn() {
  const redirect = router.currentRoute.value.query.redirect?.toString() || '/'
  router.push(redirect)
}
</script>

<template>
  <div>
    <el-form
      :label-position="labelPosition"
      label-width="100px"
      :model="formLabelAlign"
      style="max-width: 460px"
    >
      <el-form-item label="User Name">
        <el-input v-model="formLabelAlign.name" />
      </el-form-item>
      <el-form-item label="Password">
        <el-input v-model="formLabelAlign.password" type="password" show-password />
      </el-form-item>
    </el-form>
    <el-button @click="signIn">Sign In</el-button>
  </div>
</template>
