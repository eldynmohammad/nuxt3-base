<script lang="ts" setup>
definePageMeta({
  layout: "centered",
});

interface Payload {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const form = ref({
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
});

const handleRegister = (payload: Payload) => {
  console.log(payload);
};
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
          <form @submit.prevent="handleRegister(form)">
            <div class="mb-6">
              <label class="font-semibold text-sm text-gray-500">Name</label>
              <input
                type="text"
                v-model="form.name"
                placeholder="John Doe"
                class="mt-1 border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:ring-2 focus:ring-indigo-500 ease-in duration-200"
              />
              <!-- <div v-if="authStore.errors?.email" class="flex">
                <span class="text-rose-500 text-sm mt-2">
                  {{ authStore.errors.email[0] }}
                </span>
              </div> -->
            </div>
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
            <div class="mb-6">
              <label class="font-semibold text-sm text-gray-500">
                Password Confirmation
              </label>
              <input
                type="password"
                v-model="form.password_confirmation"
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
          <div class="flex justify-center">
            <NuxtLink to="/login" class="text-base text-[#adadad] hover:underline">
              Sign In
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
