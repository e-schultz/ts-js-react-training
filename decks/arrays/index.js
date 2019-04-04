import intro from './00-intro.mdx';
import arrayMutation  from './01-array-modification-and-mutation.mdx';
import iterating from './02-iterating.mdx';
import arrayHomework from './99-array-exercises.mdx'
export { default as theme } from '../../theme'
export default [ ...intro, ...arrayMutation, ...iterating, ...arrayHomework]
