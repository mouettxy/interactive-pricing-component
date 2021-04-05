<template>
  <main class="bg-background-pattern bg-no-repeat bg-contain flex h-full justify-center items-center flex-col">
    <pricing-title></pricing-title>
    <div class="pricing-card--wrapper">
      <pricing-card></pricing-card>
    </div>
    <!-- 
      Sign-up for our 30-day trial. No credit card required. Pageviews $ /month Monthly
    Billing Yearly Billing 25% discount Unlimited websites 100% data ownership Email reports Start my trial

    <div class="attribution">
      Challenge by
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>
      . Coded by
      <a href="#">Your Name Here</a>
      .
    </div>
    -->
  </main>
</template>

<script>
import pricingTitle from './components/pricing-title.vue'
import pricingCard from './components/pricing-card.vue'

export default {
  name: 'app',
  components: { pricingTitle, pricingCard },
}
</script>

<style>
.pricing-card--wrapper {
  width: 80%;
}
</style>
