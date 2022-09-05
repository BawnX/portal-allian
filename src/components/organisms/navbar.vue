<template>
  <div
    class="mx-auto flex flex-wrap py-2.5 px-8 flex-col md:flex-row items-center font-medium"
  >
    <link-component :redirect="locale">
      <logo-component />
    </link-component>

    <navlink-component :links="links" />

    <button-component
      :is-rounded="true"
      :type="'transparent'"
      @click="changeModeTheme"
    >
      <sun-icon v-if="!isDarkMode" class="hover:text-gray-600" />
      <moon-icon v-if="isDarkMode" class="hover:text-gray-400" />
    </button-component>

    <button-component :is-rounded="true">
      {{ t("portal.redirect") }}
    </button-component>

    <button-component
      :is-rounded="true"
      :type="'transparent'"
      @click="setLocale('es')"
    >
      ES
    </button-component>
    |
    <button-component
      :is-rounded="true"
      :type="'transparent'"
      @click="setLocale('en')"
    >
      EN
    </button-component>
  </div>
</template>

<script lang="ts" setup>
import LogoComponent from "@/components/molecules/logo.vue";
import LinkComponent from "@/components/atoms/link.vue";
import ButtonComponent from "@/components/atoms/button.vue";
import NavlinkComponent from "@/components/molecules/navLink.vue";
import SunIcon from "@/assets/svg/sun.vue";
import MoonIcon from "@/assets/svg/moon.vue";
import { defineProps, PropType } from "vue";
import { useI18n } from "vue-i18n";

const { availableLocales, locale, t } = useI18n<string[]>();

defineProps({
  changeModeTheme: {
    type: Function,
  },
  isDarkMode: {
    type: Boolean,
    default: false,
  },
  links: {
    type: Array as PropType<
      Array<{
        text: string;
        redirect: string;
      }>
    >,
  },
});

const setLocale = (language: string) => {
  locale.value = availableLocales.find((el) => el === language) || "en-US";
};
</script>
