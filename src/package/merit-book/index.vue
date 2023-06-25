<template>
  <basic-layout>
    <custom-nav-bar title="功德簿" left-show />
    <div>功德簿</div>
  </basic-layout>
</template>
<script lang="ts">
import { fetchDemo } from '@/service';

definePageConfig({
  navigationBarTitleText: '功德簿',
  enablePullDownRefresh: true,
  backgroundTextStyle: 'dark'
});

async function getDemo() {
  const res = await fetchDemo({ phone: 1 });
  window.console.log(res);
}
getDemo();
</script>

<style lang="scss"></style>
