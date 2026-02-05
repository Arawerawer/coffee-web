<script setup lang="ts">
function scrollToProduct() {
  document
    .getElementById("product-section")
    ?.scrollIntoView({ behavior: "smooth" });
}
</script>

<template>
  <section
    id="hero"
    class="w-full bg-cover min-h-screen bg-center bg-no-repeat flex flex-col justify-center items-center"
    style="background-image: url(&quot;/background.png&quot;)"
  >
    <div
      class="hero-content w-full flex flex-col justify-center items-center gap-10"
    >
      <header class="w-full flex flex-col justify-center items-center">
        <h1
          class="text-center text-stone-100 text-4xl font-medium font-['Playfair_Display'] leading-24"
        >
          Artisan Roasted
        </h1>

        <h1
          class="text-center text-[#d4af37] text-4xl font-medium font-['Playfair_Display'] leading-24"
        >
          Perfection
        </h1>
      </header>

      <p class="text-white text-xs font-light font-['Inter'] leading-7">
        探索精選單品豆：從產地到烘焙，淬鍊出純粹的原始風味
      </p>

      <button
        type="button"
        class="w-36 py-4 bg-[#d4af37] flex justify-center items-center gap-0.5 cursor-pointer hover:bg-[#c9a02f] transition-colors duration-200"
        @click="scrollToProduct"
      >
        <span
          class="text-center text-zinc-900 text-2xl font-medium font-['Inter'] leading-7"
        >
          探索商品
        </span>
        <img src="/icon/arrow-right.svg" alt="arrow-right" />
      </button>
    </div>
  </section>
</template>
