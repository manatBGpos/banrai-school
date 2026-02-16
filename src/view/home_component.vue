<template>
  <section id="home" class="py-12 pt-24 bg-white">
    <div
      class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
    >
      <div>
        <img
          src="https://lh3.googleusercontent.com/gps-cs-s/AHVAwepMDlOTylztjg6o-ytz7LumID7AKnHAda4_TI2-b9YoPDP_yMb5AeyZ0DF3Zt2LL_NPstv3KhyHrJALhokkZjvK2bZWlCmpj4rxvq0c0ajO_-U5vOvWyPYcG49z6UgwrIiA7fA4AQ=s1360-w1360-h1020-rw"
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
            &nbsp; &nbsp;โรงเรียนบ้านไร่วิทยาก่อตั้งเมื่อวันที่ 23 มิถุนายน
            พ.ศ.2518
            ปัจจุบันเปิดให้บริการในการจัดการเรียนการสอนตั้งแต่ระดับชั้นปฐมวัย
            ระดับประถมศึกษาและระดับมัธยมศึกษาตอนต้นนักเรียนร้อยละ
            90เป็นชาวเขาเผ่ากะเหรี่ยง นับถือศาสนาคริสต์ มีอาคารเรียนจำนวน 4 หลัง
            ในอดีตโรงเรียนได้รับงบประมาณสนับสนุนจากสำนักงานการประถมศึกษาแห่งชาติ
            จัดการเรียนการสอนตั้งแต่ระดับชั้นอนุบาล 2 ถึงระดับประถมศึกษาปีที่ 6
            ต่อมาเมื่อปี
            พ.ศ.2542ได้เปิดทำการสอนในระดับชั้นมัธยมศึกษาปีที่1โดยเป็นห้องเรียนขยายโอกาสของโรงเรียนไทยรัฐวิทยา33(บ้านทุ่งพร้าว)ตั้งแต่ปีการศึกษา2548โรงเรียนบ้านไร่วิทยาได้รับอนุมัติจากสำนักงานการศึกษาขั้นพื้นให้จัดการเรียนการสอนในระดับช่วงชั้นที่
            3 (ชั้นมัธยมศึกษาปีที่ 1–3) และเปิดสอนแบบขยายโอกาสมาเป็นระยะเวลา 12
            ปีการศึกษา พร้อมมีนักเรียนประจำพักอาศัยในหอพักของโรงเรียน
            ตั้งแต่ปีการศึกษา2547 จนถึงปัจจุบัน
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
      กิจกรรม และ โครงการ
    </h2>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4"
    >
      <router-link to="/ecobalane">
        <div
          class="p-6 cursor-pointer rounded-xl shadow hover:shadow-lg transition flex flex-col items-center justify-center gap-2"
        >
          <img :src="sprout" class="w-12 h-12" />
          <h3 class="text-md font-semibold text-center">เศษกิจพอเพียง</h3>
        </div>
      </router-link>
      <router-link to="/school_security">
        <div
          class="p-6 cursor-pointer rounded-xl shadow hover:shadow-lg transition flex flex-col items-center justify-center gap-2"
        >
          <img :src="schoolsecurity" alt="" class="w-12 h-12" />
          <h3 class="text-md font-semibold text-center">สถานศึกษาสีขาว</h3>
        </div>
      </router-link>
      <router-link to="/science">
        <div
          class="p-6 cursor-pointer rounded-xl shadow hover:shadow-lg transition flex flex-col items-center justify-center gap-2"
        >
          <img :src="chemistry" alt="" class="w-12 h-12" />
          <h3 class="text-md font-semibold text-center">
            บ้านนักวิทยาศาสตร์น้อย
          </h3>
        </div>
      </router-link>

      ``
    </div>
  </section>
</template>
<script setup>
import sprout from "../assets/image/sprout.png";
import schoolsecurity from "../assets/image/school.png";
import chemistry from "../assets/image/chemistry.png";
</script>

<style></style>
