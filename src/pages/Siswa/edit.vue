<template>
    <form @submit.prevent="submit">
      <div class="space-y-12">
        <div class="pb-12 border-b border-gray-900/10">
          <h2 class="font-semibold text-gray-900 text-base/7">Add Program</h2>
  
          <div class="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-4">
              <label for="pilihanprogram" class="block font-medium text-gray-900 text-sm/6">Pilihan Program</label>
              <div class="mt-2">
                <div class="flex items-center pl-3 bg-white rounded-md outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                  <div class="text-base text-gray-500 select-none shrink-0 sm:text-sm/6">workcation.com/</div>
                  <input type="text" name="pilihanprogram" id="pilihanprogram" class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" placeholder="janesmith" />
                </div>
              </div>
            </div>
  
            <div class="sm:col-span-4">
              <label for="biayaprogram" class="block font-medium text-gray-900 text-sm/6">Biaya Program</label>
              <div class="mt-2">
                <div class="flex items-center pl-3 bg-white rounded-md outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                  <div class="text-base text-gray-500 select-none shrink-0 sm:text-sm/6">workcation.com/</div>
                  <input type="text" name="biayaprogram" id="biayaprogram" class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" placeholder="janesmith" />
                </div>
              </div>
            </div>
  
          </div>
        </div>
  
      </div>
  
      <div class="flex items-center justify-end mt-6 gap-x-6">
        <button type="button" class="font-semibold text-gray-900 text-sm/6">Cancel</button>
        <button type="submit" class="px-3 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
      </div>
    </form>
  </template>
  
  <script setup>
      import { PhotoIcon, UserCircleIcon } from '@heroicons/vue/24/solid'
      import { ChevronDownIcon } from '@heroicons/vue/16/solid'
  </script>
  
  <style scoped>
  
  </style>