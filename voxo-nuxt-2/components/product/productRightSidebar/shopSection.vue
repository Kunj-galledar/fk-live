<template>
  <section>
    <div class="container">
      <div class="row gx-4 gy-5">
        <div class="col-lg-9 col-12">
          <!-- filter button -->
          <div class="filter-button mb-3">
            <button class="danger-button danger-center btn btn-sm filter-btn">
              <i data-feather="align-left"></i> Filter
            </button>
          </div>
          <!-- filter button -->
          <div class="details-items">
            <div class="row g-4">
              <productSlider1 :sliderClass="sliderClass" />

              <productRightSection :rightSectionClasses="rightSectionClasses" />
            </div>
          </div>
        </div>

        <rightSidebar />

        <tabs />
      </div>
    </div>
  </section>
</template>

<script>
import tabs from "~/layout/common/productsComponents/tabs.vue";
import rightSidebar from "./rightSidebar.vue";
import productSlider1 from "~/layout/common/productsComponents/productSlider1.vue";
import productRightSection from "~/layout/common/productsComponents/productRightSection.vue";
export default {
  components: {
    tabs,
    rightSidebar,
    productSlider1,
    productRightSection,
  },
  data() {
    return {
      sliderClass: "col-lg-5",
      rightSectionClasses: "col-lg-7",
    };
  },
};
</script>

<style></style>
