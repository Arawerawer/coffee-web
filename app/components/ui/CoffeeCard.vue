<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  image: string;
}>();
</script>

<template>
  <article
    class="w-72 h-96 shrink-0 bg-white rounded-2xl shadow-lg flex flex-col justify-center items-center"
  >
    <img
      class="w-full h-64 rounded-tl-2xl rounded-tr-2xl object-cover object-center"
      :src="image"
    />

    <figcaption
      class="w-full p-6 flex flex-col justify-center items-start gap-2"
    >
      <h3
        class="w-full justify-start text-[#7b3306] text-2xl font-normal font-['Tinos'] leading-8"
      >
        {{ title }}
      </h3>
      <p
        class="w-full justify-start text-gray-600 text-sm font-normal font-['Inter'] leading-6"
      >
        {{ description }}
      </p>
    </figcaption>
  </article>
</template>
