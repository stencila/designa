import { FunctionalComponent } from '../../stencil-public-runtime';
import { ExecuteRequired, ExecuteStatus } from './codeTypes';
interface Props {
  executeStatus?: ExecuteStatus;
  executeRequired?: ExecuteRequired;
  nodeKind?: string;
  slot?: string;
}
export declare const CodeExecuteStatus: (props: Props) => FunctionalComponent;
export {};
