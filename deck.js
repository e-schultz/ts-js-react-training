import intro from './intro.mdx'
import variables from './decks/variables'
import templateLiterals from './decks/template-literals';
import objects from './decks/objects';
import react from './decks/react';
import arrays from './decks/arrays';
import classes from './decks/classes';
import functions from './decks/functions'
import promises from './decks/promises';

export { default as theme } from './theme'

export default [
    ...intro,
    ...variables,
    ...templateLiterals,
    ...functions,
    ...objects,
    ...arrays,
    ...classes,
    ...promises,
    ...react
]
