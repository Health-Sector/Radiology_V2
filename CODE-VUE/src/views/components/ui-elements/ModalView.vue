<template>
  <b-row>
    <b-col sm="12" lg="6">
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <b-card-title>Modal Components</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p class="mb-1">
            Below is a <em>static</em> modal example (meaning its
            <code>position</code> and <code>display</code> have been overridden). Included are the modal header, modal
            body
            (required for <code>padding</code>), and modal footer (optional). We ask that you include modal headers
            with dismiss actions whenever possible, or provide another explicit dismiss action.
          </p>
          <!-- Button trigger modal -->
          <b-button variant="primary-subtle" class="mt-2" @click="showModal = true">
            Launch demo modal
          </b-button>
        </b-card-body>
      </b-card>

      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <b-card-title>Modal Scrolling</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p class="mb-1">
            When modals become too long for the user’s viewport or device, they scroll independent of the page itself.
            Try the demo below to see what we mean.
          </p>
          <!-- Button trigger modal -->
          <b-button variant="primary-subtle" class="mt-2" @click="scrollableModal = true">
            Launch demo modal
          </b-button>
        </b-card-body>
      </b-card>

      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <b-card-title>Optional Sizes</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p class="mb-1">
            Modals have three optional sizes, available via modifier classes to be placed on a .modal-dialog. These
            sizes kick in at certain breakpoints to avoid horizontal scrollbars on narrower viewports.
          </p>
          <!-- Extra large modal -->
          <b-button variant="primary-subtle" class="mt-2" @click="extraLargeModal = true">
            Extra large modal
          </b-button>{{ '' }}
          <!-- Large modal -->
          <b-button variant="primary-subtle" class="mt-2" @click="largeModal = true">
            Large modal
          </b-button>{{ '' }}
          <!-- Small modal -->
          <b-button variant="primary-subtle" class="mt-2" @click="smallModal = true">
            Small modal
          </b-button>
        </b-card-body>
      </b-card>

      <!-- Static Modal -->
      <b-modal v-model="showModal" title="Modal Title">

        ...

        <template #footer>
          <b-button variant="secondary-subtle" @click="showModal = false">Close</b-button>
          <b-button variant="primary-subtle">Save Changes</b-button>
        </template>
      </b-modal>

      <!-- Scrollable Modal -->
      <b-modal v-model="scrollableModal" scrollable title="Modal Title">

        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo
          odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
          porta ac consectetur ac, vestibulum at eros.</p>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur
          et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
          auctor.</p>
        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
          cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
          dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo
          odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
          porta ac consectetur ac, vestibulum at eros.</p>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur
          et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
          auctor.</p>
        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
          cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
          dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo
          odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
          porta ac consectetur ac, vestibulum at eros.</p>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur
          et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
          auctor.</p>
        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
          cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
          dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo
          odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
          porta ac consectetur ac, vestibulum at eros.</p>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur
          et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
          auctor.</p>
        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
          cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
          dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo
          odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
          porta ac consectetur ac, vestibulum at eros.</p>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur
          et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
          auctor.</p>
        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
          cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
          dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo
          odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
          porta ac consectetur ac, vestibulum at eros.</p>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur
          et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
          auctor.</p>
        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
          cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
          dui. Donec ullamcorper nulla non metus auctor fringilla.</p>


        <template #footer>
          <b-button variant="secondary-subtle" @click="scrollableModal = false">Close</b-button>
          <b-button variant="primary-subtle">Save Changes</b-button>
        </template>
      </b-modal>

      <!-- Extra Large Modal -->
      <b-modal v-model="extraLargeModal" size="xl" title="Modal Title">

        <p>Modal body text goes here.</p>

        <template #footer>
          <b-button variant="secondary-subtle" @click="extraLargeModal = false">Close</b-button>
          <b-button variant="primary-subtle">Save Changes</b-button>
        </template>
      </b-modal>

      <!-- Large Modal -->
      <b-modal v-model="largeModal" size="lg" title="Modal Title">

        <p>Modal body text goes here.</p>

        <template #footer>
          <b-button variant="secondary-subtle" @click="largeModal = false">Close</b-button>
          <b-button variant="primary-subtle">Save Changes</b-button>
        </template>
      </b-modal>

      <!-- Small Modal -->
      <b-modal v-model="smallModal" size="sm" title="Modal Title">

        <p>Modal body text goes here.</p>

        <template #footer>
          <b-button variant="secondary-subtle" @click="smallModal = false">Close</b-button>
          <b-button variant="primary-subtle">Save Changes</b-button>
        </template>
      </b-modal>
    </b-col>
    <b-col sm="12" lg="6">
      <!-- Scrolling Long Content Modal Card -->
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <b-card-title>Scrolling Long Content</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p class="mb-1">When modals become too long for the user’s viewport or device, they scroll independent of
            the page itself. Try the demo below to see what we mean.</p>
          <b-button class="mt-2" variant="primary-subtle" @click="showModalLong = true">
            Launch demo modal
          </b-button>
        </b-card-body>
      </b-card>

      <!-- Vertically Centered Modal Card -->
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <b-card-title>Vertically Centered</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p class="mb-1">Add <code>.modal-dialog-centered</code> to <code
              class="highlighter-rouge">.modal-dialog</code>
            to vertically center the modal.</p>
          <b-button class="mt-2" variant="primary-subtle" @click="showModalCentered = true">
            Launch demo modal
          </b-button>{{ '' }}
          <!-- Button to trigger the modal -->
          <b-button variant="primary-subtle mt-2" @click="showCenteredScrollableModal = true">
            Vertically centered scrollable modal
          </b-button>
        </b-card-body>
      </b-card>

      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <b-card-title>Using The Grid</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p class="mb-1">
            Utilize the Bootstrap grid system within a modal by nesting
            <code>.container-fluid</code> within the
            <code>.modal-body</code>. Then, use the normal grid system classes as you would anywhere else.
          </p>
          <b-button variant="primary-subtle mt-2" @click="gridModal = true">
            Launch demo modal
          </b-button>
        </b-card-body>
      </b-card>

      <!-- Long Content Modal -->
      <b-modal v-model="showModalLong" id="exampleModalLong" title="Modal Title">
        <template #default>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo
            odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
            porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur
            et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo
            odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
            porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur
            et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo
            odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
            porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur
            et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo
            odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
            porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur
            et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo
            odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
            porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur
            et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo
            odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
            porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur
            et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
        </template>
        <template #footer>
          <b-button variant="secondary-subtle" @click="showModalLong = false">Close</b-button>
          <b-button variant="primary-subtle">Save Changes</b-button>
        </template>
      </b-modal>

      <!-- Vertically Centered Modal -->
      <b-modal v-model="showModalCentered" centered title="Modal Title">
        <template #default>
          ...
        </template>
        <template #footer>
          <b-button variant="secondary-subtle" @click="showModalCentered = false">Close</b-button>
          <b-button variant="primary-subtle">Save Changes</b-button>
        </template>
      </b-modal>
      <!-- Vertically Centered Scrollable Modal -->
      <b-modal v-model="showCenteredScrollableModal" centered scrollable title="Modal Title">
        <template #default>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo
            odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
            porta ac consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur
            et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo
            odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
            porta ac consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur
            et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.
          </p>
        </template>

        <!-- Modal Footer -->
        <template #footer>
          <b-button variant="secondary-subtle" @click="showCenteredScrollableModal = false">
            Close
          </b-button>
          <b-button variant="primary-subtle">
            Save Changes
          </b-button>
        </template>
      </b-modal>

      <!-- grid modal -->
      <b-modal v-model="gridModal" title="Grids In Modals">
        <div class="iq-example-row">
          <b-container fluid>
            <b-row class="mb-3">
              <b-col md="4">.col-md-4</b-col>
              <b-col md="4" class="ms-auto">.col-md-4 .ms-auto</b-col>
            </b-row>
            <b-row class="mb-3">
              <b-col md="3" class="ml-auto">.col-md-3 .ml-auto</b-col>
              <b-col md="2" class="ml-auto">.col-md-2 .ml-auto</b-col>
            </b-row>
            <b-row class="mb-3">
              <b-col md="6" class="ml-auto">.col-md-6 .ml-auto</b-col>
            </b-row>
            <b-row>
              <b-col sm="9">
                Level 1: .col-sm-9
                <b-row>
                  <b-col cols="8" sm="6">
                    Level 2: .col-8 .col-sm-6
                  </b-col>
                  <b-col cols="4" sm="6">
                    Level 2: .col-4 .col-sm-6
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-container>
        </div>
        <template #footer>
          <b-button variant="secondary-subtle" @click="showModal = false">Close</b-button>
          <b-button variant="primary-subtle" @click="saveChanges">Save Changes</b-button>
        </template>
      </b-modal>
    </b-col>
  </b-row>
</template>

<script setup>
import { ref } from 'vue'

const showModal = ref(false)
const scrollableModal = ref(false)
const extraLargeModal = ref(false)
const largeModal = ref(false)
const smallModal = ref(false)
const showModalLong = ref(false);
const showModalCentered = ref(false);
const showCenteredScrollableModal = ref(false);
const gridModal = ref(false)
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>