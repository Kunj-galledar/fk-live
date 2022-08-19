<template>
  <div class="col-xl-9 col-lg-8 order-lg-1 ratio_square">
    <div class="row g-4">
      <div class="col-12">
        <div class="blog-details">
          <div class="blog-image-box">
            <img
              src="~assets/images/inner-page/product/10.jpg"
              alt=""
              class="card-img-top"
            />
            <div class="blog-title">
              <div>
                <div class="social-media media-center">
                  <a href="https://www.facebook.com/" target="new">
                    <div class="social-icon-box social-color">
                      <i class="fab fa-facebook-f"></i>
                    </div>
                  </a>
                  <a href="https://twitter.com/" target="new">
                    <div class="social-icon-box social-color">
                      <i class="fab fa-twitter"></i>
                    </div>
                  </a>
                  <a href="https://in.pinterest.com/" target="new">
                    <div class="social-icon-box social-color">
                      <i class="fab fa-pinterest-p"></i>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="blog-detail-contain">
            <span class="font-light">August 15 2021</span>
            <h2 class="card-title">Just a Standard Format Post.</h2>
            <p class="font-light firt-latter">
              {{ blogData[0].topText }}
            </p>

            <p class="font-light">
              {{ blogData[0].middleText }}
            </p>

            <p class="font-light">
              {{ blogData[0].bottomText }}
            </p>
          </div>
        </div>
        <div class="blog-profile box-center mb-lg-5 mb-4">
          <div class="image-profile">
            <img
              src="~assets/images/inner-page/review-image/2.jpg"
              class="img-fluid"
              alt=""
            />
          </div>
          <div class="image-name text-weight">
            <h3>John wike</h3>
            <h6>15 Aug 2021</h6>
          </div>
        </div>
        <div class="row g-2">
          <div class="col-12">
            <div class="minus-spacing mb-2">
              <h3>Leave Comments</h3>
            </div>
          </div>
          <div class="col-lg-4">
            <label for="fname" class="form-label">First Name</label>
            <input
              type="text"
              class="form-control"
              id="fname"
              placeholder="Enter First Name"
              required
            />
          </div>
          <div class="col-lg-4">
            <label for="lname" class="form-label">Last Name</label>
            <input
              type="text"
              class="form-control"
              id="lname"
              placeholder="Enter Last Name"
              required
            />
          </div>

          <div class="col-lg-4">
            <label for="email" class="form-label">Email address</label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="example@example.com"
              required
            />
          </div>

          <div class="col-12">
            <label for="textarea" class="form-label">Comments</label>
            <textarea
              rows="3"
              class="form-control"
              id="textarea"
              placeholder="Leave a comment here"
              required
            ></textarea>
          </div>

          <div class="col-12">
            <button
              type="submit"
              class="btn btn-solid-default btn-spacing mt-2"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    // ...mapState({
    //   blogData: (state) => state.blogData.data.filter(item => item.type === 'blogDetails')[0],
    // }),
    blogData() {
      return this.$store.state.blogData.data;
    },
  },
  mounted() {
    console.log("blogData is:", this.blogData);
  },
};
</script>

<style lang="scss" scoped></style>