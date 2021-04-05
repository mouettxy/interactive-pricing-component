<template>
  <div class="flex flex-col items-center justify-center w-full bg-white rounded-md shadow-2xl">
    <main class="flex flex-col items-center w-full gap-12 py-8">
      <div class="flex flex-col items-center w-full gap-4 px-8">
        <p class="text-sm font-bold tracking-widest uppercase text-grayish-blue">{{ formattedPageviews }} pageviews</p>
        <base-slider v-model="sliderPageviews"></base-slider>
      </div>

      <p class="flex items-center gap-2">
        <span class="text-3xl font-bold text-dark-desaturated-blue">${{ formattedPrice }}</span>
        <span class="text-xl text-grayish-blue">/ month</span>
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
    <div class="w-full border-b-2 border-light-grayish-blue"></div>
    <footer class="flex flex-col items-center w-full gap-8 py-8">
      <div>
        <div v-for="pros of companyPros" :key="pros" class="flex items-center justify-center gap-6">
          <icon-check></icon-check>
          <p class="c-text-base">{{ pros }}</p>
        </div>
      </div>
      <base-button class="px-16 py-3 font-bold bg-dark-desaturated-blue text-pale-blue rounded-3xl">
        Start my trial
      </base-button>
    </footer>
  </div>
</template>

<script>
import baseButton from './base-button.vue'
import baseSlider from './base-slider.vue'
import baseSwitch from './base-switch.vue'
import iconCheck from './icon-check.vue'

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
