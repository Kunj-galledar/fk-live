<template>
  <div class="top-header" :class="topBarClasses">
    <div class="container-fluid-lg">
      <div class="row">
        <div class="col-auto d-xl-block d-none">
          <ul class="border-list">
            <li>Voxo ecommerce always free delivery</li>
            <li>New Customer Extra 50% Off</li>
          </ul>
        </div>
        <div class="col-auto d-sm-block d-none" v-if="offerCode">
          <p class="font-dark-30 mb-0">
            Offer Coupon Code : <span class="fw-bold">{{ offerCode }}</span>
          </p>
        </div>
        <div class="col-auto">
          <ul class="border-list">
            <li v-for="(key, index) in dropdownKeys" :key="index">
              <div class="dropdown top-header-dropdown">
                <a class="dropdown-toggle" @click.prevent="toggleDropdown(key)" href="javascript:void(0)" role="button"
                  id="dropdownMenuLink" data-bs-toggle="dropdown">
                  <span>{{
                    selectedDropdowns[key] == ""
                    ? dropdowns[key].title
                    : selectedDropdowns[key]
                    }}</span>
                  <i class="fas fa-chevron-down"></i>
                </a>
                <ul class="dropdown-menu dropdown-menu-end" :class="[{ show: dropdowns[key].active }]"
                  aria-labelledby="dropdownMenuLink">
                  <li class="w-100" v-for="(link, index) in dropdowns[key].links" :key="'a' + index">
                    <a href="javascript:void(0)" class="dropdown-item" @click.prevent="handleDropdown(key, link)">{{
                      link }}</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from "vuex";
  export default {
    props: ["topBarClasses", "offerCode"],
    data() {
      return {
        selectedDropdowns: {
          loginAndRegister: "",
          currency: "",
          languages: "",
        },
        dropdowns: {
          loginAndRegister: {
            title: "Login & Register",
            active: false,
            links: ["login", "register"],
          },
          currency: {
            title: "Currency",
            active: false,
            links: ["Dollar", "Rupee", "Euro"],
          },
          languages: {
            title: "Languages",
            active: false,
            links: ["English", "French", "Arabic"],
          },
        },
        dropdownKeys: [],
      };
    },
    watch: {
      selectedDropdowns: {
        handler() {
          console.log("selectedDropdowns:", this.selectedDropdowns);
        },
        deep: true,
      },
    },
    computed: {
      ...mapState({
        currencyList: (state) => state.layout.currencyList,
        currencyConversionMultiple: (state) => state.layout.currencyConversion,
      }),
    },
    methods: {
      toggleDropdown(key) {
        this.dropdowns[key].active = !this.dropdowns[key].active;
      },
      handleDropdown(key, link) {
        this.dropdowns[key].active = false;
        this.selectedDropdowns[key] = link;
        if (key === "currency") {
          this.$store.dispatch("layout/setCurrecy", { currency: link });
        }
        this.$store.dispatch("products/currencyChanged");
      },
    },
    created() {
      this.dropdownKeys = Object.keys(this.dropdowns);
      this.dropdowns.currency.links = [];
      this.currencyList.forEach((item) => {
        this.dropdowns.currency.links.push(item.currency);
      });
    },
  };
</script>