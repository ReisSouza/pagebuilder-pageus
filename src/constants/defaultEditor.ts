import type { IEditor } from '@/types/editor/editor.type';
import { defaultCSSColumn } from '@/utils/defaultElements/defaultCSSColumn';
import { defaultCSSWidget } from '@/utils/defaultElements/defaultCSSWidget';
import { defaultCSSSection } from '@/utils/defaultElements/defaultCSSSection';
import type { ISettingsColumn } from '@/types/settingsElements/settingsColumn';
import type { ISettingsSection } from '@/types/settingsElements/settingsSection';
import type { ISettingsWidgetText } from '@/types/settingsElements/settingsWidgetText';

export const defaultEditor = (): IEditor['elements'] => {
  return [
    {
      id: 'section-1',
      elType: 'section',
      type: 'section',
      elements: [
        {
          id: 'column-1',
          type: 'column',
          elType: 'column',
          elements: [
            {
              elType: 'text',
              type: 'widget',
              id: 'widget-1',
              settings: {
                ...defaultCSSWidget,
                text: 'Digite seu texto aqui',
                size: 'default',
                htmlElement: 'h2',
                idColumn: 'column-1',
                idSection: 'section-1',
              } as ISettingsWidgetText,
              elements: [],
            },
          ],
          settings: {
            ...defaultCSSColumn,
          } as ISettingsColumn,
        },
      ],
      settings: {
        ...defaultCSSSection,
        contentWidthType: 'box',
        htmlElement: 'section',
        sectionHeightType: 'default',
      } as ISettingsSection,
    },
    {
      id: 'section-1',
      elType: 'section',
      type: 'section',
      elements: [
        {
          id: 'column-1',
          type: 'column',
          elType: 'column',
          elements: [
            {
              elType: 'text',
              type: 'widget',
              id: 'widget-1',
              settings: {
                ...defaultCSSWidget,
                text: 'Digite seu texto aqui',
                size: 'default',
                htmlElement: 'h2',
                idColumn: 'column-1',
                idSection: 'section-1',
              } as ISettingsWidgetText,
              elements: [],
            },
          ],
          settings: {
            ...defaultCSSColumn,
          } as ISettingsColumn,
        },
        {
          id: 'column-2',
          type: 'column',
          elType: 'column',
          elements: [
            {
              elType: 'text',
              type: 'widget',
              id: 'widget-2',
              settings: {
                ...defaultCSSWidget,
                text: 'Digite seu texto aqui',
                size: 'default',
                htmlElement: 'h2',
                idColumn: 'column-1',
                idSection: 'section-1',
              } as ISettingsWidgetText,
              elements: [],
            },
          ],
          settings: {
            ...defaultCSSColumn,
          } as ISettingsColumn,
        },
      ],
      settings: {
        ...defaultCSSSection,
        contentWidthType: 'box',
        htmlElement: 'section',
        sectionHeightType: 'default',
      } as ISettingsSection,
    },
    {
      id: 'section-1',
      elType: 'section',
      type: 'section',
      elements: [
        {
          id: 'column-1',
          type: 'column',
          elType: 'column',
          elements: [
            {
              elType: 'text',
              type: 'widget',
              id: 'widget-1',
              settings: {
                ...defaultCSSWidget,
                text: 'Digite seu texto aqui',
                size: 'default',
                htmlElement: 'h2',
                idColumn: 'column-1',
                idSection: 'section-1',
              } as ISettingsWidgetText,
              elements: [],
            },
          ],
          settings: {
            ...defaultCSSColumn,
          } as ISettingsColumn,
        },
        {
          id: 'column-2',
          type: 'column',
          elType: 'column',
          elements: [
            {
              elType: 'text',
              type: 'widget',
              id: 'widget-2',
              settings: {
                ...defaultCSSWidget,
                text: 'Digite seu texto aqui',
                size: 'default',
                htmlElement: 'h2',
                idColumn: 'column-1',
                idSection: 'section-1',
              } as ISettingsWidgetText,
              elements: [],
            },
          ],
          settings: {
            ...defaultCSSColumn,
          } as ISettingsColumn,
        },
        {
          id: 'column-2',
          type: 'column',
          elType: 'column',
          elements: [
            {
              elType: 'text',
              type: 'widget',
              id: 'widget-2',
              settings: {
                ...defaultCSSWidget,
                text: 'Digite seu texto aqui',
                size: 'default',
                htmlElement: 'h2',
                idColumn: 'column-1',
                idSection: 'section-1',
              } as ISettingsWidgetText,
              elements: [],
            },
          ],
          settings: {
            ...defaultCSSColumn,
          } as ISettingsColumn,
        },
      ],
      settings: {
        ...defaultCSSSection,
        contentWidthType: 'box',
        htmlElement: 'section',
        sectionHeightType: 'default',
      } as ISettingsSection,
    },
    {
      id: 'section-11',
      elType: 'section',
      type: 'section',
      elements: [
        {
          id: 'column-11',
          type: 'column',
          elType: 'column',
          elements: [
            {
              elType: 'section',
              type: 'section',
              id: 'section-222',
              settings: {
                ...defaultCSSSection,
                contentWidthType: 'box',
                htmlElement: 'section',
                sectionHeightType: 'default',
              } as ISettingsSection,
              elements: [
                {
                  id: 'column-13213',
                  type: 'column',
                  elType: 'column',
                  elements: [
                    {
                      elType: 'text',
                      type: 'widget',
                      id: 'widget-13123',
                      settings: {
                        ...defaultCSSWidget,

                        text: 'Digite seu texto aqui',
                        size: 'default',
                        htmlElement: 'h2',
                        idColumn: 'column-1',
                        idSection: 'section-1',
                      } as ISettingsWidgetText,
                      elements: [],
                    },
                  ],
                  settings: {
                    ...defaultCSSColumn,
                    columnCSS: {
                      ...defaultCSSColumn.columnCSS,
                      width: '50%',
                    },
                  } as ISettingsColumn,
                },
                {
                  id: 'column-3123122',
                  type: 'column',
                  elType: 'column',
                  elements: [
                    {
                      elType: 'text',
                      type: 'widget',
                      id: 'widget-2',
                      settings: {
                        ...defaultCSSWidget,
                        text: 'Digite seu texto aqui',
                        size: 'default',
                        htmlElement: 'h2',
                        idColumn: 'column-1',
                        idSection: 'section-1',
                      } as ISettingsWidgetText,
                      elements: [],
                    },
                  ],
                  settings: {
                    ...defaultCSSColumn,
                    columnCSS: {
                      ...defaultCSSColumn.columnCSS,
                      width: '50%',
                    },
                  } as ISettingsColumn,
                },
              ],
            },
          ],
          settings: {
            ...defaultCSSColumn,
            columnCSS: {
              ...defaultCSSColumn.columnCSS,
              width: '50%',
            },
          } as ISettingsColumn,
        },
        {
          id: 'column-31231232',
          type: 'column',
          elType: 'column',
          elements: [
            {
              elType: 'text',
              type: 'widget',
              id: 'widget-2',
              settings: {
                ...defaultCSSWidget,
                text: 'Digite seu texto aqui',
                size: 'default',
                htmlElement: 'h2',
                idColumn: 'column-1',
                idSection: 'section-1',
              } as ISettingsWidgetText,
              elements: [],
            },
          ],
          settings: {
            ...defaultCSSColumn,
            columnCSS: {
              ...defaultCSSColumn.columnCSS,
              width: '50%',
            },
          } as ISettingsColumn,
        },
      ],
      settings: {
        ...defaultCSSSection,
        contentWidthType: 'box',
        htmlElement: 'section',
        sectionHeightType: 'default',
      } as ISettingsSection,
    },
  ];
};
