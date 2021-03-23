<template >
  <v-container fluid class="fill-hegiht">
    <v-row justify="center" align="center" no-gutters>
      <v-col class="mt-5" cols="12" sm="8" md="12" lg="12">
        <v-row no-gutters>
          <v-col
            offset-lg="1"
            offset-xl="2"
            cols="12"
            sm="12"
            md="10"
            offset-md="1"
            lg="5"
            xl="4"
          >
            <action-buttons-area
              @sortProducts="sortProducts"
              @searchInput="searchText = $event"
            />
          </v-col>
        </v-row>
        <v-row justify="center" v-if="filterdProducts.length">
          <v-col class="mx-2" cols="12" sm="12" md="5" lg="5" xl="4">
            <products
              @selectedProduct="product = $event"
              :products="filterdProducts"
            />
          </v-col>
          <v-col class="mx-2" cols="12" sm="12" md="5" lg="5" xl="4">
            <selected-product
              @saveProductData="saveProductData"
              :selected-product="product"
            />
          </v-col>
          <v-col cols="11" xl="6" lg="8" md="9" sm="10">
            <pagination />
          </v-col>
        </v-row>
        <v-col class="mt-5" cols="12" v-else>
          <v-alert
            border="right"
            colored-border
            type="info"
            height="100"
            elevation="2"
          >
            No data found
          </v-alert>
        </v-col>
      </v-col>
    </v-row>

    <alert-modal @close="alertData.isVisible = false" :alertData="alertData" />
  </v-container>
</template>

<script>
import ActionButtonsArea from "./components/ActionButtonsArea";
import Products from "./components/Products";
import SelectedProduct from "./components/SelectedProduct";
import AlertModal from "../components/AlertModal";
import Pagination from "./components/Pagination";
import { data } from "../utils/data";

export default {
  name: "HomePage",
  components: {
    ActionButtonsArea,
    Products,
    SelectedProduct,
    AlertModal,
    Pagination,
  },
  data() {
    return {
      products: [],
      searchText: "",
      product: {},
      alertData: {},
    };
  },
  methods: {
    setAlertModalData(alertData) {
      this.alertData = alertData;
      this.alertData.isVisible = true;
    },
    saveProductData(product) {
      try {
        const newProductsArray = this.products.map((el) =>
          el.id === product.id ? { ...product } : el
        );
        this.products = newProductsArray;
        this.setAlertModalData({
          type: "success",
          title: "Success",
          text: `Thank you for update ${product.name}`,
        });
      } catch (e) {
        console.error(e);
        this.setAlertModalData({
          type: "error",
          title: "Error Happen",
          text: `Error happen when update ${product.name}`,
        });
      }
    },
    sortProducts(key) {
      switch (key) {
        case "price":
          this.products = this.products.sort((b, a) => a.price - b.price);
          break;
        case "name":
          this.products = this.products.sort((b, a) =>
            a.name.localeCompare(b.name)
          );
          break;
      }
    },
  },
  computed: {
    filterdProducts() {
      if (!this.searchText) return this.products;
      // filter data by name or description
      return this.products.filter(
        (el) =>
          el.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
          el.description.includes(this.searchText.toLowerCase())
      );
    },
  },
  created() {
    this.products = data.map((product, index) => ({ ...product, index })); // add index to data array
    this.product = this.products[0]; // set the first product as selected
  },
};
</script>