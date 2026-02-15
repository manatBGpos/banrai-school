<script setup>
import Footer from "./components/footer.vue";
import Nav_bar from "./components/nav_bar.vue";
</script>

<template>
  <div id="app" class="flex flex-col min-h-screen">
    <Nav_bar></Nav_bar>
    <!-- NAV -->
    <main class="flex-grow">
      <div>
        <router-view></router-view>
      </div>
    </main>
  </div>
  <div><Footer></Footer></div>
</template>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
