import { LowerHttpMethod, AspidaMethodParams } from './';
export declare type Doc = string[];
declare type MethodsProperties = keyof AspidaMethodParams;
declare type Prop = {
    value: string;
    hasQuestion: boolean;
    doc?: Doc;
};
declare type MethodProps = Partial<Record<MethodsProperties, Prop>>;
export declare type Method = {
    name: LowerHttpMethod;
    props: MethodProps & {
        polymorph?: MethodProps[];
    };
    doc?: Doc;
};
export declare const parse: (text: string, name: string) => {
    methods: Method[];
    doc?: Doc | undefined;
    $textForApiTypes: string;
} | null;
export {};
//# sourceMappingURL=parseInterface.d.ts.map