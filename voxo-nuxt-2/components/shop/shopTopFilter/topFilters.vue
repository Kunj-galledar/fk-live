<template>
  <div class="row gx-4 gy-5">
    <div class="col-12">
      <div class="filter-show-button mb-3">
        <a href="javascript:void(0)" class="mobile-filter border-top-0">
          <i data-feather="align-left" class="img-fluid blur-up lazyloaded"></i>
          <h5>latest filter</h5>
        </a>
      </div>
    </div>

    <div class="col-12 m-0">
      <div class="top-filter-section">
        <ul>
          <li class="back-btn">
            <div class="mobile_back text-end">
              <span>Back</span>
              <i aria-hidden="true" class="fa fa-angle-right ps-2"></i>
            </div>
          </li>

          <li class="filter-title">
            <h6 class="theme-color">filter :</h6>
          </li>

          <li class="onclick-title" :class="[{ show: dropdowns['categories'] }]">
            <h6 @click="toggleDropdown('categories')">Category</h6>
            <ul class="onclick-content">
              <li>
                <div class="form-check ps-0 custome-form-check">
                  <input class="checkbox_animated check-it" type="radio" value="all" v-model="selectedCategory"
                    name="flexRadioDefault1" id="flexCheckDefault26" />
                  <label class="form-check-label" for="flexCheckDefault25">All</label>
                </div>
              </li>
              <li v-for="(category, index) in categories" :key="index">
                <div class="form-check ps-0 custome-form-check">
                  <input class="checkbox_animated check-it" type="radio" :value="category" v-model="selectedCategory"
                    name="flexRadioDefault1" id="flexCheckDefault26" />
                  <label class="form-check-label" for="flexCheckDefault26">{{
                    category
                    }}</label>
                </div>
              </li>
            </ul>
          </li>

          <li class="onclick-title" :class="[{ show: dropdowns['brands'] }]">
            <h6 @click="toggleDropdown('brands')">Brands</h6>
            <ul class="onclick-content">
              <li v-if="brands.length === 0">No Brands Available</li>
              <li v-else v-for="(brand, index) in brands" :key="'a' + index">
                <div class="form-check ps-0 custome-form-check">
                  <input class="checkbox_animated check-it" type="checkbox" :id="brand" :value="brand"
                    v-model="filtersList" />
                  <label class="form-check-label" for="flexCheckDefault12">{{
                    brand
                    }}</label>
                </div>
              </li>
            </ul>
          </li>

          <li class="onclick-title" :class="[{ show: dropdowns['price'] }]">
            <h6 @click="toggleDropdown('price')">Price</h6>
            <ul class="onclick-content">
              <li>
                <div class="form-check ps-0 custome-form-check">
                  <input class="checkbox_animated check-it" type="radio" value="-1" v-model="selectedPrice" @change="
                      setPriceRange(
                        0,
                        priceRangeList[priceRangeList.length - 1]
                      )
                    " name="flexRadioDefault2" id="flexCheckDefault25" />
                  <label class="form-check-label" for="flexCheckDefault19">All Products
                  </label>
                </div>
              </li>
              <li v-for="(price, index) in priceRangeList" :key="'b' + index"
                v-if="price != priceRangeList[priceRangeList.length - 1]">
                <div class="form-check ps-0 custome-form-check">
                  <input class="checkbox_animated check-it" type="radio" :value="price" v-model="selectedPrice"
                    @change="setPriceRange(price, priceRangeList[index + 1])" name="flexRadioDefault2"
                    id="flexCheckDefault25" />
                  <label class="form-check-label" for="flexCheckDefault25">Rs. {{ price }} to Rs. {{
                    priceRangeList[index + 1] }}
                  </label>
                </div>
              </li>
            </ul>
          </li>

          <li class="onclick-title" :class="[{ show: dropdowns['discount'] }]">
            <h6 @click="toggleDropdown('discount')">Discount</h6>
            <ul class="onclick-content">
              <li v-for="(discount, index) in discountList" :key="index">
                <div class="form-check ps-0 custome-form-check">
                  <input class="checkbox_animated check-it" type="radio" :value="discount" v-model="selectedDiscount"
                    name="flexRadioDefault3" id="flexCheckDefault25" />
                  <label class="form-check-label" for="flexCheckDefault25">{{ discount }}% and above</label>
                </div>
              </li>
            </ul>
          </li>

          <li class="onclick-title" :class="[{ show: dropdowns['sortBy'] }]">
            <h6 @click="toggleDropdown('sortBy')">Default Sorting</h6>
            <ul class="onclick-content">
              <li class="dropdown-list" v-for="(criteria, index) in sortingCriterias" :key="'d' + index">
                <div class="form-check ps-0 custome-form-check">
                  <input class="checkbox_animated check-it" type="radio" :value="criteria.criteria"
                    v-model="selectedSortingCriteria" name="flexRadioDefault4" id="flexCheckDefault27" />
                  <label class="form-check-label" for="flexCheckDefault25">{{
                    criteria.displayName
                    }}</label>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapState } from "vuex";
  export default {
    data() {
      return {
        dropdowns: {
          categories: false,
          brands: false,
          price: false,
          discount: false,
          sortBy: false,
        },
        selectedSortingCriteria: "default",
        selectedCategory: "all",
        selectedDiscount: 0,
        filtersList: [],
        priceRangeList: [],
        discountList: [0, 10, 20, 30, 40, 50],
        selectedPrice: -1,
      };
    },
    methods: {
      setPriceRange(min, max) {
        var priceRange = [];
        priceRange[0] = min;
        priceRange[1] = max;
        this.$store.dispatch("filters/priceRangeChange", priceRange);
        this.$router;
      },
      toggleDropdown(dropdown) {
        this.dropdowns[dropdown] = !this.dropdowns[dropdown];
      },
      changePage(category) {
        this.$router.push({
          name: this.$route.name,
          params: { id: category },
        });
      },
      calcPriceList(maxPrice) {
        this.priceRangeList = [];
        var difference = Math.ceil(maxPrice / 6),
          i = 0;
        while (i - difference < 6 * difference) {
          this.priceRangeList.push(i);
          i += difference;
        }
      },
    },
    computed: {
      ...mapState({
        appliedFilters: (state) => state.filters.filtersList,
      }),
      ...mapGetters({
        categories: "filters/categories",
        brands: "filters/brandFilters",
        maxPrice: "filters/unroundedMaxPrice",
        sortingCriterias: "filters/sortingCriterias",
      }),
    },
    watch: {
      selectedSortingCriteria: function () {
        this.$store.dispatch(
          "filters/setsSortingCriteria",
          this.selectedSortingCriteria
        );
        this.$router.push({
          path: this.$route.path,
          query: { ...this.$route.query, sortBy: this.selectedSortingCriteria },
        });
      },
      selectedCategory: function () {
        this.$store.dispatch("filters/setCategory", this.selectedCategory);
        this.$router.push({
          name: this.$route.name,
          params: { id: this.selectedCategory },
        });
      },
      selectedDiscount: function () {
        this.$store.dispatch("filters/filterDiscount", this.selectedDiscount);
        this.$router.push({
          path: this.$route.path,
          query: { ...this.$route.query, discount: this.selectedDiscount },
        });
      },
      maxPrice: function () {
        this.calcPriceList(this.maxPrice);
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
    },
    created() {
      this.$store.dispatch("filters/setCategory", this.$route.params.id);
      var idCategory = this.$route.params.id;
      var queryFilters = this.$route.query.filters;
      var querySortBy = this.$route.query.sortBy;
      this.selectedSortingCriteria =
        querySortBy === undefined ? "default" : querySortBy;
      this.selectedCategory = idCategory === undefined ? "all" : idCategory;

      if (typeof queryFilters === "string") this.filtersList.push(queryFilters);
      else if (typeof queryFilters === "object") this.filtersList = queryFilters;
      else this.filtersList = [];
      this.selectedDiscount =
        this.$route.query.discount === undefined ? 0 : this.$route.query.discount;
      this.calcPriceList(this.maxPrice);
    },
  };
</script>

<style></style>