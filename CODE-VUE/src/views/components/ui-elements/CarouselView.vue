<template>
  <b-row>
    <b-col sm="12" lg="6">
      <b-card no-body>
        <b-card-header class="mb-0 d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Slides Only</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Here’s a carousel with slides only. Note the presence of the <code>.d-block</code> and
            <code>.img-fluid</code> on carousel images to prevent browser default image alignment.
          </p>
          <div>
            <BCarousel :interval="5000" ride="carousel">
              <BCarouselSlide :img-src="generateImgPath('/assets/images/small/img-1.jpg ')" />
              <BCarouselSlide :img-src="generateImgPath('/assets/images/small/img-1.jpg ')" />
              <BCarouselSlide :img-src="generateImgPath('/assets/images/small/img-1.jpg ')" />
            </BCarousel>
          </div>
        </b-card-body>
      </b-card>
    </b-col>
    <b-col sm="12" lg="6">
      <b-card no-body>
        <b-card-header class="mb-0 d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Slides With Controls</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Here’s a carousel with slides only. Note the presence of the <code>.d-block</code> and
            <code>.img-fluid</code> on carousel images to prevent browser default image alignment.
          </p>
          <div>
            <BCarousel :interval="5000" ride="carousel" controls>
              <BCarouselSlide :img-src="generateImgPath('/assets/images/small/img-1.jpg ')" />
              <BCarouselSlide :img-src="generateImgPath('/assets/images/small/img-1.jpg ')" />
              <BCarouselSlide :img-src="generateImgPath('/assets/images/small/img-1.jpg ')" />
            </BCarousel>
          </div>
        </b-card-body>
      </b-card>
    </b-col>
    <b-col sm="12" lg="6">
      <b-card no-body>
        <b-card-header class="mb-0 d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Slides With Indicators</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Here’s a carousel with slides only. Note the presence of the <code>.d-block</code> and
            <code>.img-fluid</code> on carousel images to prevent browser default image alignment.
          </p>
          <div>
            <BCarousel indicators :interval="5000" ride="carousel" controls>
              <BCarouselSlide :img-src="generateImgPath('/assets/images/small/img-1.jpg ')" />
              <BCarouselSlide :img-src="generateImgPath('/assets/images/small/img-1.jpg ')" />
              <BCarouselSlide :img-src="generateImgPath('/assets/images/small/img-1.jpg ')" />
            </BCarousel>
          </div>
        </b-card-body>
      </b-card>
    </b-col>
    <b-col sm="12" lg="6">
      <b-card no-body>
        <b-card-header class="mb-0 d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Slides With Captions</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Here’s a carousel with slides only. Note the presence of the <code>.d-block</code> and
            <code>.img-fluid</code> on carousel images to prevent browser default image alignment.
          </p>
          <BCarousel :interval="5000" ride="carousel" controls indicators>
            <BCarouselSlide :img-src="generateImgPath('/assets/images/small/img-1.jpg ')">
              <h4 class="text-black">First slide label</h4>
              <p class="text-black">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </BCarouselSlide>
            <BCarouselSlide :img-src="generateImgPath('/assets/images/small/img-1.jpg ')">
              <h4 class="text-black">Second slide label</h4>
              <p class="text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </BCarouselSlide>
            <h4 class="text-black">Third slide label</h4>
            <p class="text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </BCarousel>
        </b-card-body>
      </b-card>
    </b-col>
    <b-col sm="12" lg="6">
      <b-card no-body>
        <b-card-header class="mb-0 d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Slides With Crossfade</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Here’s a carousel with slides only. Note the presence of the <code>.d-block</code> and
            <code>.img-fluid</code> on carousel images to prevent browser default image alignment.
          </p>
          <BCarousel fade controls>
            <BCarouselSlide :img-src="generateImgPath('/assets/images/small/img-1.jpg ')" />
            <BCarouselSlide :img-src="generateImgPath('/assets/images/small/img-1.jpg ')" />
            <BCarouselSlide :img-src="generateImgPath('/assets/images/small/img-1.jpg ')" />
          </BCarousel>
        </b-card-body>
      </b-card>
    </b-col>
  </b-row>
</template>
<script setup>
const generateImgPath = (path) => {
  return window.origin + import.meta.env.BASE_URL + path;
};
</script>
