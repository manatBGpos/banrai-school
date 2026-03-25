<template>
  <div class="min-h-screen bg-[#F5F3EE] font-sarabun pt-20 text-center">
    <!-- Header -->
    <h1 class="text-4xl font-semibold">จดหมายข่าว</h1>

    <!-- Grid -->
    <div
      class="grid max-w-6xl mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center mt-8"
    >
      <div
        v-for="(item, index) in newsLists"
        :key="index"
        @click="openPopup(item)"
        class="w-64 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
      >
        <!-- Cover Image -->
        <img :src="item.images[0]" class="w-full object-cover" />

        <!-- Text -->
        <div class="p-3 text-left">
          <h3 class="text-sm font-semibold line-clamp-2">
            {{ item.title }}
          </h3>
          <p class="text-xs text-gray-500 mt-1">
            {{ item.created }}
          </p>
        </div>
      </div>
    </div>

    <!-- POPUP -->
    <div
      v-if="isOpen"
      class="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
      @click.self="closePopup"
    >
      <div
        class="bg-white rounded-2xl w-[90%] max-w-xl max-h-[90vh] flex flex-col overflow-hidden"
      >
        <!-- Header -->
        <div class="p-4 border-b flex justify-between items-center">
          <h2 class="text-lg font-bold">
            {{ selectedItem?.title }}
          </h2>

          <button
            @click="closePopup"
            class="text-gray-500 hover:text-red-500 text-xl"
          >
            ✕
          </button>
        </div>

        <!-- Content (Scrollable) -->
        <div class="overflow-y-auto p-4 space-y-3">
          <!-- Multiple Images -->
          <img
            v-for="(img, i) in selectedItem?.images"
            :key="i"
            :src="img"
            class="w-full object-cover rounded-lg"
          />

          <p class="text-gray-500 text-sm">
            {{ selectedItem?.created }}
          </p>

          <p class="text-gray-700 leading-relaxed">
            {{ selectedItem?.detail }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import newsletter2 from "../assets/news_letter/2.png";
import newsletter3 from "../assets/news_letter/3.jpg";
import newsletter4 from "../assets/news_letter/4.jpg";
import newsletter6 from "../assets/news_letter/6.jpg";
import newsletter7 from "../assets/news_letter/7.jpg";
import newsletter8 from "../assets/news_letter/8.jpg";
import imageSpeciel from "../assets/news_letter/image_spectiel.jpg";

export default {
  data() {
    return {
      isOpen: false,
      selectedItem: null,

      newsLists: [
        {
          title: "การน้อมนำพระบรมราโชบายด้านการศึกษา ของในหลวงรัชกาลที่10ฯ",
          created: "14 มีนาคม 2569",
          images: [newsletter2, imageSpeciel],
          detail:
            "วันที่ 14 มีนาคม 2569 โรงเรียนบ้านไร่วิทยา นำโดยนางสาวสิยาพัฐ กันทะเครือ ผู้อำนวยการโรงเรียน พร้อมด้วยคณะครูและนักเรียน ได้ดำเนินการในการน้อมนำพระบรมราโชบายด้านการศึกษาในหลวงรัชกาลที่ 10 สู่การปฏิบัติ ด้านการมีพื้นฐานชีวิตที่มั่นคง และมีคุณธรรม โดยเน้นการพัฒนาผู้เรียนให้เป็นคนดี คนเก่ง และมีความสุข",
        },

        {
          title: "กิจกรรมทอดผ้าป่าสามัคคีเพื่อการศึกษา",
          created: "10 มีนาคม 2569",
          images: [newsletter3],
          detail: "เพื่อสนับสนุนงบประมาณด้านการศึกษาและพัฒนาโรงเรียน",
        },

        {
          title: "เปิดบ้านคนดี มีอาชีพ สู่วิถีพอเพียง",
          created: "10 มีนาคม 2569",
          images: [newsletter4],
          detail: "กิจกรรมแสดงผลงานนักเรียนและส่งเสริมอาชีพ",
        },

        {
          title: "การประชุมคณะครู",
          created: "10 มีนาคม 2569",
          images: [newsletter6],
          detail: "วางแผนพัฒนาการเรียนการสอน",
        },

        {
          title: "จุดประกายความกล้า",
          created: "10 มีนาคม 2569",
          images: [newsletter7],
          detail: "กิจกรรมพัฒนาทักษะชีวิตและความกล้าแสดงออก",
        },

        {
          title: "วันแม่แห่งชาติ",
          created: "7 สิงหาคม 2568",
          images: [newsletter8],
          detail: "กิจกรรมแสดงความกตัญญูต่อแม่",
        },
      ],
    };
  },

  methods: {
    openPopup(item) {
      this.selectedItem = item;
      this.isOpen = true;

      // กัน scroll background
      document.body.style.overflow = "hidden";
    },

    closePopup() {
      this.isOpen = false;
      document.body.style.overflow = "auto";
    },
  },
};
</script>
