<script lang="ts" setup></script>

<template>
  <div class="flex flex-col min-h-screen">
    <Navbar />
    <div
      class="flex-1 flex min-h-[calc(100vh-88px)] justify-center items-center p-6 bg-stone-100"
    >
      <slot />
    </div>
  </div>
</template>

<style scoped></style>
