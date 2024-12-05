import {defineStore} from "pinia";
import {UserState} from "@/stores/interfaces";
import piniaPersistConfig from "@/stores/helper/persist";

export const useUserStore = defineStore("demo-user", {
    state: (): UserState => ({
        token: "",
        userInfo: {name: "thisdcw"}
    }),
    getters: {},
    actions: {
        setToken(token: string) {
            this.token = token;
        },
        //保证传入的参数是UserState里的userInfo类型
        setUserInfo(userInfo: UserState["userInfo"]) {
            this.userInfo = userInfo;
        }
    },
    persist: piniaPersistConfig("demo-user")
});
