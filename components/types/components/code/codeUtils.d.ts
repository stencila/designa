import { Colors } from '../../types';
import { IconNames } from '../icon/iconNames';
import { ExecuteRequired, ExecuteStatus } from './codeTypes';
export declare const isPending: (status: ExecuteStatus) => boolean;
export declare const executionIconByStatus: (executeStatus: ExecuteStatus, executeRequired: ExecuteRequired) => {
  icon: IconNames;
  color: `${Colors}, ${string}`;
  title: string;
};
