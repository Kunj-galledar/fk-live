<template>
  <section class="section-b-space overflow-hidden">
    <div class="container">
      <div class="row g-18">
        <div class="col-12">
          <div class="title title1 text-center">
            <h2>Element Button</h2>
          </div>
        </div>
        <themeButtons />
        <roundedButtons />
        <buttonTextSize />
        <bootstrapButtons />
        <buttonOutline />
        <buttonBlock />
        <buttonGroup />
      </div>
    </div>
  </section>
</template>
<script>
import themeButtons from "~/components/voxo_plus/element_page/element_buttons/themeButtons.vue";
import roundedButtons from "~/components/voxo_plus/element_page/element_buttons/roundedButtons.vue";
import buttonTextSize from "~/components/voxo_plus/element_page/element_buttons/buttonTextSize.vue";
import bootstrapButtons from "~/components/voxo_plus/element_page/element_buttons/bootstrapButtons.vue";
import buttonOutline from "~/components/voxo_plus/element_page/element_buttons/buttonOutline.vue";
import buttonBlock from "~/components/voxo_plus/element_page/element_buttons/buttonBlock.vue";
import buttonGroup from "~/components/voxo_plus/element_page/element_buttons/buttonGroup.vue";
export default {
  components: {
    themeButtons,
    roundedButtons,
    buttonTextSize,
    bootstrapButtons,
    buttonOutline,
    buttonBlock,
    buttonGroup,
  },
};
</script>

<style></style>
