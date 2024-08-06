import { Extension } from '@codemirror/state';
import { ViewUpdate } from '@codemirror/view';
export declare type EditorUpdateHandlerCb = (updateEvent?: ViewUpdate) => void;
/**
 * CodeMirror extension which accepts a callback function, and invokes the given
 * function whenever the document contents are updated.
 */
export declare const updateListenerExtension: (updateHandler: EditorUpdateHandlerCb) => Extension;
