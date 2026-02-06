<template>
  <footer
    id="contact-us"
    class="w-full pb-14 pt-5 relative bg-amber-900 flex justify-center items-center scroll-mt-24"
  >
    <div
      class="w-full flex flex-col lg:flex lg:flex-row justify-center lg:justify-between items-center lg:px-30 gap-10"
    >
      <section
        class="flex flex-col justify-center items-center gap-5 lg:gap-10"
      >
        <h3
          class="text-amber-400 text-base font-normal font-['Tinos'] leading-7"
        >
          營業時間
        </h3>

        <p class="text-amber-100 text-sm font-normal font-['Inter'] leading-6">
          週一至週五:07:00 - 20:00
        </p>

        <p class="text-amber-100 text-sm font-normal font-['Inter'] leading-6">
          週六至週日:08:00 - 21:00
        </p>
      </section>

      <section class="flex flex-col justify-center items-center gap-5">
        <h3
          class="w-full text-center justify-start text-amber-400 text-base font-normal font-['Tinos'] leading-7"
        >
          聯絡我們
        </h3>

        <address
          class="not-italic flex flex-col justify-center items-center gap-5"
        >
          <p class="w-full flex justify-start items-center gap-4">
            <img src="/icon/mark-mobile.svg" alt="mark-mobile" />

            <span
              class="justify-start text-amber-100 text-sm font-normal font-['Inter'] leading-6"
            >
              台北市大安區咖啡街 123 號
            </span>
          </p>

          <p class="w-full flex justify-start items-center gap-4">
            <img src="/icon/phone-mobile.svg" alt="phone-mobile" />

            <span
              class="text-center justify-start text-amber-100 text-sm font-normal font-['Inter'] leading-6"
            >
              02-1234-5678
            </span>
          </p>

          <p class="w-full flex justify-start items-center gap-4">
            <img src="/icon/mail-mobile.svg" alt="mail-mobile" />

            <span
              class="justify-start text-amber-100 text-sm font-normal font-['Inter'] leading-6"
            >
              info@coffeeBrand.com
            </span>
          </p>
        </address>
      </section>
    </div>

    <small
      class="w-full left-0 right-0 bottom-0 absolute text-center justify-start text-amber-200 text-xs font-normal font-['Inter'] leading-6"
    >
      © 2026 品牌咖啡 Coffee Brand. All rights reserved.
    </small>
  </footer>
</template>
