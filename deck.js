import intro from './intro.mdx'
import variables from './variables'
import templateLiterals from './template-literals';
import objects from './objects';
import react from './react';
import arrays from './arrays';
import functions from './functions'
export { default as theme } from './theme'

export default [
    ...intro,
    ...variables,
    ...templateLiterals,
    ...functions,
    ...objects,
    ...arrays,
    ...react
]
