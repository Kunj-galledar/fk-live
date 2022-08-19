<template>
  <layout5 pageName="Contact Us" parent="Contact Us">
    <section class="contact-section">
      <div class="container">
        <div class="row g-4">
          <div class="col-lg-7">
            <div class="materialContainer">
              <div class="material-details">
                <div class="title title1 title-effect mb-1 title-left">
                  <h2>Contact Us</h2>
                  <p class="ms-0 w-100">
                    Your email address will not be published. Required fields
                    are marked *
                  </p>
                </div>
              </div>
              <div class="row g-4 mt-md-1 mt-2">
                <div class="col-md-6">
                  <label for="first" class="form-label">First Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="first"
                    placeholder="Enter Your First Name"
                    required
                  />
                </div>
                <div class="col-md-6">
                  <label for="last" class="form-label">Last Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="last"
                    placeholder="Enter Your Last Name"
                    required
                  />
                </div>
                <div class="col-md-6">
                  <label for="email" class="form-label">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="Enter Your Email Address"
                    required
                  />
                </div>
                <div class="col-md-6">
                  <label for="email2" class="form-label">Confirm Email</label>
                  <input
                    type="email"
                    class="form-control"
                    id="email2"
                    placeholder="Enter Your Confirm Email Address"
                    required
                  />
                </div>

                <div class="col-12">
                  <label for="comment" class="form-label">Comment</label>
                  <textarea
                    class="form-control"
                    id="comment"
                    rows="5"
                    required
                  ></textarea>
                </div>

                <div class="col-auto">
                  <button class="btn btn-solid-default" type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>

          <contactUsSideSection />
        </div>
      </div>
    </section>
  </layout5>
</template>

<script>
import layout5 from "~/layout/layouts/layout5.vue";
import contactUsSideSection from "~/components/page/contactUs/contactUsSideSection.vue";
export default {
  components: {
    layout5,
    contactUsSideSection,
  },
};
</script>
