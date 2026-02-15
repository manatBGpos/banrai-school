<template>
  <div>
    <nav
      class="fixed shadow-blue-400 top-0 z-50 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg"
    >
      <div
        class="max-w-6xl mx-auto px-4 py-4 flex justify-center items-center"
      >
      
          <!-- <img :src="logos" alt="logo" class="w-40 h-40 object-contain" /> -->
          <span class="text-white font-bold text-lg">โรงเรียนบ้านไร่วิทยา</span> &nbsp;&nbsp;&nbsp;
   
        <div class="space-x-6 text-white font-medium">
          <router-link to="/">
            <span>
              <UserIcon class="w-8 h-8 text-pink-500" />
              <span
                class="p-1 border-1 border-solid hover:cursor-pointer hover:bg-indigo-600 rounded-md transition duration-700 ease-in-out"
                >หน้าแรก</span
              >
            </span>
          </router-link>
          <router-link to="/empoyee">
            <span
              class="p-1 border-1 border-solid hover:cursor-pointer hover:bg-indigo-600 rounded-md transition duration-700 ease-in-out"
              >บุคลากร</span
            >
          </router-link>
          <router-link to="/newsletter">
            <span
              class="p-1 border-1 border-solid hover:cursor-pointer hover:bg-indigo-600 rounded-md transition duration-700 ease-in-out"
              >จดหมายข่าว</span
            >
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import { UserIcon } from "@heroicons/vue/24/solid";
import logos from "../assets/image/logo.png";
</script>
<style></style>
