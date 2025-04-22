<template>
  <div :class="className">
    <input :id="id" type="checkbox" :value="value" class="btn-check" :name="btnName" autoComplete="off"
      :checked="checkboxCheckValue(defaultChecked, value)"
      @change="$emit('onChange', onCheckboxUpdate(defaultChecked, value), btnName)" />
    <label :class="`btn btn-border btn-setting-panel d-block overflow-hidden  ${labelClass}`" :for="id">
      <slot />
    </label>
  </div>
</template>
<script setup>
const props = defineProps({
  className: {
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
    type: Array,
    default: () => [],
  },
});

const emits = defineEmits(['onChange']);

const checkboxCheckValue = (selector, value) => {
  return selector.includes(value);
};

const onCheckboxUpdate = (defaultChecked, value) => {
  if (checkboxCheckValue(defaultChecked, value)) {
    return defaultChecked.filter((item) => item !== value);
  } else {
    return [...defaultChecked, value];
  }
};
</script>
