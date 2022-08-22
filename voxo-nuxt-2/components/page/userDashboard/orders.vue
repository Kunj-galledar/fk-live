<template>
  <div
    class="tab-pane fade table-dashboard dashboard wish-list-section show active"
    id="order"
  >
    <div class="box-head mb-3">
      <h3>My Order</h3>
    </div>
    <div class="table-responsive">
      <table class="table cart-table">
        <thead>
          <tr class="table-head">
            <th scope="col">image</th>
            <th scope="col">Order Id</th>
            <th scope="col">Product Details</th>
            <th scope="col">Status</th>
            <th scope="col">Price</th>
            <th scope="col">View</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <a
                href="javascript:void(0)"
                @click.prevent="$router.push('/product/product_left_sidebar')"
              >
                <img src="~assets/images/fashion/product/front/1.jpg" alt="" />
              </a>
            </td>
            <td>
              <p class="mt-0">#125021</p>
            </td>
            <td>
              <p class="fs-6 m-0">Outwear & Coats</p>
            </td>
            <td>
              <p class="success-button btn btn-sm">Shipped</p>
            </td>
            <td>
              <p class="theme-color fs-6">$49.54</p>
            </td>
            <td>
              <a href="javascript:void(0)">
                <i class="far fa-eye"></i>
              </a>
            </td>
          </tr>

          <tr>
            <td>
              <a
                href="javascript:void(0)"
                @click.prevent="$router.push('/product/product_left_sidebar')"
              >
                <img src="~assets/images/fashion/product/front/2.jpg" alt="" />
              </a>
            </td>
            <td>
              <p class="mt-0">#125367</p>
            </td>
            <td>
              <p class="fs-6 m-0">Outwear & Coats</p>
            </td>
            <td>
              <p class="danger-button btn btn-sm">Pending</p>
            </td>
            <td>
              <p class="theme-color fs-6">$49.54</p>
            </td>
            <td>
              <a href="javascript:void(0)">
                <i class="far fa-eye"></i>
              </a>
            </td>
          </tr>

          <tr>
            <td>
              <a
                href="javascript:void(0)"
                @click.prevent="$router.push('/product/product_left_sidebar')"
              >
                <img src="~assets/images/fashion/product/front/3.jpg" alt="" />
              </a>
            </td>
            <td>
              <p class="m-0">#125948</p>
            </td>
            <td>
              <p class="fs-6 m-0">Men's Sweatshirt</p>
            </td>
            <td>
              <p class="success-button btn btn-sm">Shipped</p>
            </td>
            <td>
              <p class="theme-color fs-6">$49.54</p>
            </td>
            <td>
              <a href="javascript:void(0)">
                <i class="far fa-eye"></i>
              </a>
            </td>
          </tr>

          <tr>
            <td>
              <a
                href="javascript:void(0)"
                @click.prevent="$router.push('/product/product_left_sidebar')"
              >
                <img src="~assets/images/fashion/product/front/4.jpg" alt="" />
              </a>
            </td>
            <td>
              <p class="m-0">#127569</p>
            </td>
            <td>
              <p class="fs-6 m-0">Men's Hoodie t-shirt</p>
            </td>
            <td>
              <p class="success-button btn btn-sm">Shipped</p>
            </td>
            <td>
              <p class="theme-color fs-6">$49.54</p>
            </td>
            <td>
              <a href="javascript:void(0)">
                <i class="far fa-eye"></i>
              </a>
            </td>
          </tr>

          <tr>
            <td>
              <a
                href="javascript:void(0)"
                @click.prevent="$router.push('/product/product_left_sidebar')"
              >
                <img src="~assets/images/fashion/product/front/5.jpg" alt="" />
              </a>
            </td>
            <td>
              <p class="m-0">#125753</p>
            </td>
            <td>
              <p class="fs-6 m-0">Men's Hoodie t-shirt</p>
            </td>
            <td>
              <p class="danger-button btn btn-sm">Canceled</p>
            </td>
            <td>
              <p class="theme-color fs-6">$49.54</p>
            </td>
            <td>
              <a href="javascript:void(0)">
                <i class="far fa-eye"></i>
              </a>
            </td>
          </tr>

          <tr>
            <td>
              <a
                href="javascript:void(0)"
                @click.prevent="$router.push('/product/product_left_sidebar')"
              >
                <img src="~assets/images/fashion/product/front/6.jpg" alt="" />
              </a>
            </td>
            <td>
              <p class="m-0">#125021</p>
            </td>
            <td>
              <p class="fs-6 m-0">Men's Sweatshirt</p>
            </td>
            <td>
              <p class="danger-button btn btn-sm">Canceled</p>
            </td>
            <td>
              <p class="theme-color fs-6">$49.54</p>
            </td>
            <td>
              <a href="javascript:void(0)">
                <i class="far fa-eye"></i>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
