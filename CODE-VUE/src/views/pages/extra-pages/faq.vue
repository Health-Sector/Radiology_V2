<template>
   <div class="accordion accordion-flush custom-accordion" id="accordion-1">
      <b-row>
         <b-col lg="6">
            <div class="accordion-item border-0 card" v-for="(item, index) in leftItems" :key="index">
               <div class="accordion-header">
                  <button class="accordion-button fs-4" type="button" :data-bs-toggle="'collapse'"
                     :data-bs-target="'#flush-' + (index + 1)" aria-expanded="item.show"
                     :aria-controls="'flush-' + (index + 1)" @click="toggle(index, 'left')"
                     :class="{ 'collapsed': !item.show }">
                     {{ item.header }}
                  </button>
               </div>
               <div :id="'flush-' + (index + 1)" class="accordion-collapse collapse" :class="{ show: item.show }"
                  data-bs-parent="#accordion-1">
                  <div class="accordion-body p-5">
                     <p class="mb-0 fs-5">{{ item.body }}</p>
                  </div>
               </div>
            </div>
         </b-col>
         <b-col lg="6">
            <div class="accordion-item border-0 card" v-for="(item, index) in rightItems" :key="index">
               <div class="accordion-header">
                  <button class="accordion-button fs-4" type="button" :data-bs-toggle="'collapse'"
                     :data-bs-target="'#flush-' + (index + 7)" aria-expanded="item.show"
                     :aria-controls="'flush-' + (index + 7)" @click="toggle(index, 'right')"
                     :class="{ 'collapsed': !item.show }">
                     {{ item.header }}
                  </button>
               </div>
               <div :id="'flush-' + (index + 7)" class="accordion-collapse collapse" :class="{ show: item.show }"
                  data-bs-parent="#accordion-1">
                  <div class="accordion-body p-5">
                     <p class="mb-0 fs-5">{{ item.body }}</p>
                  </div>
               </div>
            </div>
         </b-col>
      </b-row>
   </div>
</template>

<script>
export default {
   data() {
      return {
         leftItems: [
            {
               header: 'It is a long established reader will be?',
               body: `Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.`,
               show: true,
            },
            {
               header: 'Distracted by the readable page whent?',
               body: 'It has survived not only five centuries, but also the leap into electronic typesetting. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.',
               show: false,
            },
            {
               header: 'What is user interface kit?',
               body: 'It has survived not only five centuries, but also the leap into electronic typesetting. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.',
               show: false,
            },
            {
               header: 'What is user interface kit?',
               body: 'It has survived not only five centuries, but also the leap into electronic typesetting. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.',
               show: false,
            },
            {
               header: 'The readable content of a page at its layout?',
               body: 'It has survived not only five centuries, but also the leap into electronic typesetting. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.',
               show: false,
            },
            {
               header: 'What is user interface kit?',
               body: 'It has survived not only five centuries, but also the leap into electronic typesetting. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.',
               show: false,
            },
         ],
         rightItems: [
            {
               header: 'It is a long established reader will be?',
               body: `Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.`,
               show: false,
            },
            {
               header: 'Distracted by the readable page whent?',
               body: 'It has survived not only five centuries, but also the leap into electronic typesetting. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.',
               show: false,
            },
            {
               header: 'What is user interface kit?',
               body: 'It has survived not only five centuries, but also the leap into electronic typesetting. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.',
               show: false,
            },
            {
               header: 'What is user interface kit?',
               body: 'It has survived not only five centuries, but also the leap into electronic typesetting. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.',
               show: false,
            },
            {
               header: 'The readable content of a page at its layout?',
               body: 'It has survived not only five centuries, but also the leap into electronic typesetting. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.',
               show: false,
            },
            {
               header: 'What is user interface kit?',
               body: 'It has survived not only five centuries, but also the leap into electronic typesetting. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.',
               show: false,
            },
         ],
      };
   },
   methods: {
      toggle(index, side) {
         const items = side === 'left' ? this.leftItems : this.rightItems;

         // Close all items in the specified side
         items.forEach((item, i) => {
            item.show = (i === index) ? !item.show : false;
         });
      },
   },
};
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>
