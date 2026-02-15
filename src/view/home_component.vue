<template>
  
  <section id="home" class="py-12 pt-24 bg-white">
    <div
      class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
    >
      <div>
        <img
          src="https://cdn.chiangmainews.co.th/wp-content/uploads/2021/11/21161620/PT-%E0%B8%9B%E0%B8%81%E0%B9%80%E0%B8%A7%E0%B8%9B-2021-v-Recovered.jpg"
          alt="โรงเรียนบ้านไร่วิทยา"
          class="w-full h-80 md:h-[420px] object-cover rounded-2xl shadow-md"
        />
      </div>

      <div class="max-w-2xl col0">
        <h1 class="text-3xl md:text-4xl font-bold text-blue-600 mb-8">
          โรงเรียนบ้านไร่วิทยา
        </h1>

        <div class="space-y-6 text-gray-700 leading-8 text-justify">
          <p>
            &nbsp; &nbsp;โรงเรียนบ้านไร่วิทยา ก่อตั้งเมื่อวันที่ 23 มิถุนายน
            พ.ศ. 2518 ปัจจุบันเปิดให้บริการจัดการเรียนการสอนตั้งแต่ระดับปฐมวัย
            ระดับประถมศึกษา และระดับมัธยมศึกษาตอนต้น นักเรียนร้อยละ 90
            เป็นชาวเขาเผ่ากะเหรี่ยง นับถือศาสนาคริสต์ มีอาคารเรียนจำนวน 4หลัง
            <br />
            &nbsp; &nbsp;
            ในอดีตโรงเรียนได้รับงบประมาณสนับสนุนจากสำนักงานการประถมศึกษาแห่งชาติ
            จัดการเรียนการสอนตั้งแต่ระดับชั้นอนุบาล 2 ถึงระดับประถมศึกษาปีที่ 6
            ต่อมาเมื่อปี พ.ศ. 2542
            ได้เปิดทำการสอนในระดับชั้นมัธยมศึกษาปีที่1โดยเป็นห้องเรียนขยายโอกาสของโรงเรียนไทยรัฐวิทยา
            33 (บ้านทุ่งพร้าว) ตั้งแต่ปีการศึกษา 2548
            โรงเรียนบ้านไร่วิทยาได้รับอนุมัติจากสำนักงานการศึกษาขั้นพื้นฐาน
            ให้จัดการเรียนการสอนในระดับช่วงชั้นที่ 3 (ชั้นมัธยมศึกษาปีที่ 1–3)
            และเปิดสอนแบบขยายโอกาสมาเป็นระยะเวลา 12 ปีการศึกษา
            พร้อมมีนักเรียนประจำพักอาศัยในหอพักของโรงเรียน ตั้งแต่ปีการศึกษา
            2547 จนถึงปัจจุบัน
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- ACTIVITY -->
  <section id="activity" class="py-5 grid-cols-1 md:grid-cols-3">
    <h2
      class="text-3xl font-bold text-center mx-auto text-pink-600/100 mb-5 max-w-6xl"
    >
      กิจกรรม
    </h2>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4"
    >
      <router-link to="">
        <div
          class="p-6 cursor-pointer rounded-xl shadow hover:shadow-lg transition flex flex-col items-center justify-center gap-2"
        >
          <img :src="sprout" class="w-12 h-12" />
          <h3 class="text-xl font-semibold text-center">เศษกิจพอเพียง</h3>
        </div>
      </router-link>
      <div
        class="p-6 cursor-pointer rounded-xl shadow hover:shadow-lg transition flex flex-col items-center justify-center gap-2"
      >
        <img :src="schoolsecurity" alt="" class="w-12 h-12" />
        <h3 class="text-xl font-semibold text-center">สถานศึกษาปลอดภัย</h3>
      </div>
      <div
        class="p-6 cursor-pointer rounded-xl shadow hover:shadow-lg transition flex flex-col items-center justify-center gap-2"
      >
        <!-- <img src="../assets/images/school.png" alt="" class="w-12 h-12" /> -->
        <h3 class="text-xl font-semibold text-center">สถานศึกษาปลอดภัย</h3>
      </div>
      <div
        class="p-6 cursor-pointer rounded-xl shadow hover:shadow-lg transition flex flex-col items-center justify-center gap-2"
      >
        <!-- <img src="../assets/image/school.png" alt="" class="w-12 h-12" /> -->
        <h3 class="text-xl font-semibold text-center">เศษกิจพอเพียง</h3>
      </div>
      ``
    </div>
  </section>
</template>
<script setup>
import sprout from "../assets/image/sprout.png";
import schoolsecurity from "../assets/image/school.png";
</script>

<style></style>
