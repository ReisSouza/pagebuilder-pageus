import { create } from 'zustand';
import { type EditorSlice, createContentSlice } from './slices/editor.slice';
import { type HistorySlice, createHistorySlice } from './slices/history.slice';

export const usePageStore = create<EditorSlice & HistorySlice>()((...a) => ({
  ...createContentSlice(...a),
  ...createHistorySlice(...a),
}));
