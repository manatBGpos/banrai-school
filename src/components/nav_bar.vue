<template>
  <div>
    <nav
      class="fixed shadow-blue-400 top-0 z-50 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg"
    >
      <div
        class="max-w-6xl mx-auto px-4 py-2 flex justify-between items-center"
      >
        <!-- <img :src="logos" alt="logo" class="w-40 h-40 object-contain" /> -->
        <div class="flex items-center justify-center gap-4">
          <!-- Logo -->
          <div
            class="size-12 rounded-full bg-amber-50 border-2 border-r-blue-700 border-l-pink-700 border-t-pink-700 border-b-blue-700 flex items-center justify-center"
          >
            <img
              src="../assets/image/logo.png"
              alt="logo โรงเรียนบ้านไร่วิทยา"
              class="w-16 h-16 object-contain"
            />
          </div>

          <!-- Text -->
          <div class="flex flex-col">
            <span class="text-white text-lg italic font-[Sriracha]">
              โรงเรียนบ้านไร่วิทยา
            </span>
            <span class="text-white text-xs italic font-[Sriracha]">
              สำนักงานเขตพื้นที่การศึกษาประถมศึกษาแม่ฮ่องสอน เขต 2 
            </span>
          </div>
        </div>

        <div class="space-x-4 text-white font-medium flex">
          <router-link to="/">
            <div
              class="flex gap-1 p-1 hover:border-solid hover:border-1 hover:cursor-pointer hover:bg-indigo-600 rounded-md transition duration-700 ease-in-out"
            >
              <img
                :src="homeIcon"
                alt=""
                class="w-6 h-6 object-contain text-amber-50"
              />
              <span class=""> หน้าแรก</span>
            </div>
          </router-link>

          <router-link to="/personnel">
            <div
              class="flex gap-1 p-1 hover:border-solid-1 hover:border-1 hover:cursor-pointer hover:bg-indigo-600 rounded-md transition duration-700 ease-in-out"
            >
              <img
                :src="userAccountIcon"
                alt=""
                class="w-6 h-6 object-contain text-amber-50"
              />
              <span class=""> บุคลากร</span>
            </div>
          </router-link>

          <router-link to="/public_relationster">
            <div
              class="flex gap-1 p-1 hover:border-solid-1 hover:border-1 hover:cursor-pointer hover:bg-indigo-600 rounded-md transition duration-700 ease-in-out"
            >
              <img
                :src="megaphoneIcon"
                alt=""
                class="w-6 h-6 object-contain text-amber-50"
              />
              <span class="">ประชาสัมพันธ์</span>
            </div>
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>
<script setup>

import logos from "../assets/image/logo.png";
import homeIcon from "../assets/icons/home.png";
import userAccountIcon from "../assets/icons/user-account.png";
import megaphoneIcon from "../assets/icons/megaphone.png";
</script>
<style></style>
