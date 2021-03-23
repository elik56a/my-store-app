<template>
  <v-app id="app">
    <v-app-bar app color="primary" dark>
      <v-btn href="https://linkedin.com/in/elikri" target="_blank" text>
        <span class="mr-2">My Store</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

