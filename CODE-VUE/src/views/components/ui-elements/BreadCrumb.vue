<template>
    <b-row>
      <b-col sm="12" lg="6">
        <b-card no-body>
          <b-card-header class="d-flex justify-content-between">
            <div class="header-title">
              <b-card-title>Breadcrumb</b-card-title>
            </div>
          </b-card-header>
          <b-card-body>
            <p>Use the items in order to programatically generate the breadcrumb links.use class
              <code>.breadcrumb to ol</code>
            </p>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item active" aria-current="page">Home</li>
              </ol>
            </nav>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">Library</li>
              </ol>
            </nav>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item"><a href="#">Library</a></li>
                <li class="breadcrumb-item active" aria-current="page">Data</li>
              </ol>
            </nav>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col sm="12" lg="6">
        <b-card no-body>
          <b-card-header class="d-flex justify-content-between">
            <div class="header-title">
              <b-card-title>Breadcrumb With Icon</b-card-title>
            </div>
          </b-card-header>
          <b-card-body>
            <p>Use the items in order to programatically generate the breadcrumb links.use class
              <code>.breadcrumb to ol</code> with Icon
            </p>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item active" aria-current="page"><i
                    class="ri-home-4-line me-1 float-start"></i>Home
                </li>
              </ol>
            </nav>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#"><i class="ri-home-4-line me-1 float-start"></i>Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">Library</li>
              </ol>
            </nav>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#"><i class="ri-home-4-line me-1 float-start"></i>Home</a></li>
                <li class="breadcrumb-item"><a href="#">Library</a></li>
                <li class="breadcrumb-item active" aria-current="page">Data</li>
              </ol>
            </nav>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="12" lg="6">
        <b-card no-body>
          <b-card-header class="d-flex justify-content-between">
            <div class="header-title">
              <b-card-title>Breadcrumb</b-card-title>
            </div>
          </b-card-header>
          <b-card-body>
            <p>use class <code>.breadcrumb .bg-primary</code></p>
            <nav aria-label="breadcrumb ">
              <ol class="breadcrumb bg-primary p-3 rounded-2">
                <li class="breadcrumb-item active text-white" aria-current="page">Home</li>
              </ol>
            </nav>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb bg-primary p-3 rounded-2">
                <li class="breadcrumb-item"><a href="#" class="text-white">Home</a></li>
                <li class="breadcrumb-item active text-white" aria-current="page">Library</li>
              </ol>
            </nav>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb bg-primary p-3 rounded-2 mb-0">
                <li class="breadcrumb-item"><a href="#" class="text-white">Home</a></li>
                <li class="breadcrumb-item"><a href="#" class="text-white">Library</a></li>
                <li class="breadcrumb-item active text-white" aria-current="page">Data</li>
              </ol>
            </nav>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col sm="12" lg="6">
        <b-card no-body>
          <b-card-header class="d-flex justify-content-between">
            <div class="header-title">
              <b-card-title>Breadcrumb With Icon</b-card-title>
            </div>
          </b-card-header>
          <b-card-body>
            <p>use class <code>.breadcrumb .bg-primary </code> With Icon.</p>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb bg-primary p-3 rounded-2">
                <li class="breadcrumb-item active text-white" aria-current="page"><i
                    class="ri-home-4-line me-1 float-start"></i>Home</li>
              </ol>
            </nav>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb bg-primary p-3 rounded-2">
                <li class="breadcrumb-item"><a href="#" class="text-white"><i
                      class="ri-home-4-line me-1 float-start"></i>Home</a></li>
                <li class="breadcrumb-item active text-white" aria-current="page">Library</li>
              </ol>
            </nav>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb bg-primary p-3 rounded-2 mb-0">
                <li class="breadcrumb-item"><a href="#" class="text-white"><i
                      class="ri-home-4-line me-1 float-start"></i>Home</a></li>
                <li class="breadcrumb-item"><a href="#" class="text-white">Library</a></li>
                <li class="breadcrumb-item active text-white" aria-current="page">Data</li>
              </ol>
            </nav>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col sm="12" lg="6">
        <b-card no-body>
          <b-card-header class="d-flex justify-content-between">
            <div class="header-title">
              <b-card-title>Breadcrumb With Icon</b-card-title>
            </div>
          </b-card-header>
          <b-card-body>
            <p>use class <code>.breadcrumb .bg-primary-subtle</code></p>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb bg-primary-subtle p-3 rounded-2">
                <li class="breadcrumb-item active" aria-current="page"><i
                    class="ri-home-4-line me-1 float-start"></i>Home
                </li>
              </ol>
            </nav>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb bg-primary-subtle p-3 rounded-2">
                <li class="breadcrumb-item"><a href="#"><i class="ri-home-4-line me-1 float-start"></i>Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">Library</li>
              </ol>
            </nav>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb bg-primary-subtle p-3 rounded-2
                              p-1 rounded-2 mb-0">
                <li class="breadcrumb-item"><a href="#"><i class="ri-home-4-line me-1 float-start"></i>Home</a></li>
                <li class="breadcrumb-item"><a href="#">Library</a></li>
                <li class="breadcrumb-item active" aria-current="page">Data</li>
              </ol>
            </nav>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col sm="12" lg="6">
        <b-card no-body>
          <b-card-header class="d-flex justify-content-between">
            <div class="header-title">
              <b-card-title>Breadcrumb With Icon</b-card-title>
            </div>
          </b-card-header>
          <b-card-body>
            <p>use class <code>.breadcrumb .bg-danger-subtle</code></p>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb bg-danger-subtle p-3 rounded-2">
                <li class="breadcrumb-item active" aria-current="page"><i
                    class="ri-home-4-line me-1 float-start"></i>Home
                </li>
              </ol>
            </nav>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb bg-danger-subtle p-3 rounded-2">
                <li class="breadcrumb-item"><a href="#" class="text-danger"><i
                      class="ri-home-4-line me-1 float-start"></i>Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">Library</li>
              </ol>
            </nav>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb bg-danger-subtle p-3 rounded-2   mb-0">
                <li class="breadcrumb-item"><a href="#" class="text-danger"><i
                      class="ri-home-4-line me-1 float-start"></i>Home</a></li>
                <li class="breadcrumb-item"><a href="#" class="text-danger">Library</a></li>
                <li class="breadcrumb-item active" aria-current="page">Data</li>
              </ol>
            </nav>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
</template>
