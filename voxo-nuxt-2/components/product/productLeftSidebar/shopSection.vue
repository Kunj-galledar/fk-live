<template>
  <section>
    <div class="container">
      <div class="row gx-4 gy-5">
        <div class="col-lg-3 col-md-4 mt-lg-5 mt-0">
          <div class="category-option">
            <div class="button-close mb-3">
              <button class="btn p-0">
                <i data-feather="arrow-left"></i> Close
              </button>
            </div>

            <leftSidebar />
          </div>
        </div>

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
              <productSlider1
                :sliderClass="sliderClass"
                :images="product.images"
              />
              <productRightSection
                :rightSectionClasses="rightSectionClasses"
                :product="product"
              />
            </div>
          </div>
        </div>

        <tabs />
      </div>
    </div>
  </section>
</template>

<script>
import leftSidebar from "./leftSidebar.vue";
import tabs from "~/layout/common/productsComponents/tabs.vue";
import productRightSection from "~/layout/common/productsComponents/productRightSection.vue";
import productSlider1 from "~/layout/common/productsComponents/productSlider1.vue";
export default {
  props: ["product"],
  data() {
    return {
      sliderClass: "col-lg-5",
      rightSectionClasses: "col-lg-7 ",
    };
  },
  components: {
    leftSidebar,
    productSlider1,
    tabs,
    productRightSection,
  },
};
</script>

<style></style>
