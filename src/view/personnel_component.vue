<template>
  <div class="pt-24 pb-12 w-full">
    <!-- Title -->
    <h2 class="่ text-2xl mt-5 text-center text-pink-600 mb-8">
      บุคลากรทางการศึกษา โรงเรียนบ้านไร่วิทยา
    </h2>

    <!-- CONTENT -->
    <div
      class="max-w-6xl mx-auto grid grid-cols-1 gap-6 content-center justify-center"
    >
      <!-- manager -->
      <div class="flex flex-row justify-center">
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
            <h3>{{ manager.name }}</h3>
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
            <h3 class="">{{ teacher.name }}</h3>
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
import krutik from "../assets/teachers_profile/krutik.jpg";
import krukai from "../assets/teachers_profile/krukai.jpg";
import kruaom from "../assets/teachers_profile/kruaom.JPG";
import krumi from "../assets/teachers_profile/krumi.jpg";
import krubird from "../assets/teachers_profile//krubird.jpg";
import krufone from "../assets/teachers_profile/krufon.jpg";
import krumod from "../assets/teachers_profile/krumod.jpg";
import manat from "../assets/teachers_profile/manat.jpg";

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
    name: "นางอ้อมฤทัย  พรชัยโรจน์",
    position: "ครูชำนาญการพิเศษ", 
    profile: kruaom,
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
    name: "นางจรรยา ทากาศ",
    position: "ครูชำนาญการพิเศษ",
    profile: krukai,
  },
  {
    name: "นางจันทนา ประเสริฐรัตนา",
    position: "ครูชำนาญการพิเศษ",
    profile: krupam,
  },
  {
    name: "นางสาวแสงมณี  ซื่อสัตย์",
    position: "ครูชำนาญการพิเศษ",
    profile: krumi,
  },
  {
    name: "นางสาวนริศรา จันทร์คำ",
    position: "ครูชำนาญการพิเศษ",
    profile: krutik,
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
  {
    name: "นายธนพล ศรีเมือง",
    position: "ครู",
    profile: krubird,
  },
  {
    name: "นางกัลยา ขจรศักดิ์ศรี",
    position: "ครู",
    profile: krufone,
  },
  {
    name: "นางสาวสุทธิพร เกตุบรรจง",
    position: "พนักงานราชการ",
    profile: krumod,
  },
  {
    name: "นายมนัส พิทยาการนุรัตน์",
    position: "ธุรการโรงเรียน",
    profile: manat,
  },
];
</script>
