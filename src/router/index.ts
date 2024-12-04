import {createRouter, createWebHashHistory, createWebHistory} from "vue-router";
import NProgress from "@/plugins/nprogress";
import {errorRouter, staticRouter} from "@/router/moudles/staticRouter";
import {useAuthStore} from "@/stores/modules/auth";
import {initDynamicRouter} from "@/router/moudles/dynamicRouter";

const mode = 'hash';

const routerMode = {
    hash: () => createWebHashHistory(),
    history: () => createWebHistory()
};

const router = createRouter({
    history: routerMode[mode](),
    routes: [...staticRouter, ...errorRouter],
    strict: false,
    scrollBehavior: () => ({left: 0, top: 0})
});


/**
 * @description 路由拦截 beforeEach
 * */
router.beforeEach(async (to, from, next) => {
    const authStore = useAuthStore();
    NProgress.start();
    if (!authStore.authMenuListGet.length) {
        await initDynamicRouter();
        return next({...to, replace: true});
    }
    next();
});

/**
 * @description 路由跳转错误
 * */
router.onError(error => {
    NProgress.done();
    console.warn("路由错误", error.message);
});

/**
 * @description 路由跳转结束
 * */
router.afterEach(() => {
    NProgress.done();
});


export default router;
