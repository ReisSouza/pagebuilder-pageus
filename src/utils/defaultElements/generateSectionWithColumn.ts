import { generateColumn } from './generateColumn';
import { generateSection } from './generateSection';

export const generateSectionWithColumn = ({ columnsSize }: { columnsSize: number[] }) => {
  const elements = columnsSize.map((column) => generateColumn({ columnSize: column }));
  return generateSection({ elements });
};
