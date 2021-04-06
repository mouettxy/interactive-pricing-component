<template>
  <main class="flex flex-col items-center justify-center h-full bg-no-repeat bg-100-50 bg-background-pattern lg:gap-4">
    <pricing-title></pricing-title>
    <div class="flex justify-center lg:min-w-[35%] sm:min-w-[85%]">
      <pricing-card></pricing-card>
    </div>
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
