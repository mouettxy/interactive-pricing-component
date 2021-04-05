<template>
  <div class="relative w-full">
    <input
      type="range"
      min="1"
      max="100"
      value="40"
      v-model="model"
      class="slider absolute pointer-events-none appearance-none z-20 h-2 w-full opacity-0 cursor-pointer"
      :id="sliderId"
    />
    <div class="relative w-full z-10 h-2">
      <div class="absolute z-10 inset-0 rounded-3xl bg-light-grayish-blue"></div>

      <div class="absolute z-20 top-0 bottom-0 rounded-md bg-soft-cyan" :style="{ width: triggerOffset }"></div>

      <div
        class="absolute z-30 w-8 h-8 top-0 left-0 bg-strong-cyan rounded-full -mt-3 bg-icon-slider bg-no-repeat bg-center"
        :style="{ left: triggerOffset }"
      ></div>
    </div>
  </div>
</template>

<script>
import uuid from '../mixins/uuid'
export default {
  name: 'base-slider',

  mixins: [uuid],

  model: {
    prop: 'value',
    event: 'input',
  },

  props: {
    value: {
      required: true,
      type: String,
    },
  },

  computed: {
    model: {
      get() {
        return this.value
      },

      set(value) {
        this.$emit('input', value)
      },
    },

    triggerOffset() {
      const parsedValue = parseInt(this.value)
      const calculated = parsedValue - parsedValue * 0.12

      return `${calculated}%`
    },

    sliderId() {
      return `slider-${this.uuid}`
    },
  },
}
</script>

<style>
input[type='range']::-webkit-slider-thumb {
  pointer-events: all;
  width: 48px;
  height: 48px;
  border: 16px solid #000000;
  -webkit-appearance: none;
}
</style>
