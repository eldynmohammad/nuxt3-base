<script setup lang="ts">
definePageMeta({
  layout: "centered",
});

interface Payload {
  email: string;
  password: string;
}

const form = ref({
  email: "",
  password: "",
});

const handleLogin = (payload: Payload) => {};
</script>

<template>
  <div class="container mx-auto">
    <div class="-mx-4 flex flex-wrap">
      <div class="w-full px-4">
        <div
          class="relative mx-auto max-w-xl overflow-hidden rounded-lg bg-white py-16 px-10 sm:px-12 md:px-[60px]"
        >
          <div class="mb-10 text-center md:mb-16">Laraveller</div>
          <!-- <form @submit.prevent="authStore.handleLogin(form)"> -->
          <form @submit.prevent="handleLogin(form)">
            <div class="mb-6">
              <label class="font-semibold text-sm text-gray-500">Email</label>
              <input
                type="email"
                v-model="form.email"
                placeholder="john@doe.com"
                class="mt-1 border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:ring-2 focus:ring-indigo-500 ease-in duration-200"
              />
              <!-- <div v-if="authStore.errors?.email" class="flex">
                <span class="text-rose-500 text-sm mt-2">
                  {{ authStore.errors.email[0] }}
                </span>
              </div> -->
            </div>
            <div class="mb-6">
              <label class="font-semibold text-sm text-gray-500">Password</label>
              <input
                type="password"
                v-model="form.password"
                placeholder="••••••••"
                class="mt-1 border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:ring-2 focus:ring-indigo-500 ease-in duration-200"
              />
              <!-- <div v-if="authStore.errors?.password" class="flex">
                  <span class="text-rose-500 text-sm mt-2">
                    {{ authStore.errors.password[0] }}
                  </span>
                </div> -->
            </div>
            <div class="mb-10">
              <button
                type="submit"
                class="w-full flex gap-2 justify-center items-center px-4 py-3 bg-indigo-500 hover:bg-indigo-700 rounded-md text-white disabled:opacity-30"
              >
                <!-- <div
                    v-if="authStore.isProcessing"
                    class="w-5 h-5 rounded-full border-4 border-white/30 border-t-white animate-spin"
                  ></div> -->
                <span>Login</span>
              </button>
            </div>
          </form>
          <div class="w-full flex flex-col justify-center">
            <router-link
              to="/forgot-password"
              class="mb-2 inline-block text-base text-center text-[#adadad] hover:text-primary hover:underline"
            >
              Forgot Password?
            </router-link>
            <p class="text-base text-[#adadad] text-center">
              Not a member yet?
              <NuxtLink to="/register" class="text-primary hover:underline">
                Sign Up
              </NuxtLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
