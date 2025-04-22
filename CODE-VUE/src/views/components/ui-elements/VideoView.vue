<template>
  <!-- <b-container fluid> -->
  <b-row>
    <b-col sm="12" lg="6">
      <b-card no-body>
        <b-card-header class="mb-0 d-flex justify-content-between p-4">
          <div class="header-title">
            <b-card-title class="card-title">Embeds Video</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p>
            Wrap any embed like an <code class="highlighter-rouge">&lt;iframe&gt;</code> in a parent element with
            <code class="highlighter-rouge">.embed-responsive</code> and an aspect ratio. The <code
              class="highlighter-rouge">.embed-responsive-item</code> isn’t strictly required, but we encourage it.
          </p>
          <div class="ratio ratio-16x9">
            <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
              title="YouTube Video" allowfullscreen frameborder="0"></iframe>
          </div>
        </b-card-body>
      </b-card>

      <b-card no-body>
        <b-card-header class="mb-0 d-flex justify-content-between p-4">
          <div class="header-title">
            <b-card-title class="card-title">Responsive Aspect ratios 4:3</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p>
            Progress components are built with two HTML elements, some CSS to set the width, and a few attributes.
          </p>
          <div class="ratio ratio-4x3">
            <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
              title="YouTube Video" allowfullscreen frameborder="0"></iframe>
          </div>
        </b-card-body>
      </b-card>
    </b-col>

    <b-col sm="12" lg="6">
      <b-card no-body>
        <b-card-header class="mb-0 d-flex justify-content-between p-4">
          <div class="header-title">
            <b-card-title class="card-title">Responsive Aspect ratios 21:9</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p>
            Progress components are built with two HTML elements, some CSS to set the width, and a few attributes.
          </p>
          <div class="ratio ratio-21x9">
            <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
              title="YouTube Video" allowfullscreen frameborder="0"></iframe>
          </div>
        </b-card-body>
      </b-card>

      <b-card no-body>
        <b-card-header class="mb-0 d-flex justify-content-between p-4">
          <div class="header-title">
            <b-card-title class="card-title">Responsive Aspect ratios 1:1</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p>
            Progress components are built with two HTML elements, some CSS to set the width, and a few attributes.
          </p>
          <div class="ratio ratio-1x1">
            <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
              title="YouTube Video" allowfullscreen frameborder="0"></iframe>
          </div>
        </b-card-body>
      </b-card>
    </b-col>
  </b-row>
  <!-- </b-container> -->
</template>
