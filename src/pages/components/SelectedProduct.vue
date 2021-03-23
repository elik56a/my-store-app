<template>
  <v-row
    no-gutters
    class="borderd-item fill-height elevation-3"
    style="position: relative"
    align="center"
  >
    <h3
      :data-product-title="`Product ${product.index + 1} Details`"
      class="custom-title"
    ></h3>
    <v-col cols="12" class="px-5">
      <v-form v-model="isFormValid">
        <v-row> </v-row>
        <v-row class="my-3">
          <v-col cols="12" sm="6" md="4">
            <v-img :src="product.urlImage" />
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="12">
            <v-text-field
              v-model="product.name"
              :rules="[rules.required(product.name)]"
              label="Name"
              outlined
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="12">
            <v-textarea
              v-model="product.description"
              :rules="[rules.required(product.description)]"
              label="Description"
              outlined
            ></v-textarea>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="12" sm="3">
            <v-text-field
              :rules="[
                rules.required(product.price),
                rules.minPriceValue(product.price),
              ]"
              type="number"
              v-model="product.price"
              min="0"
              label="Price"
              outlined
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="end" no-gutters>
          <v-col cols="12" sm="3" class="mb-3">
            <v-btn
              :disabled="!isFormValid"
              :loading="isLoading"
              @click="saveProductData"
              block
              color="success"
            >
              SAVE
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
import { required, minPriceValue } from "../../utils/formValidation";
export default {
  props: ["selectedProduct"],
  data() {
    return {
      product: {},
      isLoading: false,
      isFormValid: false,
      rules: {
        required,
        minPriceValue,
      },
    };
  },
  methods: {
    saveProductData() {
      if (!this.isFormValid)      // if form is not valid
        return;
      // case valid - emit data to parent componnet to save
      this.isLoading = true;
      setTimeout(() => {
        this.$emit("saveProductData", this.product);
        this.isLoading = false;
      }, 1500);
    },
  },

  watch: {
    selectedProduct(newVal) {
      // deep clone of the props, because object is a reference - to not change the props data
      this.product = JSON.parse(JSON.stringify(newVal));
    },
  },
  created() {
    this.product = JSON.parse(JSON.stringify(this.selectedProduct));
  },
};
</script>

<style>
.custom-title:before {
  content: attr(data-product-title);
  position: absolute;
  top: -12px;
  left: 3%;
  padding: 0 2px;
  background-color: #fff;
  font-family: Arial;
  font-size: 16px;
}
</style>