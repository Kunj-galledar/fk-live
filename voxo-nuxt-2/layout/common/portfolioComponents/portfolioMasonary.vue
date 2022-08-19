<template>
    <section id="portfolio" class="portfolio section-b-space">
        <CoolLightBox :items="lightBoxImages" :index="index" @close="index = null">
        </CoolLightBox>
        <div class="container">
            <div class="row gx-2" :class="rowClasses">
                <div class="col-12">
                    <div class="filters button filter-button-group">
                        <ul>
                            <li class="btn btn-submit" :class="{ active: isActive('all') }" data-filter="*">
                                <h4 @click="updateFilter('all')">All</h4>
                            </li>
                            <li class="btn btn-submit" :class="{ active: isActive('app') }" data-filter=" .app">
                                <h4 @click="updateFilter('app')">App</h4>
                            </li>
                            <li class="btn btn-submit" :class="{ active: isActive('card') }" data-filter=" .card">
                                <h4 @click="updateFilter('card')">Card</h4>
                            </li>
                            <li class="btn btn-submit" :class="{ active: isActive('web') }" data-filter=" .web">
                                <h4 @click="updateFilter('web')">Web</h4>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <no-ssr>
                <div class="row filter-gallery mt-3 content grid" :class="masonaryParentClasses" v-masonry
                    transition-duration="1s" item-selector=".item">
                    <div v-masonry-tile class="grid-item item" :class="[item.filter, masonaryItemClasses]" :key="index"
                        v-for="(item, index) in filteredImages">
                        <div class="parent-container">
                            <a href="javascript:void(0)" @click="changeIndex(item.id - 1)">
                                <img :src="getImageUrl(item.src)" class="images" :class="imageClasses" alt="" />
                                <div class="overlay-color">
                                    <div class="overlay-icon">
                                        <div>
                                            <h3>{{ item.title }}</h3>
                                            <p class="font-light">
                                                {{ item.description }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </no-ssr>
        </div>
    </section>
</template>

<script>
    import layout5 from "~/layout/layouts/layout5.vue";
    import NoSSR from "vue-no-ssr";
    import CoolLightBox from "vue-cool-lightbox";
    import "vue-cool-lightbox/dist/vue-cool-lightbox.min.css";

    export default {
        props: [
            "rowClasses",
            "masonaryParentClasses",
            "masonaryItemClasses",
            "imageClasses",
        ],
        components: {
            layout5,
            "no-ssr": NoSSR,
            CoolLightBox,
        },
        data() {
            return {
                galleryFilter: "all",
                lightBoxImages: [],
                index: null,
            };
        },
        computed: {
            filteredImages: function () {
                if (this.galleryFilter === "all") {
                    return this.images;
                } else {
                    return this.images.filter((data) => data.filter === this.galleryFilter);
                }
            },
            images() {
                let allImages = this.$store.state.information.data.filter((item) => item.type === "portfolio")[0].children;
                allImages.forEach(item => this.lightBoxImages.push(require('@/assets/images/' + item.src)))
                return allImages;
            },
        },
        mounted() {
            if (typeof this.$redrawVueMasonry === "function") {
                this.$redrawVueMasonry();
            }
        },
        methods: {
            getImageUrl(path) { return require('@/assets/images/' + path) },
            changeIndex(imageIndex) {
                this.index = imageIndex;
            },
            isActive: function (menuItem) {
                return this.galleryFilter === menuItem;
            },
            updateFilter(filterName) {
                this.galleryFilter = filterName;
            },
            getImageUrl(path) {
                return require("@/assets/images/" + path);
            },
        },
    };
</script>