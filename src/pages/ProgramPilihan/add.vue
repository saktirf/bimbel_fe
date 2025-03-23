<script setup>

import axiosClient from '../../axios.js'
import { ref } from 'vue';
import router from '../../router';

const data = ref({
    pilihanprogram: '',
    biayaprogram: '',
})

const errors = ref({
    pilihanprogram: [],
    biayaprogram: [],
})

function submit() {
    const formData = new FormData();
    formData.append('pilihanprogram', data.value.pilihanprogram)
    formData.append('biayaprogram', data.value.biayaprogram)
    
    axiosClient.post( "/api/program-pilihan/add", formData )
        .then(res => {
            console.log(res);
            
            router.push({name: 'ProgramPilihan'})
        })
        .catch( error => {
            // console.log(error.response.data);
            errors.value = error.res.data.errors
        })
}

function goBack() {
    router.back()
}

</script>

<template>
  <form @submit.prevent="submit">
    <div class="space-y-12">
      <div class="pb-12 border-b border-gray-900/10">
        <h2 class="font-semibold text-gray-900 text-base/7">Add Program</h2>

        <div class="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-4">
            <label for="pilihanprogram" class="block font-medium text-gray-900 text-sm/6">Pilihan Program</label>
            <div class="mt-2">
                <input type="text" 
                    name="pilihanprogram" 
                    id="pilihanprogram" 
                    autocomplete="pilihanprogram" 
                    v-model="data.pilihanprogram"
                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
            </div>
          </div>

          <div class="sm:col-span-4">
            <label for="biayaprogram" class="block font-medium text-gray-900 text-sm/6">Biaya Program</label>
            <div class="mt-2">
                <input type="text" 
                    name="biayaprogram" 
                    id="biayaprogram" 
                    autocomplete="biayaprogram" 
                    v-model="data.biayaprogram"
                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
            </div>
          </div>

        </div>
      </div>

    </div>

    <div class="flex items-center justify-start mt-6 gap-x-6">
        <button type="submit" class="px-3 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
        <button @click="goBack()" type="button" class="font-semibold text-gray-900 text-sm/6">Cancel</button>
    </div>
  </form>
</template>

<style scoped>

</style>