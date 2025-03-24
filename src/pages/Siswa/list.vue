<script setup>

import { onMounted, ref } from 'vue';
import axiosClient from '../../axios';
import router from '../../router';

const siswas = ref({
    id: '',
    nama: '',
    asalsekolah: '',
    kelas: '',
    jeniskelamin: '',
})

onMounted( () => {
    axiosClient.get('/api/siswa')
        .then( (response) => {
            // console.log(response.data);
            siswas.value = response.data;
        })
})

function addData(id) {
    router.push({name: 'AddSiswa', id: id})
}

function editData(id) {
  router.push({name: 'EditSiswa', params: {id: id}})
}

function deleteData(id) {
    if (!confirm('Anda akan menghapus data ini?')) {
        return;
    }
    axiosClient.delete(`/api/siswa/${id}`)
        .then(response => {
            siswas.value = siswas.value.filter(data => data.id !== id)
        })
}
</script>

<template>
    <div class="mb-3">
        <button @click="addData()" type="submit" class="px-2 py-1 bg-green-500 rounded-md text-sm/6">Tambah Data</button>
    </div>
    <div class="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]" >
        <div class="max-w-full overflow-x-auto custom-scrollbar">
            <table class="min-w-full">
                <thead>
                    <tr class="border-b border-gray-200 dark:border-gray-700">
                        <th class="px-5 py-3 text-left w-3/11 sm:px-6">
                            <p class="font-medium text-theme-xs ">ID</p>
                        </th>
                        <th class="px-5 py-3 text-left w-2/11 sm:px-6">
                            <p class="font-medium text-theme-xs ">Nama</p>
                        </th>
                        <th class="px-5 py-3 text-left w-2/11 sm:px-6">
                            <p class="font-medium text-theme-xs ">Asal Sekolah</p>
                        </th>
                        <th class="px-5 py-3 text-left w-2/11 sm:px-6">
                            <p class="font-medium text-theme-xs ">Kelas</p>
                        </th>
                        <th class="px-5 py-3 text-left w-2/11 sm:px-6">
                            <p class="font-medium text-theme-xs ">Jenis Kelamin</p>
                        </th>
                        <th class="px-5 py-3 text-left w-2/11 sm:px-6">
                            <p class="font-medium text-theme-xs "></p>
                        </th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                <tr
                    v-for="(data, index) in siswas"
                    :key="index"
                    class="border-t border-gray-100 dark:border-gray-800"
                >
                    <td class="px-5 py-4 sm:px-6">
                        <p class="text-theme-sm ">{{ data.id }}</p>
                    </td>
                    <td class="px-5 py-4 sm:px-6">
                        <p class="text-theme-sm ">{{ data.nama }}</p>
                    </td>
                    <td class="px-5 py-4 sm:px-6">
                        <p class="text-theme-sm ">{{ data.asalsekolah }}</p>
                    </td>
                    <td class="px-5 py-4 sm:px-6">
                        <p class="text-theme-sm ">{{ data.kelas }}</p>
                    </td>
                    <td class="px-5 py-4 sm:px-6">
                        <p class="text-theme-sm ">{{ data.jeniskelamin }}</p>
                    </td>
                    <td class="px-5 py-4 sm:px-6">
                        <button @click="editData(data.id)" type="submit" class="px-2 py-1 bg-yellow-500 rounded-md text-sm/6">Edit</button>
                        <button @click="deleteData(data.id)" type="submit" class="px-2 py-1 bg-orange-500 rounded-md text-sm/6">Hapus</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>

</template>

<style scoped>

</style>