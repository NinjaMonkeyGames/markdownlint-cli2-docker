/** @deprecated Use apiV2 instead. */
declare function apiV1(): Promise<string>;

declare function apiV2(): Promise<string>;

await apiV1();