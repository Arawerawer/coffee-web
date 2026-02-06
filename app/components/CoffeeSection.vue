<script setup lang="ts">
const listRef = ref<HTMLElement | null>(null);
const canScrollLeft = ref(false);
const canScrollRight = ref(false);

function updateScrollState() {
  if (listRef.value) {
    const { scrollLeft, scrollWidth, clientWidth } = listRef.value;
    canScrollLeft.value = scrollLeft > 0;
    canScrollRight.value = scrollLeft + clientWidth < scrollWidth - 1;
  }
}

function scrollLeftFn() {
  listRef.value?.scrollBy({ left: -334, behavior: "smooth" });
}

function scrollRightFn() {
  listRef.value?.scrollBy({ left: 334, behavior: "smooth" });
}

onMounted(() => {
  updateScrollState();
  listRef.value?.addEventListener("scroll", updateScrollState);
  window.addEventListener("resize", updateScrollState);

  onUnmounted(() => {
    listRef.value?.removeEventListener("scroll", updateScrollState);
    window.removeEventListener("resize", updateScrollState);
  });
});
</script>

<template>
  <section
    id="coffee-section"
    class="w-full min-h-screen py-14 bg-[#ffffff] flex flex-col justify-center items-center gap-14 scroll-mt-24"
  >
    <header class="w-full flex flex-col justify-center items-center gap-5">
      <h2
        class="w-full text-center text-[#7b3306] text-3xl lg:text-5xl font-normal font-['Tinos'] leading-12"
      >
        精選咖啡
      </h2>
      <p
        class="w-full text-center text-gray-600 text-sm lg:text-xl font-normal font-['Inter'] leading-7"
      >
        每一款咖啡都經過精心調配，為您帶來獨特的味覺體驗
      </p>
    </header>

    <!-- Card list wrapper with buttons -->
    <div class="w-full relative">
      <!-- Left Arrow Button -->
      <button
        v-if="canScrollLeft"
        type="button"
        class="hidden lg:flex absolute left-16 top-1/2 -translate-y-1/2 pt-3.5 pr-5 pb-3.5 pl-4 justify-center items-center rounded-full bg-[#C9956B] cursor-pointer"
        @click="scrollLeftFn"
      >
        <img src="/icon/white-arrow-left.svg" alt="scroll left" />
      </button>

      <!-- Right Arrow Button -->
      <button
        v-if="canScrollRight"
        type="button"
        class="hidden lg:flex absolute right-16 top-1/2 -translate-y-1/2 pt-3.5 pr-4 pb-3.5 pl-5 justify-center items-center rounded-full bg-[#C9956B] cursor-pointer"
        @click="scrollRightFn"
      >
        <img src="/icon/white-arrow-right.svg" alt="scroll right" />
      </button>

      <ul
        ref="listRef"
        class="w-full px-10 py-2 flex justify-start items-center gap-6 lg:gap-11.5 overflow-x-auto no-scrollbar"
      >
        <li>
          <UiCoffeeCard
            title="冷萃咖啡"
            description="低溫長時萃取，口感順滑，帶有自然甜味"
            image="/images/coffee-1.jpg"
          />
        </li>
        <li>
          <UiCoffeeCard
            title="拿鐵咖啡"
            description="濃縮咖啡、蒸奶與奶泡的完美比例，香氣迷人"
            image="/images/coffee-2.jpg"
          />
        </li>
        <li>
          <UiCoffeeCard
            title="義式濃縮"
            description="濃郁香醇，口感厚實，是義大利咖啡文化的精髓"
            image="/images/coffee-3.jpg"
          />
        </li>
        <li>
          <UiCoffeeCard
            title="卡布奇諾"
            description="濃縮咖啡、蒸奶與奶泡的完美比例，香氣迷人"
            image="/images/coffee-4.jpg"
          />
        </li>
        <li>
          <UiCoffeeCard
            title="拿鐵咖啡"
            description="濃縮咖啡、蒸奶與奶泡的完美比例，香氣迷人"
            image="/images/coffee-2.jpg"
          />
        </li>
        <li>
          <UiCoffeeCard
            title="冷萃咖啡"
            description="低溫長時萃取，口感順滑，帶有自然甜味"
            image="/images/coffee-1.jpg"
          />
        </li>
        <li>
          <UiCoffeeCard
            title="義式濃縮"
            description="濃郁香醇，口感厚實，是義大利咖啡文化的精髓"
            image="/images/coffee-3.jpg"
          />
        </li>
      </ul>
    </div>
  </section>
</template>
