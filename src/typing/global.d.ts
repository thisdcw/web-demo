declare namespace Menu {
    interface MenuOptions {
        path: string;
        name: string;
        component?: string | (() => Promise<unknown>);
        redirect?: string;
        meta: MetaProps;
        children?: MenuOptions[];
    }
    interface MetaProps {
        icon: string;
        title: string;
        activeMenu?: string;
        isLink?: string;
        isHide: boolean;
        isFull: boolean;
        isAffix: boolean;
        isKeepAlive: boolean;
    }
}

declare type Recordable<T = any> = Record<string, T>;

declare const __APP_INFO__: {
    pkg: {
        name: string;
        version: string;
        dependencies: Recordable<string>;
        devDependencies: Recordable<string>;
    };
    lastBuildTime: string;
};
