<script setup lang="ts">

import {computed} from "vue";
import {useAuthStore} from "@/stores/modules/auth";
import SubMenu from "@/layouts/modules/SubMenu.vue";
import Main from "@/layouts/modules/Main.vue";
import {useRoute} from "vue-router";

const route = useRoute();
const authStore = useAuthStore();

const menuList = computed(() => authStore.showMenuListGet);
console.log(menuList.value);
const activeMenu = computed(() => (route.meta.activeMenu ? route.meta.activeMenu : route.path) as string);
</script>

<template>
  <div class="common-layout">
    <el-container class="layout">
      <el-header>
        <div class="header-lf mask-image">
          <div class="logo flx-center">
            <img class="logo-img" src="@/assets/images/vue.svg" alt="logo"/>
            <span class="logo-text">XXX后台</span>
          </div>
        </div>
      </el-header>
      <el-container class="classic-content">
        <el-aside>
          <div class="aside-box">
            <el-scrollbar>
              <el-menu
                  :router="false"
                  :collapse-transition="false"
                  :default-active="activeMenu"
                  :unique-opened="true"
                  class="el-menu-vertical-demo"
              >
                <SubMenu :menu-list="menuList"/>
              </el-menu>
            </el-scrollbar>
          </div>
        </el-aside>
        <el-container class="classic-main">
          <el-main>
            <Main/>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped lang="scss">
@use "index.scss" as *;
</style>
