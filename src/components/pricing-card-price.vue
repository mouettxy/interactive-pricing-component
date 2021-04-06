<template>
  <p class="flex items-center gap-2">
    <span class="text-3xl font-bold text-dark-desaturated-blue">${{ calculatedPrice }}</span>
    <span class="text-xl text-grayish-blue">/ month</span>
  </p>
</template>

<script>
export default {
  name: 'pricing-card-price',

  props: {
    pageviews: {
      required: true,
      type: Number,
    },

    isYearlyBilling: {
      required: true,
      type: Boolean,
    },
  },

  computed: {
    calculatedPrice() {
      let price = 8

      if (this.pageviews >= 10 && this.pageviews < 50) {
        price = 8
      } else if (this.pageviews >= 50 && this.pageviews < 100) {
        price = 12
      } else if (this.pageviews >= 100 && this.pageviews < 500) {
        price = 16
      } else if (this.pageviews >= 500 && this.pageviews < 1000) {
        price = 24
      } else if (this.pageviews >= 1000) {
        price = 36
      }

      if (this.isYearlyBilling) {
        price -= price * 0.25
      }

      return price.toFixed(2)
    },
  },
}
</script>
