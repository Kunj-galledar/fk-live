<template>
  <layout5 pageName="User Dashboard" parent="User Dashboard">
    <section class="section-b-space">
      <div class="container">
        <div class="row">
          <div class="col-lg-3">
            <ul
              class="nav nav-tabs custome-nav-tabs flex-column category-option"
              id="myTab"
              :class="{ show: dashboardLinks }"
            >
              <li
                class="nav-item mb-2"
                v-for="(link, index) in allLinks"
                :key="index"
              >
                <button
                  class="nav-link font-light"
                  :class="activeTab[link.link] ? 'active' : ''"
                  @click="setActiveTab(link.link)"
                  id="tab"
                  data-bs-toggle="tab"
                  data-bs-target="#dash"
                >
                  <i class="fas fa-angle-right"></i>{{ link.name }}
                </button>
              </li>
            </ul>
          </div>

          <div class="col-lg-9">
            <div class="filter-button dash-filter dashboard">
              <button
                class="btn btn-solid-default btn-sm fw-bold filter-btn"
                @click.prevent="toggleDashboardLinks"
              >
                Show Menu
              </button>
            </div>

            <div class="tab-content" id="myTabContent">
              <myDashboard v-if="activeTab['myDashboard']" />
              <orders v-else-if="activeTab['orders']" />
              <wishlist v-else-if="activeTab['wishlist']" />
              <savedAddress v-else-if="activeTab['savedAddress']" />
              <payment v-else-if="activeTab['payment']" />
              <profile v-else-if="activeTab['profile']" />
              <security v-else-if="activeTab['security']" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </layout5>
</template>

<script>
import layout5 from "~/layout/layouts/layout5.vue";
import myDashboard from "~/components/page/userDashboard/myDashboard.vue";
import orders from "~/components/page/userDashboard/orders.vue";
import wishlist from "~/components/page/userDashboard/wishilist.vue";
import savedAddress from "~/components/page/userDashboard/savedAddress.vue";
import payment from "~/components/page/userDashboard/payment.vue";
import profile from "~/components/page/userDashboard/profile.vue";
import security from "~/components/page/userDashboard/security.vue";
export default {
  components: {
    layout5,
    myDashboard,
    orders,
    payment,
    savedAddress,
    security,
    wishlist,
    profile,
  },
  data() {
    return {
      activeTab: { myDashboard: true },
      allLinks: [
        { name: "Dashboard", link: "myDashboard" },
        { name: "Orders", link: "orders" },
        { name: "Wishlist", link: "wishlist" },
        { name: "Saved Address", link: "savedAddress" },
        { name: "Payment", link: "payment" },
        { name: "Profile", link: "profile" },
        { name: "Security", link: "security" },
      ],
    };
  },
  computed: {
    dashboardLinks() {
      return this.$store.state.clickEvents.dashboardLinks;
    },
  },
  methods: {
    toggleDashboardLinks() {
      this.$store.dispatch("clickEvents/toggleDashboardLinks");
    },
    setActiveTab(tab) {
      this.activeTab = {};
      this.activeTab[tab] = true;
    },
  },
};
</script>
