<template>
  <b-row>
    <b-col lg="6">
      <b-card no-body>
        <b-card-header class="mb-0 d-flex justify-content-between">
          <div class="header-title">
            <b-card-title>Pagination Examples</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p>In addition, as pages likely have more than one such navigation section, it’s advisable to provide a
            descriptive <code>aria-label</code> for the <code>&lt;nav&gt;</code> to reflect its purpose. For example,
            if
            the pagination component is used to navigate between a set of search results, an appropriate label could
            be
            <code>aria-label="Search results pages"</code>.
          </p>
          <nav aria-label="Page navigation example">
            <ul class="pagination mb-0">
              <li class="page-item">
                <a class="page-link" href="#" tabindex="-1">Previous</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">1</a>
              </li>
              <li class="page-item" aria-current="page">
                <a class="page-link" href="#">2 </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">3</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">Next</a>
              </li>
            </ul>
          </nav>
        </b-card-body>
      </b-card>
      <b-card no-body>
        <b-card-header class="mb-0 d-flex justify-content-between">
          <div class="header-title">
            <b-card-title>Disabled And Active States</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Pagination links are customizable for different circumstances. Use <code>.disabled</code> for links that
            appear un-clickable and <code>.active</code> to indicate the current page.</p>
          <p>While the <code>.disabled</code> class uses <code>pointer-events: none</code> to <em>try </em> to disable
            the link functionality of <code>&lt;a&gt;</code>s, that CSS property is not yet standardized and doesn’t
            account for keyboard navigation. As such, you should always add <code>tabindex="-1"</code> on disabled
            links
            and use custom JavaScript to fully disable their functionality.</p>
          <nav aria-label="...">
            <ul class="pagination">
              <li class="page-item disabled">
                <a class="page-link" href="#" tabindex="-1">Previous</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">1</a>
              </li>
              <li class="page-item active" aria-current="page">
                <a class="page-link" href="#">2 </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">3</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">Next</a>
              </li>
            </ul>
          </nav>
          <p>You can optionally swap out active or disabled anchors for <code>&lt;span&gt;</code>, or omit the anchor
            in
            the case of the prev/next arrows, to remove click functionality and prevent keyboard focus while retaining
            intended styles.</p>
          <nav aria-label="...">
            <ul class="pagination">
              <li class="page-item disabled">
                <a class="page-link" href="#" tabindex="-1">Previous</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">1</a>
              </li>
              <li class="page-item active" aria-current="page">
                <a class="page-link" href="#">2 </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">3</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">Next</a>
              </li>
            </ul>
          </nav>
        </b-card-body>
      </b-card>
      <div class="card">
        <b-card-header class="mb-0 d-flex justify-content-between">
          <div class="header-title">
            <b-card-title>Pagination With Color</b-card-title>
          </div>
        </b-card-header>
        <div class="card-body">
          <p>In addition, as pages likely have more than one such navigation section, it’s advisable to provide a
            descriptive <code>aria-label</code> for the <code>&lt;nav&gt;</code> to reflect its purpose. For example,
            if
            the pagination component is used to navigate between a set of search results, an appropriate label could
            be
            <code>aria-label="Search results pages"</code>.
          </p>
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item"><a class="page-link border-primary bg-primary text-white rtl-pageLink-pre"
                  href="#">Previous</a>
              </li>
              <li class="page-item"><a class="page-link border-primary bg-primary text-white" href="#">1</a></li>
              <li class="page-item"><a class="page-link border-primary bg-primary text-white" href="#">2</a></li>
              <li class="page-item"><a class="page-link border-primary bg-primary text-white" href="#">3</a></li>
              <li class="page-item"><a class="page-link border-primary bg-primary text-white rtl-pageLink-next"
                  href="#">Next</a></li>
            </ul>
          </nav>
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item"><a class="page-link border-success bg-success text-white rtl-pageLink-pre"
                  href="#">Previous</a>
              </li>
              <li class="page-item"><a class="page-link border-success bg-success text-white" href="#">1</a></li>
              <li class="page-item"><a class="page-link border-success bg-success text-white" href="#">2</a></li>
              <li class="page-item"><a class="page-link border-success bg-success text-white" href="#">3</a></li>
              <li class="page-item"><a class="page-link border-success bg-success text-white rtl-pageLink-next"
                  href="#">Next</a></li>
            </ul>
          </nav>
          <nav aria-label="Page navigation example">
            <ul class="pagination mb-0">
              <li class="page-item"><a class="page-link border-info bg-info text-white rtl-pageLink-pre"
                  href="#">Previous</a></li>
              <li class="page-item"><a class="page-link border-info bg-info text-white" href="#">1</a></li>
              <li class="page-item"><a class="page-link border-info bg-info text-white" href="#">2</a></li>
              <li class="page-item"><a class="page-link border-info bg-info text-white" href="#">3</a></li>
              <li class="page-item"><a class="page-link border-info bg-info text-white rtl-pageLink-next"
                  href="#">Next</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </b-col>
    <b-col lg="6">
      <b-card no-body>
        <b-card-header class="mb-0 d-flex justify-content-between">
          <div class="header-title">
            <b-card-title>Working With Icons</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Looking to use an icon or symbol in place of text for some pagination links? Be sure to provide proper
            screen reader support with <code>aria</code> attributes.</p>
          <nav aria-label="Page navigation example">
            <ul class="pagination mb-0">
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">«</span>
                </a>
              </li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">»</span>
                </a>
              </li>
            </ul>
          </nav>
        </b-card-body>
      </b-card>
      <b-card no-body>
        <b-card-header class="mb-0 d-flex justify-content-between">
          <div class="header-title">
            <b-card-title>Pagination Sizing</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Fancy larger or smaller pagination? Add <code>.pagination-lg</code> or <code>.pagination-sm</code> for
            additional sizes.</p>
          <nav aria-label="...">
            <ul class="pagination pagination-lg">
              <li class="page-item active" aria-current="page">
                <span class="page-link rtl-pageLink-pre"> 1 </span>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">2</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">3</a>
              </li>
            </ul>
          </nav>
          <nav aria-label="...">
            <ul class="pagination">
              <li class="page-item active" aria-current="page">
                <span class="page-link rtl-pageLink-pre"> 1 </span>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">2</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">3</a>
              </li>
            </ul>
          </nav>
          <nav aria-label="...">
            <ul class="pagination pagination-sm">
              <li class="page-item active" aria-current="page">
                <span class="page-link rtl-pageLink-pre"> 1 </span>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">2</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">3</a>
              </li>
            </ul>
          </nav>
        </b-card-body>
      </b-card>

      <b-card no-body>
        <b-card-header class="mb-0 d-flex justify-content-between">
          <div class="header-title">
            <b-card-title>Alignment</b-card-title>
          </div>
        </b-card-header>

        <b-card-body>
          <p>Change the alignment of pagination components with <a href="#">flexbox
              utilities</a>.</p>
          <h6>left</h6>
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item disabled">
                <a class="page-link" href="#" tabindex="-1">Previous</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">1</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">2</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">3</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">Next</a>
              </li>
            </ul>
          </nav>
          <h6 class="text-center">Center</h6>
          <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
              <li class="page-item disabled">
                <a class="page-link" href="#" tabindex="-1">Previous</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">1</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">2</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">3</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">Next</a>
              </li>
            </ul>
          </nav>
          <h6 class="text-end">Right</h6>
          <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-end">
              <li class="page-item disabled">
                <a class="page-link" href="#" tabindex="-1">Previous</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">1</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">2</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">3</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">Next</a>
              </li>
            </ul>
          </nav>
        </b-card-body>
      </b-card>
    </b-col>
  </b-row>
</template>
<script lang="ts" setup>
// import { ref } from 'vue';

// const ex1CurrentPage = ref(1);
// const ex1PerPage = ref(10);
// const ex1Rows = ref(100);
// </script>
