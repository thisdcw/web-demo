export type LayoutType = "basic";

export interface GlobalStates {
    layout: LayoutType;
    isCollapse: boolean;
    isDark: boolean,
    watermark: boolean,
    breadcrumb: boolean,
    tabs: boolean,
    maximize: boolean,
}

export interface AuthState {
    authMenuList: Menu.MenuOptions[];
}
export interface UserState {
    token: string;
    userInfo: { name: string };
}
export interface KeepAliveState {
    keepAliveName: string[];
}
export interface TabsMenuProps {
    icon: string;
    title: string;
    path: string;
    name: string;
    close: boolean;
    isKeepAlive: boolean;
}

/* TabsState */
export interface TabsState {
    tabsMenuList: TabsMenuProps[];
}
