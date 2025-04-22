<template>
  <b-row>
    <b-col lg="12">
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <b-card-title>XRay Color</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Similar to the contextual text color classes, easily set the background of an element to any contextual
            class. Anchor components will darken on hover, just like the text classes. Background utilities <strong>do
              not
              set <code>color</code></strong>, so in some cases you’ll want to use <code>.text-*</code> utilities.</p>
          <b-row class="mt-4">
            <b-col lg="2" md="6" class="text-center">
              <p class="bg-primary-linear pt-5 pb-5 text-center rounded"></p>
              <h6>Primary</h6>
            </b-col>
            <b-col lg="2" md="6" class="text-center">
              <p class="bg-secondary-linear pt-5 pb-5 text-center rounded"></p>
              <h6>Secondary</h6>
            </b-col>
            <b-col lg="2" md="6" class="text-center">
              <p class="bg-success-linear pt-5 pb-5 text-center rounded"></p>
              <h6>Success</h6>
            </b-col>
            <b-col lg="2" md="6" class="text-center">
              <p class="bg-danger-linear pt-5 pb-5 text-center rounded"></p>
              <h6>Danger</h6>
            </b-col>
            <b-col lg="2" md="6" class="text-center">
              <p class="bg-warning-linear pt-5 pb-5 text-center rounded"></p>
              <h6>Warning</h6>
            </b-col>
            <b-col lg="2" md="6" class="text-center">
              <p class="bg-info-linear pt-5 pb-5 text-center rounded"></p>
              <h6>Info</h6>
            </b-col>
            <b-col lg="2" md="6" class="text-center mt-0 mt-md-0 mt-lg-5">
              <p class="bg-light-linear pt-5 pb-5 text-center rounded"></p>
              <h6>Light</h6>
            </b-col>
            <b-col lg="2" md="6" class="text-center mt-0 mt-md-0 mt-lg-5">
              <p class="bg-dark pt-5 pb-5 text-center rounded"></p>
              <h6>Dark</h6>
            </b-col>
          </b-row>
        </b-card-body>
      </b-card>
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <b-card-title>XRay Color</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Similar to the contextual text color classes, easily set the background of an element to any contextual
            class. Anchor components will darken on hover, just like the text classes. Background utilities <strong>do
              not
              set <code>color</code></strong>, so in some cases you’ll want to use <code>.text-*</code> utilities.</p>
          <b-row class="mt-4">
            <b-col lg="2" md="6" class="text-center">
              <p class="bg-primary-subtle pt-5 pb-5 text-center rounded font-size-18">Primary</p>
            </b-col>
            <b-col lg="2" md="6" class="text-center">
              <p class="bg-secondary-subtle pt-5 pb-5 text-center rounded font-size-18">Secondary</p>
            </b-col>
            <b-col lg="2" md="6" class="text-center">
              <p class="bg-success-subtle pt-5 pb-5 text-center rounded font-size-18">Success</p>
            </b-col>
            <b-col lg="2" md="6" class="text-center">
              <p class="bg-danger-subtle pt-5 pb-5 text-center rounded font-size-18">Danger</p>
            </b-col>
            <b-col lg="2" md="6" class="text-center">
              <p class="bg-warning-subtle pt-5 pb-5 text-center rounded font-size-18">Warning</p>
            </b-col>
            <b-col lg="2" md="6" class="text-center">
              <p class="bg-info-subtle pt-5 pb-5 text-center rounded font-size-18">Info</p>
            </b-col>
            <b-col lg="2" md="6" class="text-center">
              <p class="bg-dark-subtle pt-5 pb-5 text-center rounded font-size-18 custom-dark-subtle-color">
                Dark</p>
            </b-col>
          </b-row>
        </b-card-body>
      </b-card>
    </b-col>
    <div class="col-lg-6">
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <b-card-title>XRay Text Color</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Contextual text classes also work well on anchors with the provided hover and focus states. <strong>Note
              that
              the <code>.text-white</code> and <code>.text-muted</code> class has no additional link styling beyond
              underline.</strong></p>
          <p class="text-primary">.text-primary</p>
          <p class="text-secondary">.text-secondary</p>
          <p class="text-success">.text-success</p>
          <p class="text-danger">.text-danger</p>
          <p class="text-warning">.text-warning</p>
          <p class="text-info">.text-bg-info</p>
          <p class="text-light bg-dark">.text-light</p>
          <p class="text-dark">.text-dark</p>
          <p class="text-muted">.text-muted</p>
          <p class="text-white bg-dark">.text-white</p>
          <p class="text-black-50">.text-black-50</p>
          <p class="text-white-50 bg-dark mb-0">.text-white-50</p>
        </b-card-body>
      </b-card>
    </div>
    <div class="col-lg-6">
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <b-card-title>XRay Text Color</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Contextual text classes also work well on anchors with the provided hover and focus states. <strong>Note
              that
              the <code>.text-white</code> and <code>.text-muted</code> class has no additional link styling beyond
              underline.</strong></p>
          <p><a href="#" class="text-primary">Primary link</a></p>
          <p><a href="#" class="text-secondary">Secondary link</a></p>
          <p><a href="#" class="text-success">Success link</a></p>
          <p><a href="#" class="text-danger">Danger link</a></p>
          <p><a href="#" class="text-warning">Warning link</a></p>
          <p><a href="#" class="text-info">Info link</a></p>
          <p><a href="#" class="text-light bg-dark">Light link</a></p>
          <p><a href="#" class="text-dark">Dark link</a></p>
          <p><a href="#" class="text-muted">Muted link</a></p>
          <p class="mb-0"><a href="#" class="text-white bg-dark">White link</a></p>
        </b-card-body>
      </b-card>
    </div>
    <div class="col-lg-6">
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <b-card-title>XRay Text Color</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Contextual text classes also work well on anchors with the provided hover and focus states. <strong>Note
              that
              the <code>.text-white</code> and <code>.text-muted</code> class has no additional link styling beyond
              underline.</strong></p>
          <p class="bg-primary-subtle  ps-3 pe-3 pt-2 pb-2 ">Primary link</p>
          <p class="bg-secondary-subtle text-secondary ps-3 pe-3 pt-2 pb-2 ">Secondary link</p>
          <p class="bg-success-subtle text-success ps-3 pe-3 pt-2 pb-2 ">Success link</p>
          <p class="bg-danger-subtle text-danger ps-3 pe-3 pt-2 pb-2 ">Danger link</p>
          <p class="bg-warning-subtle text-warning ps-3 pe-3 pt-2 pb-2 ">Warning link</p>
          <p class="bg-info-subtle text-info ps-3 pe-3 pt-2 pb-2 ">bg-Info link</p>
          <p class="bg-dark-subtle text-dark ps-3 pe-3 pt-2 pb-2  mb-0 custom-dark-subtle-color">Dark link</p>
        </b-card-body>
      </b-card>
    </div>
    <div class="col-lg-6">
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <b-card-title>XRay Text Color</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Contextual text classes also work well on anchors with the provided hover and focus states. <strong>Note
              that
              the <code>.text-white</code> and <code>.text-muted</code> class has no additional link styling beyond
              underline.</strong></p>
          <p><a href="#" class="bg-primary-subtle  ps-3 pe-3 pt-2 pb-2  d-inline-block">Primary link</a></p>
          <p><a href="#" class="bg-secondary-subtle text-secondary ps-3 pe-3 pt-2 pb-2  d-inline-block">Secondary
              link</a></p>
          <p><a href="#" class="bg-success-subtle text-success ps-3 pe-3 pt-2 pb-2  d-inline-block">Success
              link</a></p>
          <p><a href="#" class="bg-danger-subtle text-danger ps-3 pe-3 pt-2 pb-2  d-inline-block">Danger link</a>
          </p>
          <p><a href="#" class="bg-warning-subtle text-warning ps-3 pe-3 pt-2 pb-2  d-inline-block">Warning
              link</a></p>
          <p><a href="#" class="bg-info-subtle text-info ps-3 pe-3 pt-2 pb-2  d-inline-block">bg-Info link</a>
          </p>
          <p class="mb-0"><a href="#"
              class="bg-dark-subtle text-dark ps-3 pe-3 pt-2 pb-2  d-inline-block custom-dark-subtle-color">Dark
              link</a></p>
        </b-card-body>
      </b-card>
    </div>
  </b-row>
</template>
