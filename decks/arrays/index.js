import intro from './00-intro.mdx';
import iterating from './01-iterating.mdx';
import spreadDestructuring from './02-spread-destructure.mdx'
import arrayHomework from './99-array-exercises.mdx'
export { default as theme } from '../../theme'
export default [ ...intro, ...iterating, ...spreadDestructuring, ...arrayHomework]
