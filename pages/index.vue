<template>
  <main class="flex flex-col justify-center sm:pt-24">
    <div class="flex h-screen mt-1/3 sm:(items-center mt-0) px-4 md:px-12">
      <div class="flex flex-col space-y-[14%] sm:max-w-5xl mx-auto">
        <h1 class="font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-center">
          {{ t("Home.title") }}
        </h1>
        <div class="flex justify-center items-center">
          <a 
          aria-label="link to external website discovercars"
          href="https://www.discovercars.com/?a_aid=spainCars" rel="noopener noreferrer" target="_blank"
           class=" p-2 text-lg rounded bg-white border-black no-underline text-gray-800 font-bold hover:bg-black hover:text-white hover:ring-1 transition ease-in-out delay-150">
            BOOK A CAR NOW 
          </a>
        </div>
        <p
          class="dark:(bg-dark-900 border-dark-600 text-gray-300 opacity-100) opacity-70 bg-light-500 border-solid border-1 rounded-sm p-4 border-gray-200">
          {{ t("Home.desc") }}
        </p>
        <div class="mx-auto hidden xl:(flex)">
          <HomeMouseIcon class="animate-bounce" role="presentation" :aria-label="t('Home.a11y.mouseicon')" />
        </div>
      </div>
    </div>
   
    <!-- <LazyHomeStatsCard class="min-h-screen" />
    <LazyHomeSocialsCard /> -->
  </main>
   
  <div class="mx-auto space-y-10 sm:space-y-20 dark:text-white text-black sm:mb-10">
    <div class="sm:(mx-8 mt-15) xl:ml-30 mx-4 mt-5 flex flex-col space-y-2 lg:mx-10">
      <h1 class="text-3xl font-semibold sm:text-5xl">{{ t("Blog.title") }}</h1>
      <p class="text-md sm:(text-xl) break-words font-thin dark:text-gray-300">
        {{ t("Blog.description") }} 
      </p>
    </div>
    
    <section
      class="md:(grid-cols-2 mx-6) lg:(grid-cols-3) sm:(py-15 px-10) dark:bg-black grid grid-cols-1 gap-10 rounded-sm p-4">
      <div v-if="articles" v-for="(article, $index) in articles" :key="`fe-${$index}`" class="abc">
        <NuxtLink class="group flex flex-col no-underline" :to="article._path">
          <div class="h-auto w-auto">
            <NuxtImg crossorigin="anonymous" v-if="article.img" :alt="article.alt" :title="article.alt" loading="lazy"
            height="369" width="577"
            class="rounded-sm object-cover h-full w-full transform md:(transition duration-500 ease-in-out) md:group-hover:scale-102"
            :src="article.img" />
          </div>
          
          <div class="dark:(bg-black text-white) h-auto rounded-b-md bg-white dark:text-white text-black">
            <div class="space-x-2">
              <Date v-if="article.date" :date="article.date"
                class="dark:(bg-dark-900 text-white border-dark-700 opacity-100) opacity-80 bg-light-500 px-4 py-1.5 b-1 b-solid rounded-sm b-gray-300 text-xs" />
              <p v-if="article.tag"
                class="dark:(bg-dark-900 text-white border-dark-700 opacity-100) opacity-80 bg-light-500 b-gray-300 px-4 py-1.5 border-1 b-solid rounded-sm text-xs inline-block">
                {{ article.tag }}
              </p>
            </div>
            <h2 class="text-xl font-semibold decoration-2 group-hover:(underline underline-offset-6) m0"
              v-html="article.title" />
            <p class="op80" v-html="article.description" />
          </div>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
const { t, locale } = useI18n();
const { data: articles } = await useAsyncData("articles", async () => {
  const query = locale.value !== "en" ? `${locale.value}/blog` : "/blog";
  return await queryContent(query)
    .sort({ date: -1 })
    .where({ feature: { $ne: true } })
    .find();
});
useHead({
     
      meta: [
       
        { name: 'verify-admitad', content: '2f0908f4e3' }
      ],
    });

const title = t("Home.Seo.title");
const desc = t("Home.Seo.desc");

useSeoMeta({
  title: title,
  ogTitle: title,
  description: desc,
  ogDescription: desc,
  twitterTitle: title,
  twitterDescription: desc,
  ogUrl: `https://spain-cars.com${locale.value === "en" ? "" : '/' + locale.value
    }`,
  ogImage: "https://source.unsplash.com/lyOCWxa28Zk",
});
</script>
