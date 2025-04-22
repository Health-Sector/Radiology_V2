<template>
  <div :class="className">
    <input :id="id" type="radio" :class="inputClass" :value="value" :name="btnName" autoComplete="off"
      :checked="radioCheckValue(defaultChecked, value)" @change="$emit('onChange', value, btnName)" />
    <label v-b-tooltip.hover.top="tooltip" :class="labelClass" :for="id">
      <slot></slot>
    </label>
  </div>
</template>
<script setup>
const props = defineProps({
  className: {
    type: String,
    default: '',
  },
  inputClass: {
    type: String,
    default: '',
  },
  btnName: {
    type: String,
    default: '',
  },
  id: {
    type: String,
    default: '',
  },
  value: {
    type: String,
    default: '',
  },
  labelTitle: {
    type: String,
    default: '',
  },
  labelClass: {
    type: String,
    default: '',
  },
  imgComponent: {
    type: Boolean,
    default: false,
  },
  defaultChecked: {
    type: String,
    default: '',
  },
  tooltip: {
    type: String,
    default: '',
  },
});

const emits = defineEmits(['onChange']);

const radioCheckValue = (selector, value) => {
  return selector === value;
};
</script>
