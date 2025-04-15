<template>
  <b-row>
    <b-col sm="12" lg="6">
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <b-card-title>List Group</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p>The most basic list group is an unordered list with list items and the proper classes. Build upon
            it with the options that follow, or with your own CSS as needed.</p>
          <div class="list-group">
            <li class="list-group-item">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Morbi leo risus</li>
            <li class="list-group-item">Porta ac consectetur ac</li>
            <li class="list-group-item">Vestibulum at eros</li>
          </div>
        </b-card-body>
      </b-card>
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <b-card-title>Disabled Items</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Add <code>.disabled</code> to a <code>.list-group-item</code> to make it <em>appear</em>
            disabled. Note that some elements with <code>.disabled</code> will also require custom
            JavaScript to fully disable their click events (e.g., links).</p>
          <div class="list-group">
            <li class="list-group-item disabled" aria-disabled="true">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Morbi leo risus</li>
            <li class="list-group-item">Porta ac consectetur ac</li>
            <li class="list-group-item">Vestibulum at eros</li>
          </div>
        </b-card-body>
      </b-card>
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <b-card-title>Flush</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Add <code class="highlighter-rouge">.list-group-flush</code> to remove some borders and rounded
            corners to render list group items edge-to-edge in a parent container (e.g., cards).</p>
          <div class="list-group list-group-flush">
            <li class="list-group-item">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Morbi leo risus</li>
            <li class="list-group-item">Porta ac consectetur ac</li>
            <li class="list-group-item">Vestibulum at eros</li>
          </div>
        </b-card-body>
      </b-card>
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <b-card-title>Contextual Classes</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Use contextual classes to style list items with a stateful background and color.</p>
          <div class="list-group">
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item list-group-item-primary">A simple primary list group item</li>
            <li class="list-group-item list-group-item-secondary">A simple secondary list group item</li>
            <li class="list-group-item list-group-item-success">A simple success list group item</li>
            <li class="list-group-item list-group-item-danger">A simple danger list group item</li>
            <li class="list-group-item list-group-item-warning">A simple warning list group item</li>
            <li class="list-group-item list-group-item-info">A simple info list group item</li>
            <li class="list-group-item list-group-item-light">A simple light list group item</li>
            <li class="list-group-item list-group-item-dark custom-dark-subtle-color border-dark">A simple dark list
              group item</li>
          </div>
        </b-card-body>
      </b-card>
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <b-card-title>With Badges</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Add badges to any list group item to show unread counts, activity, and more with the help of some
            <a href="#">utilities</a>.
          </p>
          <div class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center">
              Cras justo odio
              <span class="badge bg-primary badge-pill">14</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              Dapibus ac facilisis in
              <span class="badge bg-success badge-pill">2</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              Morbi leo risus
              <span class="badge bg-danger badge-pill">1</span>
            </li>
          </div>
        </b-card-body>
      </b-card>
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <b-card-title>With Badges</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Add badges to any list group item to show unread counts, activity, and more with the help of some
            <a href="#">utilities</a>.
          </p>
          <div class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center bg-primary-subtle">
              Cras justo odio
              <span class="badge bg-primary badge-pill">14</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center bg-success-subtle">
              Dapibus ac facilisis in
              <span class="badge bg-success badge-pill">2</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center bg-danger-subtle">
              Morbi leo risus
              <span class="badge bg-danger badge-pill">1</span>
            </li>
          </div>
        </b-card-body>
      </b-card>
    </b-col>
    <b-col sm="12" lg="6">
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <b-card-title>List Active</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Add <code>.active</code> to a <code>.list-group-item</code> to indicate the current active
            selection.</p>
          <div class="list-group">
            <li class="list-group-item active">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Morbi leo risus</li>
            <li class="list-group-item">Porta ac consectetur ac</li>
            <li class="list-group-item">Vestibulum at eros</li>
          </div>
        </b-card-body>
      </b-card>
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <b-card-title>Links And Buttons</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Use <code>&lt;a&gt;</code>s or <code>&lt;button&gt;</code>s to create <em>actionable</em> list
            group items with hover, disabled, and active states by adding
            <code>.list-group-item-action</code>. We separate these pseudo-classes to ensure list groups
            made of non-interactive elements (like <code>&lt;li&gt;</code>s or <code>&lt;div&gt;</code>s)
            don’t provide a click or tap affordance.
          </p>
          <p>Be sure to <strong>not use the standard <code>.btn</code> classes here</strong>.</p>
          <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action active">
              Cras justo odio
            </a>
            <a href="#" class="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
            <a href="#" class="list-group-item list-group-item-action">Morbi leo risus</a>
            <a href="#" class="list-group-item list-group-item-action">Porta ac consectetur ac</a>
            <a href="#" class="list-group-item list-group-item-action disabled" tabindex="-1">Vestibulum at
              eros</a>
          </div>
        </b-card-body>
      </b-card>
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <b-card-title>Horizontal</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Add <code>.list-group-horizontal</code> to change the layout of list group items from vertical to
            horizontal across all breakpoints. Alternatively, choose a responsive variant
            <code>.list-group-horizontal-{sm|md|lg|xl}</code> to make a list group horizontal starting at
            that breakpoint’s <code>min-width</code>. Currently <strong>horizontal list groups cannot be
              combined with flush list groups.</strong>
          </p>
          <p><strong>ProTip:</strong> Want equal-width list group items when horizontal? Add
            <code>.flex-fill</code> to each list group item.
          </p>
          <ul class="list-group list-group-horizontal">
            <li class="list-group-item">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Morbi leo risus</li>
          </ul>
        </b-card-body>
      </b-card>
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <b-card-title>Contextual Classes Action</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Use contextual classes to style list items with a stateful background and color.</p>
          <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
            <a href="#" class="list-group-item list-group-item-action list-group-item-primary">A simple
              primary list group item</a>
            <a href="#" class="list-group-item list-group-item-action list-group-item-secondary">A simple
              secondary list group item</a>
            <a href="#" class="list-group-item list-group-item-action list-group-item-success">A simple
              success list group item</a>
            <a href="#" class="list-group-item list-group-item-action list-group-item-danger">A simple
              danger list group item</a>
            <a href="#" class="list-group-item list-group-item-action list-group-item-warning">A simple
              warning list group item</a>
            <a href="#" class="list-group-item list-group-item-action list-group-item-info">A simple info
              list group item</a>
            <a href="#" class="list-group-item list-group-item-action list-group-item-light">A simple light
              list group item</a>
            <a href="#"
              class="list-group-item list-group-item-action list-group-item-dark custom-dark-subtle-color border-dark">A
              simple dark
              list group item</a>
          </div>
        </b-card-body>
      </b-card>
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <b-card-title>Custom Content</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Add nearly any HTML within, even for linked list groups like the one below, with the help of <a
              href="#">flexbox utilities</a>.</p>
          <div class="list-group">
            <a class="list-group-item list-group-item-action active">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1 text-white">List group item heading</h5>
                <small>3 days ago</small>
              </div>
              <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget
                risus varius blandit.</p>
              <small>Donec id elit non mi porta.</small>
            </a>
            <a class="list-group-item list-group-item-action">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">List group item heading</h5>
                <small class="text-muted">3 days ago</small>
              </div>
              <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget
                risus varius blandit.</p>
              <small class="text-muted">Donec id elit non mi porta.</small>
            </a>
            <a class="list-group-item list-group-item-action">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">List group item heading</h5>
                <small class="text-muted">3 days ago</small>
              </div>
              <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget
                risus varius blandit.</p>
              <small class="text-muted">Donec id elit non mi porta.</small>
            </a>
          </div>
        </b-card-body>
      </b-card>
    </b-col>
  </b-row>
</template>
