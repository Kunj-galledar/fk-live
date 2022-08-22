<template>
  <section class="section-b-space">
    <div class="container">
      <div class="row">
        <filterSidebar />

        <div class="col-lg-9 col-12 ratio_30">
          <topBanner />
          <filterButtons @changeCardLayout="changeLayout" />
          <!-- label and featured section -->

          <!-- Prodcut setion -->
          <div
            class="
              row
              g-sm-4 g-3
              gx-sm-4 gx-3
              mt-1
              custom-gy-5
              product-style-2
              ratio_asos
              product-list-section
            "
            :class="[
              { 'row-cols-2': cardsLayout == 2 },
              { 'row-cols-md-3 row-cols-2': cardsLayout == 3 },
              { 'row-cols-xl-4 row-cols-md-3 row-cols-2': cardsLayout == 4 },
              {
                'row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2 ':
                  cardsLayout == 5,
              },
              {
                'list-style': cardsLayout == 6,
              },
            ]"
          >
            <div v-for="(product, index) in cards" :key="index">
              <productBox1 :product="product" />
            </div>

            <!-- Prodcut setion -->
          </div>

          <nav class="page-section">
            <ul class="pagination">
              <li class="page-item">
                <a
                  href="javascript:void(0)"
                  class="page-link"
                  @click="changePage(currentPage - 1)"
                >
                  <i class="fas fa-chevron-left"></i>
                </a>
              </li>
              <li
                class="page-item"
                v-for="i in pages"
                :key="i"
                :class="i === currentPage ? 'active' : ''"
              >
                <a
                  class="page-link"
                  href="javascript:void(0)"
                  @click.prevent="changePage(i)"
                  >{{ i }}
                </a>
              </li>

              <li class="page-item">
                <a
                  href="javascript:void(0)"
                  class="page-link"
                  @click="changePage(currentPage + 1)"
                >
                  <i class="fas fa-chevron-right"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import VueFeather from "vue-feather";
import filterButtons from "~/layout/common/shopComponents/filterButtons1.vue";
import productBox1 from "~/layout/elements/productBox/product-box1.vue";
import filterSidebar from "~/layout/common/shopComponents/filterBar3.vue";
import topBanner from "~/layout/common/shopComponents/topBanner1.vue";
export default {
  components: {
    VueFeather,
    topBanner,
    filterButtons,
    productBox1,
    filterSidebar,
  },
  data() {
    return {
      isLoaded: false,
      cardsLayout: 6,
    };
  },
  computed: {
    ...mapState({
      cards: (state) =>
        state.products.data.filter((item) => item.type === "fashion"),
    }),
  },
  methods: {
    changeLayout(layout) {
      this.cardsLayout = layout;
    },
  },
  created() {
    this.isLoaded = true;
  },
};
</script>

<style lang="scss" scoped></style>
