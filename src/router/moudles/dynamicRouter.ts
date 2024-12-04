import {useAuthStore} from "@/stores/modules/auth";
import router from "@/router";
import {RouteRecordRaw} from "vue-router";

const modules = import.meta.glob("@/views/**/*.vue");

export const initDynamicRouter = async () => {

    const authStore = useAuthStore();

    try {
        await authStore.getAuthMenuList();

        // 3.添加动态路由
        authStore.flatMenuListGet.forEach(item => {
            item.children && delete item.children;
            if (item.component && typeof item.component == "string") {
                item.component = modules["/src/views" + item.component + ".vue"];
            }
            if (item.meta.isFull) {
                router.addRoute(item as unknown as RouteRecordRaw);
            } else {
                router.addRoute("layout", item as unknown as RouteRecordRaw);
            }
        });
    } catch (error) {
        // 当按钮 || 菜单请求出错时，重置Token, 重定向到登陆页
        router.replace("/");
        return Promise.reject(error);
    }
}
