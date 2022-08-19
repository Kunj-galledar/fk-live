<template>
  <layout5 pageName="Compare" parent="Compare">
    <section class="section-b-space">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="comparemodal-body">
              <div class="table-wrapper table-responsive ratio_asos">
                <compareTable
                  :productsToCompare="productsToCompare"
                  v-if="productsToCompare.length != 0"
                />
                <div v-else>Compare list is empty</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </layout5>
</template>
<script>
import layout5 from "~/layout/layouts/layout5.vue";
import compareTable from "~/components/page/compare/compareTable.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    layout5,
    compareTable,
  },
  computed: {
    ...mapGetters({
      productsToCompare: "compare/compareItems",
    }),
  },
};
</script>
