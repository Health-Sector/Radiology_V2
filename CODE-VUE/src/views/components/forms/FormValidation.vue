<template>
  <b-row>
    <div class="col-sm-12 col-lg-6">
      <DefaultForm></DefaultForm>
      <SupportedElements></SupportedElements>
    </div>
    <div class="col-sm-12 col-lg-6">
      <CustomValidation></CustomValidation>
      <TooltipForm></TooltipForm>
    </div>
  </b-row>
</template>
<script setup>
import DefaultForm from '@/components/validation/DefaultForm.vue'
import SupportedElements from '@/components/validation/SupportedElements.vue'
import CustomValidation from '@/components/validation/CustomValidation.vue'
import TooltipForm from '@/components/validation/TooltipsForm.vue'
</script>
