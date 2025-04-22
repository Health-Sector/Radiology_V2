<template>
  <b-card no-body>
    <b-card-header class=" d-flex justify-content-between">
      <div class="header-title">
        <h4 class="card-title">Default Validation</h4>
      </div>
    </b-card-header>
    <b-card-body>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh
        finibus leo</p>
      <form @submit.prevent="formSubmit" class="cust-form-elements">
        <b-row>
          <b-col md="6" class="mb-3 form-group">
            <label for="validationDefault01">First name</label>
            <input type="text" class="form-control" id="validationDefault01" required>
          </b-col>
          <b-col md="6" class="mb-3 form-group">
            <label for="validationDefault02">Last name</label>
            <input type="text" class="form-control" id="validationDefault02" required>
          </b-col>
          <b-col md="6" class="mb-3 form-group">
            <label for="validationDefaultUsername">Username</label>
            <div class="input-group">
              <span class="input-group-text" id="inputGroupPrepend1">@</span>
              <input type="text" class="form-control" id="validationDefaultUsername"
                aria-describedby="inputGroupPrepend1" required>
            </div>
          </b-col>
          <b-col md="6" class="mb-3 form-group">
            <label for="validationDefault03">City</label>
            <input type="text" class="form-control" id="validationDefault03" required>
          </b-col>
          <b-col md="6" class="mb-3 form-group">
            <label for="validationDefault04">State</label>
            <select class="form-control" id="validationDefault04" required>
              <option selected disabled value>Choose...</option>
              <option>...</option>
            </select>
          </b-col>
          <b-col md="6" class="mb-3 form-group">
            <label for="validationDefault05">Zip</label>
            <input type="text" class="form-control" id="validationDefault05" required>
          </b-col>
        </b-row>
        <div class="form-group">
          <div class="form-check">
            <input class="form-check-input p-0" type="checkbox" value id="invalidCheck2" required>
            <label class="form-check-label" for="invalidCheck2">
              Agree to terms and conditions
            </label>
          </div>
        </div>
        <div class="form-group">
          <div class="d-flex gap-2">
            <button type="submit" class="btn btn-danger-subtle">Cancel</button>
            <button type="submit" class="btn btn-primary-subtle">Save</button>
          </div>
        </div>
      </form>
    </b-card-body>
  </b-card>
</template>

<script setup>
const formSubmit = (e) => {
  console.log('Form submitted!', e)
}
</script>
