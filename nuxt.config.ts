// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ["@nuxtjs/tailwindcss", "@formkit/nuxt"],
    runtimeConfig: {
        public: {
            appUrl: "http://localhost",
        },
    },
    routeRules: {
        "/profiles/*": { swr: true },
        "/*": { ssr: false },
    },
});
