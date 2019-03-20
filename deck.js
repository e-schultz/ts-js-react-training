import intro from './intro.mdx'
import variables from './decks/variables'
import react from './decks/react';
import arrays from './decks/arrays';
import classes from './decks/classes';
import functions from './decks/functions'
import promises from './decks/promises';
import destructuring from './decks/destructuring';
import literals from './decks/literals';

export { default as theme } from './theme'
/*
running order 

yarn workspace variables-deck run start
yarn workspace literals-deck run start
yarn workspace destructuring-deck run start
yarn workspace functions-deck run start
yarn workspace arrays-deck run start
yarn workspace classes-deck run start
yarn workspace promises-deck run start
yarn workspace react-thinking-in-components-deck run start
yarn workspace react-deck run start

*/
export default [
    ...intro,
    ...variables,
    ...literals,
    ...destructuring,
    ...functions,
    ...arrays,
    ...classes,
    ...promises,
    ...react
]
