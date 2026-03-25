<template>
  <section class="max-w-6xl mt-24 mx-auto px-6 py-12">
    <!-- Title -->
    <div class="text-center mb-10">
      <h1 class="text-3xl md:text-4xl font-bold text-pink-800">
        ประชาสัมพันธ์โรงเรียน
      </h1>
      <p class="mt-2 text-gray-500">โรงเรียนบ้านไร่วิทยา</p>
    </div>

    <!-- Content -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <!-- Vinyl Image -->
      <div class="flex justify-center">
        <img
          :src="image3"
          alt="ประชาสัมพันธ์กิจกรรม"
          class="rounded-2xl shadow-lg max-h-[420px] object-cover"
        />
      </div>

      <!-- Description -->
      <div>
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">
          รับสมัครนักเรียน ประจำปีการศึกษา 2569
        </h2>

        <p class="text-gray-600 leading-relaxed mb-6">
          โรงเรียนบ้านไร่วิทยา เปิดรับสมัครนักเรียนประจำปีการศึกษา 2569 <br />
          ระดับชั้น อนุบาล 1 : วันที่ 9 - 12 เดือน กุมภาพันธ์ พ.ศ. 2569 <br />
          ระดับชั้น ประถมศึกษาปีที่ 1 : วันที่ 15 - 19 เดือน กุมภาพันธ์ พ.ศ.
          2569 <br />
          ระดับชั้น มัธยมศึกษาปีที่ 1 : วันที่ 19 - 23 เดือน มีนาคม พ.ศ. 2569
          <br />
          หมายเหตุ : ตั้งแต่เวลา 08.00 น. - 16.00 น. (ไม่เว้นวันหยุดราชการ)
        </p>

        <!-- Info -->
        <ul class="space-y-2 text-gray-700">
          <li>📍 สถานที่: โรงเรียนบ้านไร่วิทยา</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import image3 from "../assets/image/relations/3.jpg";
</script>
