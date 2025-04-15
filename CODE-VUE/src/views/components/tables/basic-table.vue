<template>
  <b-row>
    <b-col sm="12" lg="6">
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between ">
          <div class="header-title">
            <b-card-title>Tables</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p>The <code>.table </code> class adds basic styling to a table.</p>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </b-card-body>
      </b-card>
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between ">
          <div class="header-title">
            <b-card-title>Table Head Options</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Similar to tables and dark tables, use the modifier classes <code
              class="highlighter-rouge">.thead-light</code> or <code class="highlighter-rouge">.thead-dark</code> to
            make <code class="highlighter-rouge">&lt;thead&gt;</code>s appear light or dark gray.</p>
          <table class="table">
            <thead class="table-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
          <table class="table">
            <thead class="table-light">
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </b-card-body>
      </b-card>
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between ">
          <div class="header-title">
            <b-card-title>Borderless table</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Add <code class="highlighter-rouge">.table-borderless</code> for a table without borders.</p>
          <table class="table table-borderless">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
          <p><code class="highlighter-rouge">.table-borderless</code> can also be used on dark tables.</p>
          <table class="table table-borderless table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </b-card-body>
      </b-card>
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between ">
          <div class="header-title">
            <b-card-title>Small table</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Add <code class="highlighter-rouge">.table-sm</code> to make tables more compact by cutting cell
            padding in half.</p>
          <table class="table table-sm">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
          <table class="table table-sm table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </b-card-body>
      </b-card>
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between ">
          <div class="header-title">
            <b-card-title>Captions</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p>A <code class="highlighter-rouge">&lt;caption&gt;</code> functions like a heading for a table. It
            helps users with screen readers to find a table and understand what it’s about and decide if
            they want to read it.</p>
          <table class="table">
            <caption>List of users</caption>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </b-card-body>
      </b-card>
    </b-col>
    <b-col sm="12" lg="6">
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between ">
          <div class="header-title">
            <b-card-title>Table Dark</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p>You can also invert the colors—with light text on dark backgrounds—with <code
              class="highlighter-rouge">.table-dark</code>.</p>
          <table class="table table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </b-card-body>
      </b-card>
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between ">
          <div class="header-title">
            <b-card-title>Striped Rows</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Use <code class="highlighter-rouge">.table-striped</code> to add zebra-striping to any table row
            within the <code class="highlighter-rouge">&lt;tbody&gt;</code>.</p>
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
          <table class="table table-striped table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </b-card-body>
      </b-card>
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between ">
          <div class="header-title">
            <b-card-title>Hoverable rows</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Add <code class="highlighter-rouge">.table-hover</code> to enable a hover state on table rows
            within a <code class="highlighter-rouge">&lt;tbody&gt;</code>.</p>
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
          <table class="table table-hover table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </b-card-body>
      </b-card>
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between ">
          <div class="header-title">
            <b-card-title>Contextual classes</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Use contextual classes to color table rows or individual cells.</p>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Class</th>
                <th scope="col">Heading</th>
                <th scope="col">Heading</th>
              </tr>
            </thead>
            <tbody>
              <tr class="table-active">
                <th scope="row">Active</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
              <tr>
                <th scope="row">Default</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
              <tr class="table-primary">
                <th scope="row">Primary</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
              <tr class="table-secondary">
                <th scope="row">Secondary</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
              <tr class="table-success">
                <th scope="row">Success</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
              <tr class="table-danger">
                <th scope="row">Danger</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
              <tr class="table-warning">
                <th scope="row">Warning</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
              <tr class="table-info">
                <th scope="row">Info</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
            </tbody>
          </table>
          <p>Regular table background variants are not available with the dark table, however, you may use <a
              href="https://getbootstrap.com/" target="_blank">text or background utilities</a> to achieve
            similar styles.</p>
          <table class="table table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Heading</th>
                <th scope="col">Heading</th>
              </tr>
            </thead>
            <tbody>
              <tr class="table-primary">
                <th scope="row">1</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
              <tr class="table-success">
                <th scope="row">3</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
              <tr class="table-info">
                <th scope="row">5</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
              <tr class="table-warning">
                <th scope="row">7</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
              <tr>
                <th scope="row">8</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
              <tr class="table-danger">
                <th scope="row">9</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
            </tbody>
          </table>
        </b-card-body>
      </b-card>
    </b-col>
    <b-col sm="12">
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between ">
          <div class="header-title">
            <b-card-title>Responsive tables</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Responsive tables allow tables to be scrolled horizontally with ease. Make any table responsive
            across all viewports by wrapping a <code class="highlighter-rouge">.table</code> with <code
              class="highlighter-rouge">.table-responsive</code>. Or, pick a maximum breakpoint with which
            to have a responsive table up to by using <code
              class="highlighter-rouge">.table-responsive{-sm|-md|-lg|-xl|-xxl}</code>.</p>
          <div class="table-responsive mb-0">
            <table class="table mb-3">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
              </tbody>
            </table>
          </div>
        </b-card-body>
      </b-card>
    </b-col>
  </b-row>
</template>