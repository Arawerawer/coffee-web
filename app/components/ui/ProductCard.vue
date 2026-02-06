<script setup lang="ts">
const props = defineProps<{
  title: string;
  images: string[];
}>();

const isModalOpen = ref(false);
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
      @click="isModalOpen = true"
    >
      <span
        class="text-center text-white text-sm font-medium font-['Inter'] leading-5"
      >
        查看商品
      </span>
    </button>
  </article>

  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="isModalOpen"
        class="fixed inset-0 z-50 flex justify-center items-center bg-black/70"
        @click.self="isModalOpen = false"
      >
        <div
          class="relative max-w-4xl w-full mx-4 p-6 bg-white rounded-2xl flex flex-col gap-4"
        >
          <button
            class="absolute top-3 right-3 w-8 h-8 flex justify-center items-center cursor-pointer text-gray-500 hover:text-gray-800 transition-colors duration-200"
            @click="isModalOpen = false"
          >
            <span class="text-2xl font-['Inter']">&times;</span>
          </button>

          <h3
            class="text-[#c9956b] text-xl font-normal font-['Cormorant_Garamond'] leading-7"
          >
            {{ title }}
          </h3>

          <figure class="w-full flex flex-col lg:flex-row justify-center items-center gap-4">
            <img
              v-for="(src, index) in images"
              :key="index"
              class="w-full min-w-0 h-80 rounded-2xl object-cover object-center"
              :src="src"
            />
          </figure>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
