<template>
  <b-row>
    <b-col sm="12">
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <b-card-title>Grid options</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p>See how aspects of the Bootstrap grid system work across multiple devices with a handy table..</p>
          <div class="table-responsive mb-0">
            <table class="table table-bordered table-striped mb-3">
              <thead>
                <tr>
                  <th></th>
                  <th class="text-center">
                    xs<br>
                    <small>&lt;576px</small>
                  </th>
                  <th class="text-center">
                    sm<br>
                    <small>≥576px</small>
                  </th>
                  <th class="text-center">
                    md<br>
                    <small>≥768px</small>
                  </th>
                  <th class="text-center">
                    lg<br>
                    <small>≥992px</small>
                  </th>
                  <th class="text-center">
                    xl<br>
                    <small>≥1200px</small>
                  </th>
                  <th class="text-center">
                    xxl<br>
                    <small>≥1400px</small>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th class="text-nowrap text-start" scope="row">Max container width</th>
                  <td>None (auto)</td>
                  <td>540px</td>
                  <td>720px</td>
                  <td>960px</td>
                  <td>1140px</td>
                  <td>1320px</td>
                </tr>
                <tr>
                  <th class="text-nowrap text-start" scope="row">Class prefix</th>
                  <td><code>.col-</code></td>
                  <td><code>.col-sm-</code></td>
                  <td><code>.col-md-</code></td>
                  <td><code>.col-lg-</code></td>
                  <td><code>.col-xl-</code></td>
                  <td><code>.col-xxl-</code></td>
                </tr>
                <tr>
                  <th class="text-nowrap text-start" scope="row"># of columns</th>
                  <td colspan="6" class="text-start">12</td>
                </tr>
                <tr>
                  <th class="text-nowrap text-start" scope="row">Gutter width</th>
                  <td colspan="6" class="text-start">1.5rem (.75rem on left and right)</td>
                </tr>
                <tr>
                  <th class="text-nowrap text-start" scope="row">Custom gutters</th>
                  <td colspan="6" class="text-start">Yes</td>
                </tr>
                <tr>
                  <th class="text-nowrap text-start" scope="row">Nestable</th>
                  <td colspan="6" class="text-start">Yes</td>
                </tr>
                <tr>
                  <th class="text-nowrap text-start" scope="row">Column ordering</th>
                  <td colspan="6" class="text-start">Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </b-card-body>
      </b-card>
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <b-card-title>Equal-width</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p>For example, here are two grid layouts that apply to every device and viewport, from <code>xs</code> to
            <code>xl</code>. Add any number of unit-less classes for each breakpoint you need and every column will be
            the same width.
          </p>
          <div class="iq-example-row">
            <b-container fluid>
              <!-- Stack the columns on mobile by making one full-width and the other half-width -->
              <b-row class="mb-3">
                <b-col cols="12" md="8">.col-12 .col-md-8</b-col>
                <b-col cols="6" md="4">.col-6 .col-md-4</b-col>
              </b-row>
              <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
              <b-row class="mb-3">
                <b-col cols="6" md="4">.col-6 .col-md-4</b-col>
                <b-col cols="6" md="4">.col-6 .col-md-4</b-col>
                <b-col cols="6" md="4">.col-6 .col-md-4</b-col>
              </b-row>
              <!-- Columns are always 50% wide, on mobile and desktop -->
              <b-row>
                <b-col cols="6">.col-6</b-col>
                <b-col cols="6">.col-6</b-col>
              </b-row>
            </b-container>
          </div>
        </b-card-body>
      </b-card>
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <b-card-title>Setting one column width</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Auto-layout for flexbox grid columns also means you can set the width of one column and have the sibling
            columns automatically resize around it. You may use predefined grid classes (as shown below), grid mixins,
            or inline widths. Note that the other columns will resize no matter the width of the center column.</p>
          <div class="iq-example-row">
            <b-container fluid>
              <b-row class="mb-3">
                <b-col>
                  1 of 3
                </b-col>
                <b-col cols="6">
                  2 of 3 (wider)
                </b-col>
                <b-col>
                  3 of 3
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  1 of 3
                </b-col>
                <b-col cols="5">
                  2 of 3 (wider)
                </b-col>
                <b-col>
                  3 of 3
                </b-col>
              </b-row>
            </b-container>
          </div>
        </b-card-body>
      </b-card>
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <b-card-title>Variable width content</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Use <code>col-{breakpoint}-auto</code> classes to size columns based on the natural width of their
            content.
          </p>
          <div class="iq-example-row">
            <b-container fluid>
              <b-row class="justify-content-md-center mb-3">
                <b-col class="col" lg="2">
                  1 of 3
                </b-col>
                <b-col md="auto">
                  Variable width content
                </b-col>
                <b-col class="col" lg="2">
                  3 of 3
                </b-col>
              </b-row>
              <b-row>
                <b-col class="col">
                  1 of 3
                </b-col>
                <b-col md="auto">
                  Variable width content
                </b-col>
                <b-col lg="2" class="col">
                  3 of 3
                </b-col>
              </b-row>
            </b-container>
          </div>
        </b-card-body>
      </b-card>
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <b-card-title>Equal-width multi-row</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Create equal-width columns that span multiple rows by inserting a <code>.w-100</code> where you want the
            columns to break to a new line. Make the breaks responsive by mixing the <code>.w-100</code> with some <a
              href="https://getbootstrap.com/" target="_blank">responsive display utilities</a>.</p>
          <div class="iq-example-row">
            <b-container fluid>
              <b-row>
                <b-col>col</b-col>
                <b-col>col</b-col>
                <div class="w-100"></div>
                <b-col>col</b-col>
                <b-col>col</b-col>
              </b-row>
            </b-container>
          </div>
        </b-card-body>
      </b-card>
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <b-card-title>Responsive classes</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Bootstrap’s grid includes five tiers of predefined classes for building complex responsive layouts.
            Customize the size of your columns on extra small, small, medium, large, or extra large devices however
            you
            see fit.</p>
          <b-card-title>All breakpoints</b-card-title>
          <p>For grids that are the same from the smallest of devices to the largest, use the <code>.col</code> and
            <code>.col-*</code> classes. Specify a numbered class when you need a particularly sized column;
            otherwise,
            feel free to stick to <code>.col</code>.
          </p>
          <div class="iq-example-row">
            <b-container fluid>
              <b-row class="mb-3">
                <b-col>col</b-col>
                <b-col>col</b-col>
                <b-col>col</b-col>
                <b-col>col</b-col>
              </b-row>
              <b-row>
                <b-col cols="8" class="col-8">col-8</b-col>
                <b-col cols="4">col-4</b-col>
              </b-row>
            </b-container>
          </div>
        </b-card-body>
      </b-card>
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <b-card-title>Stacked to horizontal</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Using a single set of <code>.col-sm-*</code> classes, you can create a basic grid system that starts out
            stacked and becomes horizontal at the small breakpoint (<code>sm</code>).</p>
          <div class="iq-example-row">
            <b-container fluid>
              <b-row class="mb-3">
                <b-col sm="8">col-sm-8</b-col>
                <b-col sm="4">col-sm-4</b-col>
              </b-row>
              <b-row>
                <b-col cols="sm">col-sm</b-col>
                <b-col cols="sm">col-sm</b-col>
                <b-col cols="sm">col-sm</b-col>
              </b-row>
            </b-container>
          </div>
        </b-card-body>
      </b-card>
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <b-card-title>Mix and match</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Don’t want your columns to simply stack in some grid tiers? Use a combination of different classes for
            each
            tier as needed. See the example below for a better idea of how it all works.</p>
          <div class="iq-example-row">
            <b-container fluid>
              <!-- Stack the columns on mobile by making one full-width and the other half-width -->
              <b-row class="mb-3">
                <b-col cols="12" md="8">.col-12 .col-md-8</b-col>
                <b-col cols="6" md="4">.col-6 .col-md-4</b-col>
              </b-row>
              <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
              <b-row class="mb-3">
                <b-col cols="6" md="4">.col-6 .col-md-4</b-col>
                <b-col cols="6" md="4">.col-6 .col-md-4</b-col>
                <b-col cols="6" md="4">.col-6 .col-md-4</b-col>
              </b-row>
              <!-- Columns are always 50% wide, on mobile and desktop -->
              <b-row>
                <b-col cols="6">.col-6</b-col>
                <b-col cols="6">.col-6</b-col>
              </b-row>
            </b-container>
          </div>
        </b-card-body>
      </b-card>
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <b-card-title>Gutters</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Gutters can be responsively adjusted by breakpoint-specific padding and negative margin utility classes.
            To
            change the gutters in a given row, pair a negative margin utility on the <code>.row</code> and matching
            padding utilities on the <code>.col</code>s. The <code>.container</code> or <code>.container-fluid</code>
            parent may need to be adjusted too to avoid unwanted overflow, using again matching padding utility.</p>
          <p>Here’s an example of customizing the Bootstrap grid at the large (<code>lg</code>) breakpoint and above.
            We’ve increased the <code>.col</code> padding with <code>.px-lg-5</code>, counteracted that with
            <code>.mx-lg-n5</code> on the parent <code>.row</code> and then adjusted the <code>.container</code>
            wrapper
            with <code>.px-lg-5</code>.
          </p>
          <div class="iq-example-row">
            <b-container fluid class="px-lg-5">
              <b-row class="mx-lg-n5">
                <b-col class="py-3 px-lg-5 border bg-body">Custom column padding</b-col>
                <b-col class="py-3 px-lg-5 border bg-body">Custom column padding</b-col>
              </b-row>
            </b-container>
          </div>
        </b-card-body>
      </b-card>
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <b-card-title>Alignment</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Use flexbox alignment utilities to vertically and horizontally align columns. <strong>Internet Explorer
              10-11 do not support vertical alignment of flex items when the flex container has a
              <code>min-height</code> as shown below.</strong> <a
              href="https://github.com/philipwalton/flexbugs#flexbug-3">See Flexbugs #3 for more details.</a></p>
          <h4 class="mb-3">Vertical alignment</h4>
          <div class="example-row example-row-flex-cols">
            <b-container fluid>
              <b-row class="align-items-start">
                <b-col>
                  One of three columns
                </b-col>
                <b-col>
                  One of three columns
                </b-col>
                <b-col>
                  One of three columns
                </b-col>
              </b-row>
              <b-row class="align-items-center">
                <b-col>
                  One of three columns
                </b-col>
                <b-col>
                  One of three columns
                </b-col>
                <b-col>
                  One of three columns
                </b-col>
              </b-row>
              <b-row class="align-items-end">
                <b-col>
                  One of three columns
                </b-col>
                <b-col>
                  One of three columns
                </b-col>
                <b-col>
                  One of three columns
                </b-col>
              </b-row>
            </b-container>
            <b-container fluid>
              <b-row>
                <b-col class="align-self-start">
                  One of three columns
                </b-col>
                <b-col class="align-self-center">
                  One of three columns
                </b-col>
                <b-col class="align-self-end">
                  One of three columns
                </b-col>
              </b-row>
            </b-container>
          </div>
        </b-card-body>
      </b-card>
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <b-card-title>Horizontal alignment</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Create equal-width columns that span multiple rows by inserting a <code>.w-100</code> where you want the
            columns to break to a new line. Make the breaks responsive by mixing the <code>.w-100</code> with some <a
              href="#">responsive display utilities</a>.</p>
          <div class="iq-example-row">
            <b-container fluid>
              <b-row class="justify-content-start mb-3">
                <b-col cols="4">
                  One of two columns
                </b-col>
                <b-col cols="4">
                  One of two columns
                </b-col>
              </b-row>
              <b-row class="justify-content-center mb-3">
                <b-col cols="4">
                  One of two columns
                </b-col>
                <b-col cols="4">
                  One of two columns
                </b-col>
              </b-row>
              <b-row class="justify-content-end mb-3">
                <b-col cols="4">
                  One of two columns
                </b-col>
                <b-col cols="4">
                  One of two columns
                </b-col>
              </b-row>
              <b-row class="justify-content-around mb-3">
                <b-col cols="4">
                  One of two columns
                </b-col>
                <b-col cols="4">
                  One of two columns
                </b-col>
              </b-row>
              <b-row class="justify-content-between">
                <b-col cols="4">
                  One of two columns
                </b-col>
                <b-col cols="4">
                  One of two columns
                </b-col>
              </b-row>
            </b-container>
          </div>
        </b-card-body>
      </b-card>
    </b-col>
  </b-row>
</template>
