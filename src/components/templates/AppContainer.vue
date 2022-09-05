<template>
  <div
    class="bg-light-color dark:bg-dark-color body-font font-balooChettan text-primary dark:text-light-color"
    style="height: 100vh"
  >
    <header>
      <navbar-component
        :change-mode-theme="setDarkMode"
        :is-dark-mode="isDarkMode"
        :links="links"
      />
    </header>

    <slot />
  </div>
</template>

<script lang="ts" setup>
import { useTheme } from "@/services/commons/useTheme";
import NavbarComponent from "@/components/organisms/navbar.vue";
import { useI18n } from "vue-i18n";
import { computed, watch } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const { t, locale } = useI18n();
const { setDarkMode, isDarkMode } = useTheme();

const links = computed(() => {
  return [
    {
      text: t("portal.pricing"),
      redirect: `${locale.value}-${t("routes.pricing")}`,
    },
  ];
});

watch(locale, (newLocale) => {
  if (newLocale) {
    localStorage.locale = newLocale;

    router.push({ name: locale.value });
  }
});
</script>
