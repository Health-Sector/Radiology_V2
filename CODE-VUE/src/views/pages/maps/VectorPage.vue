<template>

    <b-row>
      <b-col lg="12">
        <b-card no-body>
          <b-card-header class="d-flex justify-content-between">
            <div class="header-title">
              <h4 class="card-title">Vector Map</h4>
            </div>
          </b-card-header>
          <b-card-body>
            <LeaFlet id="chart-map-column-04" :options="leafFletOptions" class="custom-chart" />
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
</template>
<script setup>
import { ref } from 'vue'
import { data } from '@/assets/js/vector-map.js'
import LeaFlet from '@/views/components/custom/vector-map/LeaFlet.vue';
const leafFletOptions = ref(data)
</script>
