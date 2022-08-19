<template>
  <layout5 pageName="404" parent="404">
    <section class="page-not-found section-b-space">
      <div class="container">
        <div class="row gx-md-2 gx-0 gy-md-0 gy-3">
          <div class="col-md-8 m-auto">
            <div class="page-image">
              <img
                src="~assets/images/inner-page/404.png"
                class="img-fluid"
                alt=""
              />
            </div>
          </div>

          <div class="col-md-8 mx-auto mt-md-5 mt-3">
            <div class="page-container pass-forgot">
              <div>
                <h2>page not found</h2>
                <p>
                  The page you are looking for doesn't exist or an other error
                  occurred. Go back, or head over to choose a new direction.
                </p>
                <nuxt-link to="/home/fashion_demo" class="btn btn-solid-default"
                  >Back Home Page</nuxt-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </layout5>
</template>

<script>
import layout5 from "~/layout/layouts/layout5.vue";
export default {
  components: {
    layout5,
  },
};
</script>
