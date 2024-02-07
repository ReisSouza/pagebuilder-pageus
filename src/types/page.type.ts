import type { IEditor } from './editor/editor.type';
import type { IHistory } from './editor/history.type';

export interface EditorState {
  editor: IEditor;
  history: IHistory;
}
