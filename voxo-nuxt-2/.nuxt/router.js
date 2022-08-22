import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3eab4a2a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _080223fa = () => interopDefault(import('..\\pages\\blog\\blog_details\\index.vue' /* webpackChunkName: "pages/blog/blog_details/index" */))
const _56441fa6 = () => interopDefault(import('..\\pages\\blog\\blog_infinite_scroll\\index.vue' /* webpackChunkName: "pages/blog/blog_infinite_scroll/index" */))
const _610100ea = () => interopDefault(import('..\\pages\\blog\\blog_left_sidebar\\index.vue' /* webpackChunkName: "pages/blog/blog_left_sidebar/index" */))
const _a4c26efe = () => interopDefault(import('..\\pages\\blog\\blog_listing\\index.vue' /* webpackChunkName: "pages/blog/blog_listing/index" */))
const _1f9dbb45 = () => interopDefault(import('..\\pages\\blog\\blog_masonary\\index.vue' /* webpackChunkName: "pages/blog/blog_masonary/index" */))
const _09fefe5e = () => interopDefault(import('..\\pages\\blog\\blog_no_sidebar\\index.vue' /* webpackChunkName: "pages/blog/blog_no_sidebar/index" */))
const _bd41d128 = () => interopDefault(import('..\\pages\\blog\\blog_right_sidebar\\index.vue' /* webpackChunkName: "pages/blog/blog_right_sidebar/index" */))
const _6591ecfa = () => interopDefault(import('..\\pages\\home\\electronic_demo\\index.vue' /* webpackChunkName: "pages/home/electronic_demo/index" */))
const _1e615e3e = () => interopDefault(import('..\\pages\\home\\fashion_demo\\index.vue' /* webpackChunkName: "pages/home/fashion_demo/index" */))
const _79f8f6be = () => interopDefault(import('..\\pages\\home\\flowers_demo\\index.vue' /* webpackChunkName: "pages/home/flowers_demo/index" */))
const _77ee6a4a = () => interopDefault(import('..\\pages\\home\\furniture_demo\\index.vue' /* webpackChunkName: "pages/home/furniture_demo/index" */))
const _5a027251 = () => interopDefault(import('..\\pages\\home\\shoes_demo\\index.vue' /* webpackChunkName: "pages/home/shoes_demo/index" */))
const _c149b10e = () => interopDefault(import('..\\pages\\home\\vegetables_demo\\index.vue' /* webpackChunkName: "pages/home/vegetables_demo/index" */))
const _143eef04 = () => interopDefault(import('..\\pages\\loader\\loader.vue' /* webpackChunkName: "pages/loader/loader" */))
const _3dc87a61 = () => interopDefault(import('..\\pages\\page\\404.vue' /* webpackChunkName: "pages/page/404" */))
const _1b359547 = () => interopDefault(import('..\\pages\\page\\cart.vue' /* webpackChunkName: "pages/page/cart" */))
const _3c404a16 = () => interopDefault(import('..\\pages\\page\\checkout\\index.vue' /* webpackChunkName: "pages/page/checkout/index" */))
const _a8d140aa = () => interopDefault(import('..\\pages\\page\\comming_soon.vue' /* webpackChunkName: "pages/page/comming_soon" */))
const _f2bf6c98 = () => interopDefault(import('..\\pages\\page\\compare\\index.vue' /* webpackChunkName: "pages/page/compare/index" */))
const _1802df04 = () => interopDefault(import('..\\pages\\page\\contact_us\\index.vue' /* webpackChunkName: "pages/page/contact_us/index" */))
const _78f8a263 = () => interopDefault(import('..\\pages\\page\\faq\\index.vue' /* webpackChunkName: "pages/page/faq/index" */))
const _241ea860 = () => interopDefault(import('..\\pages\\page\\forgot_password.vue' /* webpackChunkName: "pages/page/forgot_password" */))
const _4a1e805c = () => interopDefault(import('..\\pages\\page\\login.vue' /* webpackChunkName: "pages/page/login" */))
const _5403e704 = () => interopDefault(import('..\\pages\\page\\login_firebase.vue' /* webpackChunkName: "pages/page/login_firebase" */))
const _4f966127 = () => interopDefault(import('..\\pages\\page\\order_success\\index.vue' /* webpackChunkName: "pages/page/order_success/index" */))
const _32820c9a = () => interopDefault(import('..\\pages\\page\\order_tracking\\index.vue' /* webpackChunkName: "pages/page/order_tracking/index" */))
const _14936fca = () => interopDefault(import('..\\pages\\page\\register.vue' /* webpackChunkName: "pages/page/register" */))
const _177ca1e3 = () => interopDefault(import('..\\pages\\page\\review\\index.vue' /* webpackChunkName: "pages/page/review/index" */))
const _acf7bcda = () => interopDefault(import('..\\pages\\page\\search\\index.vue' /* webpackChunkName: "pages/page/search/index" */))
const _fdb887ca = () => interopDefault(import('..\\pages\\page\\user_dashboard\\index.vue' /* webpackChunkName: "pages/page/user_dashboard/index" */))
const _68be95ec = () => interopDefault(import('..\\pages\\page\\wishlist.vue' /* webpackChunkName: "pages/page/wishlist" */))
const _981065f0 = () => interopDefault(import('..\\pages\\product\\product_4_images\\index.vue' /* webpackChunkName: "pages/product/product_4_images/index" */))
const _690791d7 = () => interopDefault(import('..\\pages\\product\\product_left_thumbnail\\index.vue' /* webpackChunkName: "pages/product/product_left_thumbnail/index" */))
const _8a716826 = () => interopDefault(import('..\\pages\\product\\product_no_sidebar\\index.vue' /* webpackChunkName: "pages/product/product_no_sidebar/index" */))
const _3fa5b260 = () => interopDefault(import('..\\pages\\product\\product_right_sidebar\\index.vue' /* webpackChunkName: "pages/product/product_right_sidebar/index" */))
const _69f49ec0 = () => interopDefault(import('..\\pages\\product\\product_right_thumbnail\\index.vue' /* webpackChunkName: "pages/product/product_right_thumbnail/index" */))
const _366586fc = () => interopDefault(import('..\\pages\\product\\product_sticky\\index.vue' /* webpackChunkName: "pages/product/product_sticky/index" */))
const _03b8647e = () => interopDefault(import('..\\pages\\product\\product_video_thumbnail\\index.vue' /* webpackChunkName: "pages/product/product_video_thumbnail/index" */))
const _2d598a3f = () => interopDefault(import('..\\pages\\redirect\\redirectPage.vue' /* webpackChunkName: "pages/redirect/redirectPage" */))
const _be2a7230 = () => interopDefault(import('..\\pages\\shop\\shop_list_infinite\\index.vue' /* webpackChunkName: "pages/shop/shop_list_infinite/index" */))
const _5e674b0e = () => interopDefault(import('..\\pages\\shop\\shop_no_sidebar\\index.vue' /* webpackChunkName: "pages/shop/shop_no_sidebar/index" */))
const _077262ee = () => interopDefault(import('..\\pages\\testing\\copyToClipboard.vue' /* webpackChunkName: "pages/testing/copyToClipboard" */))
const _820fc47e = () => interopDefault(import('..\\pages\\testing\\languageSwitcher.vue' /* webpackChunkName: "pages/testing/languageSwitcher" */))
const _e0a8054e = () => interopDefault(import('..\\pages\\voxo_plus\\search\\index.vue' /* webpackChunkName: "pages/voxo_plus/search/index" */))
const _3ceeb43e = () => interopDefault(import('..\\pages\\voxo_plus\\cookie_bar\\bottom\\index.vue' /* webpackChunkName: "pages/voxo_plus/cookie_bar/bottom/index" */))
const _77f6c970 = () => interopDefault(import('..\\pages\\voxo_plus\\cookie_bar\\bottom_left\\index.vue' /* webpackChunkName: "pages/voxo_plus/cookie_bar/bottom_left/index" */))
const _1476dc01 = () => interopDefault(import('..\\pages\\voxo_plus\\cookie_bar\\bottom_right\\index.vue' /* webpackChunkName: "pages/voxo_plus/cookie_bar/bottom_right/index" */))
const _88f77730 = () => interopDefault(import('..\\pages\\voxo_plus\\element_page\\element_button.vue' /* webpackChunkName: "pages/voxo_plus/element_page/element_button" */))
const _635cdf52 = () => interopDefault(import('..\\pages\\voxo_plus\\element_page\\element_categories.vue' /* webpackChunkName: "pages/voxo_plus/element_page/element_categories" */))
const _0b5edcb2 = () => interopDefault(import('..\\pages\\voxo_plus\\element_page\\element_collection_banner.vue' /* webpackChunkName: "pages/voxo_plus/element_page/element_collection_banner" */))
const _537f9899 = () => interopDefault(import('..\\pages\\voxo_plus\\element_page\\element_deal_banner.vue' /* webpackChunkName: "pages/voxo_plus/element_page/element_deal_banner" */))
const _1c03da43 = () => interopDefault(import('..\\pages\\voxo_plus\\element_page\\element_header.vue' /* webpackChunkName: "pages/voxo_plus/element_page/element_header" */))
const _5346c315 = () => interopDefault(import('..\\pages\\voxo_plus\\element_page\\element_home.vue' /* webpackChunkName: "pages/voxo_plus/element_page/element_home" */))
const _70cadfae = () => interopDefault(import('..\\pages\\voxo_plus\\element_page\\element_product.vue' /* webpackChunkName: "pages/voxo_plus/element_page/element_product" */))
const _2b4d795e = () => interopDefault(import('..\\pages\\voxo_plus\\portfolio_page\\portfolio_2_grid.vue' /* webpackChunkName: "pages/voxo_plus/portfolio_page/portfolio_2_grid" */))
const _c68e8296 = () => interopDefault(import('..\\pages\\voxo_plus\\portfolio_page\\portfolio_2_masonary.vue' /* webpackChunkName: "pages/voxo_plus/portfolio_page/portfolio_2_masonary" */))
const _42ba9720 = () => interopDefault(import('..\\pages\\voxo_plus\\portfolio_page\\portfolio_3_grid.vue' /* webpackChunkName: "pages/voxo_plus/portfolio_page/portfolio_3_grid" */))
const _7e968854 = () => interopDefault(import('..\\pages\\voxo_plus\\portfolio_page\\portfolio_3_masonary.vue' /* webpackChunkName: "pages/voxo_plus/portfolio_page/portfolio_3_masonary" */))
const _5a27b4e2 = () => interopDefault(import('..\\pages\\voxo_plus\\portfolio_page\\portfolio_4_grid.vue' /* webpackChunkName: "pages/voxo_plus/portfolio_page/portfolio_4_grid" */))
const _607451f3 = () => interopDefault(import('..\\pages\\voxo_plus\\portfolio_page\\portfolio_4_masonary.vue' /* webpackChunkName: "pages/voxo_plus/portfolio_page/portfolio_4_masonary" */))
const _58d36126 = () => interopDefault(import('..\\pages\\voxo_plus\\portfolio_page\\portfolio_no_space.vue' /* webpackChunkName: "pages/voxo_plus/portfolio_page/portfolio_no_space" */))
const _7bebf35c = () => interopDefault(import('..\\pages\\product\\product_360_view\\_id.vue' /* webpackChunkName: "pages/product/product_360_view/_id" */))
const _45d8d4f1 = () => interopDefault(import('..\\pages\\product\\product_bundle\\_id.vue' /* webpackChunkName: "pages/product/product_bundle/_id" */))
const _f9969862 = () => interopDefault(import('..\\pages\\product\\product_left_sidebar\\_id.vue' /* webpackChunkName: "pages/product/product_left_sidebar/_id" */))
const _faaf0234 = () => interopDefault(import('..\\pages\\shop\\shop_canvas_filter\\_id.vue' /* webpackChunkName: "pages/shop/shop_canvas_filter/_id" */))
const _1dd769cc = () => interopDefault(import('..\\pages\\shop\\shop_category_filter\\_id.vue' /* webpackChunkName: "pages/shop/shop_category_filter/_id" */))
const _32a0617c = () => interopDefault(import('..\\pages\\shop\\shop_filter_hide\\_id.vue' /* webpackChunkName: "pages/shop/shop_filter_hide/_id" */))
const _cd8c7b4a = () => interopDefault(import('..\\pages\\shop\\shop_left_sidebar\\_id.vue' /* webpackChunkName: "pages/shop/shop_left_sidebar/_id" */))
const _4bb07321 = () => interopDefault(import('..\\pages\\shop\\shop_list\\_id.vue' /* webpackChunkName: "pages/shop/shop_list/_id" */))
const _5e13602c = () => interopDefault(import('..\\pages\\shop\\shop_right_sidebar\\_id.vue' /* webpackChunkName: "pages/shop/shop_right_sidebar/_id" */))
const _708cb646 = () => interopDefault(import('..\\pages\\shop\\shop_top_filter\\_id.vue' /* webpackChunkName: "pages/shop/shop_top_filter/_id" */))
const _ce420464 = () => interopDefault(import('..\\pages\\shop\\shop_with_category\\_id.vue' /* webpackChunkName: "pages/shop/shop_with_category/_id" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/voxo/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/es",
    component: _3eab4a2a,
    name: "index___es"
  }, {
    path: "/fr",
    component: _3eab4a2a,
    name: "index___fr"
  }, {
    path: "/blog/blog_details",
    component: _080223fa,
    name: "blog-blog_details___en"
  }, {
    path: "/blog/blog_infinite_scroll",
    component: _56441fa6,
    name: "blog-blog_infinite_scroll___en"
  }, {
    path: "/blog/blog_left_sidebar",
    component: _610100ea,
    name: "blog-blog_left_sidebar___en"
  }, {
    path: "/blog/blog_listing",
    component: _a4c26efe,
    name: "blog-blog_listing___en"
  }, {
    path: "/blog/blog_masonary",
    component: _1f9dbb45,
    name: "blog-blog_masonary___en"
  }, {
    path: "/blog/blog_no_sidebar",
    component: _09fefe5e,
    name: "blog-blog_no_sidebar___en"
  }, {
    path: "/blog/blog_right_sidebar",
    component: _bd41d128,
    name: "blog-blog_right_sidebar___en"
  }, {
    path: "/home/electronic_demo",
    component: _6591ecfa,
    name: "home-electronic_demo___en"
  }, {
    path: "/home/fashion_demo",
    component: _1e615e3e,
    name: "home-fashion_demo___en"
  }, {
    path: "/home/flowers_demo",
    component: _79f8f6be,
    name: "home-flowers_demo___en"
  }, {
    path: "/home/furniture_demo",
    component: _77ee6a4a,
    name: "home-furniture_demo___en"
  }, {
    path: "/home/shoes_demo",
    component: _5a027251,
    name: "home-shoes_demo___en"
  }, {
    path: "/home/vegetables_demo",
    component: _c149b10e,
    name: "home-vegetables_demo___en"
  }, {
    path: "/loader/loader",
    component: _143eef04,
    name: "loader-loader___en"
  }, {
    path: "/page/404",
    component: _3dc87a61,
    name: "page-404___en"
  }, {
    path: "/page/cart",
    component: _1b359547,
    name: "page-cart___en"
  }, {
    path: "/page/checkout",
    component: _3c404a16,
    name: "page-checkout___en"
  }, {
    path: "/page/comming_soon",
    component: _a8d140aa,
    name: "page-comming_soon___en"
  }, {
    path: "/page/compare",
    component: _f2bf6c98,
    name: "page-compare___en"
  }, {
    path: "/page/contact_us",
    component: _1802df04,
    name: "page-contact_us___en"
  }, {
    path: "/page/faq",
    component: _78f8a263,
    name: "page-faq___en"
  }, {
    path: "/page/forgot_password",
    component: _241ea860,
    name: "page-forgot_password___en"
  }, {
    path: "/page/login",
    component: _4a1e805c,
    name: "page-login___en"
  }, {
    path: "/page/login_firebase",
    component: _5403e704,
    name: "page-login_firebase___en"
  }, {
    path: "/page/order_success",
    component: _4f966127,
    name: "page-order_success___en"
  }, {
    path: "/page/order_tracking",
    component: _32820c9a,
    name: "page-order_tracking___en"
  }, {
    path: "/page/register",
    component: _14936fca,
    name: "page-register___en"
  }, {
    path: "/page/review",
    component: _177ca1e3,
    name: "page-review___en"
  }, {
    path: "/page/search",
    component: _acf7bcda,
    name: "page-search___en"
  }, {
    path: "/page/user_dashboard",
    component: _fdb887ca,
    name: "page-user_dashboard___en"
  }, {
    path: "/page/wishlist",
    component: _68be95ec,
    name: "page-wishlist___en"
  }, {
    path: "/product/product_4_images",
    component: _981065f0,
    name: "product-product_4_images___en"
  }, {
    path: "/product/product_left_thumbnail",
    component: _690791d7,
    name: "product-product_left_thumbnail___en"
  }, {
    path: "/product/product_no_sidebar",
    component: _8a716826,
    name: "product-product_no_sidebar___en"
  }, {
    path: "/product/product_right_sidebar",
    component: _3fa5b260,
    name: "product-product_right_sidebar___en"
  }, {
    path: "/product/product_right_thumbnail",
    component: _69f49ec0,
    name: "product-product_right_thumbnail___en"
  }, {
    path: "/product/product_sticky",
    component: _366586fc,
    name: "product-product_sticky___en"
  }, {
    path: "/product/product_video_thumbnail",
    component: _03b8647e,
    name: "product-product_video_thumbnail___en"
  }, {
    path: "/redirect/redirectPage",
    component: _2d598a3f,
    name: "redirect-redirectPage___en"
  }, {
    path: "/shop/shop_list_infinite",
    component: _be2a7230,
    name: "shop-shop_list_infinite___en"
  }, {
    path: "/shop/shop_no_sidebar",
    component: _5e674b0e,
    name: "shop-shop_no_sidebar___en"
  }, {
    path: "/testing/copyToClipboard",
    component: _077262ee,
    name: "testing-copyToClipboard___en"
  }, {
    path: "/testing/languageSwitcher",
    component: _820fc47e,
    name: "testing-languageSwitcher___en"
  }, {
    path: "/voxo_plus/search",
    component: _e0a8054e,
    name: "voxo_plus-search___en"
  }, {
    path: "/es/blog/blog_details",
    component: _080223fa,
    name: "blog-blog_details___es"
  }, {
    path: "/es/blog/blog_infinite_scroll",
    component: _56441fa6,
    name: "blog-blog_infinite_scroll___es"
  }, {
    path: "/es/blog/blog_left_sidebar",
    component: _610100ea,
    name: "blog-blog_left_sidebar___es"
  }, {
    path: "/es/blog/blog_listing",
    component: _a4c26efe,
    name: "blog-blog_listing___es"
  }, {
    path: "/es/blog/blog_masonary",
    component: _1f9dbb45,
    name: "blog-blog_masonary___es"
  }, {
    path: "/es/blog/blog_no_sidebar",
    component: _09fefe5e,
    name: "blog-blog_no_sidebar___es"
  }, {
    path: "/es/blog/blog_right_sidebar",
    component: _bd41d128,
    name: "blog-blog_right_sidebar___es"
  }, {
    path: "/es/home/electronic_demo",
    component: _6591ecfa,
    name: "home-electronic_demo___es"
  }, {
    path: "/es/home/fashion_demo",
    component: _1e615e3e,
    name: "home-fashion_demo___es"
  }, {
    path: "/es/home/flowers_demo",
    component: _79f8f6be,
    name: "home-flowers_demo___es"
  }, {
    path: "/es/home/furniture_demo",
    component: _77ee6a4a,
    name: "home-furniture_demo___es"
  }, {
    path: "/es/home/shoes_demo",
    component: _5a027251,
    name: "home-shoes_demo___es"
  }, {
    path: "/es/home/vegetables_demo",
    component: _c149b10e,
    name: "home-vegetables_demo___es"
  }, {
    path: "/es/loader/loader",
    component: _143eef04,
    name: "loader-loader___es"
  }, {
    path: "/es/page/404",
    component: _3dc87a61,
    name: "page-404___es"
  }, {
    path: "/es/page/cart",
    component: _1b359547,
    name: "page-cart___es"
  }, {
    path: "/es/page/checkout",
    component: _3c404a16,
    name: "page-checkout___es"
  }, {
    path: "/es/page/comming_soon",
    component: _a8d140aa,
    name: "page-comming_soon___es"
  }, {
    path: "/es/page/compare",
    component: _f2bf6c98,
    name: "page-compare___es"
  }, {
    path: "/es/page/contact_us",
    component: _1802df04,
    name: "page-contact_us___es"
  }, {
    path: "/es/page/faq",
    component: _78f8a263,
    name: "page-faq___es"
  }, {
    path: "/es/page/forgot_password",
    component: _241ea860,
    name: "page-forgot_password___es"
  }, {
    path: "/es/page/login",
    component: _4a1e805c,
    name: "page-login___es"
  }, {
    path: "/es/page/login_firebase",
    component: _5403e704,
    name: "page-login_firebase___es"
  }, {
    path: "/es/page/order_success",
    component: _4f966127,
    name: "page-order_success___es"
  }, {
    path: "/es/page/order_tracking",
    component: _32820c9a,
    name: "page-order_tracking___es"
  }, {
    path: "/es/page/register",
    component: _14936fca,
    name: "page-register___es"
  }, {
    path: "/es/page/review",
    component: _177ca1e3,
    name: "page-review___es"
  }, {
    path: "/es/page/search",
    component: _acf7bcda,
    name: "page-search___es"
  }, {
    path: "/es/page/user_dashboard",
    component: _fdb887ca,
    name: "page-user_dashboard___es"
  }, {
    path: "/es/page/wishlist",
    component: _68be95ec,
    name: "page-wishlist___es"
  }, {
    path: "/es/product/product_4_images",
    component: _981065f0,
    name: "product-product_4_images___es"
  }, {
    path: "/es/product/product_left_thumbnail",
    component: _690791d7,
    name: "product-product_left_thumbnail___es"
  }, {
    path: "/es/product/product_no_sidebar",
    component: _8a716826,
    name: "product-product_no_sidebar___es"
  }, {
    path: "/es/product/product_right_sidebar",
    component: _3fa5b260,
    name: "product-product_right_sidebar___es"
  }, {
    path: "/es/product/product_right_thumbnail",
    component: _69f49ec0,
    name: "product-product_right_thumbnail___es"
  }, {
    path: "/es/product/product_sticky",
    component: _366586fc,
    name: "product-product_sticky___es"
  }, {
    path: "/es/product/product_video_thumbnail",
    component: _03b8647e,
    name: "product-product_video_thumbnail___es"
  }, {
    path: "/es/redirect/redirectPage",
    component: _2d598a3f,
    name: "redirect-redirectPage___es"
  }, {
    path: "/es/shop/shop_list_infinite",
    component: _be2a7230,
    name: "shop-shop_list_infinite___es"
  }, {
    path: "/es/shop/shop_no_sidebar",
    component: _5e674b0e,
    name: "shop-shop_no_sidebar___es"
  }, {
    path: "/es/testing/copyToClipboard",
    component: _077262ee,
    name: "testing-copyToClipboard___es"
  }, {
    path: "/es/testing/languageSwitcher",
    component: _820fc47e,
    name: "testing-languageSwitcher___es"
  }, {
    path: "/es/voxo_plus/search",
    component: _e0a8054e,
    name: "voxo_plus-search___es"
  }, {
    path: "/fr/blog/blog_details",
    component: _080223fa,
    name: "blog-blog_details___fr"
  }, {
    path: "/fr/blog/blog_infinite_scroll",
    component: _56441fa6,
    name: "blog-blog_infinite_scroll___fr"
  }, {
    path: "/fr/blog/blog_left_sidebar",
    component: _610100ea,
    name: "blog-blog_left_sidebar___fr"
  }, {
    path: "/fr/blog/blog_listing",
    component: _a4c26efe,
    name: "blog-blog_listing___fr"
  }, {
    path: "/fr/blog/blog_masonary",
    component: _1f9dbb45,
    name: "blog-blog_masonary___fr"
  }, {
    path: "/fr/blog/blog_no_sidebar",
    component: _09fefe5e,
    name: "blog-blog_no_sidebar___fr"
  }, {
    path: "/fr/blog/blog_right_sidebar",
    component: _bd41d128,
    name: "blog-blog_right_sidebar___fr"
  }, {
    path: "/fr/home/electronic_demo",
    component: _6591ecfa,
    name: "home-electronic_demo___fr"
  }, {
    path: "/fr/home/fashion_demo",
    component: _1e615e3e,
    name: "home-fashion_demo___fr"
  }, {
    path: "/fr/home/flowers_demo",
    component: _79f8f6be,
    name: "home-flowers_demo___fr"
  }, {
    path: "/fr/home/furniture_demo",
    component: _77ee6a4a,
    name: "home-furniture_demo___fr"
  }, {
    path: "/fr/home/shoes_demo",
    component: _5a027251,
    name: "home-shoes_demo___fr"
  }, {
    path: "/fr/home/vegetables_demo",
    component: _c149b10e,
    name: "home-vegetables_demo___fr"
  }, {
    path: "/fr/loader/loader",
    component: _143eef04,
    name: "loader-loader___fr"
  }, {
    path: "/fr/page/404",
    component: _3dc87a61,
    name: "page-404___fr"
  }, {
    path: "/fr/page/cart",
    component: _1b359547,
    name: "page-cart___fr"
  }, {
    path: "/fr/page/checkout",
    component: _3c404a16,
    name: "page-checkout___fr"
  }, {
    path: "/fr/page/comming_soon",
    component: _a8d140aa,
    name: "page-comming_soon___fr"
  }, {
    path: "/fr/page/compare",
    component: _f2bf6c98,
    name: "page-compare___fr"
  }, {
    path: "/fr/page/contact_us",
    component: _1802df04,
    name: "page-contact_us___fr"
  }, {
    path: "/fr/page/faq",
    component: _78f8a263,
    name: "page-faq___fr"
  }, {
    path: "/fr/page/forgot_password",
    component: _241ea860,
    name: "page-forgot_password___fr"
  }, {
    path: "/fr/page/login",
    component: _4a1e805c,
    name: "page-login___fr"
  }, {
    path: "/fr/page/login_firebase",
    component: _5403e704,
    name: "page-login_firebase___fr"
  }, {
    path: "/fr/page/order_success",
    component: _4f966127,
    name: "page-order_success___fr"
  }, {
    path: "/fr/page/order_tracking",
    component: _32820c9a,
    name: "page-order_tracking___fr"
  }, {
    path: "/fr/page/register",
    component: _14936fca,
    name: "page-register___fr"
  }, {
    path: "/fr/page/review",
    component: _177ca1e3,
    name: "page-review___fr"
  }, {
    path: "/fr/page/search",
    component: _acf7bcda,
    name: "page-search___fr"
  }, {
    path: "/fr/page/user_dashboard",
    component: _fdb887ca,
    name: "page-user_dashboard___fr"
  }, {
    path: "/fr/page/wishlist",
    component: _68be95ec,
    name: "page-wishlist___fr"
  }, {
    path: "/fr/product/product_4_images",
    component: _981065f0,
    name: "product-product_4_images___fr"
  }, {
    path: "/fr/product/product_left_thumbnail",
    component: _690791d7,
    name: "product-product_left_thumbnail___fr"
  }, {
    path: "/fr/product/product_no_sidebar",
    component: _8a716826,
    name: "product-product_no_sidebar___fr"
  }, {
    path: "/fr/product/product_right_sidebar",
    component: _3fa5b260,
    name: "product-product_right_sidebar___fr"
  }, {
    path: "/fr/product/product_right_thumbnail",
    component: _69f49ec0,
    name: "product-product_right_thumbnail___fr"
  }, {
    path: "/fr/product/product_sticky",
    component: _366586fc,
    name: "product-product_sticky___fr"
  }, {
    path: "/fr/product/product_video_thumbnail",
    component: _03b8647e,
    name: "product-product_video_thumbnail___fr"
  }, {
    path: "/fr/redirect/redirectPage",
    component: _2d598a3f,
    name: "redirect-redirectPage___fr"
  }, {
    path: "/fr/shop/shop_list_infinite",
    component: _be2a7230,
    name: "shop-shop_list_infinite___fr"
  }, {
    path: "/fr/shop/shop_no_sidebar",
    component: _5e674b0e,
    name: "shop-shop_no_sidebar___fr"
  }, {
    path: "/fr/testing/copyToClipboard",
    component: _077262ee,
    name: "testing-copyToClipboard___fr"
  }, {
    path: "/fr/testing/languageSwitcher",
    component: _820fc47e,
    name: "testing-languageSwitcher___fr"
  }, {
    path: "/fr/voxo_plus/search",
    component: _e0a8054e,
    name: "voxo_plus-search___fr"
  }, {
    path: "/voxo_plus/cookie_bar/bottom",
    component: _3ceeb43e,
    name: "voxo_plus-cookie_bar-bottom___en"
  }, {
    path: "/voxo_plus/cookie_bar/bottom_left",
    component: _77f6c970,
    name: "voxo_plus-cookie_bar-bottom_left___en"
  }, {
    path: "/voxo_plus/cookie_bar/bottom_right",
    component: _1476dc01,
    name: "voxo_plus-cookie_bar-bottom_right___en"
  }, {
    path: "/voxo_plus/element_page/element_button",
    component: _88f77730,
    name: "voxo_plus-element_page-element_button___en"
  }, {
    path: "/voxo_plus/element_page/element_categories",
    component: _635cdf52,
    name: "voxo_plus-element_page-element_categories___en"
  }, {
    path: "/voxo_plus/element_page/element_collection_banner",
    component: _0b5edcb2,
    name: "voxo_plus-element_page-element_collection_banner___en"
  }, {
    path: "/voxo_plus/element_page/element_deal_banner",
    component: _537f9899,
    name: "voxo_plus-element_page-element_deal_banner___en"
  }, {
    path: "/voxo_plus/element_page/element_header",
    component: _1c03da43,
    name: "voxo_plus-element_page-element_header___en"
  }, {
    path: "/voxo_plus/element_page/element_home",
    component: _5346c315,
    name: "voxo_plus-element_page-element_home___en"
  }, {
    path: "/voxo_plus/element_page/element_product",
    component: _70cadfae,
    name: "voxo_plus-element_page-element_product___en"
  }, {
    path: "/voxo_plus/portfolio_page/portfolio_2_grid",
    component: _2b4d795e,
    name: "voxo_plus-portfolio_page-portfolio_2_grid___en"
  }, {
    path: "/voxo_plus/portfolio_page/portfolio_2_masonary",
    component: _c68e8296,
    name: "voxo_plus-portfolio_page-portfolio_2_masonary___en"
  }, {
    path: "/voxo_plus/portfolio_page/portfolio_3_grid",
    component: _42ba9720,
    name: "voxo_plus-portfolio_page-portfolio_3_grid___en"
  }, {
    path: "/voxo_plus/portfolio_page/portfolio_3_masonary",
    component: _7e968854,
    name: "voxo_plus-portfolio_page-portfolio_3_masonary___en"
  }, {
    path: "/voxo_plus/portfolio_page/portfolio_4_grid",
    component: _5a27b4e2,
    name: "voxo_plus-portfolio_page-portfolio_4_grid___en"
  }, {
    path: "/voxo_plus/portfolio_page/portfolio_4_masonary",
    component: _607451f3,
    name: "voxo_plus-portfolio_page-portfolio_4_masonary___en"
  }, {
    path: "/voxo_plus/portfolio_page/portfolio_no_space",
    component: _58d36126,
    name: "voxo_plus-portfolio_page-portfolio_no_space___en"
  }, {
    path: "/es/voxo_plus/cookie_bar/bottom",
    component: _3ceeb43e,
    name: "voxo_plus-cookie_bar-bottom___es"
  }, {
    path: "/es/voxo_plus/cookie_bar/bottom_left",
    component: _77f6c970,
    name: "voxo_plus-cookie_bar-bottom_left___es"
  }, {
    path: "/es/voxo_plus/cookie_bar/bottom_right",
    component: _1476dc01,
    name: "voxo_plus-cookie_bar-bottom_right___es"
  }, {
    path: "/es/voxo_plus/element_page/element_button",
    component: _88f77730,
    name: "voxo_plus-element_page-element_button___es"
  }, {
    path: "/es/voxo_plus/element_page/element_categories",
    component: _635cdf52,
    name: "voxo_plus-element_page-element_categories___es"
  }, {
    path: "/es/voxo_plus/element_page/element_collection_banner",
    component: _0b5edcb2,
    name: "voxo_plus-element_page-element_collection_banner___es"
  }, {
    path: "/es/voxo_plus/element_page/element_deal_banner",
    component: _537f9899,
    name: "voxo_plus-element_page-element_deal_banner___es"
  }, {
    path: "/es/voxo_plus/element_page/element_header",
    component: _1c03da43,
    name: "voxo_plus-element_page-element_header___es"
  }, {
    path: "/es/voxo_plus/element_page/element_home",
    component: _5346c315,
    name: "voxo_plus-element_page-element_home___es"
  }, {
    path: "/es/voxo_plus/element_page/element_product",
    component: _70cadfae,
    name: "voxo_plus-element_page-element_product___es"
  }, {
    path: "/es/voxo_plus/portfolio_page/portfolio_2_grid",
    component: _2b4d795e,
    name: "voxo_plus-portfolio_page-portfolio_2_grid___es"
  }, {
    path: "/es/voxo_plus/portfolio_page/portfolio_2_masonary",
    component: _c68e8296,
    name: "voxo_plus-portfolio_page-portfolio_2_masonary___es"
  }, {
    path: "/es/voxo_plus/portfolio_page/portfolio_3_grid",
    component: _42ba9720,
    name: "voxo_plus-portfolio_page-portfolio_3_grid___es"
  }, {
    path: "/es/voxo_plus/portfolio_page/portfolio_3_masonary",
    component: _7e968854,
    name: "voxo_plus-portfolio_page-portfolio_3_masonary___es"
  }, {
    path: "/es/voxo_plus/portfolio_page/portfolio_4_grid",
    component: _5a27b4e2,
    name: "voxo_plus-portfolio_page-portfolio_4_grid___es"
  }, {
    path: "/es/voxo_plus/portfolio_page/portfolio_4_masonary",
    component: _607451f3,
    name: "voxo_plus-portfolio_page-portfolio_4_masonary___es"
  }, {
    path: "/es/voxo_plus/portfolio_page/portfolio_no_space",
    component: _58d36126,
    name: "voxo_plus-portfolio_page-portfolio_no_space___es"
  }, {
    path: "/fr/voxo_plus/cookie_bar/bottom",
    component: _3ceeb43e,
    name: "voxo_plus-cookie_bar-bottom___fr"
  }, {
    path: "/fr/voxo_plus/cookie_bar/bottom_left",
    component: _77f6c970,
    name: "voxo_plus-cookie_bar-bottom_left___fr"
  }, {
    path: "/fr/voxo_plus/cookie_bar/bottom_right",
    component: _1476dc01,
    name: "voxo_plus-cookie_bar-bottom_right___fr"
  }, {
    path: "/fr/voxo_plus/element_page/element_button",
    component: _88f77730,
    name: "voxo_plus-element_page-element_button___fr"
  }, {
    path: "/fr/voxo_plus/element_page/element_categories",
    component: _635cdf52,
    name: "voxo_plus-element_page-element_categories___fr"
  }, {
    path: "/fr/voxo_plus/element_page/element_collection_banner",
    component: _0b5edcb2,
    name: "voxo_plus-element_page-element_collection_banner___fr"
  }, {
    path: "/fr/voxo_plus/element_page/element_deal_banner",
    component: _537f9899,
    name: "voxo_plus-element_page-element_deal_banner___fr"
  }, {
    path: "/fr/voxo_plus/element_page/element_header",
    component: _1c03da43,
    name: "voxo_plus-element_page-element_header___fr"
  }, {
    path: "/fr/voxo_plus/element_page/element_home",
    component: _5346c315,
    name: "voxo_plus-element_page-element_home___fr"
  }, {
    path: "/fr/voxo_plus/element_page/element_product",
    component: _70cadfae,
    name: "voxo_plus-element_page-element_product___fr"
  }, {
    path: "/fr/voxo_plus/portfolio_page/portfolio_2_grid",
    component: _2b4d795e,
    name: "voxo_plus-portfolio_page-portfolio_2_grid___fr"
  }, {
    path: "/fr/voxo_plus/portfolio_page/portfolio_2_masonary",
    component: _c68e8296,
    name: "voxo_plus-portfolio_page-portfolio_2_masonary___fr"
  }, {
    path: "/fr/voxo_plus/portfolio_page/portfolio_3_grid",
    component: _42ba9720,
    name: "voxo_plus-portfolio_page-portfolio_3_grid___fr"
  }, {
    path: "/fr/voxo_plus/portfolio_page/portfolio_3_masonary",
    component: _7e968854,
    name: "voxo_plus-portfolio_page-portfolio_3_masonary___fr"
  }, {
    path: "/fr/voxo_plus/portfolio_page/portfolio_4_grid",
    component: _5a27b4e2,
    name: "voxo_plus-portfolio_page-portfolio_4_grid___fr"
  }, {
    path: "/fr/voxo_plus/portfolio_page/portfolio_4_masonary",
    component: _607451f3,
    name: "voxo_plus-portfolio_page-portfolio_4_masonary___fr"
  }, {
    path: "/fr/voxo_plus/portfolio_page/portfolio_no_space",
    component: _58d36126,
    name: "voxo_plus-portfolio_page-portfolio_no_space___fr"
  }, {
    path: "/es/product/product_360_view/:id?",
    component: _7bebf35c,
    name: "product-product_360_view-id___es"
  }, {
    path: "/es/product/product_bundle/:id?",
    component: _45d8d4f1,
    name: "product-product_bundle-id___es"
  }, {
    path: "/es/product/product_left_sidebar/:id?",
    component: _f9969862,
    name: "product-product_left_sidebar-id___es"
  }, {
    path: "/es/shop/shop_canvas_filter/:id?",
    component: _faaf0234,
    name: "shop-shop_canvas_filter-id___es"
  }, {
    path: "/es/shop/shop_category_filter/:id?",
    component: _1dd769cc,
    name: "shop-shop_category_filter-id___es"
  }, {
    path: "/es/shop/shop_filter_hide/:id?",
    component: _32a0617c,
    name: "shop-shop_filter_hide-id___es"
  }, {
    path: "/es/shop/shop_left_sidebar/:id?",
    component: _cd8c7b4a,
    name: "shop-shop_left_sidebar-id___es"
  }, {
    path: "/es/shop/shop_list/:id?",
    component: _4bb07321,
    name: "shop-shop_list-id___es"
  }, {
    path: "/es/shop/shop_right_sidebar/:id?",
    component: _5e13602c,
    name: "shop-shop_right_sidebar-id___es"
  }, {
    path: "/es/shop/shop_top_filter/:id?",
    component: _708cb646,
    name: "shop-shop_top_filter-id___es"
  }, {
    path: "/es/shop/shop_with_category/:id?",
    component: _ce420464,
    name: "shop-shop_with_category-id___es"
  }, {
    path: "/fr/product/product_360_view/:id?",
    component: _7bebf35c,
    name: "product-product_360_view-id___fr"
  }, {
    path: "/fr/product/product_bundle/:id?",
    component: _45d8d4f1,
    name: "product-product_bundle-id___fr"
  }, {
    path: "/fr/product/product_left_sidebar/:id?",
    component: _f9969862,
    name: "product-product_left_sidebar-id___fr"
  }, {
    path: "/fr/shop/shop_canvas_filter/:id?",
    component: _faaf0234,
    name: "shop-shop_canvas_filter-id___fr"
  }, {
    path: "/fr/shop/shop_category_filter/:id?",
    component: _1dd769cc,
    name: "shop-shop_category_filter-id___fr"
  }, {
    path: "/fr/shop/shop_filter_hide/:id?",
    component: _32a0617c,
    name: "shop-shop_filter_hide-id___fr"
  }, {
    path: "/fr/shop/shop_left_sidebar/:id?",
    component: _cd8c7b4a,
    name: "shop-shop_left_sidebar-id___fr"
  }, {
    path: "/fr/shop/shop_list/:id?",
    component: _4bb07321,
    name: "shop-shop_list-id___fr"
  }, {
    path: "/fr/shop/shop_right_sidebar/:id?",
    component: _5e13602c,
    name: "shop-shop_right_sidebar-id___fr"
  }, {
    path: "/fr/shop/shop_top_filter/:id?",
    component: _708cb646,
    name: "shop-shop_top_filter-id___fr"
  }, {
    path: "/fr/shop/shop_with_category/:id?",
    component: _ce420464,
    name: "shop-shop_with_category-id___fr"
  }, {
    path: "/product/product_360_view/:id?",
    component: _7bebf35c,
    name: "product-product_360_view-id___en"
  }, {
    path: "/product/product_bundle/:id?",
    component: _45d8d4f1,
    name: "product-product_bundle-id___en"
  }, {
    path: "/product/product_left_sidebar/:id?",
    component: _f9969862,
    name: "product-product_left_sidebar-id___en"
  }, {
    path: "/shop/shop_canvas_filter/:id?",
    component: _faaf0234,
    name: "shop-shop_canvas_filter-id___en"
  }, {
    path: "/shop/shop_category_filter/:id?",
    component: _1dd769cc,
    name: "shop-shop_category_filter-id___en"
  }, {
    path: "/shop/shop_filter_hide/:id?",
    component: _32a0617c,
    name: "shop-shop_filter_hide-id___en"
  }, {
    path: "/shop/shop_left_sidebar/:id?",
    component: _cd8c7b4a,
    name: "shop-shop_left_sidebar-id___en"
  }, {
    path: "/shop/shop_list/:id?",
    component: _4bb07321,
    name: "shop-shop_list-id___en"
  }, {
    path: "/shop/shop_right_sidebar/:id?",
    component: _5e13602c,
    name: "shop-shop_right_sidebar-id___en"
  }, {
    path: "/shop/shop_top_filter/:id?",
    component: _708cb646,
    name: "shop-shop_top_filter-id___en"
  }, {
    path: "/shop/shop_with_category/:id?",
    component: _ce420464,
    name: "shop-shop_with_category-id___en"
  }, {
    path: "/",
    component: _3eab4a2a,
    name: "index___en"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
