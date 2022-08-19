<template>
  <section class="section-b-space">
    <div class="container">
      <div class="row">
        <filterSideBar />

        <div class="col-lg-9 col-12 ratio_30">
          <topBanner />
          <div class="col-12" v-if="filtersList.length != 0">
            <ul class="short-name">
              <li v-for="(filter, index) in filtersList" :key="index">
                <div class="label-tag">
                  <span>{{ filter }}</span>
                  <button
                    type="button"
                    class="btn-close"
                    aria-label="Close"
                    @click="removeFilter(filter)"
                  ></button>
                  <!-- @click.prevent="removeFilter(allFilters.title, filters)" -->
                </div>
              </li>
              <li>
                <div class="label-tag" v-if="filtersList.length != 0">
                  <a href="javascript:void(0)" @click.prevent="clearAllFilters"
                    ><span>Clear All</span></a
                  >
                </div>
              </li>
            </ul>
          </div>
          <options
            :setCardsLayout="setCardsLayout"
            @changeCardLayout="changeCardLayout"
            @changeProductsPerPage="changeProductsPerPage"
          />
          <!-- <filterButtons @changeCardLayout="changeCardLayout" /> -->
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

          <div class="load-more">
            <button
              class="loadMore btn btn-submit btn-full"
              @click.prevent="loadCards"
            >
              <span v-if="cardsToShow < totalCards">load more</span>
              <span v-else>No More Products</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import VueFeather from "vue-feather";
import options from "~/layout/elements/shopSections/options1.vue";
import filterButtons from "~/layout/common/shopComponents/filterButtons1.vue";
import productBox1 from "~/layout/elements/productBox/product-box1.vue";
import FilterSideBar from "~/layout/elements/shopSections/shopFilterbar.vue";

import topBanner from "~/layout/common/shopComponents/topBanner1.vue";
export default {
  props: ["setCardsLayout"],
  components: {
    VueFeather,
    topBanner,
    filterButtons,
    productBox1,
    FilterSideBar,
    options,
  },
  data() {
    return {
      cardsLayout: 4,
      cardsToShow: 2,
      totalCards: 8,
      isLoaded: false,
    };
  },
  computed: {
    ...mapGetters({
      cards: "filters/cardsToReturn",
    }),
    ...mapState({
      showFilters: (state) => state.filters.showFilters,
      filtersList: (state) => state.filters.filtersList,
      appliedFiltersList: (state) => state.filters.appliedFilters,
    }),
  },
  methods: {
    loadCards() {
      this.cardsToShow += 2;
    },
    changeCardLayout(toLayout) {
      this.cardsLayout = toLayout;
    },
    clearAllFilters() {
      this.$store.dispatch("filters/clearAllFilters");
    },
    removeFilter(title) {
      this.$store.dispatch("filters/removeFilter", title);
    },
    changeProductsPerPage(productsToShow) {
      // this.cardsToShow = productsToShow;
      // this.totalPages = Math.ceil(this.cards.length / this.cardsToShow);
    },
  },
  created() {
    this.isLoaded = true;
    this.totalCards = this.cards.length;
  },
};
</script>

<style lang="scss" scoped></style>
