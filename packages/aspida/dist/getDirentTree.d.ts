import { Doc, Method } from './parseInterface';
export declare type FileData = {
    name: string;
    isDir: false;
    methods: Method[];
    doc?: Doc;
    $textForApiTypes: string;
};
declare type DirData = {
    name: string;
    isDir: true;
    tree: DirentTree;
};
export declare type DirentTree = {
    path: string;
    children: (FileData | DirData)[];
};
export declare const getDirentTree: (input: string) => DirentTree;
export {};
//# sourceMappingURL=getDirentTree.d.ts.map