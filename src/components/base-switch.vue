<template>
  <div>
    <label :for="checkboxId" class="cursor-pointer">
      <div class="transition-colors bg-light-grayish-blue-2 rounded-3xl p-1 w-12 hover:bg-soft-cyan relative">
        <div class="bg-white w-4 h-4 rounded-full transition-transform transform" :class="activeTriggerClasses"></div>
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

  model: {
    prop: 'value',
    event: 'input',
  },

  props: {
    value: {
      required: true,
      type: Boolean,
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

    checkboxId() {
      return `checkbox-${this.uuid}`
    },

    activeTriggerClasses() {
      if (this.value) {
        return {
          'translate-x-6': true,
        }
      }

      return {}
    },
  },
}
</script>
