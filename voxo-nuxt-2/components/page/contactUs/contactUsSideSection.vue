<template>
  <div class="col-lg-5">
    <div class="contact-details">
      <div>
        <h2>Let's get in touch</h2>
        <h5 class="font-light">
          We're open for any suggestion or just to have a chat
        </h5>
        <div class="contact-box">
          <div class="contact-icon">
            <vue-feather type="map-pin"></vue-feather>
          </div>
          <div class="contact-title">
            <h4>Address :</h4>
            <p>
              1418 Riverwood Drive, Suite 3245 Cottonwood, CA 96052, United
              States
            </p>
          </div>
        </div>

        <div class="contact-box">
          <div class="contact-icon">
            <vue-feather type="phone"></vue-feather>
          </div>
          <div class="contact-title">
            <h4>Phone Number :</h4>
            <p>+ 185659635</p>
            <p>+ 658651167</p>
          </div>
        </div>

        <div class="contact-box">
          <div class="contact-icon">
            <vue-feather type="mail"></vue-feather>
          </div>
          <div class="contact-title">
            <h4>Email Address :</h4>
            <p>voxo123@gmail.com</p>
            <p>voxo987@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueFeather from "vue-feather";

export default {
  components: { VueFeather },
};
</script>

<style></style>
