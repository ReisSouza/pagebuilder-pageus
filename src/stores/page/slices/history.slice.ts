import type { IEditor } from '@/types/editor/editor.type';
import type { IHistory } from '@/types/editor/history.type';
import type { StateCreator } from 'zustand';

export interface HistorySlice extends IHistory {}

export const createHistorySlice: StateCreator<HistorySlice & IEditor, [], [], HistorySlice> = () => ({
  currentIndex: 0,
  history: [],
});
