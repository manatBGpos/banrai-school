<template>
  <div class="min-h-screen bg-gradient-to-br from-green-50 to-white p-6">
    <!-- Hero -->
    <div class="my-24 max-w-6xl mx-auto">
      <section class="w-full mx-auto text-center">
        <h1 class="text-4xl font-bold text-purple-800 mb-2">
          บ้านนักวิทยาศาสตร์น้อย
        </h1>
        <p class="text-gray-600 text-lg"></p>
      </section>

      <div class="mb-12 mt-2 flex justify-center">
        <div
          class="relative max-w-6xl w-full overflow-hidden rounded-2xl border-amber-50 shadow-xl"
        >
          <img
            src="../assets/image/science/4.jpg"
            alt="catibase"
            class="w-full h-[360px] object-cover"
          />

          <!-- overlay นิด ๆ ให้ดูแพง -->
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
          ></div>

          <!-- caption (ถ้าไม่อยากได้ ลบออกได้) -->
          <div class="absolute bottom-6 left-6 text-white">
            <h3 class="text-xl font-semibold">โรงเรียนบ้านไร่วิทยา</h3>
            <p class="text-sm opacity-90"></p>
          </div>
        </div>
      </div>

      <!-- 3 Rings -->
      <section class="w-full mx-auto mb-16">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div
            v-for="(item, index) in imageList"
            :key="index"
            class="p-1 cursor-pointer rounded-2xl shadow-md transition hover:shadow-xl hover:-translate-y-1 flex flex-col items-center justify-center text-center bg-white"
          >
            <img
              :src="item.image"
              alt=""
              class="w-full object-contain bg-cover rounded-2xl"
            />
          </div>
        </div>
      </section>
      <section class="w-full mx-auto">
        <h1 class="text-2xl mb-2">
          หลักการและเหตุผล
        </h1>
        <div class="grid grid-cols-1">
          <p>
            &nbsp; &nbsp; โครงการ “บ้านนักวิทยาศาสตร์น้อย ประเทศไทย”
            เป็นโครงการที่สมเด็จพระเทพรัตนราชสุดาฯ สยามบรมราชกุมารี
            ทรงพระกรุณาพระราชทานพระราชดำริให้คณะกรรมการนำไปพิจารณาริเริ่มดำเนินการนำร่องในประเทศไทย
            โดยได้ทอดพระเนตรตัวอย่างโครงการนี้
            คราวเสด็จพระราชดำเนินเยือนประเทศเยอรมนี เมื่อ ปีพ.ศ. 2552
            คณะกรรมการโครงการบ้านนักวิทยาศาสตร์น้อย ประเทศไทย
            จึงได้ติดต่อกับมูลนิธิ Haus der kleinenForscher โดยการประสานงานของ
            Mr.Thomas Tillmann เพื่อขออนุญาตนำกิจกรรมนี้มาทดลองทำในประเทศไทย
            บัดนี้ทั้งสองฝ่ายได้ทำความตกลงร่วมกันเป็นที่เรียบร้อยแล้ว
            โดยที่มาของโครงการบ้านนักวิทยาศาสตร์น้อย
            มาจากการประเมินผลนานาชาติของโครงการ PISA พบว่า
            ความรู้และทักษะทางวิทยาศาสตร์ของเด็กไทย
            ยังอยู่ในระดับต่ำกว่าค่าเฉลี่ย
            อีกทั้งยังขาดแคลนนักวิทยาศาสตร์และวิศวกรที่จะร่วมมือขับเคลื่อนและพัฒนาประเทศ
            งานวิจัยยืนยันว่า
            เราควรสร้างทัศนคติที่ดีด้านการเรียนรู้ทักษะและกระบวนการทางวิทยาศาสตร์ให้กับเด็กตั้งแต่ระดับปฐมวัย
            (อายุ 3-6 ปี)
            เพราะเป็นช่วงอายุที่มีความสามารถในการเรียนรู้และจดจำมากที่สุด
            ซึ่งโครงการได้รับการสนับสนุน
            เป็นอย่างดีจากหน่วยงานทั้งภาครัฐและเอกชน
            เพื่อส่งเสริมการสอนวิทยาศาสตร์และเทคโนโลยี
            และเป็นแนวทางการพัฒนาการเรียนการสอนวิทยาศาสตร์สำหรับเด็กปฐมวัยและนักเรียนระดับประถมศึกษา
            ดังนั้นเพื่อให้เด็กไทยมีความรู้และทักษะทางวิทยาศาสตร์
            จึงจัดโครงการบ้านนักวิทยาศาสตร์น้อยขึ้น
            เพื่อให้เด็กได้ฝึกทักษะลงมือปฏิบัติด้วยตนเองตั้งแต่ระดับปฐมวัยจนถึงระดับประถมศึกษา
            เพื่อเป็นพื้นฐานทางด้านวิทยาศาสตร์
          </p>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import image1 from "../assets/image/science/1.jpg";
import image2 from "../assets/image/science/2.jpg";
import image3 from "../assets/image/science/3.jpg";
import image4 from "../assets/image/science/4.jpg";
import image5 from "../assets/image/science/5.jpg";
import image6 from "../assets/image/science/6.jpg";
import image7 from "../assets/image/science/7.jpg";
import image8 from "../assets/image/science/8.jpg";
import image9 from "../assets/image/science/9.jpg";
import image10 from "../assets/image/science/10.jpg";



const imageList = [
  {
    image: image1,
  },
  {
    image: image2,
  },
  {
    image: image3,
  },
  {
    image: image4,
  },
  {
    image: image5,
  },
  {
    image: image6,
  },
  {
    image: image7,
  },
  {
    image: image8,
  },


];
</script>

<style scoped></style>
