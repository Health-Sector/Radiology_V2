<template>
  <div :class="`email-app-details ${show ? 'show' : ''}`">
    <div class="card">
      <div class="card-body p-0">
        <div class="">
          <div class="iq-email-to-list p-3">
            <div class="d-flex justify-content-between">
              <ul class="list-inline d-flex align-items-center justify-content-between m-0 p-0">
                <li class="me-3">
                  <a href="javascript: void(0);" class="email-remove" @click="hideMail">
                    <h4 class="m-0"><i class="ri-arrow-left-line"></i></h4>
                  </a>
                </li>
                <li class="me-2 show" v-b-tooltip.hover.top="'Mail'"><a href="#"><i class="ri-mail-open-line"></i></a>
                </li>
                <li class="me-2" v-b-tooltip.hover.top="'Info'"><a href="#"><i class="ri-information-line"></i></a></li>
                <li class="me-2" v-b-tooltip.hover.top="'Delete'"><a href="#"><i class="ri-delete-bin-line"></i></a>
                </li>
                <li class="me-2" v-b-tooltip.hover.top="'Unread'"><a href="#"><i class="ri-mail-unread-line"></i></a>
                </li>
                <li class="me-2" v-b-tooltip.hover.top="'Transfer'"><a href="#"><i
                      class="ri-folder-transfer-line"></i></a></li>
                <li class="me-2" v-b-tooltip.hover.top="'Bookmark'"><a href="#"><i class="ri-bookmark-line"></i></a>
                </li>
              </ul>
              <div class="iq-email-search d-flex">
                <ul class="list-inline d-flex align-items-center justify-content-between m-0 p-0">
                  <li class="me-3">
                    <a class="font-size-14" href="#">1 of 505</a>
                  </li>
                  <li class="me-2" v-b-tooltip.hover.top="'Previous'"><a href="#"><i
                        class="ri-arrow-left-s-line transform-arrow"></i></a>
                  </li>
                  <li class="me-2" v-b-tooltip.hover.top="'Next'"><a href="#"><i
                        class="ri-arrow-right-s-line transform-arrow"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr class="mt-0" />
          <div class="iq-inbox-subject p-3">
            <h5 class="mb-2">Your elite author Graphic Optimization reward is
              ready!</h5>
            <div class="iq-inbox-subject-info">
              <div class="iq-subject-info">
                <img src="/assets/images/user/05.jpg" class="img-fluid rounded-circle avatar-80" alt="#"
                  loading="lazy" />
                <div class="iq-subject-status align-self-center">
                  <h6 class="mb-0">XRay team
                    <!-- <a href="dummy@XRay.com">
                      <code>dummy@xray.com</code>
                    </a> -->
                  </h6>
                  <div class="dropdown">
                    <a class="dropdown-toggle" href="#" id="dropdownMenuButton" data-bs-toggle="dropdown"
                      aria-haspopup="true" aria-expanded="false" style="font-weight: 500">
                      to Me
                    </a>
                    <div class="dropdown-menu font-size-12" aria-labelledby="dropdownMenuButton">
                      <table class="iq-inbox-details">
                        <tbody>
                          <tr>
                            <td>from:</td>
                            <td>Medium Daily Digest</td>
                          </tr>
                          <tr>
                            <td>reply-to:</td>
                            <td>noreply@gmail.com</td>
                          </tr>
                          <tr>
                            <td>to:</td>
                            <td>iqonicdesigns@gmail.com</td>
                          </tr>
                          <tr>
                            <td>date:</td>
                            <td>13 Dec 2019, 08:30</td>
                          </tr>
                          <tr>
                            <td>subject:</td>
                            <td>The Golden Rule</td>
                          </tr>
                          <tr>
                            <td>security:</td>
                            <td>Standard encryption</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <span class="align-self-center">Jan 15, 2029, 10:20AM</span>
              </div>
              <div class="iq-inbox-body mt-5">
                <p>Hi Jopour Xiong,</p>
                <p>It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English. Many
                  desktop publishing packages and web page editors now use Lorem
                  Ipsum as their default model text, and a search for 'lorem
                  ipsum' will uncover many web sites still in their infancy.
                </p>
                <p>Various versions have evolved over the years, sometimes by
                  accident, sometimes on purpose (injected humour and the like).</p>
                <p class="mt-5 mb-0">Regards,<span class="d-inline-block w-100">John Deo</span></p>
              </div>
              <hr />
              <div class="attegement">
                <h6 class="mb-2">ATTACHED FILES:</h6>
                <ul>
                  <li class="icon icon-attegment d-flex align-items-center">
                    <i class="fa fa-file-text-o" aria-hidden="true"></i>
                    <span class="ms-1">mydoc.doc</span>
                  </li>
                  <li class="icon icon-attegment d-flex align-items-center">
                    <i class="fa fa-file-text-o" aria-hidden="true"></i>
                    <span class="ms-1">mydoc.pdf</span>
                  </li>
                </ul>
                <div class="d-flex gap-2 mt-3 ">
                  <button class=" btn btn-primary">
                    <i class="ri-reply-line"></i> Reply</button>
                  <button class="btn btn-primary"><i class="ri-send-plane-fill"></i> Forword</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  show: { type: Boolean, default: false },
})

// Define the emit event
const emit = defineEmits()

const hideMail = () => {
  emit('hide', true)  // Use emit instead of context.emit
}
</script>