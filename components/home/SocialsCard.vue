<template>
  <div
    class="flex flex-col text-center justify-center items-center my-10 sm:(flex-row space-x-5 space-y-0) space-y-4"
  >
    <h4 class="text-4xl font-bold m0">
      {{ t("SocialsCard.h1") }}
    </h4>
    <div
      class="flex flex-col sm:flex-row sm:space-x-4 space-y-0) space-y-0 op75 items-center"
    >
      <NuxtLink
        v-for="(link, index) in links"
        :key="index"
        :to="link.url"
        :aria-label="link.name"
        target="_blank"
        class="p4 sm:p2 b-transparent rounded-sm hover:(underline underline-offset-4 decoration-2) no-underline dark:text-white text-black"
      >
        {{ link.name }}
      </NuxtLink>
    </div>
  </div>
</template>
<script setup lang="ts">
const { t } = useI18n();
const links = [
  {
    url: "https://www.linkedin.com/company/spain-cars",
    name: "LinkedIn",
  },
  {
    url: "https://github.com/spain-cars",
    name: "Github",
  },
  {
    url: "https://twitter.com/spain-cars1",
    name: "Twitter",
  },
  {
    url: "https://mastodon.social/@spain-cars",
    name: "Mastodon",
  },
];
</script>
