<!-- 加载 LayoutComponents -->
<template>
  <el-watermark id="watermark" :font="font" :content="watermark ? text :'' ">
    <component :is="LayoutComponents[layout]"/>
  </el-watermark>
</template>

<script setup lang="ts">
import {computed, reactive, watch, type Component, ref} from "vue";
import BasicLayout from "./base/BasicLayout.vue";
import {useGlobalStore} from "@/stores/modules/global";
import {LayoutType} from "@/stores/interfaces";
import {useUserStore} from "@/stores/modules/user";

const LayoutComponents: Record<LayoutType, Component> = {
  basic: BasicLayout,
};


const globalStore = useGlobalStore();
const userStore = useUserStore();

const isDark = computed(() => globalStore.isDark);
const layout = computed(() => globalStore.layout);
const watermark = computed(() => globalStore.watermark);
const text = computed(() => userStore.userInfo.name);

const font = reactive({color: "rgba(0, 0, 0, .15)"});
watch(isDark, () => (font.color = isDark.value ? "rgba(255, 255, 255, .15)" : "rgba(0, 0, 0, .15)"), {
  immediate: true
});
</script>

<style scoped lang="scss">
.layout {
  min-width: 600px;
}
</style>
