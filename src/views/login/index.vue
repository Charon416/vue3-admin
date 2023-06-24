<template>
  <div class="login">
    <div class="container">
      <div class="text">后台管理系统</div>
      <el-form label-position="top" label-width="100px" :rules="rules" ref="formRef" :model="formState" style="max-width: 460px">
        <el-form-item label="用户名" prop="username">
          <el-input :prefix-icon="User" v-model="formState.username" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input :prefix-icon="Lock" v-model="formState.password" type="password" show-password />
        </el-form-item>
      </el-form>
      <div class="footer">
        <el-button type="primary" class="btn" @click="handleSubmit">登录</el-button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { ref, reactive } from 'vue'
  import { User, Lock } from '@element-plus/icons-vue'
  import { ElNotification } from 'element-plus'
  // 引入用户相关的仓库
  import useUserStore from '@/store/modules/user'
  import { useRouter } from 'vue-router'
  const userStore = useUserStore()
  const router = useRouter()
  const formRef = ref()
  const formState = reactive({
    username: 'admin',
    password: '111111'
  })
  // 表单校验规则
  const rules = {
    username: [{ required: true, message: 'Please input username', trigger: 'blur' }],
    password: [{ required: true, message: 'Please input password', trigger: 'blur' }]
  }

  const handleSubmit = () => {
    console.log('点击了提交按钮')
    formRef.value.validate((valid: any) => {
      if (valid) {
        try {
          userStore.userLogin(formState)
          router.push('/home')
          ElNotification({
            title: 'Hi,你好！',
            message: '欢迎登录',
            type: 'success'
          })
        } catch (error) {
          ElNotification({
            message: (error as Error).message,
            type: 'error'
          })
        }
      }
    })
  }
</script>

<style lang="scss" scoped>
  .login {
    width: 100%;
    height: 100vh;
    background: url('@/assets/images/background.jpg') no-repeat;
    background-size: cover;
    position: relative;
    .container {
      position: absolute;
      width: 400px;
      height: 300px;
      background-color: white;
      top: 30%;
      left: 60%;
      padding: 20px 40px;
      box-sizing: border-box;
      .text {
        text-align: center;
        height: 40px;
        line-height: 40px;
        font-size: 24px;
        font-weight: 600;
      }
      .footer {
        display: flex;
        justify-content: center;
        .btn {
          width: 100%;
        }
      }
    }
  }
</style>
