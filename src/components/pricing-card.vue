<template>
  <div class="flex flex-col items-center justify-center w-full bg-white rounded-md shadow-xl">
    <main class="flex flex-col items-center w-full gap-12 py-8">
      <div class="flex flex-col items-center w-full gap-4 px-8 lg:flex-row lg:justify-between">
        <p class="text-sm font-bold tracking-widest uppercase text-grayish-blue">{{ formattedPageviews }} pageviews</p>
        <pricing-card-price
          class="sm:hidden"
          :pageviews="sliderPageviews"
          :is-yearly-billing="yearlyBilling"
        ></pricing-card-price>
      </div>

      <div class="w-full px-8">
        <base-slider v-model="sliderPageviews" />
      </div>

      <pricing-card-price
        class="lg:hidden"
        :pageviews="sliderPageviews"
        :is-yearly-billing="yearlyBilling"
      ></pricing-card-price>

      <div class="flex items-center gap-4 sm:text-sm text-grayish-blue">
        <span>Monthly billing</span>
        <base-switch v-model="yearlyBilling"></base-switch>
        <div class="relative block">
          <span>Yearly billing</span>
          <span
            class="sm:text-xs bg-light-grayish-red text-light-red absolute whitespace-nowrap left-[calc(100%+1rem)] rounded-3xl px-2 py-0.5 font-bold text-sm"
          >
            -{{ discount }}%
            <span class="sm:hidden">&nbsp;discount</span>
          </span>
        </div>
      </div>
    </main>

    <div class="w-full border-b-2 border-light-grayish-blue"></div>
    <footer class="flex flex-col items-center w-full gap-8 py-8 lg:flex-row lg:px-8 lg:justify-between">
      <div>
        <div v-for="pros of companyPros" :key="pros" class="flex items-center justify-center gap-6 lg:justify-start">
          <icon-check></icon-check>
          <p class="c-text-base">{{ pros }}</p>
        </div>
      </div>

      <base-button
        class="px-16 py-3 font-bold transition-colors bg-dark-desaturated-blue text-pale-blue rounded-3xl focus:outline-none hover:text-white hover:bg-dark-desaturated-blue"
      >
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
import pricingCardPrice from './pricing-card-price.vue'

import { computed, ref } from 'vue'

export default {
  name: 'pricing-card',

  components: { iconCheck, baseButton, baseSlider, baseSwitch, pricingCardPrice },

  setup() {
    const discount = ref(25)
    const yearlyBilling = ref(false)
    const sliderPageviews = ref(50)
    const companyPros = ['Unlimited websites', '100% data ownership', 'Email reports']

    const formattedPageviews = computed(() => {
      const calculated = Math.round(sliderPageviews.value)

      if (calculated >= 1000) {
        return `${calculated / 1000}m`
      }

      return `${calculated}k`
    })

    return {
      discount,
      yearlyBilling,
      sliderPageviews,
      companyPros,
      formattedPageviews,
    }
  },
}
</script>
