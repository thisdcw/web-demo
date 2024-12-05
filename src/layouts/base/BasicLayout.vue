<script setup lang="ts">
import {useGlobalStore} from "@/stores/modules/global";
import {computed} from "vue";
import {Expand, Fold} from "@element-plus/icons-vue";
import {useAuthStore} from "@/stores/modules/auth";
import {useRoute} from "vue-router";
import SubMenu from "@/layouts/components/SubMenu.vue";
import Main from "@/layouts/components/Main.vue";
import Footer from "@/layouts/components/Footer.vue";
import ToolBarRight from "@/layouts/components/ToolBarRight.vue";


const globalStore = useGlobalStore();
const authStore = useAuthStore();
const route = useRoute();

const menuList = computed(() => authStore.showMenuListGet);
const activeMenu = computed(() => (route.meta.activeMenu ? route.meta.activeMenu : route.path) as string);
const isCollapse = computed(() => globalStore.isCollapse);
const changeCollapse = () => globalStore.setGlobalState("isCollapse", !globalStore.isCollapse);
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <div class="header-lf mask-image">
          <div class="logo flx-center">
            <img class="logo-img" src="@/assets/images/logo.jpeg" alt="logo"/>
            <span class="logo-text">姬霓太美</span>
            <el-icon @click="changeCollapse">
              <Fold v-show="!isCollapse"/>
              <Expand v-show="isCollapse"/>
            </el-icon>
          </div>
        </div>
        <div>
          <ToolBarRight/>
        </div>
      </el-header>
      <el-container class="classic-content">
        <el-aside>
          <div class="aside-box" :style="{ width: isCollapse ? '65px' : '210px' }">
            <el-scrollbar>
              <el-menu
                  :router="false"
                  :collapse-transition="false"
                  :default-active="activeMenu"
                  :unique-opened="true"
                  :collapse="isCollapse"
              >
                <SubMenu :menu-list="menuList"/>
              </el-menu>
            </el-scrollbar>
          </div>
        </el-aside>
        <el-container class="classic-main">
          <Main/>
          <el-footer>
            <Footer/>
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped lang="scss">
@use "index.scss";
</style>
