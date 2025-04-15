<template>

    <b-row>
      <b-col sm="12">
        <b-card no-body>
          <b-card-body>
            <b-row class="align-items-center">
              <b-col cols="6">
                <img src="/assets/images/logo1.png" class="img-fluid avatar-80" alt="Logo">
              </b-col>
              <b-col cols="6">
                <h4 class="mb-0 float-end">Invoice</h4>
              </b-col>
              <b-col sm="12">
                <h5 class="mb-0 border-top mt-4 pt-4">Hello, Bini Jetss</h5>
                <p class="mt-2">It is a long established fact that a reader will be distracted by the readable content
                  of
                  a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                  more-or-less normal distribution of letters, as opposed to using 'Content here, content
                  here', making it look like readable English.</p>
              </b-col>
            </b-row>
            <b-row>
              <b-col lg="12">
                <div class="table-responsive mb-0">
                  <table class="table mb-3">
                    <thead>
                      <tr>
                        <th scope="col" class="border-top">Order Date</th>
                        <th scope="col" class="border-top">Order Status</th>
                        <th scope="col" class="border-top">Order ID</th>
                        <th scope="col" class="border-top">Billing Address</th>
                        <th scope="col" class="border-top">Shipping Address</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Jan 17, 2016</td>
                        <td><span class="badge text-bg-danger">Unpaid</span></td>
                        <td>250028</td>
                        <td>
                          <p class="mb-0">PO Box 16122 Collins Street West<br>Victoria 8007
                            Australia<br>
                            Phone: +123 456 7890<br>
                            Email: demo@XRay.com<br>
                            Web: www.XRay.com
                          </p>
                        </td>
                        <td>
                          <p class="mb-0">PO Box 16122 Collins Street West<br>Victoria 8007
                            Australia<br>
                            Phone: +123 456 7890<br>
                            Email: demo@XRay.com<br>
                            Web: www.XRay.com
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </b-col>
            </b-row>
            <b-row>
              <b-col sm="12">
                <h5>Order Summary</h5>
                <div class="table-responsive mb-0">
                  <table class="table table-striped mb-3">
                    <thead>
                      <tr>
                        <th class="text-center" scope="col">#</th>
                        <th scope="col">Item</th>
                        <th class="text-center" scope="col">Quantity</th>
                        <th class="text-center" scope="col">Price</th>
                        <th class="text-center" scope="col">Totals</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th class="text-center" scope="row">1</th>
                        <td>
                          <h6 class="mb-0">Web Design</h6>
                          <p class="mb-0">Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.</p>
                        </td>
                        <td class="text-center">5</td>
                        <td class="text-center">$120.00</td>
                        <td class="text-center"><b>$2,880.00</b></td>
                      </tr>
                      <tr>
                        <th class="text-center" scope="row">2</th>
                        <td>
                          <h6 class="mb-0">Web Design</h6>
                          <p class="mb-0">Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.</p>
                        </td>
                        <td class="text-center">5</td>
                        <td class="text-center">$120.00</td>
                        <td class="text-center"><b>$2,880.00</b></td>
                      </tr>
                      <tr>
                        <th class="text-center" scope="row">3</th>
                        <td>
                          <h6 class="mb-0">Web Design</h6>
                          <p class="mb-0">Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.</p>
                        </td>
                        <td class="text-center">5</td>
                        <td class="text-center">$120.00</td>
                        <td class="text-center"><b>$2,880.00</b></td>
                      </tr>
                      <tr>
                        <th class="text-center" scope="row">4</th>
                        <td>
                          <h6 class="mb-0">Web Design</h6>
                          <p class="mb-0">Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.</p>
                        </td>
                        <td class="text-center">5</td>
                        <td class="text-center">$120.00</td>
                        <td class="text-center"><b>$2,880.00</b></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h5 class="mt-5">Order Details</h5>
                <div class="table-responsive mb-0">
                  <table class="table table-striped mb-3">
                    <thead>
                      <tr>
                        <th scope="col">Bank</th>
                        <th scope="col">Acc.No</th>
                        <th scope="col">Due Date</th>
                        <th scope="col">Sub-total</th>
                        <th scope="col">Discount</th>
                        <th scope="col">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">Threadneedle St</th>
                        <td>12333456789</td>
                        <td>12 November 2019</td>
                        <td>$4597.50</td>
                        <td>10%</td>
                        <td><b>$4137.75 USD</b></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </b-col>
              <b-col sm="6"></b-col>
              <b-col sm="6" class="text-end">
                <button type="button" class="btn btn-link text-primary me-3"><i class="ri-printer-line"></i>
                  Download Print</button>{{ '' }}
                <button type="button" class="btn btn-primary-subtle">Submit</button>
              </b-col>
              <b-col sm="12" class="mt-5">
                <b class="text-danger">Notes:</b>
                <p>It is a long established fact that a reader will be distracted by the readable content of
                  a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                  more-or-less normal distribution of letters, as opposed to using 'Content here, content
                  here', making it look like readable English.</p>
              </b-col>
            </b-row>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
</template>
