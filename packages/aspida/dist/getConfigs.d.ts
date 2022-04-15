export declare type AspidaConfig = {
    input: string;
    baseURL: string;
    trailingSlash: boolean;
    outputEachDir: boolean;
    outputMode: 'all' | 'normalOnly' | 'aliasOnly';
};
declare type PartialConfig = Partial<AspidaConfig> | Partial<AspidaConfig>[];
export declare const getConfigs: (config?: PartialConfig | string) => AspidaConfig[];
export {};
//# sourceMappingURL=getConfigs.d.ts.map