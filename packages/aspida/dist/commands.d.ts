import { getConfigs, AspidaConfig } from './getConfigs';
export { getConfigs, AspidaConfig };
export declare const version: () => string;
export declare const build: (config?: Parameters<typeof getConfigs>[0]) => void;
export declare const watch: (config?: Parameters<typeof getConfigs>[0]) => import("chokidar").FSWatcher[];
//# sourceMappingURL=commands.d.ts.map