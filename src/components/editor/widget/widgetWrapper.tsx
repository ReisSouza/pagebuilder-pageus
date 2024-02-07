'use client';

import { type ReactNode } from 'react';

import type { IEditorElement } from '@/types/editor/editorElement.type';

interface IWrapperWidget {
  element: IEditorElement;
  children: ReactNode;
}

export const WrapperWidget: React.FC<IWrapperWidget> = ({ children, element }) => {
  return (
    <>
      <style>{`
        .pagebuilder-widget-wrapper {
        }
        @media only screen and (max-width: 768px) {
          .pagebuilder-editor-content {
          }
        }
        @media only screen and (min-width: 769px) and (max-width: 1024px) {
          .pagebuilder-editor-content {
          }
        }
        @media only screen and (min-width: 1025px) {
          .pagebuilder-editor-content {
          }
        }
        `}</style>
      <div id={`widget-${element.id}-wrapper`} className={'widget-wrapper'} style={{}}>
        <div id={`widget-${element.id}-content`} className={'widget-content'} style={{}}>
          {children}
        </div>
      </div>
    </>
  );
};
