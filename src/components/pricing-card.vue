<template>
  <div class="flex bg-white flex-col justify-center items-center shadow-2xl rounded-md w-full">
    <main class="py-8 flex flex-col w-full gap-12 items-center">
      <div class="w-full flex flex-col items-center gap-4 px-8">
        <p class="text-sm font-bold uppercase tracking-widest text-grayish-blue">{{ formattedPageviews }} pageviews</p>
        <base-slider v-model="sliderPageviews"></base-slider>
      </div>

      <p class="flex items-center gap-2">
        <span class="text-3xl font-bold text-dark-desaturated-blue">${{ formattedPrice }}</span>
        <span class="text-grayish-blue text-xl">/ month</span>
      </p>
      <div class="flex gap-4 text-grayish-blue">
        <span>Monthly billing</span>
        <base-switch v-model="yearlyBilling"></base-switch>
        <span class="relative block">
          Yearly billing
          <span
            class="absolute -right-14 bg-light-grayish-red text-light-red rounded-3xl px-2 py-0.5 font-bold text-sm"
          >
            -{{ discount }}%
          </span>
        </span>
      </div>
    </main>
    <div class="border-light-grayish-blue border-b-2 w-full"></div>
    <footer class="flex flex-col items-center gap-8 py-8 w-full">
      <div>
        <div v-for="pros of companyPros" :key="pros" class="flex items-center justify-center gap-6">
          <icon-check></icon-check>
          <p class="c-text-base">{{ pros }}</p>
        </div>
      </div>
      <base-button class="bg-dark-desaturated-blue text-pale-blue px-16 py-3 rounded-3xl font-bold">
        Start my trial
      </base-button>
    </footer>
  </div>
</template>

<script>
import baseButton from './base-button.vue'
import baseSlider from './base-slider.vue'
import baseSwitch from './base-switch.vue'
import iconCheck from './icon-check'

export default {
  name: 'pricing-card',

  components: { iconCheck, baseButton, baseSlider, baseSwitch },

  data: () => ({
    companyPros: ['Unlimited websites', '100% data ownership', 'Email reports'],

    price: 16,
    discount: 25,

    yearlyBilling: false,
    sliderPageviews: '50',
  }),

  computed: {
    formattedPrice() {
      return this.price.toFixed(2)
    },

    formattedPageviews() {
      return Math.round(parseInt(this.sliderPageviews) * 2).toFixed(0) + 'k'
    },
  },
}
</script>
