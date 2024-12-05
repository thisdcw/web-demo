<template>
  <template v-for="subItem in menuList" :key="subItem.path">
    <el-sub-menu v-if="subItem.children?.length" :index="subItem.path">
      <template #title>
        <el-icon v-if="subItem.meta.icon">
          <component :is="subItem.meta.icon"></component>
        </el-icon>
        <span class="sle">{{ subItem.meta.title }}</span>
      </template>
      <SubMenu :menu-list="subItem.children" />
    </el-sub-menu>
    <el-menu-item v-else :index="subItem.path" @click="handleClickMenu(subItem)">
      <el-icon v-if="subItem.meta.icon">
        <component :is="subItem.meta.icon"></component>
      </el-icon>
      <template #title>
        <span class="sle">{{ subItem.meta.title }}</span>
      </template>
    </el-menu-item>
  </template>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

defineProps<{ menuList: Menu.MenuOptions[] }>();

const router = useRouter();
const handleClickMenu = (subItem: Menu.MenuOptions) => {
  router.push(subItem.path);
};
</script>

<style scoped lang="scss">
.el-sub-menu .el-sub-menu__title:hover {
  color: var(--el-menu-hover-text-color) !important;
  background-color: transparent !important;
}

.el-menu--collapse {
  .is-active {
    .el-sub-menu__title {
      color: #ffffff !important;
      background-color: #30BBF0 !important;
    }
  }
}
.el-menu-item.is-active {
  background-color: #30BBF0 !important; // 激活背景色
  color: #fff !important; // 激活字体颜色

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px; // 调整为你想要的宽度
    background-color: #1389b6; // 设置长条的颜色
    border-radius: 2px; // 可选，为长条加上圆角
  }
}

.vertical,
.classic,
.transverse {
  .el-menu-item {
    &.is-active {
      &::before {
        left: 0;
      }
    }
  }
}

.columns {
  .el-menu-item {
    &.is-active {
      &::before {
        right: 0;
      }
    }
  }
}
</style>
