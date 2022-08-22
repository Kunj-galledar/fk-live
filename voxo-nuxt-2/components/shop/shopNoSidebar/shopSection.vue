<template>
  <section class="section-b-space">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-12 ratio_30">
          <topBanner />
          <div class="row g-4">
            <!-- label and featured section -->
            <div class="col-md-12">
              <ul class="short-name">
                <li>
                  <div class="label-tag">
                    <span>Shirts</span>
                    <button
                      type="button"
                      class="btn-close"
                      aria-label="Close"
                    ></button>
                  </div>
                </li>
                <li>
                  <div class="label-tag">
                    <span>Kurtas</span>
                    <button
                      type="button"
                      class="btn-close"
                      aria-label="Close"
                    ></button>
                  </div>
                </li>
                <li>
                  <div class="label-tag">
                    <span>Jackets</span>
                    <button
                      type="button"
                      class="btn-close"
                      aria-label="Close"
                    ></button>
                  </div>
                </li>
                <li>
                  <div class="label-tag">
                    <span>Blazers</span>
                    <button
                      type="button"
                      class="btn-close"
                      aria-label="Close"
                    ></button>
                  </div>
                </li>
                <li>
                  <div class="label-tag">
                    <a href="javascript:void(0)"><span>Clear All</span></a>
                  </div>
                </li>
              </ul>
            </div>

            <options @changeCardLayout="changeCardLayout" />
          </div>
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
import topBanner from "~/layout/common/shopComponents/topBanner1.vue";
import options from "~/layout/common/shopComponents/options1.vue";
import productBox1 from "~/layout/elements/productBox/product-box1.vue";
import { mapState } from "vuex";

export default {
  components: {
    topBanner,
    options,
    productBox1,
  },
  data() {
    return {
      cardsLayout: 4,
    };
  },
  methods: {
    changeCardLayout(toLayout) {
      this.cardsLayout = toLayout;
    },
  },
  computed: {
    ...mapState({
      productsList: (state) => state.products.data,
    }),
  },
};
</script>

<style></style>
