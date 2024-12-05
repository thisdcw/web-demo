import {defineStore} from "pinia";
import {KeepAliveState} from "@/stores/interfaces";

export const useKeepAliveStore = defineStore("demo-keepAlive", {
    state: (): KeepAliveState => ({
        keepAliveName: []
    }),
    actions: {
        // Add KeepAliveName
        async addKeepAliveName(name: string) {
            !this.keepAliveName.includes(name) && this.keepAliveName.push(name);
        },
        // Remove KeepAliveName
        async removeKeepAliveName(name: string) {
            this.keepAliveName = this.keepAliveName.filter(item => item !== name);
        },
        // Set KeepAliveName
        async setKeepAliveName(keepAliveName: string[] = []) {
            this.keepAliveName = keepAliveName;
        }
    }
});
