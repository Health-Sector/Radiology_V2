<template>
  <b-card no-body>
    <b-card-header class="d-flex justify-content-between">
      <div class="header-title">
        <b-card-title>Custom Validation</b-card-title>
      </div>
    </b-card-header>
    <b-card-body>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh
        finibus leo</p>
      <form :class="`needs-validation cust-form-elements ${valid ? 'was-validated' : ''}`" @submit.prevent="formSubmit"
        novalidate>
        <b-row>
          <b-col md="6" class="form-group">
            <label for="validationCustom01">First name</label>
            <input type="text" class="form-control" id="validationCustom01" required>
            <div class="valid-feedback">
              Looks good!
            </div>
          </b-col>
          <b-col md="6" class="form-group">
            <label for="validationCustom02">Last name</label>
            <input type="text" class="form-control" id="validationCustom02" required>
            <div class="valid-feedback">
              Looks good!
            </div>
          </b-col>

          <b-col md="6" class="form-group">
            <label for="validationDefaultUsername">Username</label>
            <div class="input-group">
              <span class="input-group-text" id="inputGroupPrepend2">@</span>
              <input type="text" class="form-control" id="validationDefaultUsername"
                aria-describedby="inputGroupPrepend2" required>
            </div>
          </b-col>
          <b-col md="6" class="form-group">
            <label for="validationCustom03">City</label>
            <input type="text" class="form-control" id="validationCustom03" required>
            <div class="invalid-feedback">
              Please provide a valid city.
            </div>
          </b-col>
          <b-col md="6" class="form-group">
            <label for="validationCustom04">State</label>
            <select class="form-control" id="validationCustom04" required>
              <option selected disabled value>Choose...</option>
              <option>...</option>
            </select>
            <div class="invalid-feedback">
              Please select a valid state.
            </div>
          </b-col>
          <b-col md="6" class="form-group">
            <label for="validationCustom05">Zip</label>
            <input type="text" class="form-control" id="validationCustom05" required>
            <div class="invalid-feedback">
              Please provide a valid zip.
            </div>
          </b-col>
        </b-row>
        <div class="form-group">
          <div class="form-check">
            <input class="form-check-input p-0" type="checkbox" value id="invalidCheck" required>
            <label class="form-check-label" for="invalidCheck">
              Agree to terms and conditions
            </label>
            <div class="invalid-feedback">
              You must agree before submitting.
            </div>
          </div>
        </div>
        <div class="d-flex gap-2">
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
        firstName: 'Mark',
        lastName: 'Otto',
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
