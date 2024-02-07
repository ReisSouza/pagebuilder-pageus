export interface IEditorElement {
  id: string;
  elType: 'text' | 'video' | 'image' | 'section' | 'column' | null;
  type: 'widget' | 'column' | 'section';
  settings: Record<string, any>;
  elements: IEditorElement[];
}
