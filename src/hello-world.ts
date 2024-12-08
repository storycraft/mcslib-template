import { defineMcsFunction, mcsCmd, mcsExecute } from '@mcslib/builder';

export const helloWorld = defineMcsFunction([], () => {
  mcsExecute(mcsCmd`say Hello world!`);
});
