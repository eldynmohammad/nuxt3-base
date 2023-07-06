<script lang="ts" setup>
definePageMeta({
  layout: "centered",
});

interface Payload {
  email: string;
}
const email = ref("");

const handleForgotPassword = (payload: Payload) => {
  console.log(payload);
};
</script>

<template>
  <section>
    <div class="container mx-auto">
      <div class="-mx-4 flex flex-wrap">
        <div class="w-full px-4">
          <div
            class="relative mx-auto max-w-xl overflow-hidden rounded-lg bg-white py-16 px-10 sm:px-12 md:px-[60px]"
          >
            <div class="mb-10 text-center md:mb-16">Laraveller</div>
            <!-- <form @submit.prevent="authStore.handleRegister(form)"> -->
            <form @submit.prevent="handleForgotPassword()">
              <div class="mb-6">
                <label class="font-semibold text-sm text-gray-500">Your email</label>
                <input
                  type="email"
                  placeholder="Email"
                  v-model="email"
                  class="mt-1 border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:ring-2 focus:ring-indigo-500 ease-in duration-200"
                />
                <!-- <div v-if="authStore.errorBag?.email" class="flex">
                  <span class="text-red-400 text-sm m-2 p-2">
                    {{ authStore.errors.email[0] }}
                  </span>
                </div> -->
              </div>
              <div class="mb-10">
                <span class="block text-sm text-gray-400 mb-2">
                  We will send you an email that will allow you to reset your password
                </span>
                <button
                  type="submit"
                  class="w-full flex gap-2 justify-center items-center px-4 py-3 bg-indigo-500 hover:bg-indigo-700 rounded-md text-white disabled:opacity-30"
                >
                  <!-- <div
                    v-if="authStore.isProcessing"
                    class="w-5 h-5 rounded-full border-4 border-white/30 border-t-white animate-spin"
                  ></div> -->
                  <span>Reset Password</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
