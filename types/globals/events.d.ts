import { Node } from '@stencila/schema';
export declare type StencilaNodeUpdateEvent = {
  type: string;
  documentId: string;
  nodeId: string;
  value: Node;
};
