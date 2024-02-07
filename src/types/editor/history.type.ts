import type { IEditor } from './editor.type';

export interface IHistory {
  history: IEditor[];
  currentIndex: number;
}
