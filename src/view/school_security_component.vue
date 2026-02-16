<template>
  <div class="min-h-screen bg-gradient-to-br from-green-50 to-white p-6">
    <!-- Hero -->
    <div class="my-24 max-w-6xl mx-auto">
      <section class="w-full mx-auto text-center">
        <h1 class="text-4xl font-bold text-blue-700 mb-2">สถานศึกษาสีขาว</h1>
        <p class="text-gray-600 text-lg">
  
        </p>
      </section>

      <div class="mb-12 mt-2 flex justify-center">
        <div
          class="relative max-w-6xl w-full overflow-hidden rounded-2xl border-amber-50 shadow-xl"
        >
          <img
            src="../assets/image/security.jpg"
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
        <h1 class="text-2xl mb-2">หลักการและเหตุผล</h1>
        <div class="grid grid-cols-1">
          <p>
            &nbsp; &nbsp; จากสภาพสังคมที่เปลี่ยนแปลงไปอย่างมากในปัจจุบัน
            การสื่อสารเทคโนโลยีต่างๆ ส่งผลกระทบต่อประชาชนทั้งในเชิงบวกและเชิงลบ
            ซึ่งปรากฏปัญหาให้เห็นมากมาย ทั้งทางด้านเศรษฐกิจ ด้านสังคม
            และด้านอื่นๆ โดยเฉพาะอย่างยิ่งปัญหาการแพร่ระบาดของยาเสพติด
            อันนำมาซึ่งปัญหาครอบครัวที่เกิดความทุกข์ ความวิตกกังวล ความเครียด
            มีการปรับตัวที่ไม่เหมาะสม หรืออื่นๆ
            ความสำเร็จที่เกิดขึ้นจากการพัฒนานักเรียนให้เป็นคนดี
            มีคุณธรรมตามความคาดหวังนั้น
            ต้องอาศัยความร่วมมือจากผู้ที่เกี่ยวข้องทุกฝ่าย
            โดยเฉพาะบุคลากรทางการศึกษาทุกคนในสถานศึกษา ซึ่งมีครู อาจารย์
            เป็นหลักสำคัญในการดำเนินการพัฒนาคุณภาพชีวิตของนักเรียน นักศึกษา
            ให้เติบโตงดงามเป็นบุคคลที่มีคุณค่าของสังคม การพัฒนานักเรียน
            ให้เป็นบุคคลที่มีคุณภาพทั้งด้านร่างกาย จิตใจ และสติปัญญา มีความรู้
            ความสามารถ และมีคุณธรรมจริยธรรม
            ดำเนินวิถีชีวิตที่เป็นสุขตามที่สังคมมุ่งหวัง
            โดยผ่านกระบวนการทางการศึกษาที่สถานศึกษาทุกแห่งต้องดำเนินการจัดการศึกษาตามนโยบายของกระทรวงศึกษาธิการที่ต้องการ
            ให้เยาวชน เป็นคนเก่ง คนดี ดำรงตนให้อยู่ในสังคมอย่างมีความสุข
            นอกจากจัดกิจกรรมที่ส่งเสริมและสนับสนุนให้นักเรียน นักศึกษา
            ได้รับกระบวนการเรียนรู้แล้ว การป้องกันและช่วยเหลือแก้ไขปัญหาต่างๆ
            ที่เกิดขึ้นจากปัจจัยเสี่ยงรอบสถานศึกษาที่มีพฤติกรรมไปเกี่ยวข้องกับยาเสพติด
            ร้านเกม การพนัน หนีเรียน ทะเลาะวิวาท ก่ออาชญากรรม
            เป็นปัญหาสังคมให้ผู้ปกครอง ครู อาจารย์ ทุกคน ที่เกี่ยวข้อง
            ต้องเข้าไปช่วยเหลือและแก้ไขปัญหาไม่ให้มีพฤติกรรมเสี่ยง
            ซึ่งมาจากปัจจัยเสี่ยงและผลกระทบจากแหล่งอบายมุข โรงเรียนบ้านไร่วิทยา
            ตระหนักถึงความสำคัญ ตลอดจนการป้องกันและแก้ไขปัญหาดังกล่าวข้างต้น
            มีความจำเป็นและสำคัญอย่างเร่งด่วนที่ต้องดำเนินการ
            โดยหวังว่าโครงการสถานศึกษาสีขาว
            จะช่วยให้โรงเรียนสามารถพัฒนานักเรียนให้เป็นคนเก่ง คนดี
            และอยู่ในสังคมอย่างมีความสุข
          </p>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import image1 from "../assets/image/security/1.jpg";
import image2 from "../assets/image/security/2.jpg";
import image3 from "../assets/image/security/3.jpg";
import image4 from "../assets/image/security/4.jpg";
import image5 from "../assets/image/security/5.jpg";
import image6 from "../assets/image/security/6.jpg";
import image7 from "../assets/image/security/7.jpg";
import image8 from "../assets/image/security/8.jpg";
import image9 from "../assets/image/security/9.jpg";
import image10 from "../assets/image/security/10.jpg";
import image11 from "../assets/image/security/11.jpg";
import image12 from "../assets/image/security/12.jpg";

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
  {
    image: image9,
  },
  {
    image: image10,
  },
  {
    image: image11,
  },
  {
    image: image12,
  },
];
</script>

<style scoped></style>
