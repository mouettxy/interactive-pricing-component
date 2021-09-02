<template>
  <div class="relative">
    <div
      class="absolute h-2 w-64 -z-1 bg-soft-cyan rounded-3xl mt-[9.5px]"
      :style="{ width: `${trackLowerWidth}%` }"
    ></div>
    <input type="range" class="base-slider" v-model="model" :min="min" :max="max" :step="step" />
  </div>
</template>

<script>
import { computed } from 'vue'
import uuid from '../mixins/uuid'

export default {
  name: 'base-slider',

  mixins: [uuid],

  props: {
    modelValue: {
      required: true,
      type: Number,
    },

    min: {
      required: false,
      type: Number,
      default: 10,
    },

    max: {
      required: false,
      type: Number,
      default: 1000,
    },

    step: {
      required: false,
      type: Number,
      default: 10,
    },
  },

  emits: ['update:modelValue'],

  setup(props, { emit }) {
    const model = computed({
      get() {
        return props.modelValue
      },
      set(value) {
        emit('update:modelValue', value)
      },
    })

    const trackLowerWidth = computed(() => {
      return props.modelValue / props.step
    })

    return {
      model,
      trackLowerWidth,
    }
  },
}
</script>

<style lang="scss">
.base-slider {
  @apply appearance-none;
  @apply w-full;
  @apply bg-transparent;
}

.base-slider:focus {
  @apply outline-none;
}

.base-slider::-webkit-slider-thumb {
  @apply appearance-none;
  @apply relative;
  @apply w-8 h-8;
  @apply z-10;
  @apply -mt-3;
  @apply bg-center bg-no-repeat bg-strong-cyan bg-icon-slider;
  @apply rounded-full;
  @apply transition-all;
  @apply shadow-slider-trigger;
  @apply hover:bg-soft-cyan hover:cursor-pointer;
  @apply focus:bg-strong-cyan;
}

.base-slider::-webkit-slider-runnable-track {
  @apply bg-light-grayish-blue;
  @apply inset-0;
  @apply h-2;
  @apply rounded-3xl;
}
</style>
