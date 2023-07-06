<script lang="ts" setup></script>

<template>
  <div class="flex flex-col min-h-screen">
    <Navbar />
    <div class="container mx-auto p-6 flex-1 bg-stone-100">
      <slot />
    </div>
  </div>
</template>

<style scoped></style>
