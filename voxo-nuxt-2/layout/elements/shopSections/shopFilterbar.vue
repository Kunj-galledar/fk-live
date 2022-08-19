<template>
  <div
    class="col-lg-3 col-md-4"
    :class="[filterBarClasses, { show: showFilters }]"
  >
    <div class="category-option" :class="[{ show: showFilters }]">
      <div class="button-close mb-3">
        <button class="btn p-0" @click.prevent="toggleFilterBar">
          <vue-feather type="arrow-left"></vue-feather> Close
        </button>
      </div>
      <div class="accordion category-name" id="accordionExample">
        <div class="accordion-item category-rating">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button"
              type="button"
              @click.prevent="toggleFilterBox('brand')"
              :class="filterBoxes['brand'] ? '' : 'collapsed'"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
            >
              Brand
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            :class="filterBoxes['brand'] ? 'show' : 'collapse'"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body category-scroll">
              <ul class="category-list">
                <li
                  v-for="(brand, index) in brandFilters"
                  :key="index"
                  v-if="brandFilters.length > 1"
                >
                  <div class="form-check ps-0 custome-form-check" v-if="brand">
                    <input
                      class="checkbox_animated check-it"
                      type="checkbox"
                      :id="brand"
                      :value="brand"
                      v-model="filtersList"
                    />
                    <label class="form-check-label" :for="brand">{{
                      brand
                    }}</label>
                    <p class="font-light">(25)</p>
                  </div>
                </li>
                <li v-else>No Filters available</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="accordion-item category-color">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button"
              type="button"
              @click.prevent="toggleFilterBox('color')"
              :class="filterBoxes['color'] ? '' : 'collapsed'"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
            >
              Color
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            :class="filterBoxes['color'] ? 'show' : 'collapse'"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <ul class="category-list">
                <li v-for="(color, index) in colors" :key="index">
                  <input
                    type="checkbox"
                    class="colorCheckbox"
                    :value="color"
                    v-model="selectedColorsList"
                  />
                  <div class="colorDiv" :style="{ 'background-color': color }">
                    <!-- <div class="insideColorDiv"></div> -->
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="accordion-item category-price">
          <h2 class="accordion-header" id="headingFour">
            <button
              class="accordion-button"
              type="button"
              @click.prevent="toggleFilterBox('price')"
              :class="filterBoxes['price'] ? '' : 'collapsed'"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
            >
              Price
            </button>
          </h2>
          <div
            id="collapseFour"
            class="accordion-collapse collapse"
            :class="filterBoxes['price'] ? 'show' : 'collapse'"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <div class="range-slider category-list">
                <vue-slider
                  v-model="priceRange"
                  :min="0"
                  :max="maxPrice"
                  ref="slider"
                  @change="sliderChange($refs.slider.getValue())"
                >
                </vue-slider>
              </div>
            </div>
          </div>
        </div>

        <div class="accordion-item category-rating">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              @click.prevent="toggleFilterBox('category')"
              :class="filterBoxes['category'] ? '' : 'collapsed'"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
            >
              Category
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse"
            :class="filterBoxes['category'] ? 'show' : 'collapse'"
            aria-labelledby="headingOne"
          >
            <div class="accordion-body category-scroll">
              <ul class="category-list">
                <div class="form-check ps-0 custome-form-check">
                  <li>
                    <a
                      href="javascript:void(0)"
                      @click.prevent="changePath('all')"
                    >
                      All
                    </a>
                  </li>
                </div>
                <li v-for="(category, index) in categories" :key="index">
                  <div class="form-check ps-0 custome-form-check">
                    <a
                      href="javascript:void(0)"
                      @click.prevent="changePath(category)"
                    >
                      {{ category }}
                    </a>
                    <p class="font-light">(25)</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFive">
            <button
              class="accordion-button"
              type="button"
              @click.prevent="toggleFilterBox('discount')"
              :class="filterBoxes['discount'] ? '' : 'collapsed'"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
            >
              Discount Range
            </button>
          </h2>
          <div
            id="collapseFive"
            class="accordion-collapse collapse"
            :class="filterBoxes['discount'] ? 'show' : 'collapse'"
            aria-labelledby="headingFive"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <ul class="category-list">
                <li v-for="(discount, index) in discounts" :key="'f' + index">
                  <div class="form-check ps-0 custome-form-check">
                    <input
                      class="checkbox_animated check-it"
                      type="radio"
                      :value="discount"
                      v-model="selectedDiscount"
                      name="flexRadioDefault"
                      id="flexCheckDefault19"
                    />
                    <label class="form-check-label" for="flexCheckDefault19"
                      ><span v-if="discount === 0">All</span>
                      <span v-else>{{ discount }}% and above</span></label
                    >
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <mostPopularCarousel />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/antd.css";
import VueFeather from "vue-feather";
import mostPopularCarousel from "~/layout/common/shopComponents/mostPopularCarousel.vue";

export default {
  props: ["filterBarClasses", "showFilterBar"],
  components: { mostPopularCarousel, VueFeather, VueSlider },
  data() {
    return {
      filterBoxes: {
        brand: true,
        color: true,
        price: true,
        category: true,
        discount: true,
      },
      priceRange: [10],
      discounts: [0, 5, 10, 20],
      cleared: false,
      filtersList: [],
      colors: ["red", "pink", "green", "orange", "grey"],
      selectedColorsList: [],
      selectedDiscount: 0,
    };
  },
  computed: {
    ...mapState({
      showFilters: (state) => state.clickEvents.shopFilterBar,
      appliedFilters: (state) => state.filters.filtersList,
    }),
    ...mapGetters({
      maxPrice: "filters/maxPrice",
      brandFilters: "filters/brandFilters",
      categories: "filters/categories",
    }),
    brandFiltersList() {
      return this.$store.state.filters.filtersList;
    },
  },
  methods: {
    toggleFilterBox(box) {
      this.filterBoxes[box] = !this.filterBoxes[box];
    },
    showCurrentPath() {
      this.$router.push({
        name: this.$route.name,
        params: { id: "flower" },
      });
    },
    sliderChange(event) {
      this.$store.dispatch("filters/priceRangeChange", this.priceRange);
    },
    toggleFilterBar() {
      this.$store.dispatch("clickEvents/toggleShopFilterBar");
    },
    changePath(category) {
      this.$router.push({
        name: this.$route.name,
        params: { id: category },
      });
    },
    filterWithColor(color) {
      this.store.dispatch("filters/filterWithColor", color);
    },
  },
  created() {
    this.priceRange[1] = this.maxPrice - this.maxPrice / 10;
  },
  watch: {
    maxPrice: function () {
      this.priceRange[1] = this.maxPrice - this.maxPrice / 10;
    },
    appliedFilters: function () {
      if (this.appliedFilters.length === 0 && !this.cleared) {
        this.filtersList = [];
        this.cleared = true;
      } else {
        this.cleared = false;
      }
    },
    filtersList: function () {
      this.$store.dispatch("filters/setFiltersList", this.filtersList);
      this.$router.push({
        path: this.$route.path,
        query: { ...this.$route.query, filters: this.filtersList },
      });
    },
    selectedDiscount: function () {
      this.$store.dispatch("filters/filterDiscount", this.selectedDiscount);
      this.$router.push({
        path: this.$route.path,
        query: { ...this.$route.query, discount: this.selectedDiscount },
      });
    },
    selectedColorsList: function () {
      this.$store.dispatch("filters/setColorsList", this.selectedColorsList);
      this.$router.push({
        path: this.$route.path,
        query: { ...this.$route.query, colors: this.selectedColorsList },
      });
    },
  },
  mounted() {
    this.$store.dispatch("filters/setCategory", this.$route.params.id);
    var queryFilters = this.$route.query.filters;
    var queryColors = this.$route.query.colors;

    if (typeof queryFilters === "string") this.filtersList.push(queryFilters);
    else if (typeof queryFilters === "object") this.filtersList = queryFilters;
    else this.filtersList = [];

    if (typeof queryColors === "string")
      this.selectedColorsList.push(queryColors);
    else if (typeof queryColors === "object")
      this.selectedColorsList = queryColors;
    else this.selectedColorsList = [];
    this.selectedDiscount =
      this.$route.query.discount === undefined ? 0 : this.$route.query.discount;
  },
};
</script>

<style lang="scss" scoped>
.colorDiv {
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 30px;
}

.colorCheckbox {
  position: absolute;
  width: 30px;
  height: 30px;
  opacity: 0;
  cursor: pointer;
}

.insideColorDiv {
  position: absolute;
  background-color: white;
  height: 10px;
  width: 10px;
}

input[type="checkbox"]:checked ~ div {
  box-shadow: 0 0 0 2px rgb(0, 0, 0, 0.2);
}
</style>
