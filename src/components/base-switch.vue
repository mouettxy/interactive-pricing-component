<template>
  <div>
    <label :for="checkboxId" class="cursor-pointer">
      <div class="relative w-12 p-1 transition-colors bg-light-grayish-blue-2 rounded-3xl hover:bg-soft-cyan">
        <div class="w-4 h-4 transition-transform transform bg-white rounded-full" :class="activeTriggerClasses"></div>
      </div>
      <input :id="checkboxId" v-model="model" class="hidden" type="checkbox" />
    </label>
  </div>
</template>

<script>
import uuid from '../mixins/uuid'

export default {
  name: 'base-switch',

  mixins: [uuid],

  props: {
    modelValue: {
      required: true,
      type: Boolean,
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

    checkboxId() {
      return `checkbox-${this.uuid}`
    },

    activeTriggerClasses() {
      if (this.model) {
        return {
          'translate-x-6': true,
        }
      }

      return {}
    },
  },
}
</script>
