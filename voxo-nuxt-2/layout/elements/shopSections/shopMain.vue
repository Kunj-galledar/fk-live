<template>
  <section class="section-b-space">
    <div class="container">
      <div class="row">
        <shopFilterbar
          :showFilterBar="showFilters"
          v-if="filterbarPosition != 'right'"
          :filterBarClasses="filterBarClasses"
        />

        <div
          class="col-lg-9 col-12 ratio_30"
          :class="[{ 'col-lg-12': showFilters }]"
        >
          <slot name="topBanner"></slot>
          <div class="hide-button d-flex mb-3" v-if="filterHide">
            <button
              class="danger-button danger-center btn btn-sm filter-btn"
              @click.prevent="toggleFilterBar"
            >
              <span class="d-lg-inline-block" v-if="showFilters"
                >Show Filter</span
              >
              <span class="d-lg-inline-block" v-else>Hide Filter</span>
            </button>
          </div>
          <!-- <div class="hide-button d-flex mb-3" v-else>
            <button class="btn hide-btn" @click.prevent="toggleFilterBar">
              <span class="d-lg-inline-block">Show Filter</span>
            </button>
          </div> -->
          <div class="row g-4">
            <!-- filter button -->
            <div class="filter-button">
              <button
                class="danger-button danger-center btn btn-sm filter-btn"
                @click.prevent="toggleFilterBar"
              >
                <vue-feather type="align-left"></vue-feather>Filter
              </button>
            </div>

            <!-- filter button -->

            <!-- label and featured section -->
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
                    <a
                      href="javascript:void(0)"
                      @click.prevent="clearAllFilters"
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
            <div
              v-for="(product, index) in cards.slice(
                currentPage * cardsToShow - cardsToShow,
                currentPage * cardsToShow
              )"
              :key="index"
            >
              <productBox1 :product="product" />
            </div>

            <!-- Prodcut setion -->
          </div>

          <nav class="page-section" v-if="cards.length != 0">
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
        <shopFilterbar
          :showFilterBar="showFilters"
          v-if="filterbarPosition === 'right'"
          :filterBarClasses="filterBarClasses"
        />
      </div>
    </div>
  </section>
</template>

<script>
import VueFeather from "vue-feather";
import shopFilterbar from "~/layout/elements/shopSections/shopFilterbar.vue";
import productBox1 from "~/layout/elements/productBox/product-box1.vue";
import options from "~/layout/elements/shopSections/options1.vue";
import { mapState, mapGetters } from "vuex";
export default {
  components: { shopFilterbar, options, productBox1, VueFeather },
  props: [
    "setCardsLayout",
    "filterbarPosition",
    "filterBarClasses",
    "filterHide",
  ],
  data() {
    return {
      showFilterBar: false,
      cardsLayout: 4,
      cards: [],
      pages: [],
      cardsToShow: 12,
      totalCards: 8,
      currentPage: 1,
      totalPages: 2,
    };
  },
  methods: {
    toggleResponsiveFilterBar() {
      // this.$store.dispatch("clickEvents/toggleOverlay");
      this.showFilterBar = !this.showFilterBar;
    },
    changePage(toPage) {
      if (toPage > 0 && toPage <= this.totalPages) {
        this.currentPage = toPage;
        this.calculatePages();
      }
    },
    calculatePages() {
      this.pages = [];
      var startPage, endPage;
      if (this.currentPage == 1) {
        startPage = 1;
        endPage = 4;
      } else {
        startPage = this.currentPage - 1;
        endPage = this.currentPage + 2;
      }
      for (var i = startPage; i < endPage; i++) {
        if (i <= this.totalPages) {
          this.pages.push(i);
        }
      }
    },
    toggleFilterBar() {
      if (this.$route.path == "/shop/shop_filter_hide")
        this.$store.dispatch("clickEvents/toggleShopFilterBarNoOverlay");
      else this.$store.dispatch("clickEvents/toggleShopFilterBar");
    },
    removeFilter(title) {
      this.$store.dispatch("filters/removeFilter", title);
    },
    clearAllFilters() {
      this.$store.dispatch("filters/clearAllFilters");
    },
    changeCardLayout(toLayout) {
      this.cardsLayout = toLayout;
    },
    changeProductsPerPage(productsToShow) {
      this.cardsToShow = productsToShow;
      this.totalPages = Math.ceil(this.cards.length / this.cardsToShow);
      this.calculatePages();
    },
  },
  computed: {
    ...mapGetters({
      initCards: "filters/cardsToReturn",
    }),
    ...mapState({
      showFilters: (state) => state.clickEvents.shopFilterBar,
      filtersList: (state) => state.filters.filtersList,
      appliedFiltersList: (state) => state.filters.appliedFilters,
    }),
  },
  watch: {
    cards: function () {
      this.totalPages = Math.ceil(this.cards.length / this.cardsToShow);
      this.changePage(1);
    },
  },
  created() {
    this.$store.dispatch("filters/setCategory", this.category);
    this.cards = this.initCards.filter((item) => item.category != "vr");
  },
  mounted() {
    this.totalCards = this.cards.length;
    this.totalPages = Math.ceil(this.totalCards / this.cardsToShow);
    this.calculatePages();
    if (this.setCardsLayout != undefined)
      this.cardsLayout = this.setCardsLayout;
  },
};
</script>

<style></style>