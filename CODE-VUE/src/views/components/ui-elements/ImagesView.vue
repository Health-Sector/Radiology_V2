<template>
  <b-row>
    <b-col sm="12" lg="6">
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <b-card-title>Responsive images</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Images in Bootstrap are made responsive with <code>.img-fluid</code>.
            <code>max-width: 100%;</code> and <code>height: auto;</code> are applied to the image so that it
            scales with the parent element.
          </p>
          <img src="/assets/images/small/img-1.jpg" class="img-fluid" alt="Responsive image">
        </b-card-body>
      </b-card>
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <b-card-title>Equal-width multi-row</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Create equal-width columns that span multiple rows by inserting a <code>.w-100</code> where you
            want the columns to break to a new line. Make the breaks responsive by mixing the
            <code>.w-100</code> with some <a
              href="https://getbootstrap.com/docs/5.3/utilities/float/#responsive">responsive display
              utilities</a>.
          </p>
          <div class="d-flex">
            <div class="flex-shrink-0">
              <img src="/assets/images/page-img/15.jpg" class="img-fluid avatar-70 me-3" alt="#">
            </div>
            <div class="flex-grow-1">
              <h5 class="mt-0">Media heading</h5>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
              Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
              ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </div>
          </div>
          <div class="d-flex mt-2">
            <div class="flex-shrink-0">
              <img src="/assets/images/page-img/16.jpg" class="img-fluid avatar-70 me-3" alt="#">
            </div>
            <div class="flex-grow-1">
              <h5 class="mt-0">Media heading</h5>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
              Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
              ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
              <div class="media mt-3 d-flex">
                <div class="flex-shrink-0">
                  <img src="/assets/images/page-img/17.jpg" class="avatar-70 img-fluid me-3" alt="#">
                </div>
                <div class="media-body flex-grow-1">
                  <h5 class="mt-0">Media heading</h5>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                  sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                  Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in
                  faucibus.
                </div>
              </div>
            </div>
          </div>
        </b-card-body>
      </b-card>
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <b-card-title>Order</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Change the order of content in media objects by modifying the HTML itself, or by adding some
            custom flexbox CSS to set the <code>order</code> property (to an integer of your choosing).</p>
          <div class="d-flex mb-5">
            <div class="flex-grow-1">
              <h5 class="mt-0 mb-1">Media object</h5>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
              Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
              ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </div>
            <div class="flex-shrink-0 align-self-center">
              <img src="/assets/images/page-img/18.jpg" class="ms-3 img-fluid avatar-70" alt="#">
            </div>
          </div>
          <div class="d-flex mb-5">
            <div class="flex-grow-1">
              <h5 class="mt-0 mb-1">Center-aligned media</h5>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
              Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
              ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </div>
            <div class="flex-shrink-0 align-self-center">
              <img src="/assets/images/page-img/19.jpg" class="align-self-center ms-3 img-fluid avatar-70" alt="#">
            </div>
          </div>
          <div class="d-flex align-items-end">
            <div class="flex-grow-1">
              <h5 class="mt-0 mb-1">Bottom-aligned media</h5>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
              Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
              ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </div>
            <div class="flex-shrink-0 align-self-end">
              <img src="/assets/images/page-img/20.jpg" class="align-self-end ms-3 img-fluid avatar-70" alt="#">
            </div>
          </div>
        </b-card-body>
      </b-card>
    </b-col>
    <b-col sm="12" lg="6">
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <b-card-title>Image thumbnails</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p>In addition to our <a href="https://getbootstrap.com/docs/5.3/utilities/borders/#radius">border-radius
              utilities</a>, you can
            use <code>.img-thumbnail</code> to give an image a rounded 1px border appearance.</p>
          <img src="/assets/images/page-img/10.jpg" class="img-thumbnail" alt="Responsive image">{{ '' }}
          <img src="/assets/images/page-img/11.jpg" class="rounded ms-3" alt="Responsive image">{{ '' }}
          <img src="/assets/images/page-img/12.jpg" class="rounded-circle ms-3" alt="Responsive image">
        </b-card-body>
      </b-card>
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <b-card-title>Image thumbnails</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p>In addition to our <a href="https://getbootstrap.com/docs/5.3/utilities/borders/#radius">border-radius
              utilities</a>, you can
            use <code>.img-thumbnail</code> to give an image a rounded 1px border appearance.</p>
          <img src="/assets/images/page-img/13.jpg" class="mt-2 img-fluid rounded" alt="Responsive image">
          <img src="/assets/images/page-img/14.jpg" class="mt-2 img-fluid rounded float-end" alt="Responsive image">
        </b-card-body>
      </b-card>
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <b-card-title>Media object</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p>The images or other media can be aligned top, middle, or bottom. The default is top aligned.</p>
          <div class="d-flex mb-4">
            <div class="flex-shrink-0 align-self-start">
              <img src="/assets/images/page-img/21.jpg" class="align-self-start me-3 img-fluid avatar-70" alt="#">
            </div>
            <div class="flex-grow-1">
              <h5 class="mt-0">Top-aligned media</h5>
              <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce
                condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
              </p>
            </div>
          </div>
          <div class="d-flex mb-4">
            <div class="flex-shrink-0 align-self-center">
              <img src="/assets/images/page-img/22.jpg" class="align-self-center me-3 img-fluid avatar-70" alt="#">
            </div>
            <div class="flex-grow-1">
              <h5 class="mt-0">Center-aligned media</h5>
              <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce
                condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
              </p>
            </div>
          </div>
          <div class="d-flex">
            <div class="flex-shrink-0 align-self-end">
              <img src="/assets/images/page-img/23.jpg" class="align-self-end me-3 img-fluid avatar-70" alt="#">
            </div>
            <div class="flex-grow-1">
              <h5 class="mt-0">Bottom-aligned media</h5>
              <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce
                condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
              </p>
            </div>
          </div>
        </b-card-body>
      </b-card>
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <b-card-title>Media list</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Because the media object has so few structural requirements, you can also use these classes on
            list HTML elements. On your <code>&lt;ul&gt;</code> or <code>&lt;ol&gt;</code>, add the
            <code>.list-unstyled</code> to remove any browser default list styles, and then apply
            <code>.media</code> to your <code>&lt;li&gt;</code>s. As always, use spacing utilities wherever
            needed to fine tune.
          </p>
          <ul class="list-unstyled">
            <li class="d-flex">
              <div class="flex-shrink-0">
                <img src="/assets/images/page-img/24.jpg" class="me-3 img-fluid avatar-70" alt="#">
              </div>
              <div class="flex-grow-1">
                <h5 class="mt-0 mb-1">List-based media object</h5>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce
                condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
              </div>
            </li>
            <li class="d-flex my-4">
              <div class="flex-shrink-0">
                <img src="/assets/images/page-img/15.jpg" class="me-3 img-fluid avatar-70" alt="#">
              </div>
              <div class="flex-grow-1">
                <h5 class="mt-0 mb-1">List-based media object</h5>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce
                condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
              </div>
            </li>
            <li class="d-flex">
              <div class="flex-shrink-0">
                <img src="/assets/images/page-img/16.jpg" class="me-3 img-fluid avatar-70" alt="#">
              </div>
              <div class="flex-grow-1">
                <h5 class="mt-0 mb-1">List-based media object</h5>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce
                condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
              </div>
            </li>
          </ul>
        </b-card-body>
      </b-card>
    </b-col>
  </b-row>
</template>
