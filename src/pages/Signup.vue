<script setup>

import axiosClient from '../axios.js'
import GuestLayout from '../components/GuestLayout.vue';
import { ref } from 'vue';
import router from '../router';

const data = ref({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
})

const errors = ref({
    name: [],
    email: [],
    password: [],
})

function submit() {
    axiosClient.get('/sanctum/csrf-cookie').then(response => {
        axiosClient.post( "/register", data.value )
            .then(response => {
                // debugger;
                router.push({name: 'Home'})
            })
            .catch( error => {
                console.log(error.response.data);
                errors.value = error.response.data.errors
            })
    })
}
</script>

<template>
  <GuestLayout>
  
    <h2 class="mt-10 font-bold tracking-tight text-center text-gray-900 text-2xl/9">Buat akun baru</h2>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form @submit.prevent="submit" class="space-y-4" >
        <div>
          <label for="nama" class="block font-medium text-gray-900 text-sm/6">Nama Lengkap</label>
          <div class="mt-2">
            <input 
                name="nama" 
                id="nama" 
                v-model="data.name"
                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
          <p class="text-sm text-red-600">{{ errors.name ? errors.name[0] : '' }}</p>
        </div>
        <div>
          <label for="email" class="block font-medium text-gray-900 text-sm/6">Email</label>
          <div class="mt-2">
            <input type="email" 
                name="email" 
                id="email" 
                autocomplete="email" 
                v-model="data.email"
                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
          <p class="text-sm text-red-600">{{ errors.email ? errors.email[0] : '' }}</p>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block font-medium text-gray-900 text-sm/6">Password</label>
          </div>
          <div class="mt-2">
            <input type="password" 
                name="password" 
                id="password" 
                v-model="data.password"
                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
          <p class="text-sm text-red-600">{{ errors.password ? errors.password[0] : '' }}</p>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password_confirmation" class="block font-medium text-gray-900 text-sm/6">Ulang Password</label>
          </div>
          <div class="mt-2">
            <input type="password" 
                name="password_confirmation" 
                id="password_confirmation" 
                v-model="data.password_confirmation"
                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
          <p class="text-sm text-red-600">{{ errors.password ? errors.password[0] : '' }}</p>
        </div>

        <div>
          <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Buat akun</button>
        </div>
      </form>

      <p class="mt-10 text-center text-gray-500 text-sm/6">
        Sudah punya akun?
        {{ ' ' }}
        <RouterLink :to="{name: 'Login'}" class="font-semibold text-indigo-600 hover:text-indigo-500">Login disini</RouterLink>
      </p>
    </div>
  </GuestLayout>
</template>

<style scoped>

</style>