<template>
  <b-card no-body class="">
    <b-card-header class="d-flex justify-content-between">
      <div class="header-title">
        <h4 class="card-title">Supported elements</h4>
      </div>
    </b-card-header>
    <b-card-body>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh
        finibus leo</p>
      <form class="was-validated cust-form-elements" @submit.prevent="formSubmit">
        <div class="mb-3">
          <div class="mb-3 form-group">
            <label for="validationTextarea">Textarea</label>
            <textarea class="form-control" id="validationTextarea" rows="3" placeholder="Required example textarea"
              required></textarea>
          </div>
          <div class="invalid-feedback">
            Please enter a message in the textarea.
          </div>
        </div>
        <div class="custom-control form-group custom-checkbox mb-3 p-0">
          <input type="checkbox" class="custom-control-input" id="customControlValidation1" required>
          <label class="custom-control-label" for="customControlValidation1">&nbsp;Check this custom
            checkbox</label>
          <div class="invalid-feedback">Example invalid feedback
            text</div>
        </div>
        <div class="custom-control form-group custom-radio p-0">
          <input type="radio" class="custom-control-input" id="customControlValidation2" name="radio-stacked" required>
          <label class="custom-control-label" for="customControlValidation2">&nbsp;Toggle this custom
            radio</label>
        </div>
        <div class="custom-control form-group custom-radio mb-3 p-0">
          <input type="radio" class="custom-control-input" id="customControlValidation3" name="radio-stacked" required>
          <label class="custom-control-label" for="customControlValidation3">&nbsp;Or toggle this other
            custom radio</label>
          <div class="invalid-feedback">More example invalid
            feedback text</div>
        </div>
        <div class="form-group">
          <select class="form-select" required>
            <option value>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <div class="invalid-feedback">Example invalid custom
            select feedback</div>
        </div>
        <div class="input-group">
          <input type="file" class="form-control" id="inputGroupFile02" required>
          <div class="invalid-feedback">Example invalid custom
            file feedback</div>
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
