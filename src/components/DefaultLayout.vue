<template>
    
    <div class="min-h-full">
      <Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <div class="flex items-center">
              <div class="shrink-0">
                <img class="size-8" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
              </div>
              <div class="hidden md:block">
                <div class="flex items-baseline ml-10 space-x-4">
                    <RouterLink v-for="item in navigation" 
                            :key="item.name" 
                            :to="item.to" 
                            :class="[
                                $route.name === item.to.name ? 
                                'bg-gray-900 text-white' : 
                                'text-gray-300 hover:bg-gray-700 hover:text-white', 
                                'rounded-md px-3 py-2 text-sm font-medium']" 
                            :aria-current="$route.name === item.to.name ? 'page' : undefined">
                        {{ item.name }}
                    </RouterLink>
                </div>
              </div>
            </div>
            <div class="hidden md:block">
              <div class="flex items-center ml-4 md:ml-6">
                <button type="button" class="relative p-1 text-gray-400 bg-gray-800 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span class="absolute -inset-1.5" />
                  <span class="sr-only">View notifications</span>
                </button>
  
                <!-- Profile dropdown -->
                <Menu as="div" class="relative ml-3">
                  <div>
                    <MenuButton class="relative flex items-center max-w-xs text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span class="absolute -inset-1.5" />
                      <span class="sr-only">Open user menu</span>
                      <img class="rounded-full size-8" src="https://randomuser.me/api/portraits/men/78.jpg" alt="" />
                      <span class="ml-3 text-white">{{ user.name }}</span>
                    </MenuButton>
                  </div>
                  <transition enter-active-class="transition duration-100 ease-out" enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100" leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100" leave-to-class="transform scale-95 opacity-0">
                    <MenuItems class="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black/5 focus:outline-none">
                      <MenuItem>
                        <button @click="logout" 
                            :class="['block px-4 py-2 text-sm text-gray-700']">
                            Logout
                        </button>
                      </MenuItem>
                    </MenuItems>
                  </transition>
                </Menu>
              </div>
            </div>
            <div class="flex -mr-2 md:hidden">
              <!-- Mobile menu button -->
              <DisclosureButton class="relative inline-flex items-center justify-center p-2 text-gray-400 bg-gray-800 rounded-md hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span class="absolute -inset-0.5" />
                <span class="sr-only">Open main menu</span>
                <Bars3Icon v-if="!open" class="block size-6" aria-hidden="true" />
                <XMarkIcon v-else class="block size-6" aria-hidden="true" />
              </DisclosureButton>
            </div>
          </div>
        </div>
  
        <DisclosurePanel class="md:hidden">
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <RouterLink v-for="item in navigation" 
                    :key="item.name" 
                    :to="item.to" 
                    :class="[
                        $route.name === item.to.name ? 
                        'bg-gray-900 text-white' : 
                        'text-gray-300 hover:bg-gray-700 hover:text-white', 
                        'block rounded-md px-3 py-2 text-base font-medium']" 
                    :aria-current="$route.name === item.to.name ? 'page' : undefined">
                {{ item.name }}
            </RouterLink>
          </div>
          <div class="pt-4 pb-3 border-t border-gray-700">
            <div class="flex items-center px-5">
              <div class="shrink-0">
                <img class="rounded-full size-10" src="https://randomuser.me/api/portraits/men/78.jpg" alt="" />
              </div>
              <div class="ml-3">
                <div class="font-medium text-white text-base/5">{{ user.name }}</div>
                <div class="text-sm font-medium text-gray-400">{{ user.email }}</div>
              </div>
              
            </div>
            <div class="px-2 mt-3 space-y-1">
                <DisclosureButton @click="logout" 
                    class="block px-3 py-2 text-base font-medium text-gray-400 rounded-md hover:bg-gray-700 hover:text-white">
                    Logout
                </DisclosureButton>
            </div>
          </div>
        </DisclosurePanel>
      </Disclosure>
  
      <header class="bg-white shadow">
        <div class="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold tracking-tight text-gray-900">{{ headerTitle }}</h1>
        </div>
      </header>
      <main>
        <div class="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <RouterView />
        </div>
      </main>
    </div>
  </template>
  
<script setup>
    import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
    import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
    import { RouterLink } from 'vue-router'
    import axiosClient from '../axios'
    import router from '../router'
    import useUserStore from '../store/user'
    import { computed } from 'vue'

    const userStore = useUserStore()

    const user = computed(() => userStore.user)

    const headerTitle = computed(() => {
        return router.currentRoute.value.name.replace(/([a-z])([A-Z])/g, '$1 $2')
    })
    
    const navigation = [
        { name: 'Dashboard', to: {name: 'Home'} },
        { name: 'Program Pilihan', to: {name: 'ProgramPilihan'} },
        { name: 'Siswa', to: {name: 'Siswa'} },
    ]
    
    function logout() {
        axiosClient.post('/logout')
            .then((response) => {
                router.push({name: 'Login'})
            })
    }
</script>

<style scoped>

</style>