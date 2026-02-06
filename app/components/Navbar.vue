<script setup lang="ts">
const isMenuOpen = ref(false);

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  isMenuOpen.value = false;
}
</script>

<template>
  <nav
    class="w-full h-24 px-7 fixed left-0 top-0 nav-bg shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] flex justify-start items-center z-10"
  >
    <h1
      class="text-neutral-800 text-3xl font-medium font-['Cormorant_Garamond'] leading-8"
    >
      Coffee Brand
    </h1>
    <!-- Desktop -->
    <ul
      class="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 justify-center items-center gap-6 whitespace-nowrap"
    >
      <li
        class="text-neutral-600 text-2xl font-normal font-['Inter'] leading-5 cursor-pointer hover:text-neutral-900 transition-colors duration-200"
        @click="scrollTo('hero')"
      >
        首頁
      </li>
      <li
        class="text-neutral-600 text-2xl font-normal font-['Inter'] leading-5 cursor-pointer hover:text-neutral-900 transition-colors duration-200"
        @click="scrollTo('product-section')"
      >
        精選商品
      </li>
      <li
        class="text-neutral-600 text-2xl font-normal font-['Inter'] leading-5 cursor-pointer hover:text-neutral-900 transition-colors duration-200"
        @click="scrollTo('coffee-section')"
      >
        精選咖啡
      </li>
      <li
        class="text-neutral-600 text-2xl font-normal font-['Inter'] leading-5 cursor-pointer hover:text-neutral-900 transition-colors duration-200"
        @click="scrollTo('about-us')"
      >
        關於我們
      </li>
      <li
        class="text-neutral-600 text-2xl font-normal font-['Inter'] leading-5 cursor-pointer hover:text-neutral-900 transition-colors duration-200"
        @click="scrollTo('contact-us')"
      >
        聯絡我們
      </li>
    </ul>
    <!-- mobile -->
    <button
      type="button"
      class="lg:hidden right-3.75 top-5.75 absolute flex flex-col gap-[12.21px] cursor-pointer"
      @click="isMenuOpen = !isMenuOpen"
    >
      <span
        class="w-14 h-1.5 bg-zinc-900 rounded-[5px] transition-all duration-200 ease-in-out"
        :class="isMenuOpen ? '-rotate-45 translate-y-[18.21px]' : ''"
      ></span>
      <span
        class="w-14 h-1.5 bg-zinc-900 rounded-[5px] transition-all duration-200 ease-in-out"
        :class="isMenuOpen ? 'opacity-0' : ''"
      ></span>
      <span
        class="w-14 h-1.5 bg-zinc-900 rounded-[5px] transition-all duration-200 ease-in-out"
        :class="isMenuOpen ? 'rotate-45 -translate-y-[18.21px]' : ''"
      ></span>
    </button>
  </nav>

  <Transition name="slide-down">
    <ul
      v-show="isMenuOpen"
      class="w-full px-2.5 py-7 left-0 top-24 fixed nav-list-bg flex flex-col justify-center items-center gap-7 overflow-hidden z-10"
    >
      <li
        class="text-neutral-600 text-2xl font-normal font-['Inter'] leading-5 cursor-pointer"
        @click="scrollTo('hero')"
      >
        首頁
      </li>

      <li
        class="text-neutral-600 text-2xl font-normal font-['Inter'] leading-5 cursor-pointer"
        @click="scrollTo('product-section')"
      >
        精選商品
      </li>

      <li
        class="text-neutral-600 text-2xl font-normal font-['Inter'] leading-5 cursor-pointer"
        @click="scrollTo('coffee-section')"
      >
        精選咖啡
      </li>

      <li
        class="text-neutral-600 text-2xl font-normal font-['Inter'] leading-5 cursor-pointer"
        @click="scrollTo('about-us')"
      >
        關於我們
      </li>

      <li
        class="text-neutral-600 text-2xl font-normal font-['Inter'] leading-5 cursor-pointer"
        @click="scrollTo('contact-us')"
      >
        聯絡我們
      </li>
    </ul>
  </Transition>
</template>

<style scoped>
.nav-bg {
  background: #ffbb53;
}

.nav-list-bg {
  background: rgba(255, 187, 83, 0.6);
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.2s ease-in-out;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
}
</style>
