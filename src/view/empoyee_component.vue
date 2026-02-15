<template>
  <div class="pt-24 pb-12 w-full">
    <!-- Title -->
    <h2 class="text-3xl mt-5 font-bold text-center text-pink-600 mb-8">
      บุคลากร
    </h2>

    <!-- CONTENT -->
    <div
      class="max-w-6xl mx-auto grid grid-cols-1 gap-6 content-center justify-center"
    >
      <!-- manager -->
      <div class="flex flex-row  justify-center">
        <div
       
          class="w-64 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
        >
          <div>
            <img
              :src="manager.profile"
              alt="profile"
              class="w-full h-76 object-cover select-none pointer-events-none"
            />
          </div>
          <div class="p-1 text-center">
            <h3 class="text-md font-bold">{{ manager.name }}</h3>
            <p class="text-gray-500">{{ manager.position }}</p>
          </div>
        </div>
      </div>

      <!-- ครู -->

      <!-- Cards -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center"
      >
        <div
          v-for="(teacher, index) in teachers"
          :key="index"
          class="w-64 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
        >
          <div>
            <img
              :src="teacher.profile"
              alt="profile"
              class="w-full h-76 object-cover select-none pointer-events-none"
            />
          </div>
          <div class="p-1 text-center">
            <h3 class="text-md font-bold">{{ teacher.name }}</h3>
            <p class="text-gray-500">{{ teacher.position }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import managerProfile from "../assets/teachers_profile/manager.jpg";
import kruranee from "../assets/teachers_profile/kruranee.jpg";
import krukan from "../assets/teachers_profile/krukan.jpg";
import kruja from "../assets/teachers_profile/kruja.jpg";
import krupam from "../assets/teachers_profile/krupam.jpg";
import krusai from "../assets/teachers_profile/krusai.jpg";
import krunem from "../assets/teachers_profile/krunem.jpg";

const manager = {
  name: "นางสาวสิยาพัฐ กันทะเครือ",
  position: "ผู้อำนวยการโรงเรียนบ้านไร่วิทยา",
  profile: managerProfile,
};
const teachers = [
  {
    name: "นางราณี ถาทวี",
    position: "ครูชำนาญการพิเศษ",
    profile: kruranee,
  },
  {
    name: "นางกาญจนา ปวงคำ",
    position: "ครูชำนาญการพิเศษ",
    profile: krukan,
  },
  {
    name: "นางสาวณัฐรดา ปิ่นประยูร",
    position: "ครูชำนาญการพิเศษ",
    profile: kruja,
  },
  {
    name: "นางจันทนา ประเสริฐรัตนา",
    position: "ครูชำนาญการพิเศษ",
    profile: krupam,
  },
  {
    name: "นางสาวนริศรา จันทร์คำ",
    position: "ครูชำนาญการพิเศษ",
    profile: krusai,
  },
  {
    name: "นางสาววัชราวลี ยุวรัตนพร",
    position: "ครูชำนาญการ",
    profile: krunem,
  },
];
</script>
