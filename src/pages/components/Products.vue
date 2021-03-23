<template>
  <v-row justify="space-between">
    <v-list width="100%" class="py-0">
      <v-list-item-group mandatory v-model="selected">
        <v-list-item
          :value="product"
          cols="12"
          v-for="(product, index) in products"
          :key="index"
          class="borderd-item my-3 mx-2 py-5 elevation-3"
        >
          <v-list-item-avatar>
            <v-img :src="product.thumbnailImage" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>
              <strong> {{ product.name }}</strong>
              <v-list-item-subtitle>
                {{ product.description }}
              </v-list-item-subtitle>
            </v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
            <v-btn :icon="$vuetify.breakpoint.xsOnly" color="error">
              <span class="hidden-xs-only">Delete</span>
              <v-icon right>mdi-delete</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-row>
</template>

<script>
export default {
  props: ["products"],
  data() {
    return {
      selected: {},
    };
  },
  watch: {
    selected(newVal){ // when user select a product -to update the home page with the new one
        this.$emit("selectedProduct", newVal);
      },
  },
};
</script>

<style>
.borderd-item {
  border: 1px solid rgba(0, 0, 0, 0.158);
  border-radius: 5px;
}
</style>