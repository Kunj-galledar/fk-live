<template>
  <div class="category-menu">
    <button
      type="button"
      class="btn btn-solid-default toggle-category d-sm-block d-none"
      v-if="headerButtonVisible"
    >
      All categories
      <i class="fas fa-chevron-down d-xl-inline-block d-none"></i>
    </button>
    <div class="category-dropdown" :class="{ open: state }">
      <div class="close-btn d-xl-none">
        Category List
        <span class="back-category" @click="closeOverlay"
          ><i class="fa fa-angle-left"></i>
        </span>
      </div>
      <ul>
        <li
          v-for="(category, index) in categoryList"
          :class="[{ submenu: category.children }]"
          :key="index"
        >
          <a href="javascript:void(0)" @click="toggleMenu(category.id)"
            >{{ category.title
            }}<span class="according-menu" v-if="category.children">+</span></a
          >
          <ul
            class="category-mega-menu"
            v-if="category.children"
            :class="category.menuOpen ? '' : 'd-none'"
          >
            <li v-for="(item, index) in category.children" :key="'a' + index">
              <div class="row">
                <div class="col-xl-3">
                  <div class="category-childmenu">
                    <div
                      class="title-category"
                      @click="toggleSubMenu(category.id, item.id)"
                    >
                      <h6>
                        {{ item.heading
                        }}<span class="according-menu" v-if="item.items"
                          >+</span
                        >
                      </h6>
                    </div>
                    <ul :class="item.subMenuOpen ? '' : 'd-none'">
                      <li v-for="(link, index) in item.items" :key="index">
                        <a href="shop-left-sidebar.html">{{ link.title }}</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-xl-3" v-if="category.bannerImage">
                  <div class="category-banner">
                    <img
                      :src="getImageUrl(category.bannerImage)"
                      class="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["headerButtonVisible"],
  computed: {
    state() {
      return this.$store.state.clickEvents.categoryMobileMenu;
    },
    categoryList() {
      return this.$store.state.categoryMenu.data;
    },
  },
  methods: {
    closeOverlay() {
      this.$store.dispatch("clickEvents/closeOverlay");
    },
    getImageUrl(path) {
      return require("@/assets/images/" + path);
    },
    toggleMenu(menuId) {
      this.categoryList[menuId - 1].menuOpen =
        !this.categoryList[menuId - 1].menuOpen;
    },
    toggleSubMenu(menuId, subMenuId) {
      this.categoryList[menuId - 1].children[subMenuId - 1].subMenuOpen =
        !this.categoryList[menuId - 1].children[subMenuId - 1].subMenuOpen;
    },
  },
};
</script>

<style></style>
