type ObjToSelectedValueUnion<T> = {
    [K in keyof T]: T[K];
}[keyof T];
type ObjToKeyValArray<T> = {
    [K in keyof T]: [K, T[K]];
}[keyof T];
