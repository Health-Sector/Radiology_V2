<template>
  <b-card no-body>
    <b-card-header class="d-flex justify-content-between">
      <div class="header-title">
        <h4 class="card-title">Tooltips</h4>
      </div>
    </b-card-header>
    <b-card-body>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh
        finibus leo</p>
      <form :class="`needs-validation cust-form-elements ${valid ? 'was-validated' : ''}`" novalidate
        @submit.prevent="formSubmit">
        <b-row>
          <b-col md="6" class="mb-3 position-relative form-group">
            <label class="form-label mb-0" for="validationTooltip01">First name</label>
            <input type="text" class="form-control" id="validationTooltip01" value="Mark" required>
            <div class="valid-tooltip">
              Looks good!
            </div>
          </b-col>
          <b-col md="6" class="mb-3 position-relative form-group">
            <label class="form-label mb-0" for="validationTooltip02">Last name</label>
            <input type="text" class="form-control" id="validationTooltip02" value="Jets" required>
            <div class="valid-tooltip">
              Looks good!
            </div>
          </b-col>
          <b-col md="6" class="mb-3 position-relative form-group">
            <label class="form-label mb-0" for="validationDefaultUsername">Username</label>
            <div class="input-group">
              <span class="input-group-text" id="inputGroupPrepend2">@</span>
              <input type="text" class="form-control" id="validationDefaultUsername"
                aria-describedby="inputGroupPrepend2" required>
              <div class="invalid-tooltip">
                Please choose a unique and valid username.
              </div>
            </div>
          </b-col>
          <b-col md="6" class="mb-3 position-relative form-group">
            <label class="form-label mb-0" for="validationTooltip03">City</label>
            <input type="text" class="form-control" id="validationTooltip03" required>
            <div class="invalid-tooltip">
              Please provide a valid city.
            </div>
          </b-col>
          <b-col md="6" class="mb-3 position-relative form-group">
            <label class="form-label mb-0" for="validationTooltip04">State</label>
            <select class="form-control" id="validationTooltip04" required>
              <option selected disabled value>Choose...</option>
              <option>...</option>
            </select>
            <div class="invalid-tooltip">
              Please select a valid state.
            </div>
          </b-col>
          <b-col md="6" class="mb-3 position-relative form-group">
            <label class="form-label mb-0" for="validationTooltip05">Zip</label>
            <input type="text" class="form-control" id="validationTooltip05" required>
            <div class="invalid-tooltip">
              Please provide a valid zip.
            </div>
          </b-col>
        </b-row>
        <div class="d-flex gap-2 mt-5">
          <button type="submit" class="btn btn-danger-subtle">Cancel</button>
          <button type="submit" class="btn btn-primary-subtle">Save</button>
        </div>
      </form>
    </b-card-body>
  </b-card>
</template>
<script>
import { required } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'
export default {
  setup() {
    const v = useVuelidate()
    return {
      v
    }
  },
  data() {
    return {
      valid: false,
      form: {
        firstName: '',
        lastName: '',
        username: '',
        city: '',
        state: '',
        zip: '',
        agree: false
      }
    }
  },
  validations() {
    return {
      form: {
        firstName: {
          required
        },
        lastName: {
          required
        },
        username: {
          required
        },
        city: {
          required
        },
        state: {
          required
        },
        zip: {
          required
        },
        agree: {
          required
        }
      }
    }
  },
  methods: {
    async formSubmit() {
      this.valid = true
      const result = await this.v.$validate()
      if (result) {
        // this.valid = true
      }
    },
    resetForm() {
      this.v.$reset()
      this.valid = false
    }
  }
}
</script>
