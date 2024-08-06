import { FunctionalComponent, VNode } from '../../stencil-public-runtime';
import { JobDatum, SessionDatum } from './executa';
interface HelloProps {
  session: SessionDatum;
  job: JobDatum;
  children?: VNode | VNode[];
}
export declare const SessionStatus: FunctionalComponent<HelloProps>;
export {};
