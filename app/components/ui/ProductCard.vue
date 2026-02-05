<script setup lang="ts">
defineProps<{
  title: string;
  images: string[];
}>();
</script>

<template>
  <article
    class="w-full p-8 bg-white rounded-3xl flex flex-col justify-center items-center gap-6"
  >
    <h3
      class="w-full text-[#c9956b] text-lg font-normal font-['Cormorant_Garamond'] leading-7"
    >
      {{ title }}
    </h3>

    <figure class="w-full flex justify-center items-center gap-5">
      <img
        v-for="(src, index) in images"
        :key="index"
        class="w-full min-w-0 h-80 rounded-2xl object-cover object-center"
        :src="src"
      />
    </figure>

    <button
      class="w-full py-3 bg-[#c9956b] rounded-[10px] flex justify-center items-center cursor-pointer"
    >
      <span
        class="text-center text-white text-sm font-medium font-['Inter'] leading-5"
      >
        查看商品
      </span>
    </button>
  </article>
</template>
