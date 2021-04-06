<template>
  <div class="relative w-full h-2" ref="container">
    <div class="base-slider__bar"></div>

    <div class="base-slider__full-bar" :style="{ width: `${offset}%` }"></div>

    <button
      class="base-slider__trigger base-slider__trigger--focus base-slider__trigger--hover"
      @focus="handleFocus"
      @blur="handleBlur"
      @mousedown="handleMousedown"
      @touchstart="handleTouchstart"
      :style="{ left: `${offset}%` }"
      ref="trigger"
    ></button>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { onKeyDown } from '@vueuse/core'
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
  },

  emits: ['update:modelValue'],

  setup(props, { emit }) {
    const isFocused = ref(false)
    const isActive = ref(false)

    const model = computed({
      get() {
        return props.modelValue
      },
      set(value) {
        const modifyValue = (value) => {
          let newValue = value

          if (newValue < props.min) {
            newValue = props.min
          } else if (newValue > props.max) {
            newValue = props.max
          }

          return newValue
        }

        emit('update:modelValue', modifyValue(value))
      },
    })

    const offset = computed(() => {
      return ((model.value - props.min) / (props.max - props.min)) * 100
    })

    const handleFocus = () => {
      isFocused.value = true
    }

    const handleBlur = () => {
      isFocused.value = false
    }

    const handleTouchstart = (e) => {
      isActive.value = true

      const startX = e.touches[0].pageX

      const startWidth = model.value

      const onTouchMove = (moveEvt) => {
        const diffInPx = moveEvt.touches[0].pageX - startX
        const diffInEm = diffInPx

        model.value = startWidth + diffInEm
      }

      const onTouchEnd = () => {
        isActive.value = false

        document.removeEventListener('touchmove', onTouchMove)
        document.removeEventListener('touchend', onTouchEnd)
      }

      document.addEventListener('touchmove', onTouchMove)
      document.addEventListener('touchend', onTouchEnd)
    }

    const handleMousedown = (e) => {
      isActive.value = true

      const startX = e.pageX

      const startWidth = model.value

      const onMouseMove = (e) => {
        const currentX = e.pageX

        const diffInPx = currentX - startX
        const diffInEm = diffInPx * 0.7

        model.value = startWidth + diffInEm
      }

      const onMouseUp = () => {
        isActive.value = false

        document.removeEventListener('mousemove', onMouseMove)
        document.removeEventListener('mouseup', onMouseUp)
      }

      document.addEventListener('mousemove', onMouseMove)
      document.addEventListener('mouseup', onMouseUp)
    }

    onKeyDown('ArrowUp', (e) => {
      e.preventDefault()
      if (isFocused.value) model.value++
    })
    onKeyDown('ArrowRight', (e) => {
      e.preventDefault()
      if (isFocused.value) model.value++
    })

    onKeyDown('ArrowDown', (e) => {
      e.preventDefault()
      if (isFocused.value) model.value--
    })
    onKeyDown('ArrowLeft', (e) => {
      e.preventDefault()
      if (isFocused.value) model.value--
    })

    return {
      model,
      isFocused,
      isActive,
      offset,
      handleFocus,
      handleBlur,
      handleMousedown,
      handleTouchstart,
    }
  },
}
</script>

<style lang="postcss">
.base-slider__trigger {
  @apply absolute;
  @apply top-0;
  @apply z-30;
  @apply w-8;
  @apply h-8;
  @apply -mt-3;
  @apply bg-center;
  @apply bg-no-repeat;
  @apply rounded-full;
  @apply bg-strong-cyan;
  @apply bg-icon-slider;
  @apply transition-all;
  @apply shadow-slider-trigger;
}

.base-slider__trigger--hover {
  @apply hover:bg-soft-cyan;
}

.base-slider__trigger--focus {
  @apply focus:outline-none;
  @apply focus:bg-strong-cyan;
}

.base-slider__bar {
  @apply absolute;
  @apply inset-0;
  @apply bg-light-grayish-blue;
  @apply rounded-3xl;
}

.base-slider__full-bar {
  @apply absolute;
  @apply inset-0;
  @apply bg-soft-cyan;
  @apply rounded-3xl;
  @apply transition-all;
}
</style>
