<template>
  <v-row class="pb-0 mb-0" justify="space-around">
    <v-col cols="12" sm="3">
      <v-btn block color="success">
        <v-icon left>mdi-plus</v-icon>
        Add
      </v-btn>
    </v-col>
    <v-col cols="12" sm="6">
      <v-text-field
        @input="$emit('searchInput', $event)"
        dense
        hide-details=""
        append-icon="mdi-magnify"
        outlined
        placeholder="Search Products"
        rounded
      ></v-text-field>
    </v-col>
    <v-col cols="12" sm="3">
      <v-select
        :menu-props="{ offsetY: true }"
        :items="sortOptions"
        @change="$emit('sortProducts', $event)"
        dense
        label="Sort By"
        outlined
      ></v-select>
    </v-col>
  </v-row>
</template>


<script>
export default {
  data() {
    return {
      sortOptions: ["name", "price"],
    };
  },
};
</script>

<style>
</style>