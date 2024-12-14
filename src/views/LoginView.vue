<template>
  <div class="min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center p-4">
    <div class="max-w-md w-full bg-white rounded-xl shadow-lg p-8 space-y-6">
      <!-- 标题 -->
      <div class="text-center">
        <h1 class="text-3xl font-bold text-gray-900 mb-2">欢迎登录</h1>
        <p class="text-gray-500">请输入您的账号和密码</p>
      </div>

      <!-- 登录表单 -->
      <el-form 
        ref="formRef"
        :model="form"
        :rules="rules"
        class="space-y-4"
      >
        <el-form-item prop="username">
          <el-input
            v-model="form.username"
            placeholder="用户名"
            :prefix-icon="User"
            class="hover:shadow-sm transition-shadow"
          />
        </el-form-item>

        <el-form-item prop="password">
          <el-input
            v-model="form.password"
            type="password"
            placeholder="密码"
            :prefix-icon="Lock"
            class="hover:shadow-sm transition-shadow"
            show-password
          />
        </el-form-item>

        <!-- 记住我和忘记密码 -->
        <div class="flex items-center justify-between text-sm">
          <el-checkbox v-model="form.remember" class="text-gray-600">
            记住我
          </el-checkbox>
          <a href="#" class="text-blue-500 hover:text-blue-600">忘记密码？</a>
        </div>

        <!-- 登录按钮 -->
        <el-button
          type="primary"
          class="w-full !bg-blue-500 hover:!bg-blue-600 !border-blue-500 hover:!border-blue-600"
          :loading="loading"
          @click="handleLogin"
        >
          登录
        </el-button>

        <!-- 其他登录方式 -->
        <div class="relative">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-200"></div>
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="px-2 bg-white text-gray-500">其他登录方式</span>
          </div>
        </div>

        <div class="flex justify-center space-x-4">
          <el-button class="!bg-green-500 hover:!bg-green-600 text-white">
            微信登录
          </el-button>
          <el-button class="!bg-blue-400 hover:!bg-blue-500 text-white">
            QQ登录
          </el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { User, Lock } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import type { FormInstance, FormRules } from 'element-plus'

const loading = ref(false)
const formRef = ref<FormInstance>()

const form = reactive({
  username: '',
  password: '',
  remember: false
})

const rules = reactive<FormRules>({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, message: '用户名长度不能小于3个字符', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, message: '密码长度不能小于6个字符', trigger: 'blur' }
  ]
})

const handleLogin = async () => {
  if (!formRef.value) return
  
  try {
    loading.value = true
    await formRef.value.validate()
    
    // 模拟登录请求
    await new Promise(resolve => setTimeout(resolve, 1000))
    ElMessage.success('登录成功！')
    
  } catch (error) {
    ElMessage.error('请检查输入信息是否正确')
  } finally {
    loading.value = false
  }
}
</script>
