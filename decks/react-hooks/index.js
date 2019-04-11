import intro from './00-intro.mdx';
import useState from './01-use-state.mdx';
import useReducer from './02-use-reducer.mdx';
import useEffect from './03-use-effect.mdx';

export { default as theme } from '../../theme'
export default [ ...intro, ...useState, ...useReducer, ...useEffect]