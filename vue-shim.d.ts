import { HookResult } from '@nuxt/schema';

declare module '#app' {
  interface RuntimeNuxtHooks {
    'form:submit': () => HookResult;
  }
}

declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}
