<template>
  <div class="relative w-full">
    <input
      type="range"
      min="1"
      max="100"
      v-model="model"
      class="absolute z-20 w-full h-2 opacity-0 appearance-none cursor-pointer pointer-events-none slider"
      :id="sliderId"
    />
    <div class="relative z-10 w-full h-2">
      <div class="absolute inset-0 z-10 rounded-3xl bg-light-grayish-blue"></div>

      <div class="absolute top-0 bottom-0 z-20 rounded-md bg-soft-cyan" :style="{ width: triggerOffset }"></div>

      <div
        class="absolute top-0 left-0 z-30 w-8 h-8 -mt-3 bg-center bg-no-repeat rounded-full bg-strong-cyan bg-icon-slider"
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

  props: {
    modelValue: {
      required: true,
      type: String,
    },
  },

  emits: ['update:modelValue'],

  computed: {
    model: {
      get() {
        return this.modelValue
      },

      set(value) {
        this.$emit('update:modelValue', value)
      },
    },

    triggerOffset() {
      const parsedValue = parseInt(this.modelValue)
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
