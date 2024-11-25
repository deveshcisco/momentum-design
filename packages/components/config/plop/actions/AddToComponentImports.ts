/* eslint-disable max-len */
import { join } from 'path';
import { ActionType } from 'plop';
import { folders, componentName } from '../constants';

export const AddToComponentImports: ActionType = {
  type: 'modify',
  path: `${join(`${folders.src}`, 'index.ts')}`,
  // find the first type import block, requires the index.ts file to be formatted
  // correctly
  pattern: /(\nimport type)/,
  data: {
    componentName,
  },
  template:
    `import {{sentenceCase ${componentName}}} from './components/{{${componentName}}}';\n$1`,
};