import { WidgetDrag } from './widgetDrag';
import { WidgetBase } from './widgetBase';
import { usePageStore } from '@/stores/page/page.store';
import type { IEditorElement } from '@/types/editor/editorElement.type';

export const Widget: React.FC<IEditorElement> = (element: IEditorElement) => {
  const { viewMode } = usePageStore();

  if (viewMode === 'live') {
    return (
      <WidgetDrag>
        <WidgetBase {...element} />
      </WidgetDrag>
    );
  }

  return <WidgetBase {...element} />;
};

Widget.displayName = 'Widget';
