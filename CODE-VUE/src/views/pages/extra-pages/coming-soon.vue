<template>
  <b-container class="pt-5 custom-auth-height d-md-flex align-items-center">
    <b-container fluid>
      <b-row class="justify-content-center">
        <b-col md="8" sm="11" class="text-center">
          <div class="iq-comingsoon-info">
            <router-link to="/">
              <img src="/assets/images/logo-full2.png" class="img-fluid w-25" alt="">
            </router-link>
            <h2 class="mt-4 mb-1">Stay tuned, we're launching very soon</h2>
            <p>We are working very hard to give you the best experience possible!</p>
            <ul ref="element" class="countdown d-flex align-items-center list-unstyled row"
              data-date="Dec 31 2025 20:20:22">
              <b-col tag="li" md="6" lg="3">
                <b-card no-body>
                  <b-card-body>
                    <span data-days>0</span>
                    Days
                  </b-card-body>
                </b-card>
              </b-col>
              <b-col tag="li" md="6" lg="3">
                <b-card no-body>
                  <b-card-body>
                    <span data-hours>0</span>
                    Hours
                  </b-card-body>
                </b-card>
              </b-col>
              <b-col tag="li" md="6" lg="3">
                <b-card no-body>
                  <b-card-body>
                    <span data-minutes>0</span>
                    Minutes
                  </b-card-body>
                </b-card>
              </b-col>
              <b-col tag="li" md="6" lg="3">
                <b-card no-body>
                  <b-card-body>
                    <span data-seconds>0</span>
                    Seconds
                  </b-card-body>
                </b-card>
              </b-col>
            </ul>
          </div>
        </b-col>
      </b-row>
      <b-row class="justify-content-center">
        <b-col lg="4">
          <form class="iq-comingsoon-form mt-5">
            <div class="form-group">
              <input type="email" class="form-control mb-0" id="exampleInputEmail1" placeholder="Enter email address">
              <button type="submit" class="btn btn-primary-subtle">Subscribe</button>
            </div>
          </form>
        </b-col>
      </b-row>
    </b-container>
  </b-container>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { useCountdown } from '@/plugins/countdown';

const element = ref(null);

onMounted(() => {
  useCountdown(element.value);
});
</script>