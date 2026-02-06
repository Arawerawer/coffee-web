<template>
  <section
    id="product-section"
    class="w-full py-15 bg-[#b4b8a8] flex flex-col justify-center items-center gap-8 scroll-mt-24"
  >
    <h2
      class="text-[#6b4423] text-3xl lg:text-5xl font-normal font-['Cormorant_Garamond'] leading-12"
    >
      精選商品
    </h2>

    <ul
      class="w-full px-3 lg:px-18 grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-5"
    >
      <li>
        <UiProductCard
          title="巴西 聖保羅莊園"
          :images="['/images/Brazil-1.jpg', '/images/Brazil-2.jpg']"
        />
      </li>

      <li>
        <UiProductCard
          title="哥倫比亞 安蒂奧基亞"
          :images="['/images/Colombia-1.jpg', '/images/Colombia-2.jpg']"
        />
      </li>
      <li>
        <UiProductCard
          title="衣索比亞 耶加雪菲"
          :images="['/images/Ethiopia-1.jpg', '/images/Ethiopia-2.jpg']"
        />
      </li>
      <li>
        <UiProductCard
          title="肯亞 AA 頂級"
          :images="['/images/Kenya-1.jpg', '/images/Kenya-2.jpg']"
        />
      </li>
    </ul>
  </section>
</template>
