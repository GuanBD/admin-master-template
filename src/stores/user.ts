import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { loginForm } from '@/type/userType'
import router from '@/router'

export const useCounterStore = defineStore('counter', () => {
  const userInfo = ref({})

  function login(data: loginForm) {
    router.push({ path: '/' })
    getUserInfo()
  }

  function getUserInfo() {
    userInfo.value = {
      username: 'admin',
      password: '123456',
      avatar: 'https://avatar.com/avatar.png',
      email: 'email@email.com'
    }
  }

  return { userInfo, login }
})
