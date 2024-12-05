import {defineStore} from "pinia";
import {GlobalStates} from "@/stores/interfaces";
import piniaPersistConfig from "@/stores/helper/persist";

export const useGlobalStore = defineStore("demo-global", {
    state: (): GlobalStates => ({
        isCollapse: false,
        layout: "basic",
        isDark: false,
        watermark: false,
        breadcrumb: true,
        maximize: false,
        tabs: true,
        tabsIcon: true,
    }),
    getters: {},
    actions: {
        setGlobalState(...args: ObjToKeyValArray<GlobalStates>) {
            this.$patch({[args[0]]: args[1]});
        }
    },
    persist: piniaPersistConfig("demo-global")
})
