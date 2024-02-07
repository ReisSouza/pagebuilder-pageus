import type { StateCreator } from 'zustand';
import type { IEditorElement } from '@/types/editor/editorElement.type';

export interface EditorElementSlice {
  elements: IEditorElement[];
}

export const createEditorElementSlice: StateCreator<EditorElementSlice, [], [], EditorElementSlice> = () => ({
  elements: [],
});
