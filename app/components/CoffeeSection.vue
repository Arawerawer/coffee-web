<template>
  <section
    id="coffee-section"
    class="w-full py-15 bg-[#ffffff] flex flex-col justify-center items-center gap-14 scroll-mt-24"
  >
    <header class="w-full flex flex-col justify-center items-center gap-5">
      <h2
        class="w-full text-center text-[#7b3306] text-3xl font-normal font-['Tinos'] leading-[48px]"
      >
        精選咖啡
      </h2>
      <p
        class="w-full text-center text-gray-600 text-sm font-normal font-['Inter'] leading-7"
      >
        每一款咖啡都經過精心調配，為您帶來獨特的味覺體驗
      </p>
    </header>

    <ul
      class="w-full px-10 py-2 flex justify-start items-center gap-6 overflow-x-auto no-scrollbar"
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
    </ul>
  </section>
</template>
