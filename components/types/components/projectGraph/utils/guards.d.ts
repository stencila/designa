import { SymbolResource, NodeResource, FileResource, Resource } from '../types';
export declare const hasPath: (resource: string | number | Resource) => resource is SymbolResource | NodeResource | FileResource;
export declare const hasKind: (resource: string | number | Resource) => resource is SymbolResource | NodeResource;
