<template>
  <b-row>
    <b-col sm="12" lg="6">
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <b-card-title>Default Buttons</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p class="mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever.
          </p>
          <b-button variant="primary-subtle" class="mb-3">Primary</b-button>{{ '' }}
          <b-button variant="secondary-subtle" class="mb-3">Secondary</b-button>{{ '' }}
          <b-button variant="success-subtle" class="mb-3">Success</b-button>{{ '' }}
          <b-button variant="danger-subtle" class="mb-3">Danger</b-button>{{ '' }}
          <b-button variant="warning-subtle" class="mb-3">Warning</b-button>{{ '' }}
          <b-button variant="info-subtle" class="mb-3">Info</b-button>{{ '' }}
          <b-button variant="gray-subtle" class="mb-3">Light</b-button>{{ '' }}
          <b-button variant="dark" class="mb-3">Dark</b-button>{{ '' }}
          <b-button variant="link" class="text-primary mb-3">Link</b-button>
        </b-card-body>
      </b-card>
    </b-col>
    <b-col sm="12" lg="6">
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <b-card-title>Default Buttons Rounded Shape</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p class="mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever.
          </p>
          <b-button variant="primary-subtle" class="rounded-pill mb-3">Primary</b-button>{{ '' }}
          <b-button variant="secondary-subtle" class="rounded-pill mb-3">Secondary</b-button>{{ '' }}
          <b-button variant="success-subtle" class="rounded-pill mb-3">Success</b-button>{{ '' }}
          <b-button variant="danger-subtle" class="rounded-pill mb-3">Danger</b-button>{{ '' }}
          <b-button variant="warning-subtle" class="rounded-pill mb-3">Warning</b-button>{{ '' }}
          <b-button variant="info-subtle" class="rounded-pill mb-3">Info</b-button>{{ '' }}
          <b-button variant="gray-subtle" class="rounded-pill mb-3">Light</b-button>{{ '' }}
          <b-button variant="dark" class="rounded-pill mb-3">Dark</b-button>{{ '' }}
          <b-button variant="link" class="rounded-pill text-primary mb-3">Link</b-button>
        </b-card-body>
      </b-card>
    </b-col>
  </b-row>
  <b-row>
    <!-- Outline Buttons -->
    <b-col sm="12" lg="6">
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <b-card-title>Outline Buttons</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p class="mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever.
          </p>
          <b-button variant="outline-primary" class="mb-3">Primary</b-button>{{ '' }}
          <b-button variant="outline-secondary" class="mb-3">Secondary</b-button>{{ '' }}
          <b-button variant="outline-success" class="mb-3">Success</b-button>{{ '' }}
          <b-button variant="outline-danger" class="mb-3">Danger</b-button>{{ '' }}
          <b-button variant="outline-warning" class="mb-3">Warning</b-button>{{ '' }}
          <b-button variant="outline-info" class="mb-3">Info</b-button>{{ '' }}
          <b-button variant="outline-dark" class="mb-3">Dark</b-button>{{ '' }}
          <b-button variant="link" class="mb-3">Link</b-button>
        </b-card-body>
      </b-card>
    </b-col>

    <!-- Rounded Outline Buttons -->
    <b-col sm="12" lg="6">
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <b-card-title>Rounded Outline Buttons</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p class="mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever.
          </p>
          <b-button variant="outline-primary" class="rounded-pill mb-3">Primary</b-button>{{ '' }}
          <b-button variant="outline-secondary" class="rounded-pill mb-3">Secondary</b-button>{{ '' }}
          <b-button variant="outline-success" class="rounded-pill mb-3">Success</b-button>{{ '' }}
          <b-button variant="outline-danger" class="rounded-pill mb-3">Danger</b-button>{{ '' }}
          <b-button variant="outline-warning" class="rounded-pill mb-3">Warning</b-button>{{ '' }}
          <b-button variant="outline-info" class="rounded-pill mb-3">Info</b-button>{{ '' }}
          <b-button variant="outline-dark" class="rounded-pill mb-3">Dark</b-button>{{ '' }}
          <b-button variant="link" class="rounded-pill mb-3">Link</b-button>
        </b-card-body>
      </b-card>
    </b-col>
  </b-row>
  <b-row>
    <!-- Default Buttons -->
    <b-col sm="12" lg="6">
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <b-card-title>Default Buttons</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p class="mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever.
          </p>
          <b-button variant="primary-subtle" class="mb-3">
            <i class="ri-bill-fill"></i>Primary
          </b-button>{{ '' }}
          <b-button variant="secondary-subtle" class="mb-3">
            <i class="ri-heart-fill"></i>Secondary
          </b-button>{{ '' }}
          <b-button variant="success-subtle" class="mb-3">
            <i class="ri-bill-fill"></i>Success
          </b-button>{{ '' }}
          <b-button variant="danger-subtle" class="mb-3">
            <i class="ri-heart-fill"></i>Danger
          </b-button>{{ '' }}
          <b-button variant="warning-subtle" class="mb-3">
            <i class="ri-bill-fill"></i>Warning
          </b-button>{{ '' }}
          <b-button variant="info-subtle" class="mb-3">
            <i class="ri-heart-fill"></i>Info
          </b-button>{{ '' }}
          <b-button variant="gray-subtle" class="mb-3">
            <i class="ri-bill-fill"></i>Light
          </b-button>{{ '' }}
          <b-button variant="dark-subtle" class="mb-3">
            <i class="ri-heart-fill"></i>Dark
          </b-button>{{ '' }}
          <b-button variant="link" class="mb-3 text-primary">
            <i class="ri-bill-fill"></i>Link
          </b-button>
        </b-card-body>
      </b-card>
    </b-col>

    <!-- Default Buttons Rounded Shape -->
    <b-col sm="12" lg="6">
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <b-card-title>Default Buttons Rounded Shape</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p class="mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever.
          </p>
          <b-button variant="primary" class="rounded-pill mb-3">
            <i class="ri-bill-fill"></i>Primary
          </b-button>{{ '' }}
          <b-button variant="secondary" class="rounded-pill mb-3">
            <i class="ri-heart-fill"></i>Secondary
          </b-button>{{ '' }}
          <b-button variant="success-subtle" class="rounded-pill mb-3">
            <i class="ri-bill-fill"></i>Success
          </b-button>{{ '' }}
          <b-button variant="danger-subtle" class="rounded-pill mb-3">
            <i class="ri-heart-fill"></i>Danger
          </b-button>{{ '' }}
          <b-button variant="warning-subtle" class="rounded-pill mb-3">
            <i class="ri-bill-fill"></i>Warning
          </b-button>{{ '' }}
          <b-button variant="info-subtle" class="rounded-pill mb-3">
            <i class="ri-heart-fill"></i>Info
          </b-button>{{ '' }}
          <b-button variant="gray-subtle" class="rounded-pill mb-3">
            <i class="ri-bill-fill"></i>Light
          </b-button>{{ '' }}
          <b-button variant="dark-subtle" class="rounded-pill mb-3">
            <i class="ri-heart-fill"></i>Dark
          </b-button>{{ '' }}
          <b-button variant="link" class="rounded-pill text-primary mb-3">
            <i class="ri-bill-fill"></i>Link
          </b-button>
        </b-card-body>
      </b-card>
    </b-col>
  </b-row>
  <b-row>
    <!-- Outline Buttons -->
    <b-col sm="12" lg="6">
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <b-card-title>Outline Buttons</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p class="mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever.
          </p>
          <b-button variant="outline-primary" class="mb-3">
            <i class="ri-heart-line"></i>Primary
          </b-button>{{ '' }}
          <b-button variant="outline-secondary" class="mb-3">
            <i class="ri-alert-fill"></i>Secondary
          </b-button>{{ '' }}
          <b-button variant="outline-success" class="mb-3">
            <i class="ri-heart-line"></i>Success
          </b-button>{{ '' }}
          <b-button variant="outline-danger" class="mb-3">
            <i class="ri-alert-fill"></i>Danger
          </b-button>{{ '' }}
          <b-button variant="outline-warning" class="mb-3">
            <i class="ri-heart-line"></i>Warning
          </b-button>{{ '' }}
          <b-button variant="outline-info" class="mb-3">
            <i class="ri-alert-fill"></i>Info
          </b-button>{{ '' }}
          <b-button variant="outline-dark" class="mb-3">
            <i class="ri-alert-fill"></i>Dark
          </b-button>{{ '' }}
          <b-button variant="link" class="mb-3">
            <i class="ri-heart-line"></i>Link
          </b-button>
        </b-card-body>
      </b-card>
    </b-col>

    <!-- Rounded Outline Buttons -->
    <b-col sm="12" lg="6">
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <b-card-title>Rounded Outline Buttons</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p class="mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever.
          </p>
          <b-button variant="outline-primary" class="rounded-pill mb-3">
            <i class="ri-heart-line"></i>Primary
          </b-button>{{ '' }}
          <b-button variant="outline-secondary" class="rounded-pill mb-3">
            <i class="ri-alert-fill"></i>Secondary
          </b-button>{{ '' }}
          <b-button variant="outline-success" class="rounded-pill mb-3">
            <i class="ri-heart-line"></i>Success
          </b-button>{{ '' }}
          <b-button variant="outline-danger" class="rounded-pill mb-3">
            <i class="ri-alert-fill"></i>Danger
          </b-button>{{ '' }}
          <b-button variant="outline-warning" class="rounded-pill mb-3">
            <i class="ri-heart-line"></i>Warning
          </b-button>{{ '' }}
          <b-button variant="outline-info" class="rounded-pill mb-3">
            <i class="ri-alert-fill"></i>Info
          </b-button>{{ '' }}
          <b-button variant="outline-dark" class="rounded-pill mb-3">
            <i class="ri-alert-fill"></i>Dark
          </b-button>{{ '' }}
          <b-button variant="link" class="rounded-pill mb-3">
            <i class="ri-heart-line"></i>Link
          </b-button>
        </b-card-body>
      </b-card>
    </b-col>
  </b-row>
  <b-row>
    <!-- Button Tags -->
    <b-col sm="12" lg="6">
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <b-card-title>Button Tags</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p class="mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever.
          </p>
          <b-button href="#" class="mb-3 mb-md-0" variant="primary-subtle" role="button">Link</b-button>{{ '' }}
          <b-button class="mb-3 mb-md-0" variant="success-subtle" type="submit">Button</b-button>{{ '' }}
          <input class="mb-3 mb-md-0 btn btn-danger-subtle" type="button" value="Input">{{ '' }}
          <input class="btn btn-warning-subtle" type="submit" value="Submit">{{ '' }}
          <input class="btn btn-info-subtle" type="reset" value="Reset">
        </b-card-body>
      </b-card>
    </b-col>

    <!-- Buttons Sizes -->
    <b-col sm="12" lg="6">
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <b-card-title>Buttons Sizes</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p class="mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever.
          </p>
          <b-button class="btn-sm me-2 mb-2 mb-md-0" variant="primary-subtle">Small Button</b-button>{{ '' }}
          <b-button class="me-2 mb-3 mb-md-0" variant="success-subtle">Button</b-button>{{ '' }}
          <b-button class="btn-lg" variant="info-subtle">Large Button</b-button>
        </b-card-body>
      </b-card>
    </b-col>
  </b-row>
  <b-row>
    <b-col sm="12" lg="6">
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <b-card-title>Block Buttons</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p class="mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever.
          </p>
          <b-button variant="primary-subtle" block class="mb-2 mb-md-0">
            Block level button
          </b-button>{{ '' }}
          <b-button variant="success-subtle" block>
            Block level button
          </b-button>
        </b-card-body>
      </b-card>
    </b-col>
    <b-col sm="12" lg="6">
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <b-card-title>Icons Buttons</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p class="mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever.
          </p>
          <b-button variant="primary-subtle" class="mb-3"><i class="ri-heart-fill pe-0"></i></b-button>{{ '' }}
          <b-button variant="secondary-subtle" class="mb-3"><i class="ri-star-fill pe-0"></i></b-button>{{ '' }}
          <b-button variant="success-subtle" class="mb-3"><i class="ri-settings-4-fill pe-0"></i></b-button>{{ '' }}
          <b-button variant="danger-subtle" class="mb-3"><i class="ri-radio-button-fill pe-0"></i></b-button>{{ '' }}
          <b-button variant="warning-subtle" class="mb-3"><i class="ri-delete-bin-2-fill pe-0"></i></b-button>{{ '' }}
          <b-button variant="info-subtle" class="mb-3"><i class="ri-lock-fill pe-0"></i></b-button>{{ '' }}
          <b-button variant="gray-subtle" class="mb-3"><i class="ri-time-fill pe-0"></i></b-button>{{ '' }}
          <b-button variant="dark-subtle" class="mb-3"><i class="ri-sun-fill pe-0"></i></b-button>{{ '' }}
          <b-button variant="link-subtle" class="mb-3"><i class="ri-moon-fill pe-0"></i></b-button>
          <div class="d-inline-block w-100 mt-3">
            <b-button variant="primary-subtle" class="mb-3"><i class="ri-heart-fill"></i>Buttons</b-button>{{ '' }}
            <b-button variant="secondary-subtle" class="mb-3"><i class="ri-star-fill"></i>Buttons</b-button>{{ '' }}
            <b-button variant="success-subtle" class="mb-3"><i class="ri-settings-4-fill"></i>Buttons</b-button>{{ ''
            }}
            <b-button variant="danger-subtle" class="mb-3"><i class="ri-radio-button-fill"></i>Buttons</b-button>{{ ''
            }}
            <b-button variant="info-subtle" class="mb-3"><i class="ri-lock-fill"></i>Buttons</b-button>
          </div>
        </b-card-body>
      </b-card>
    </b-col>
  </b-row>
  <b-row>
    <b-col sm="12" lg="6">
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <b-card-title>Social Disabled State</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p class="mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever.
          </p>
          <b-button variant="primary" class="mb-2 mb-md-0" disabled>
            Primary button
          </b-button>{{ '' }}
          <b-button variant="success" disabled>
            Button
          </b-button>{{ '' }}
          <b-button variant="outline-primary" class="text-white" disabled>
            Button
          </b-button>
        </b-card-body>
      </b-card>
    </b-col>
    <b-col sm="12" lg="6">
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <b-card-title>Buttons Toggle States</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p class="mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever.
          </p>
          <b-button variant="primary-subtle" data-bs-toggle="button" aria-pressed="false">
            Single toggle
          </b-button>
        </b-card-body>
      </b-card>
    </b-col>
  </b-row>
  <b-row>
    <b-col sm="12" lg="6">
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <b-card-title>Default Buttons Active</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p class="mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever.
          </p>
          <b-button variant="primary" class="active mb-3">Active</b-button>{{ '' }}
          <b-button variant="secondary" class="active mb-3">Active</b-button>{{ '' }}
          <b-button variant="warning" class="active mb-3">Active</b-button>{{ '' }}
          <b-button variant="accent" disabled class="mb-3">Disabled</b-button>{{ '' }}
          <b-button variant="primary" disabled class="mb-3">Disabled</b-button>{{ '' }}
          <b-button variant="outline-primary" disabled class="text-white mb-3">Disabled</b-button>
        </b-card-body>
      </b-card>

      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <b-card-title>Button Group Sizing</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p class="mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever.
          </p>
          <div class="d-block">
            <b-button-group size="lg" aria-label="Basic example">
              <b-button variant="primary-subtle">Left</b-button>
              <b-button variant="primary-subtle">Middle</b-button>
              <b-button variant="primary-subtle">Right</b-button>
            </b-button-group>
          </div>
          <div class="d-block">
            <b-button-group class="mt-3" aria-label="Basic example">
              <b-button variant="primary-subtle">Left</b-button>
              <b-button variant="primary-subtle">Middle</b-button>
              <b-button variant="primary-subtle">Right</b-button>
            </b-button-group>
          </div>
          <div class="d-block">
            <b-button-group size="sm" class="mt-3" aria-label="Basic example">
              <b-button variant="primary-subtle">Left</b-button>
              <b-button variant="primary-subtle">Middle</b-button>
              <b-button variant="primary-subtle">Right</b-button>
            </b-button-group>
          </div>
        </b-card-body>
      </b-card>
    </b-col>

    <b-col sm="12" lg="6">
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <b-card-title>Button Group</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p class="mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever.
          </p>
          <b-button-group aria-label="Basic example">
            <b-button variant="primary-subtle">Left</b-button>
            <b-button variant="primary-subtle">Middle</b-button>
            <b-button variant="primary-subtle">Right</b-button>
          </b-button-group>
          <div class="btn-toolbar mt-3" role="toolbar" aria-label="Toolbar with button groups">
            <b-button-group class="me-2" aria-label="First group">
              <b-button variant="secondary-subtle mb-2 mb-md-0">1</b-button>
              <b-button variant="secondary-subtle mb-2 mb-md-0">2</b-button>
              <b-button variant="secondary-subtle mb-2 mb-md-0">3</b-button>
              <b-button variant="secondary-subtle mb-2 mb-md-0">4</b-button>
            </b-button-group>
            <b-button-group class="me-2" aria-label="Second group">
              <b-button variant="secondary-subtle">5</b-button>
              <b-button variant="secondary-subtle">6</b-button>
              <b-button variant="secondary-subtle">7</b-button>
            </b-button-group>
            <b-button-group aria-label="Third group">
              <b-button variant="secondary-subtle">8</b-button>
            </b-button-group>
          </div>
        </b-card-body>
      </b-card>

      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <b-card-title>Button Dropdown</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p class="mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever.
          </p>
          <b-button-group aria-label="Button group with nested dropdown">
            <b-button variant="primary-subtle">1</b-button>
            <b-button variant="primary-subtle">2</b-button>
            <div class="btn-group" role="group">
              <button id="btnGroupDrop1" type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                Dropdown
              </button>
              <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                <a class="dropdown-item" href="#">Dropdown link</a>
                <a class="dropdown-item" href="#">Dropdown link</a>
              </div>
            </div>
          </b-button-group>
          <div class="d-block mt-3">
            <b-button-group vertical aria-label="Button group with nested dropdown">
              <b-button variant="primary-subtle">1</b-button>
              <b-button variant="primary-subtle">2</b-button>
              <div class="btn-group" role="group">
                <button id="btnGroupDrop2" type="button" class="btn btn-primary dropdown-toggle"
                  data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
                </button>
                <div class="dropdown-menu" aria-labelledby="btnGroupDrop2">
                  <a class="dropdown-item" href="#">Dropdown link</a>
                  <a class="dropdown-item" href="#">Dropdown link</a>
                </div>
              </div>
            </b-button-group>
          </div>
        </b-card-body>
      </b-card>
    </b-col>
  </b-row>
</template>
<script setup>
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';
</script>
