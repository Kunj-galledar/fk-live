<template>
  <section class="section-b-space cart-section order-details-table">
    <div class="container">
      <div class="title title1 title-effect mb-1 title-left">
        <h2 class="mb-3">Order Details</h2>
      </div>
      <div class="row g-4">
        <div class="col-lg-6">
          <div class="table-responsive">
            <table class="table cart-table table-borderless">
              <tbody>
                <tr class="table-order">
                  <td>
                    <a href="javascript:void(0)">
                      <img
                        src="~assets/images/fashion/instagram/1.jpg"
                        class="img-fluid"
                        alt=""
                      />
                    </a>
                  </td>
                  <td>
                    <p>Product Name</p>
                    <h5>Outwear & Coats</h5>
                  </td>
                  <td>
                    <p>Quantity</p>
                    <h5>1</h5>
                  </td>
                  <td>
                    <p>Price</p>
                    <h5>$63.54</h5>
                  </td>
                </tr>

                <tr class="table-order">
                  <td>
                    <a href="javascript:void(0)">
                      <img
                        src="~assets/images/fashion/instagram/2.jpg"
                        class="img-fluid"
                        alt=""
                      />
                    </a>
                  </td>
                  <td>
                    <p class="font-light">Product Name</p>
                    <h5>Jacket & Cap</h5>
                  </td>
                  <td>
                    <p class="font-light">Quantity</p>
                    <h5>5</h5>
                  </td>
                  <td>
                    <p class="font-light">Price</p>
                    <h5>$57.10</h5>
                  </td>
                </tr>

                <tr class="table-order">
                  <td>
                    <a href="javascript:void(0)">
                      <img
                        src="~assets/images/fashion/instagram/3.jpg"
                        class="img-fluid"
                        alt=""
                      />
                    </a>
                  </td>
                  <td>
                    <p class="font-light">Product Name</p>
                    <h5>New Fashion</h5>
                  </td>
                  <td>
                    <p class="font-light">Quantity</p>
                    <h5>1</h5>
                  </td>
                  <td>
                    <p class="font-light">Price</p>
                    <h5>$63.25</h5>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr class="table-order">
                  <td colspan="3">
                    <h5 class="font-light">Subtotal :</h5>
                  </td>
                  <td>
                    <h4>$55.00</h4>
                  </td>
                </tr>

                <tr class="table-order">
                  <td colspan="3">
                    <h5 class="font-light">Shipping :</h5>
                  </td>
                  <td>
                    <h4>$12.00</h4>
                  </td>
                </tr>

                <tr class="table-order">
                  <td colspan="3">
                    <h5 class="font-light">Tax(GST) :</h5>
                  </td>
                  <td>
                    <h4>$10.00</h4>
                  </td>
                </tr>

                <tr class="table-order">
                  <td colspan="3">
                    <h4 class="theme-color fw-bold">Total Price :</h4>
                  </td>
                  <td>
                    <h4 class="theme-color fw-bold">$6935.00</h4>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="order-success">
            <div class="row g-4">
              <div class="col-sm-6">
                <h4>summery</h4>
                <ul class="order-details">
                  <li>Order ID: 5563853658932</li>
                  <li>Order Date: October 22, 2018</li>
                  <li>Order Total: $907.28</li>
                </ul>
              </div>

              <div class="col-sm-6">
                <h4>shipping address</h4>
                <ul class="order-details">
                  <li>Gerg Harvell</li>
                  <li>568, Suite Ave.</li>
                  <li>Austrlia, 235153 Contact No. 48465465465</li>
                </ul>
              </div>

              <div class="col-12">
                <div class="payment-mode">
                  <h4>payment method</h4>
                  <p>
                    Pay on Delivery (Cash/Card). Cash on delivery (COD)
                    available. Card/Net banking acceptance subject to device
                    availability.
                  </p>
                </div>
              </div>

              <div class="col-md-12">
                <div class="delivery-sec">
                  <h3>
                    expected date of delivery: <span>october 22, 2018</span>
                  </h3>
                  <nuxt-link to="/page/order_tracking">track order</nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style></style>