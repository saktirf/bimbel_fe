<script setup>

import axiosClient from '../../axios.js'
import { onMounted, ref } from 'vue';
import router from '../../router';
import { ChevronDownIcon } from '@heroicons/vue/16/solid'

const programs = ref({
    id: '',
    pilihanprogram: '',
    biayaprogram: '',
})

onMounted( () => {
    axiosClient.get('/api/program-pilihan')
        .then( (response) => {
            // console.log(response.data);
            programs.value = response.data;
        })
})

const data = ref({
    nama: '',
    tempatlahir: '',
    tanggallahir: '',
    asalsekolah: '',
    kelas: '',
    jeniskelamin: '',
    alamat: '',
    nohp: '',
    tempat_les: '',
    pilihanprogram: '',
    tglpendaftaran: '',
    status_siswa: '',
    keterangan: '',
})

const errors = ref({
    nama: [],
    tempatlahir: [],
    tanggallahir: [],
    asalsekolah: [],
    kelas: [],
    jeniskelamin: [],
    alamat: [],
    nohp: [],
    tempat_les: [],
    pilihanprogram: [],
    tglpendaftaran: [],
    status_siswa: [],
    keterangan: [],
})

function submit() {
    const formData = new FormData();
    formData.append('nama', data.value.nama)
    formData.append('tempatlahir', data.value.tempatlahir)
    formData.append('tanggallahir', data.value.tanggallahir)
    formData.append('asalsekolah', data.value.asalsekolah)
    formData.append('kelas', data.value.kelas)
    formData.append('jeniskelamin', data.value.jeniskelamin)
    formData.append('alamat', data.value.alamat)
    formData.append('nohp', data.value.nohp)
    formData.append('tempat_les', data.value.tempat_les)
    formData.append('pilihanprogram', data.value.pilihanprogram)
    formData.append('tglpendaftaran', data.value.tglpendaftaran)
    formData.append('status_siswa', data.value.status_siswa)
    formData.append('keterangan', data.value.keterangan)
    
    axiosClient.post( "/api/siswa/add", formData )
        .then(res => {
            console.log(res);
            
            router.push({name: 'Siswa'})
        })
        .catch( error => {
            console.log(error.response.data);
            errors.value = error.response.data.errors
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
        <h2 class="font-semibold text-gray-900 text-base/7">Tambah Siswa</h2>

        <div class="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-12">
          <div class="sm:col-span-4">
            <label for="nama" class="block font-medium text-gray-900 text-sm/6">Nama</label>
            <div class="mt-2">
                <input type="text" 
                    name="nama" 
                    id="nama" 
                    autocomplete="nama" 
                    v-model="data.nama"
                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
            </div>
            <p class="text-sm text-red-600">{{ errors.nama ? errors.nama[0] : '' }}</p>
          </div>

          <div class="sm:col-span-2">
            <label for="tempatlahir" class="block font-medium text-gray-900 text-sm/6">Tempat Lahir</label>
            <div class="mt-2">
                <input type="text" 
                    name="tempatlahir" 
                    id="tempatlahir" 
                    autocomplete="tempatlahir" 
                    v-model="data.tempatlahir"
                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
            </div>
            <p class="text-sm text-red-600">{{ errors.tempatlahir ? errors.tempatlahir[0] : '' }}</p>
          </div>

          <div class="sm:col-span-2">
            <label for="tanggallahir" class="block font-medium text-gray-900 text-sm/6">Tanggal Lahir</label>
            <div class="mt-2">
                <input type="date" 
                    name="tanggallahir" 
                    id="tanggallahir" 
                    autocomplete="tanggallahir" 
                    v-model="data.tanggallahir"
                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
            </div>
            <p class="text-sm text-red-600">{{ errors.tanggallahir ? errors.tanggallahir[0] : '' }}</p>
          </div>
        </div>
    </div>
    <div class="pb-12 border-b border-gray-900/10">
        <div class="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-12">

          <div class="sm:col-span-4">
            <label for="asalsekolah" class="block font-medium text-gray-900 text-sm/6">Asal Sekolah</label>
            <div class="mt-2">
                <input type="text" 
                    name="asalsekolah" 
                    id="asalsekolah" 
                    autocomplete="asalsekolah" 
                    v-model="data.asalsekolah"
                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
            </div>
            <p class="text-sm text-red-600">{{ errors.asalsekolah ? errors.asalsekolah[0] : '' }}</p>
          </div>

          <div class="sm:col-span-2">
            <label for="kelas" class="block font-medium text-gray-900 text-sm/6">Kelas</label>
            <div class="mt-2">
                <input type="text" 
                    name="kelas" 
                    id="kelas" 
                    autocomplete="kelas" 
                    v-model="data.kelas"
                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
            </div>
            <p class="text-sm text-red-600">{{ errors.kelas ? errors.kelas[0] : '' }}</p>
          </div>
          <div class="sm:col-span-2">
            <label for="jeniskelamin" class="block font-medium text-gray-900 text-sm/6">Jenis Kelamin</label>
            <div class="grid grid-cols-1 mt-2">
                <select 
                    id="jeniskelamin" 
                    name="jeniskelamin" 
                    v-model="data.jeniskelamin"
                    class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                    <option value="Pilih Jenis Kel">Pilih Jenis Kel</option>
                    <option value="Laki - Laki">Laki - Laki</option>
                    <option value="Perempuan">Perempuan</option>
                </select>
                <ChevronDownIcon class="self-center col-start-1 row-start-1 mr-2 text-gray-500 pointer-events-none size-5 justify-self-end sm:size-4" aria-hidden="true" />
            </div>
            <p class="text-sm text-red-600">{{ errors.jeniskelamin ? errors.jeniskelamin[0] : '' }}</p>
          </div>
        </div>
    </div>
    <div class="pb-12 border-b border-gray-900/10">
        <div class="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-12">

          <div class="sm:col-span-6">
            <label for="alamat" class="block font-medium text-gray-900 text-sm/6">Alamat</label>
            <div class="mt-2">
                <input type="text" 
                    name="alamat" 
                    id="alamat" 
                    autocomplete="alamat" 
                    v-model="data.alamat"
                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
            </div>
            <p class="text-sm text-red-600">{{ errors.alamat ? errors.alamat[0] : '' }}</p>
          </div>
          <div class="sm:col-span-2">
            <label for="nohp" class="block font-medium text-gray-900 text-sm/6">No HP</label>
            <div class="mt-2">
                <input type="text" 
                    name="nohp" 
                    id="nohp" 
                    autocomplete="nohp" 
                    v-model="data.nohp"
                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
            </div>
            <p class="text-sm text-red-600">{{ errors.nohp ? errors.nohp[0] : '' }}</p>
          </div>
        </div>
    </div>
    <div class="pb-12 border-b border-gray-900/10">
        <div class="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-12">

          <div class="sm:col-span-2">
            <label for="tempat_les" class="block font-medium text-gray-900 text-sm/6">Tempat Les</label>
            <div class="mt-2">
                <input type="text" 
                    name="tempat_les" 
                    id="tempat_les" 
                    autocomplete="tempat_les" 
                    v-model="data.tempat_les"
                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
            </div>
            <p class="text-sm text-red-600">{{ errors.tempat_les ? errors.tempat_les[0] : '' }}</p>
          </div>
          <div class="sm:col-span-2">
            <label for="pilihanprogram" class="block font-medium text-gray-900 text-sm/6">Pilihan Program</label>
            <div class="grid grid-cols-1 mt-2">
                <select 
                    id="pilihanprogram" 
                    name="pilihanprogram" 
                    v-model="data.pilihanprogram"
                    class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                    <option>Pilih program</option>
                    <option :value="data.pilihanprogram" v-for="(data, index) in programs" :key="index">{{data.pilihanprogram}}</option>
                </select>
                <ChevronDownIcon class="self-center col-start-1 row-start-1 mr-2 text-gray-500 pointer-events-none size-5 justify-self-end sm:size-4" aria-hidden="true" />
            </div>
            <p class="text-sm text-red-600">{{ errors.pilihanprogram ? errors.pilihanprogram[0] : '' }}</p>
          </div>

          <div class="sm:col-span-2">
            <label for="tglpendaftaran" class="block font-medium text-gray-900 text-sm/6">Tgl Pendaftaran</label>
            <div class="mt-2">
                <input type="date" 
                    name="tglpendaftaran" 
                    id="tglpendaftaran" 
                    autocomplete="tglpendaftaran" 
                    v-model="data.tglpendaftaran"
                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
            </div>
            <p class="text-sm text-red-600">{{ errors.tglpendaftaran ? errors.tglpendaftaran[0] : '' }}</p>
          </div>
          <div class="sm:col-span-2">
            <label for="status_siswa" class="block font-medium text-gray-900 text-sm/6">Status Siswa</label>
            <div class="grid grid-cols-1 mt-2">
                <select 
                    id="status_siswa" 
                    name="status_siswa" 
                    v-model="data.status_siswa"
                    class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                    <option value="Aktif">Aktif</option>
                    <option value="Tidak Aktif">Tidak Aktif</option>
                </select>
                <ChevronDownIcon class="self-center col-start-1 row-start-1 mr-2 text-gray-500 pointer-events-none size-5 justify-self-end sm:size-4" aria-hidden="true" />
            </div>
            <p class="text-sm text-red-600">{{ errors.status_siswa ? errors.status_siswa[0] : '' }}</p>
          </div>

          <div class="sm:col-span-8">
            <label for="keterangan" class="block font-medium text-gray-900 text-sm/6">Keterangan</label>
            <div class="mt-2">
                <input type="text" 
                    name="keterangan" 
                    id="keterangan" 
                    autocomplete="keterangan" 
                    v-model="data.keterangan"
                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
            </div>
            <p class="text-sm text-red-600">{{ errors.keterangan ? errors.keterangan[0] : '' }}</p>
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