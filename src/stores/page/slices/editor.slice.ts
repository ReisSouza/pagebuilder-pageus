import type { StateCreator } from 'zustand';
import type { IEditor } from '@/types/editor/editor.type';
import type { EditorElementSlice } from './elements.slice';
import { defaultEditor } from '@/constants/defaultEditor';

export interface EditorSlice extends Omit<IEditor, 'Elements'> {
  updatedViewMode: (viewMode: IEditor['viewMode']) => void;
  updatedDevice: (device: IEditor['device']) => void;
  updateSelectedElement: (selectedElement: IEditor['elements'][number]) => void;
}

export const createContentSlice: StateCreator<EditorSlice & EditorElementSlice, [], [], EditorSlice> = (set) => ({
  device: 'Desktop',
  elements: defaultEditor(),
  selectedElement: undefined,
  viewMode: 'preview',
  updatedDevice: (device) => set(() => ({ device })),
  updatedViewMode: (viewMode) => set(() => ({ viewMode })),
  updateSelectedElement: (selectedElement) => set(() => ({ selectedElement })),
});
