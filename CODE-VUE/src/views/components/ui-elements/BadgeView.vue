<template>
  <b-row>
    <b-col sm="12" lg="6">
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <b-card-title>Badge</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Badges scale to match the size of the immediate parent
            element by using relative font sizing and
            <code>em</code>
            units.
          </p>
          <h1 class="mt-2">Example heading
            <span class="badge bg-primary">New</span>
          </h1>
          <h2 class="mt-2">Example heading
            <span class="badge bg-secondary">New</span>
          </h2>
          <h3 class="mt-2">Example heading<span class="badge bg-success ms-1">New</span>
          </h3>
          <h4 class="mt-2">Example heading
            <span class="badge bg-danger">New</span>
          </h4>
          <h5 class="mt-2">Example heading
            <span class="badge bg-warning">New</span>
          </h5>
          <h6 class="mb-0">Example heading
            <span class="badge bg-info">New</span>
          </h6>
        </b-card-body>
      </b-card>
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <b-card-title>Button Badges</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Badges can be used as part of buttons to provide a counter.</p>
          <button type="button" class="btn mb-1 btn-primary">
            Notifications
            <span class="badge bg-secondary ms-2">4</span>
          </button>{{ '' }}
          <button type="button" class="btn mb-1 btn-success">
            Notifications
            <span class="badge bg-secondary ms-2">4</span>
          </button>{{ '' }}
          <button type="button" class="btn mb-1 btn-danger">
            Notifications
            <span class="badge bg-secondary ms-2">4</span>
          </button>
        </b-card-body>
      </b-card>
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <b-card-title>Button Light Background Badges</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Badges can be used as part of buttons to provide a counter.</p>
          <button type="button" class="btn mb-1 btn-outline-primary">
            Notifications
            <span class="badge bg-primary ms-2">4</span>
          </button>{{ '' }}
          <button type="button" class="btn mb-1 btn-outline-success">
            Notifications
            <span class="badge bg-success ms-2">4</span>
          </button>{{ '' }}
          <button type="button" class="btn mb-1 btn-outline-danger">
            Notifications
            <span class="badge bg-danger ms-2">4</span>
          </button>
        </b-card-body>
      </b-card>
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <b-card-title>Button Border Badges</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Badges can be used as part of buttons to provide a counter.</p>
          <button type="button" class="btn mb-1 bg-primary-subtle text-gray">
            Notifications
            <span class="badge bg-primary ms-2">4</span>
          </button>{{ '' }}
          <button type="button" class="btn mb-1 bg-success-subtle text-gray">
            Notifications
            <span class="badge bg-success ms-2">4</span>
          </button>{{ '' }}
          <button type="button" class="btn mb-1 bg-danger-subtle text-gray">
            Notifications
            <span class="badge bg-danger ms-2">4</span>
          </button>
        </b-card-body>
      </b-card>
    </b-col>
    <b-col sm="12" lg="6">
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <b-card-title>Contextual Variations</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p class="mb-2">Add any of the below mentioned modifier
            classes to change the appearance of a badge.</p>
          <span class="mt-2 badge bg-primary">Primary</span>{{ '' }}
          <span class="mt-2 badge bg-secondary">Secondary</span>{{ '' }}
          <span class="mt-2 badge bg-success">Success</span>{{ '' }}
          <span class="mt-2 badge bg-danger">Danger</span>{{ '' }}
          <span class="mt-2 badge bg-warning">Warning</span>{{ '' }}
          <span class="mt-2 badge bg-info">Info</span>{{ '' }}
          <span class="mt-2 badge bg-light">Light</span>{{ '' }}
          <span class="mt-2 badge bg-dark">Dark</span>{{ '' }}
          <span class="mt-2 badge bg-gray">Gray</span>
          <h5 class="card-title mt-4">Pill badges</h5>
          <p class="mb-2">Use the
            <code>.badge-pill</code>
            modifier class to make badges more rounded (with a larger
            <code>border-radius</code>
            and additional horizontal
            <code>padding</code>). Useful if you miss the badges from
            v3.
          </p>
          <span class="mt-2 badge rounded-pill bg-primary">Primary</span>{{ '' }}
          <span class="mt-2 badge rounded-pill bg-secondary">Secondary</span>{{ '' }}
          <span class="mt-2 badge rounded-pill bg-success">Success</span>{{ '' }}
          <span class="mt-2 badge rounded-pill bg-danger">Danger</span>{{ '' }}
          <span class="mt-2 badge rounded-pill bg-warning">Warning</span>{{ '' }}
          <span class="mt-2 badge rounded-pill bg-info">Info</span>{{ '' }}
          <span class="mt-2 badge rounded-pill bg-light">Light</span>{{ '' }}
          <span class="mt-2 badge rounded-pill bg-dark">Dark</span>{{ '' }}
          <span class="mt-2 badge rounded-pill bg-gray">Gray</span>
          <h5 class="card-title mt-4">Links</h5>
          <p class="mb-2">Using the contextual
            <code>.badge-*</code>
            classes on an
            <code>&lt;a&gt;</code>
            element quickly provide
            <em>actionable</em>
            badges with hover and focus states.
          </p>
          <a href="#" class="mt-2 badge bg-primary">Primary</a>{{ '' }}
          <a href="#" class="mt-2 badge bg-secondary">Secondary</a>{{ '' }}
          <a href="#" class="mt-2 badge bg-success">Success</a>{{ '' }}
          <a href="#" class="mt-2 badge bg-danger">Danger</a>{{ '' }}
          <a href="#" class="mt-2 badge bg-warning">Warning</a>{{ '' }}
          <a href="#" class="mt-2 badge bg-info">Info</a>{{ '' }}
          <a href="#" class="mt-2 badge bg-light">Light</a>{{ '' }}
          <a href="#" class="mt-2 badge bg-dark">Dark</a>{{ '' }}
          <a href="#" class="mt-2 badge bg-gray">Gray</a>
        </b-card-body>
      </b-card>
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <b-card-title>Contextual Variations Border</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p class="mb-2">Add any of the below mentioned modifier
            classes to change the appearance of a badge.</p>
          <span class="mt-2 badge border border-primary text-primary mt-2">Primary</span>{{ '' }}
          <span class="mt-2 badge border border-secondary text-secondary mt-2">Secondary</span>{{ '' }}
          <span class="mt-2 badge border border-success text-success mt-2">Success</span>{{ '' }}
          <span class="mt-2 badge border border-danger text-danger mt-2">Danger</span>{{ '' }}
          <span class="mt-2 badge border border-warning text-warning mt-2">Warning</span>{{ '' }}
          <span class="mt-2 badge border border-info text-info mt-2">Info</span>{{ '' }}
          <span class="mt-2 badge border border-light text-light mt-2">Light</span>{{ '' }}
          <span class="mt-2 badge border border-dark text-dark mt-2">Dark</span>{{ '' }}
          <span class="mt-2 badge border border-gray text-gray mt-2">Gray</span>
          <h5 class="card-title mt-4">Pill badges</h5>
          <p class="mb-2">Use the
            <code>.badge-pill</code>
            modifier class to make badges more rounded (with a larger
            <code>border-radius</code>
            and additional horizontal
            <code>padding</code>). Useful if you miss the badges from
            v3.
          </p>
          <span class="mt-2 badge badge-pill border border-primary text-primary">Primary</span>{{ '' }}
          <span class="mt-2 badge badge-pill border border-secondary text-secondary">Secondary</span>{{ '' }}
          <span class="mt-2 badge badge-pill border border-success text-success">Success</span>{{ '' }}
          <span class="mt-2 badge badge-pill border border-danger text-danger">Danger</span>{{ '' }}
          <span class="mt-2 badge badge-pill border border-warning text-warning">Warning</span>{{ '' }}
          <span class="mt-2 badge badge-pill border border-info text-info">Info</span>{{ '' }}
          <span class="mt-2 badge badge-pill border border-light text-light">Light</span>{{ '' }}
          <span class="mt-2 badge badge-pill border border-dark text-dark">Dark</span>{{ '' }}
          <span class="mt-2 badge badge-pill border border-gray text-gray">Gray</span>
          <h5 class="card-title mt-4">Links</h5>
          <p class="mb-2">Using the contextual
            <code>.badge-*</code>
            classes on an
            <code>&lt;a&gt;</code>
            element quickly provide
            <em>actionable</em>
            badges with hover and focus states.
          </p>
          <a href="#" class="mt-2 badge border border-primary text-primary">Primary</a>{{ '' }}
          <a href="#" class="mt-2 badge border border-secondary text-secondary">Secondary</a>{{ '' }}
          <a href="#" class="mt-2 badge border border-success text-success">Success</a>{{ '' }}
          <a href="#" class="mt-2 badge border border-danger text-danger">Danger</a>{{ '' }}
          <a href="#" class="mt-2 badge border border-warning text-warning">Warning</a>{{ '' }}
          <a href="#" class="mt-2 badge border border-info text-info">Info</a>{{ '' }}
          <a href="#" class="mt-2 badge border border-light text-light">Light</a>{{ '' }}
          <a href="#" class="mt-2 badge border border-dark text-dark">Dark</a>{{ '' }}
          <a href="#" class="mt-2 badge border border-gray text-gray">Gray</a>
        </b-card-body>
      </b-card>
    </b-col>
  </b-row>
</template>
