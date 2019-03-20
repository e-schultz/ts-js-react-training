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
